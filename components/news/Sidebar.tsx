"use client"

import { TrendingUp, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Sidebar() {
    return (
        <aside className="space-y-10">
            {/* Most Read Widget */}
            <div className="bg-card rounded-[20px] p-8 border border-border sticky top-28">
                <h3 className="font-headline text-2xl font-black mb-6 flex items-center gap-3">
                    <div className="w-9 h-9 bg-gradient-to-br from-primary to-[#003A99] rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                        <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    Most Read
                </h3>

                <div className="flex flex-col gap-6">
                    {[
                        { title: "Scientists Discover New Renewable Energy Source", views: "3.2M", time: "2h ago" },
                        { title: "Tech Innovation Transforms Healthcare Industry", views: "2.8M", time: "5h ago" },
                        { title: "Economic Recovery Shows Promising Signs", views: "2.1M", time: "8h ago" },
                        { title: "Global Summit Addresses Climate Crisis", views: "1.9M", time: "12h ago" },
                        { title: "Space Exploration Reaches New Milestone", views: "1.6M", time: "1d ago" },
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4 group cursor-pointer border-l-[3px] border-muted pl-5 hover:border-primary hover:translate-x-1 transition-all">
                            <div className="font-headline text-4xl font-black leading-none text-primary/20 group-hover:text-primary transition-colors">
                                {i + 1}
                            </div>
                            <div>
                                <h4 className="font-headline font-bold text-base leading-snug mb-1 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h4>
                                <p className="text-xs text-muted-foreground font-medium">
                                    {item.views} views • {item.time}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Newsletter Widget */}
            <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-primary to-[#003A99] p-10 text-center text-white border border-primary">
                <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] animate-[spin_20s_linear_infinite]" />

                <div className="relative z-10">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                        <Mail className="h-8 w-8" />
                    </div>
                    <h3 className="mb-3 font-headline text-2xl font-black">Stay Informed</h3>
                    <p className="mb-8 opacity-90 text-sm leading-relaxed">
                        Get the latest news details delivered to your inbox every morning. Join 50k+ subscribers.
                    </p>
                    <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-white/10 border-white/30 text-white placeholder:text-white/60 rounded-full h-12 px-6 focus-visible:ring-offset-0 focus-visible:ring-1 focus-visible:ring-white border-2"
                        />
                        <Button type="submit" variant="secondary" className="rounded-full h-12 font-bold uppercase tracking-wider text-primary hover:scale-[1.02] transition-transform">
                            Subscribe
                        </Button>
                    </form>
                </div>
            </div>
        </aside>
    )
}
