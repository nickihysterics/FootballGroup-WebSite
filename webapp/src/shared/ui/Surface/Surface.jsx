import { cn } from "@/shared/lib/cn.js";

const variantMap = {
  default:
    "border border-white/80 bg-white/80 shadow-[0_22px_54px_rgba(8,31,61,0.08)] backdrop-blur-xl",
  soft:
    "border border-[rgba(10,44,94,0.08)] bg-[linear-gradient(180deg,rgba(233,244,252,.98),rgba(255,255,255,.94))] shadow-[0_22px_54px_rgba(8,31,61,0.08)]",
  dark:
    "border border-white/15 bg-[linear-gradient(180deg,rgba(7,31,67,.98),rgba(10,47,99,.96))] text-white shadow-[0_30px_80px_rgba(8,31,61,.18)]",
  transparent:
    "border border-white/70 bg-white/55 shadow-[0_24px_64px_rgba(8,31,61,.07)] backdrop-blur-xl",
};

const paddingMap = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8 md:p-10",
};

const radiusMap = {
  lg: "rounded-[24px]",
  xl: "rounded-[32px]",
  "2xl": "rounded-[40px]",
};

export default function Surface({
  as: Comp = "div",
  variant = "default",
  padding = "md",
  radius = "xl",
  className,
  children,
  ...props
}) {
  return (
    <Comp
      className={cn(
        "relative overflow-hidden",
        variantMap[variant],
        paddingMap[padding],
        radiusMap[radius],
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}