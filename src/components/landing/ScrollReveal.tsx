"use client";

import type { ReactNode } from "react";
import { m, useReducedMotion } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
  distance?: number;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 28,
}: ScrollRevealProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const hidden = {
    opacity: 0,
    x: direction === "left" ? distance : direction === "right" ? -distance : 0,
    y: direction === "up" ? distance : direction === "down" ? -distance : 0,
    scale: direction === "scale" ? 0.95 : 1,
  };

  return (
    <m.div
      initial={hidden}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.16, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.65, delay, ease: EASE }}
      className={className}
    >
      {children}
    </m.div>
  );
}
