import { Info } from "lucide-react";

const colorMap = {
    blue: {
        border: "border-blue-100",
        bg: "bg-blue-50/50",
        icon: "text-blue-600",
        title: "text-blue-900",
        text: "text-blue-700/80",
    },
    red: {
        border: "border-red-100",
        bg: "bg-red-50/50",
        icon: "text-red-600",
        title: "text-red-900",
        text: "text-red-700/80",
    },
    green: {
        border: "border-green-100",
        bg: "bg-green-50/50",
        icon: "text-green-600",
        title: "text-green-900",
        text: "text-green-700/80",
    },
    yellow: {
        border: "border-yellow-100",
        bg: "bg-yellow-50/50",
        icon: "text-yellow-600",
        title: "text-yellow-900",
        text: "text-yellow-700/80",
    },
};

export const Callout = ({
    title,
    children,
    color = "blue",
}: {
    title: string;
    children: React.ReactNode;
    color?: "red" | "blue" | "green" | "yellow";
}) => {
    const styles = colorMap[color];

    return (
        <div className={`flex gap-4 rounded-lg border p-4 ${styles.border} ${styles.bg}`}>
            <Info className={`h-5 w-5 shrink-0 mt-0.5 ${styles.icon}`} />
            <div className="space-y-1">
                <h4 className={`font-medium leading-none ${styles.title}`}>{title}</h4>
                <div className={`text-sm leading-relaxed ${styles.text}`}>
                    {children}
                </div>
            </div>
        </div>
    );
};