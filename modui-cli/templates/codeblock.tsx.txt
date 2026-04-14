"use client";

import { cn } from "@/lib/utils";
import { Clipboard, File } from "lucide-react";
import React from "react";

interface CodeBlockProps {
    children: React.ReactNode;
    className?: string;
    language?: string;
}

export const CodeBlock = ({
    children,
    className,
    language
}: CodeBlockProps) => {
    const handleCopy = async () => {
        const textToCopy = typeof children === 'string'
            ? children
            : children?.toString() || "";

        try {
            await navigator.clipboard.writeText(textToCopy);
            console.log("Copied to clipboard");
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    };

    return (
        <div className={cn(" bg-muted font-mono text-sm rounded-xl border-2", className)}>
            <div className="w-full h-10 rounded-tl-xl rounded-tr-xl border-b-2 bg-chart-1 flex items-center justify-between p-5">
                <span className="text-blue-500 font-mono">{language ? language : "code"}</span>
                <button
                    onClick={handleCopy}
                    className="hover:bg-accent p-1 rounded-md transition-colors"
                    title="Copy to clipboard"
                >
                    <File className="h-4 w-4" />
                </button>
            </div>
            <div className="p-5">
                <pre>
                    {children}
                </pre>
            </div>
        </div>
    );
};