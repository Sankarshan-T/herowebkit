import { cn } from "@/lib/utils";
import { LucideIcon, Search } from "lucide-react";

interface InputProps {
    onChange?: () => void;
    icon?: LucideIcon;
    placeholder?: string;
    className?: string;
}

export const Input = ({
    onChange,
    icon,
    placeholder,
    className
}: InputProps) => {
    const Icon = icon ? icon : Search;

    return (
        <div className={cn("w-full flex items-center justify-between bg-muted p-1 rounded-md border", className)}>
            <input
                type="text"
                placeholder={placeholder || "Input text here..."}
                onChange={onChange ? onChange : () => { }}
                className="focus:outline-none text-muted-foreground p-1"
            />
            <Icon className="h-7 w-7 text-muted-foreground" />
        </div>
    )
}