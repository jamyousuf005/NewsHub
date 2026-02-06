import Image from "next/image"
import Link from "next/link"
import { CategoryBadge } from "@/components/news/CategoryBadge"
import { Article } from "@/lib/api"

export function EditorPickCard({ article }: { article: Article }) {
    return (
        <Link href={`/article/${article.slug}`} className="group">
            <article className="bg-card rounded-[20px] overflow-hidden border border-border transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/50 h-full flex flex-col">
                <div className="relative w-full h-[240px] overflow-hidden">
                    <span className="absolute top-5 left-5 z-10 bg-primary text-white px-4 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-widest shadow-lg">
                        Editor's Choice
                    </span>
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                    <div className="mb-4">
                        <CategoryBadge variant="default" className="text-primary bg-transparent p-0 hover:bg-transparent text-xs">
                            {article.category}
                        </CategoryBadge>
                    </div>
                    <h3 className="font-headline text-2xl font-bold leading-snug mb-4 group-hover:text-primary transition-colors">
                        {article.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-3 mb-6 text-[15px] leading-relaxed">
                        {article.description}
                    </p>
                    <div className="mt-auto flex items-center gap-3 text-sm text-muted-foreground pt-5 border-t border-border">
                        <span className="font-bold text-foreground">{article.author}</span>
                        <span className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
                        <span>{article.date}</span>
                        <span className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
                        <span>{article.readTime}</span>
                    </div>
                </div>
            </article>
        </Link>
    )
}
