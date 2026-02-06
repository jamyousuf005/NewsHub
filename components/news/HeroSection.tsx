import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Article } from "@/lib/api"

export function HeroSection({ article }: { article: Article }) {
    return (
        <section className="relative h-[85vh] min-h-[600px] max-h-[800px] overflow-hidden group">
            <div className="absolute inset-0">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/40 to-transparent" />
            </div>

            <div className="container relative z-10 h-full flex flex-col justify-end pb-20">
                <div className="max-w-4xl text-white">
                    <Badge className="bg-primary hover:bg-primary text-white mb-6 px-5 py-1.5 uppercase tracking-widest text-xs font-bold border-none">
                        Featured Story
                    </Badge>
                    <h1 className="font-headline font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6 drop-shadow-lg">
                        {article.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8 leading-relaxed font-light">
                        {article.description}
                    </p>

                    <div className="flex items-center gap-4 text-sm md:text-base font-medium">
                        <span className="font-bold">{article.author}</span>
                        <span className="w-1 h-1 bg-white/50 rounded-full" />
                        <span>{article.category} Editor</span>
                        <span className="w-1 h-1 bg-white/50 rounded-full" />
                        <span>{article.date}</span>
                        <span className="w-1 h-1 bg-white/50 rounded-full" />
                        <span>{article.readTime}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
