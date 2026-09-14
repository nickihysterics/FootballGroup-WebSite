import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/shared/lib/cn.js";

export default function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.55,
  y = 28,
  blur = 6,
  once = true,
  amount = 0.06,
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={cn(className)}>{children}</div>;
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y, filter: `blur(${blur}px)` }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ willChange: "opacity, transform, filter" }}
    >
      {children}
    </motion.div>
  );
}