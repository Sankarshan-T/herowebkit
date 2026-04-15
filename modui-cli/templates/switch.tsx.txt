"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export const Switch = ({
    label,
    defaultChecked = false,
}: {
    label?: string,
    defaultChecked?: boolean
}) => {
    const [enabled, setEnabled] = useState(defaultChecked);

    return (
        <label className="flex items-center gap-3 cursor-pointer group">
            <div
                onClick={() => setEnabled(!enabled)}
                className={cn(
                    "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out outline-none focus:ring-2 focus:ring-blue-100",
                    enabled ? "bg-blue-600" : "bg-slate-200"
                )}
            >
                <span
                    className={cn(
                        "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                        enabled ? "translate-x-5" : "translate-x-0"
                    )}
                />
            </div>
            {label && <span className="text-sm font-medium text-slate-700">{label}</span>}
        </label>
    );
};