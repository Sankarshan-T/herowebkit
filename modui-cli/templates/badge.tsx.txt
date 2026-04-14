import { cn } from "@/lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'default' | 'success' | 'failure' | 'warning' | 'outline';
    size?: 'sm' | 'md' | 'xl';
    className?: string;
}

export const Badge = ({
    children,
    variant = "default",
    size = "sm",
    className,
}: BadgeProps) => {
    const variants = {
        default: "bg-slate-100 text-slate-800 border-transparent",
        success: "bg-emerald-50 text-emerald-700 border-emerald-100",
        failure: "bg-red-50 text-red-700 border-red-100",
        warning: "bg-amber-50 text-amber-700 border-amber-100",
        outline: "bg-transparent text-slate-600 border-slate-200",
    };

    const sizes = {
        sm: "px-2.5 py-0.5 text-xs",
        md: "px-3 py-1",
        xl: "px-4 py-2 text-xl"
    }

    return (
        <span className={cn(
            "inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors",
            variants[variant],
            sizes[size],
            className,
        )}>
            {children}
        </span>
    );
};