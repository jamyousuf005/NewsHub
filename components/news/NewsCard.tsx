import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { CategoryBadge } from "@/components/news/CategoryBadge"
import { Clock } from "lucide-react"
import { Article } from "@/lib/api"

export function NewsCard({ article }: { article: Article }) {
    return (
        <Link href={`/article/${article.slug}`}>
            <Card className="flex flex-col md:flex-row gap-6 p-5 overflow-hidden transition-all duration-300 hover:translate-x-2 hover:shadow-lg hover:border-primary/30 group h-full border-border/50">
                <div className="relative w-full md:w-[200px] h-[200px] md:h-[160px] shrink-0 overflow-hidden rounded-xl">
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="flex flex-col justify-center flex-1">
                    <div className="mb-3">
                        <CategoryBadge>{article.category}</CategoryBadge>
                    </div>
                    <h3 className="font-headline text-xl font-bold leading-tight mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                        {article.description}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium border-t border-border pt-3 mt-auto">
                        <span className="text-foreground">{article.author}</span>
                        <span className="w-1 h-1 bg-border rounded-full" />
                        <span>{article.date}</span>
                        <span className="w-1 h-1 bg-border rounded-full" />
                        <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                        </span>
                    </div>
                </div>
            </Card>
        </Link>
    )
}
