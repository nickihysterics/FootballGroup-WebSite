import { LoaderCircle } from "lucide-react";
import { forwardRef } from "react";

import { cn } from "@/shared/lib/cn.js";

const variantClassMap = {
  primary:
    "border border-transparent bg-[linear-gradient(180deg,#1f95ff_0%,#0d61c2_100%)] text-white shadow-[0_16px_34px_rgba(13,97,194,.24)] hover:-translate-y-0.5 hover:shadow-[0_20px_38px_rgba(13,97,194,.30)] [&>svg]:!text-white [&>span]:!text-white",
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
        "inline-flex cursor-pointer select-none items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20 disabled:pointer-events-none disabled:opacity-60",
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