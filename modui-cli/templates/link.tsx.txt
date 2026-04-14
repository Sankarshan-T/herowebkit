import { cn } from "@/lib/utils";
import React from "react";

interface LinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    asChild?: boolean;
}

export const Link = ({
    href,
    children,
    asChild,
    className,
}: LinkProps) => {
    return (
        <a href={href} className={cn(asChild ? "" : "text-decoration-none text-accent-foreground hover:text-accent-foreground/80 transition", className)}>
            {children}
        </a>
    )
}