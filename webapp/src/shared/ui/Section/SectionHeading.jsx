import { cn } from "@/shared/lib/cn.js";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  titleClassName,
  align = "left",
  light = false,
}) {
  return (
    <div
      className={cn(
        "mb-5 flex flex-col gap-2",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "m-0 text-[11px] font-extrabold uppercase tracking-[0.18em]",
            light ? "text-white/75" : "text-[#0d4ea5]",
          )}
        >
          {eyebrow}
        </p>
      ) : null}

      {title ? (
        <h2
          className={cn(
            "m-0 max-w-[14ch] font-[var(--font-display)] text-[clamp(1.8rem,3vw,2.9rem)] leading-[0.98] tracking-[-0.035em]",
            light ? "text-white" : "text-[#081f3d]",
            titleClassName,
          )}
        >
          {title}
        </h2>
      ) : null}

      {description ? (
        <p
          className={cn(
            "m-0 max-w-[64ch] text-[15px] leading-7",
            light ? "text-white/72" : "text-[#5c7599]",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}