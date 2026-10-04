"use client";

import { useEffect, useState, type ComponentType } from "react";
import { useReducedMotion } from "motion/react";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export type DemoScene = {
  key: string;
  label: string;
  duration: number;
  Scene: ComponentType<{ t: number }>;
};

const TICK = 50;

// A looping, code-drawn "video". Scene and elapsed time live in one state
// object so pausing and jumping between scenes stay in sync.
export default function DemoPlayer({
  scenes,
  caption,
  ariaLabel,
  heightClassName = "h-[560px] sm:h-[420px] md:h-[300px]",
}: {
  scenes: DemoScene[];
  caption: string;
  ariaLabel: string;
  heightClassName?: string;
}) {
  const reduceMotion = useReducedMotion();
  const [{ scene, t }, setPlayhead] = useState({ scene: 0, t: 0 });
  const [paused, setPaused] = useState(false);

  // Reduced motion: show each scene finished and let people step through.
  const stopped = paused || !!reduceMotion;

  useEffect(() => {
    if (stopped) return;
    const id = setInterval(() => {
      setPlayhead((prev) => {
        const next = prev.t + TICK;
        return next >= scenes[prev.scene].duration
          ? { scene: (prev.scene + 1) % scenes.length, t: 0 }
          : { scene: prev.scene, t: next };
      });
    }, TICK);
    return () => clearInterval(id);
  }, [stopped, scenes]);

  const shownT = reduceMotion ? scenes[scene].duration : t;
  const { Scene } = scenes[scene];

  return (
    <div
      className="grid-frame bg-white"
      role="region"
      aria-roledescription="demo"
      aria-label={ariaLabel}
    >
      <div className="flex items-center justify-between gap-4 border-b border-neutral-200 px-4 py-2.5">
        <div className="flex items-center gap-1">
          {scenes.map((s, index) => {
            const active = index === scene;
            const fill = active ? shownT / s.duration : index < scene ? 1 : 0;
            return (
              <button
                key={s.key}
                type="button"
                onClick={() => setPlayhead({ scene: index, t: 0 })}
                aria-current={active ? "step" : undefined}
                className={cn(
                  "relative overflow-hidden rounded-full px-3 py-1 font-mono text-xs uppercase tracking-[0.06em] transition-colors",
                  active ? "text-neutral-950" : "text-neutral-400 hover:text-neutral-700",
                )}
              >
                <span className="mr-1.5 text-neutral-400">0{index + 1}</span>
                {s.label}
                <span
                  className="absolute inset-x-3 bottom-0 h-px origin-left bg-neutral-950"
                  style={{ transform: `scaleX(${fill})` }}
                  aria-hidden
                />
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-3">
          <p className="hidden font-mono text-xs text-neutral-500 sm:block">{caption}</p>
          {!reduceMotion ? (
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Play demo" : "Pause demo"}
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 hover:bg-neutral-100"
            >
              {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
            </button>
          ) : null}
        </div>
      </div>

      <div className={cn("overflow-hidden", heightClassName)}>
        <Scene t={shownT} />
      </div>
    </div>
  );
}
