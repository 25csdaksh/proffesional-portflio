import { NextRequest, NextResponse } from "next/server";

// In-memory rate limiting: max 5 requests per IP per 10 minutes
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const ipRequests = new Map<string, { count: number; expiresAt: number }>();

function cleanIpMap() {
  const now = Date.now();
  for (const [ip, data] of ipRequests.entries()) {
    if (data.expiresAt < now) {
      ipRequests.delete(ip);
    }
  }
}

// Sanitize user inputs to prevent HTML injection in emails
function sanitize(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    cleanIpMap();

    // Basic IP Rate Limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";
    const now = Date.now();

    const rateData = ipRequests.get(ip);
    if (rateData) {
      if (rateData.expiresAt > now) {
        if (rateData.count >= MAX_REQUESTS_PER_WINDOW) {
          return NextResponse.json(
            {
              success: false,
              error:
                "Too many inquiries sent from your device. Please wait a few minutes before trying again or message Daksh directly on WhatsApp.",
            },
            { status: 429 }
          );
        }
        rateData.count += 1;
      } else {
        ipRequests.set(ip, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS });
      }
    } else {
      ipRequests.set(ip, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS });
    }

    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      subject,
      projectType,
      budget,
      message,
      honeypot, // Spam defense
    } = body;

    // Honeypot check (hidden field bots fill out)
    if (honeypot && honeypot.trim().length > 0) {
      // Silently accept without sending
      return NextResponse.json({
        success: true,
        message: "Your message has been received.",
      });
    }

    // Required Field Validations
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a subject for your inquiry." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Please enter a detailed message (minimum 10 characters)." },
        { status: 400 }
      );
    }

    const allowedProjectTypes = [
      "Website Development",
      "Full-Stack Development",
      "AI / Machine Learning",
      "Mobile Application",
      "ERP / Business Software",
      "Freelance Collaboration",
      "Other",
    ];

    const safeProjectType = allowedProjectTypes.includes(projectType)
      ? projectType
      : "Website Development";

    const safeBudget = budget && typeof budget === "string" ? budget : "Not decided";
    const safePhone = phone && typeof phone === "string" ? phone.trim() : "Not provided";

    const submissionTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail =
      process.env.CONTACT_RECIPIENT_EMAIL || "dakshsoni1023@gmail.com";
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    // If Resend API Key is configured, send the actual email
    if (resendApiKey && resendApiKey.trim().length > 0) {
      const emailHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #090a0f; color: #f3f4f6; padding: 40px 20px; line-height: 1.6;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #12151f; border: 1px solid #1e2332; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            
            <div style="background: linear-gradient(135deg, #1e2332, #12151f); padding: 25px 30px; border-bottom: 1px solid #1e2332;">
              <span style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #e2c286; font-weight: 700;">Portfolio Inquiry</span>
              <h1 style="font-size: 24px; margin: 8px 0 0; color: #f3f4f6; font-weight: 700;">${sanitize(subject)}</h1>
            </div>

            <div style="padding: 30px;">
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
                <tr>
                  <td style="padding: 8px 0; color: #8e95a5; font-size: 13px; width: 130px;">Sender Name:</td>
                  <td style="padding: 8px 0; color: #f3f4f6; font-size: 14px; font-weight: 600;">${sanitize(fullName)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #8e95a5; font-size: 13px;">Email Address:</td>
                  <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${sanitize(email)}" style="color: #e2c286; text-decoration: none;">${sanitize(email)}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #8e95a5; font-size: 13px;">Phone Number:</td>
                  <td style="padding: 8px 0; color: #f3f4f6; font-size: 14px;">${sanitize(safePhone)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #8e95a5; font-size: 13px;">Project Type:</td>
                  <td style="padding: 8px 0; font-size: 14px;"><span style="background: rgba(226,194,134,0.15); color: #e2c286; padding: 3px 10px; border-radius: 4px; font-size: 12px; font-weight: 600;">${sanitize(safeProjectType)}</span></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #8e95a5; font-size: 13px;">Estimated Budget:</td>
                  <td style="padding: 8px 0; color: #f3f4f6; font-size: 14px;">${sanitize(safeBudget)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #8e95a5; font-size: 13px;">Submission Time:</td>
                  <td style="padding: 8px 0; color: #8e95a5; font-size: 13px;">${submissionTime} (IST)</td>
                </tr>
              </table>

              <div style="background-color: #090a0f; border: 1px solid #1a1e2b; border-radius: 8px; padding: 20px; margin-top: 20px;">
                <p style="margin: 0 0 10px; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; color: #e2c286; font-weight: 700;">Inquiry Message:</p>
                <div style="font-size: 14px; line-height: 1.8; color: #f3f4f6; white-space: pre-wrap;">${sanitize(message)}</div>
              </div>

              <div style="margin-top: 30px; text-align: center;">
                <a href="mailto:${sanitize(email)}?subject=Re: ${encodeURIComponent(subject)}" style="display: inline-block; background-color: #e2c286; color: #090a0f; font-weight: 700; font-size: 13px; padding: 12px 25px; border-radius: 6px; text-decoration: none;">Reply Directly to ${sanitize(fullName)}</a>
              </div>
            </div>

            <div style="background-color: #090a0f; border-top: 1px solid #1a1e2b; padding: 15px 30px; text-align: center; font-size: 11px; color: #64748b;">
              Delivered to ${recipientEmail} from your personal portfolio contact form.
            </div>
          </div>
        </div>
      `;

      const plainText = `
Portfolio Inquiry: ${subject}
=========================================
Sender Name: ${fullName}
Email: ${email}
Phone: ${safePhone}
Project Type: ${safeProjectType}
Budget: ${safeBudget}
Submitted: ${submissionTime}

Message:
${message}
      `.trim();

      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey.trim()}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [recipientEmail],
          reply_to: email,
          subject: `Portfolio Inquiry — ${fullName}`,
          html: emailHtml,
          text: plainText,
        }),
      });

      if (!resendRes.ok) {
        const errorData = await resendRes.json().catch(() => ({}));
        console.error("Resend API error:", errorData);
        return NextResponse.json(
          {
            success: false,
            emailSent: false,
            error:
              "Unable to deliver message through Resend right now. Please use the WhatsApp button below to message Daksh directly.",
          },
          { status: 502 }
        );
      }

      return NextResponse.json({
        success: true,
        emailSent: true,
        message: "Your message has been sent successfully to Daksh Soni!",
      });
    }

    // Fallback when RESEND_API_KEY is not configured yet
    console.info(
      "Notice: RESEND_API_KEY is not configured in .env.local. Inquiry logged:",
      { fullName, email, safePhone, subject, safeProjectType, safeBudget, message }
    );

    return NextResponse.json({
      success: true,
      emailSent: false,
      isConfigured: false,
      message:
        "Inquiry captured! Note: RESEND_API_KEY is not configured in environment variables yet. You can click 'Chat on WhatsApp' below to send this directly to Daksh.",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request. Please try again or reach out on WhatsApp.",
      },
      { status: 500 }
    );
  }
}

