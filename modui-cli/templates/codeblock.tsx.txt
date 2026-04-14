"use client";

import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
    children: string;
    className?: string;
    language?: string;
    windowed?: boolean;
}

export const CodeBlock = ({
    children,
    className,
    language,
    windowed = true,
}: CodeBlockProps) => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(children);
            setHasCopied(true);
            setTimeout(() => setHasCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    };

    return (
        <div className={cn(
            "relative group my-4 overflow-hidden rounded-xl border border-slate-200 bg-white text-sm font-mono shadow-sm",
            className
        )}>
            <div className="flex items-center justify-between px-4 py-2 border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-center gap-2">
                    {windowed && (
                        <div className="flex gap-1.5 opacity-60">
                            <div className="h-2.5 w-2.5 rounded-full bg-red-300" />
                            <div className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                            <div className="h-2.5 w-2.5 rounded-full bg-green-300" />
                        </div>
                    )}
                    <span className="ml-2 text-[10px] uppercase tracking-wider text-blue-400 font-bold">
                        {language || "code"}
                    </span>
                </div>

                <button
                    onClick={handleCopy}
                    className={cn(
                        "inline-flex items-center justify-center rounded-md p-1.5 transition-all outline-none",
                        "hover:bg-slate-200/50 focus:ring-1 focus:ring-slate-300",
                        hasCopied ? "text-blue-600" : "text-slate-400 hover:text-slate-900"
                    )}
                    title="Copy to clipboard"
                >
                    {hasCopied ? (
                        <Check className="h-3.5 w-3.5" />
                    ) : (
                        <Copy className="h-3.5 w-3.5" />
                    )}
                </button>
            </div>

            <div className="relative overflow-x-auto p-5 bg-white">
                <pre className="text-slate-700 leading-relaxed selection:bg-blue-100">
                    <code className="block">{children}</code>
                </pre>
            </div>
        </div>
    );
};