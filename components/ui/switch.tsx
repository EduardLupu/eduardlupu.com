import * as React from "react";
import { cn } from "@/lib/utils";

export interface SwitchProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ checked, onCheckedChange, className, ...props }, ref) => {
    return (
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        ref={ref}
        className={cn(
          "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark",
          checked
            ? "bg-accent dark:bg-accent-dark"
            : "bg-gray-300 dark:bg-gray-700",
          className,
        )}
        onClick={() => onCheckedChange && onCheckedChange(!checked)}
        {...props}
      >
        <span
          className={cn(
            "inline-block h-4 w-4 transform rounded-full bg-white dark:bg-gray-900 transition-transform",
            checked ? "translate-x-5" : "translate-x-1",
          )}
        />
      </button>
    );
  },
);
Switch.displayName = "Switch";

export { Switch };
