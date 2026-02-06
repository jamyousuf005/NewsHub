import { getArticleBySlug } from "@/lib/api";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CategoryBadge } from "@/components/news/CategoryBadge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, Clock, User } from "lucide-react";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    // Await params for Next.js 15 compatibility
    const { slug } = await params;
    const article = await getArticleBySlug(slug);

    if (!article) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <div className="flex-1 container py-20 text-center flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
                    <p className="text-muted-foreground mb-8">The article you are looking for could not be found or has been removed.</p>
                    <Button asChild>
                        <Link href="/">Return Home</Link>
                    </Button>
                </div>
                <Footer />
            </div>
        )
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 pb-20">
                <div className="relative h-[60vh] min-h-[400px]">
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

                    <div className="container relative h-full flex flex-col justify-end py-12">
                        <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 font-medium transition-colors w-fit">
                            <ArrowLeft className="w-4 h-4" /> Back to Home
                        </Link>
                        <div className="mb-4">
                            <CategoryBadge>{article.category}</CategoryBadge>
                        </div>
                        <h1 className="font-headline font-black text-4xl md:text-5xl lg:text-6xl text-foreground max-w-4xl leading-tight mb-6 drop-shadow-md">
                            {article.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-white/90 font-medium text-sm md:text-base">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                {article.author}
                            </div>
                            <div className="w-1 h-1 bg-white/50 rounded-full" />
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {new Date(article.publishedAt).toLocaleDateString()}
                            </div>
                            <div className="w-1 h-1 bg-white/50 rounded-full" />
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {article.readTime}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container max-w-4xl pt-12">
                    <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-serif mb-10">
                        <span className="text-6xl float-left pr-3 font-black text-primary leading-[0.8]">
                            {article.description.charAt(0)}
                        </span>
                        {article.description.substring(1)}
                    </p>

                    <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                        <p>{article.content}</p>
                    </div>


                </div>
            </main>

            <Footer />
        </div>
    );
}
