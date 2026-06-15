"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

type Props = {
  value: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
};

export default function AnimatedCounter({
  value,
  suffix = "",
  decimals = 0,
  duration = 2,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(latest) {
        setDisplay(
          latest.toLocaleString("en-IN", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          })
        );
      },
    });
    return () => controls.stop();
  }, [inView, value, decimals, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
