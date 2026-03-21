import { LoaderCircle } from "lucide-react";
import { forwardRef } from "react";

import { cn } from "@/shared/lib/cn.js";

const variantClassMap = {
  primary:
    "border border-[#1976e6] bg-[linear-gradient(180deg,#2d94f6_0%,#1678e6_100%)] text-white shadow-[0_12px_28px_rgba(22,120,230,.22)] hover:-translate-y-0.5 hover:bg-[linear-gradient(180deg,#369bfd_0%,#197dea_100%)] hover:shadow-[0_16px_34px_rgba(22,120,230,.28)] focus:ring-sky-500/20 [&>svg]:!text-white [&>span]:!text-white",
  secondary:
    "border border-[#d8e4f2] bg-[#f8fbff] text-[#17406f] shadow-[0_8px_18px_rgba(15,23,42,.05)] hover:-translate-y-0.5 hover:border-[#c6d8eb] hover:bg-[#f2f8ff]",
  ghost:
    "border border-[#d9e5f2] bg-white text-[#102544] shadow-[0_8px_18px_rgba(8,31,61,.05)] hover:-translate-y-0.5 hover:border-[#c4d8ee] hover:bg-[#fbfdff]",
  dark:
    "border border-transparent bg-slate-950 text-white hover:-translate-y-0.5 hover:bg-slate-800",
  soft:
    "border border-sky-100 bg-sky-50 text-sky-800 hover:-translate-y-0.5 hover:bg-sky-100",
};

const sizeClassMap = {
  sm: "min-h-10 px-4 text-[13px]",
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
    iconOnly = false,
    className,
    children,
    disabled,
    type,
    ...props
  },
  ref,
) {
  const isButton = Comp === "button";
  const hasSideIcons = Boolean(LeftIcon || RightIcon);

  return (
    <Comp
      ref={ref}
      type={isButton ? type || "button" : undefined}
      disabled={isButton ? disabled || loading : undefined}
      className={cn(
        "inline-flex cursor-pointer select-none items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-out focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-60",
        sizeClassMap[size] || sizeClassMap.md,
        variantClassMap[variant] || variantClassMap.primary,
        fullWidth && "w-full",
        iconOnly && "aspect-square px-0",
        className,
      )}
      {...props}
    >
      {loading ? (
        <LoaderCircle className="h-4 w-4 animate-spin" strokeWidth={1.9} />
      ) : null}

      {!loading && LeftIcon ? (
        <LeftIcon className="h-4 w-4 shrink-0 text-current" strokeWidth={1.9} />
      ) : null}

      {(!iconOnly || !hasSideIcons) && children ? (
        <span className="text-current">{children}</span>
      ) : null}

      {!loading && RightIcon ? (
        <RightIcon className="h-4 w-4 shrink-0 text-current" strokeWidth={1.9} />
      ) : null}
    </Comp>
  );
});

export default Button;