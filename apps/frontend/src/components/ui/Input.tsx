import * as React from "react";

import { cn } from "@/utils/shadcn/utils";
import { Label } from "@/components/ui/Label";
import { FieldError } from "react-hook-form";

interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
  error?: FieldError | boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div>
        <Label
          className={cn(props?.error && "text-destructive")}
          htmlFor={props?.label}
        >
          {props?.label}
        </Label>
        <input
          id={props?.label}
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className,
            props?.error && "border-destructive",
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
