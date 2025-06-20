import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MacWindowProps {
  children: ReactNode;
  title?: string;
  className?: string;
  showTrafficLights?: boolean;
}

export function MacWindow({
  children,
  title,
  className,
  showTrafficLights = true,
}: MacWindowProps) {
  return (
    <div
      className={cn(
        "bg-background border border-border rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl",
        "bg-opacity-80 backdrop-saturate-200",
        className,
      )}
    >
      {/* Title Bar */}
      <div className="h-12 bg-macos-gray/50 backdrop-blur-xl border-b border-border flex items-center px-4">
        {showTrafficLights && (
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer"></div>
          </div>
        )}
        {title && (
          <div className="flex-1 text-center text-sm font-medium text-foreground/80">
            {title}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative">{children}</div>
    </div>
  );
}
