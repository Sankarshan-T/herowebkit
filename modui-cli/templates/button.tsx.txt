import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import React from "react";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
    {
        variants: {
            variant: {
                primary: "bg-primary text-primary-foreground hover:bg-primary/90",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                outline: "border border-gray-300 bg-transparent hover:bg-gray-100",
                ghost: "hover:bg-gray-100 hover:text-gray-900",
                danger: "bg-destructive text-white hover:bg-destructive/90",
            },
            size: {
                sm: "h-9 px-3",
                md: "h-10 py-2 px-4",
                lg: "h-11 px-8",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, onClick, ...props }, ref) => {
        return (
            <button
                ref={ref}
                onClick={onClick}
                className={cn(buttonVariants({ variant, size, className }))}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button, buttonVariants };