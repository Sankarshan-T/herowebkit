import { cn } from "@/lib/utils";

interface CardProps {
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
    action?: React.ReactNode;
    color?: 'red' | 'blue' | 'green' | 'yellow';
}

export const Card = ({
    title,
    subtitle,
    children,
    footer,
    className,
    action,
    color = "blue",
}: CardProps) => {
    const colors = {
        red: "from-red-500 to-amber-500",
        blue: "from-blue-500 to-indigo-500",
        green: "from-green-500 to-emerald-500",
        yellow: "from-yellow-500 to-emerald-500",
    }

    return (
        <div className={cn(
            "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300",
            className
        )}>
            <div className={cn(`h-1 w-full bg-linear-to-r opacity-0 transition-opacity group-hover:opacity-100`, colors[color])} />

            {(title || subtitle) && (
                <div className="flex items-start justify-between p-6">
                    <div className="space-y-1">
                        {title && (
                            <h3 className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                                {title}
                            </h3>
                        )}
                        {subtitle && (
                            <p className="text-sm font-medium text-slate-500/80">
                                {subtitle}
                            </p>
                        )}
                    </div>
                    {action && (
                        <div className="ml-4 shrink-0">
                            {action}
                        </div>
                    )}
                </div>
            )}

            <div className={cn(
                "px-6 pb-6",
                !(title || subtitle) && "pt-6"
            )}>
                <div className="text-sm leading-relaxed text-slate-600">
                    {children}
                </div>
            </div>

            {footer && (
                <div className="flex items-center justify-end gap-3 border-t border-slate-300 bg-slate-50/50 px-6 py-4">
                    {footer}
                </div>
            )}
        </div>
    )
}