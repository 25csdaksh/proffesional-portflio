"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, MousePointer2, X } from "lucide-react";

type OfficeIntroProps = { onComplete: () => void };

export function OfficeIntro({ onComplete }: OfficeIntroProps) {
  const [phase, setPhase] = useState<"room" | "walking" | "zoom" | "exit">("room");

  useEffect(() => {
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = oldOverflow; };
  }, []);

  useEffect(() => {
    if (phase === "room") return;
    const timer = window.setTimeout(() => {
      if (phase === "walking") setPhase("zoom");
      else if (phase === "zoom") setPhase("exit");
      else onComplete();
    }, phase === "walking" ? 1500 : phase === "zoom" ? 1150 : 720);
    return () => window.clearTimeout(timer);
  }, [phase, onComplete]);

  return (
    <div className={`office-intro ${phase === "walking" ? "is-walking" : ""} ${phase === "zoom" ? "is-zooming" : ""} ${phase === "exit" ? "is-exiting" : ""}`} onClick={(event) => { if (phase === "room" && !(event.target as HTMLElement).closest(".office-skip")) setPhase("walking"); }} role="dialog" aria-modal="true" aria-label="Daksh Soni CEO office portfolio introduction">
      <button className="office-skip" type="button" onClick={() => setPhase("exit")}><X size={14} /> Skip intro</button>
      <div className="office-heading"><span>DAKSH SONI <i>·</i> CEO OFFICE</span><b>A portfolio, with a point of view.</b></div>
      <div className="office-room" aria-hidden="false">
        <img className="office-photo" src="/office-cabin.webp" alt="A view through the doorway into Daksh Soni's CEO office" />
        <div className="office-wall">
          <div className="office-window"><div className="window-sky"><i /><i /><i /></div><span className="window-frame frame-v" /><span className="window-frame frame-h" /></div>
          <div className="wall-art"><span>DS</span><i>MAKE IT<br />MATTER</i></div>
          <div className="office-shelf"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="wall-light" />
        </div>
        <div className="office-plant"><i /><i /><i /><i /><b /></div>
        <div className="office-desk">
          <div className="desk-leg leg-left" /><div className="desk-leg leg-right" />
          <div className="desk-front"><span>DAKSH SONI <i>·</i> CEO</span></div>
          <div className="desk-top" />
          <div className="monitor-stand"><i /></div>
          <div className="office-monitor">
            <button className="monitor-screen" type="button" onClick={() => phase === "room" && setPhase("walking")} aria-label="Open Daksh Soni's portfolio on the computer">
              <span className="screen-top"><b>ds.</b><span>WORK&nbsp;&nbsp; ABOUT&nbsp;&nbsp; CONTACT</span><ArrowUpRight size={12} /></span>
              <span className="screen-copy"><i>PORTFOLIO / 2026</i><strong>DAKSH<br /><em>SONI.</em></strong><small>COMPUTER SCIENCE · CREATIVE THINKING</small><span className="screen-button">EXPLORE PORTFOLIO <ArrowUpRight size={10} /></span></span>
              <span className="screen-art"><i /><b>DS</b><span>IDEAS INTO<br />EXPERIENCES</span></span>
              <span className="screen-hint"><MousePointer2 size={12} /> CLICK ANYWHERE TO ENTER</span>
            </button>
          </div>
          <div className="keyboard"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="coffee-mug"><i /></div><div className="desk-book"><span>IDEAS<br /><i>IN MOTION</i></span></div>
        </div>
        <div className="office-floor" />
        <div className="floor-shadow" />
      </div>
      <div className="office-instruction"><span className="instruction-dot" /> Tap anywhere to walk into the CEO cabin</div>
      <div className="office-grain" />
    </div>
  );
}
