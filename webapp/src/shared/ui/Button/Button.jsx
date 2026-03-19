import { LoaderCircle } from "lucide-react";
import { forwardRef } from "react";

import { cn } from "@/shared/lib/cn.js";

const variantClassMap = {
  primary:
    "border-transparent bg-[linear-gradient(180deg,#1790f4_0%,#0d4ea5_100%)] text-white shadow-[0_18px_36px_rgba(15,117,219,0.22)] hover:-translate-y-0.5 hover:shadow-[0_22px_42px_rgba(15,117,219,0.28)]",
  ghost:
    "border border-[rgba(10,44,94,0.12)] bg-white/80 text-slate-900 hover:-translate-y-0.5 hover:border-[rgba(10,44,94,0.18)] hover:bg-white",
  dark:
    "border border-transparent bg-slate-950 text-white hover:-translate-y-0.5 hover:bg-slate-800",
  soft:
    "border border-sky-100 bg-sky-50 text-sky-800 hover:-translate-y-0.5 hover:bg-sky-100",
};

const sizeClassMap = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-[52px] px-5 text-sm",
  lg: "min-h-14 px-6 text-base",
};

const Button = forwardRef(function Button(
  {
    as: Comp = "button",
    variant = "primary",
    size = "md",
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    loading = false,
    fullWidth = false,
    className,
    children,
    disabled,
    type,
    ...props
  },
  ref,
) {
  const isButton = Comp === "button";

  return (
    <Comp
      ref={ref}
      type={isButton ? type || "button" : undefined}
      disabled={isButton ? disabled || loading : undefined}
      className={cn(
        "inline-flex cursor-pointer select-none items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20 disabled:pointer-events-none disabled:opacity-60",
        sizeClassMap[size] || sizeClassMap.md,
        variantClassMap[variant] || variantClassMap.primary,
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {loading ? <LoaderCircle className="h-4 w-4 animate-spin" strokeWidth={1.9} /> : null}
      {!loading && LeftIcon ? <LeftIcon className="h-4 w-4 shrink-0" strokeWidth={1.9} /> : null}
      <span>{children}</span>
      {!loading && RightIcon ? <RightIcon className="h-4 w-4 shrink-0" strokeWidth={1.9} /> : null}
    </Comp>
  );
});

export default Button;