"use client"
import { Circle } from "lucide-react"

export function BreakingNews() {
    return (
        <div className="bg-gradient-to-br from-primary to-[#003A99] text-primary-foreground py-4 overflow-hidden relative">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255, 255, 255, 0.5) 10px, rgba(255, 255, 255, 0.5) 20px)'
                }}>
            </div>

            <div className="container relative z-10 flex items-center gap-6">
                <div className="flex items-center gap-2 font-extrabold uppercase text-xs tracking-[0.15em] shrink-0 bg-white/20 px-4 py-2 rounded-md">
                    <span className="relative flex h-3 w-3 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    Breaking News
                </div>

                <div className="flex-1 overflow-hidden">
                    <div className="animate-infinite-scroll inline-block whitespace-nowrap">
                        {[
                            "Major climate summit concludes with historic agreement",
                            "Global markets reach all-time high on economic optimism",
                            "Space agency announces breakthrough in deep space exploration",
                            "Underdog team claims stunning championship victory",
                            "Major climate summit concludes with historic agreement",
                            "Global markets reach all-time high on economic optimism"
                        ].map((item, i) => (
                            <span key={i} className="inline-flex items-center mx-8 font-medium text-sm md:text-[15px]">
                                {item}
                                {i !== 5 && <Circle className="h-1.5 w-1.5 ml-8 fill-current opacity-50" />}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
