import { Skeleton } from "@/components/ui/skeleton"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export default function Loading() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <div className="h-12 w-full bg-primary/10 animate-pulse" /> {/* Breaking News */}

                {/* Hero Skeleton */}
                <div className="relative h-[85vh] min-h-[600px] w-full bg-muted animate-pulse" />

                {/* Editor Picks Skeleton */}
                <div className="container py-20">
                    <Skeleton className="h-10 w-64 mb-12" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="space-y-4">
                                <Skeleton className="h-64 w-full rounded-2xl" />
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-8 w-full" />
                                <Skeleton className="h-4 w-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
