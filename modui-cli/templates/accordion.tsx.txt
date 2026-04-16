"use client";

import { ChevronsDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface AccordionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export const Accordion = ({
    title,
    children,
    className
}: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={cn(
            "group rounded-xl border border-slate-200 bg-white transition-all duration-200",
            isOpen && "shadow-sm border-slate-300 ring-1 ring-slate-200",
            className
        )}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between px-5 py-4 text-left outline-none"
            >
                <span className={cn(
                    "text-sm font-semibold transition-colors duration-200",
                    isOpen ? "text-blue-600" : "text-slate-700 group-hover:text-slate-900"
                )}>
                    {title}
                </span>

                <div className={cn(
                    "flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300",
                    isOpen ? "bg-blue-50 text-blue-600 rotate-180" : "bg-slate-50 text-slate-400"
                )}>
                    <ChevronsDown className="h-3.5 w-3.5" />
                </div>
            </button>

            <div className={cn(
                "grid transition-all duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            )}>
                <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-0">
                        <div className="rounded-lg bg-slate-50/50 p-4 text-sm leading-relaxed text-slate-600 border border-slate-100">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};