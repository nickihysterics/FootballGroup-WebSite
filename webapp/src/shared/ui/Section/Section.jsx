import { cn } from "@/shared/lib/cn.js";
import Surface from "@/shared/ui/Surface/Surface.jsx";

export default function Section({
  className,
  children,
  variant = "default",
  padded = true,
}) {
  if (variant === "dark") {
    return (
      <Surface
        variant="dark"
        padding={padded ? "md" : "none"}
        radius="xl"
        className={cn("mt-6", className)}
      >
        {children}
      </Surface>
    );
  }

  return (
    <Surface
      variant="transparent"
      padding={padded ? "md" : "none"}
      radius="xl"
      className={cn(
        "mt-6 before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(180deg,rgba(255,255,255,.22),transparent_28%)]",
        className,
      )}
    >
      {children}
    </Surface>
  );
}