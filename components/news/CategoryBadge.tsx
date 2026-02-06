import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface CategoryBadgeProps {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "outline" | "secondary" | "destructive";
}

export function CategoryBadge({ children, className, variant = "secondary" }: CategoryBadgeProps) {
    return (
        <Badge
            variant={variant}
            className={cn(
                "rounded-sm px-2 py-0.5 uppercase tracking-widest font-extrabold text-[10px] md:text-xs",
                // Style override to match "text only" style or "filled" style based on context
                className
            )}
        >
            {children}
        </Badge>
    )
}
