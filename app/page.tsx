import { getTopHeadlines } from "@/lib/api";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/news/HeroSection";
import { BreakingNews } from "@/components/news/BreakingNews";
import { EditorPickCard } from "@/components/news/EditorPickCard";
import { NewsCard } from "@/components/news/NewsCard";
import { Sidebar } from "@/components/news/Sidebar";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default async function Home({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  const articles = await getTopHeadlines(category);

  if (articles.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center p-10 text-center">
          <h1 className="text-3xl font-bold mb-4">Temporarily Unavailable</h1>
          <p className="text-muted-foreground">We are unable to fetch the latest news at this moment. Please check your API key or try again later.</p>
        </div>
        <Footer />
      </div>
    )
  }

  const heroArticle = articles[0];
  const editorPicks = articles.slice(1, 4);
  const latestNews = articles.slice(4, 10);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <BreakingNews />

        {/* Hero Section */}
        {heroArticle && (
          <Link href={`/article/${heroArticle.slug}`}>
            <HeroSection article={heroArticle} />
          </Link>
        )}

        {/* Editor's Picks */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="flex items-center justify-between mb-12">
              <h2 className="font-headline text-4xl font-extrabold flex items-center gap-4">
                <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                  <Star className="w-5 h-5 text-white fill-current" />
                </div>
                Editor's Picks
              </h2>
              <Link href="#" className="text-primary font-bold uppercase tracking-wider text-xs md:text-sm flex items-center gap-2 hover:gap-3 transition-all">
                View All Stories
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {editorPicks.map((article, i) => (
                <EditorPickCard key={i} article={article} />
              ))}
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Latest News & Sidebar */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <h2 className="font-headline text-4xl font-extrabold mb-12 flex items-center gap-4">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
              Latest Stories
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
              <div className="flex flex-col gap-8">
                {latestNews.map((article, i) => (
                  <NewsCard key={i} article={article} />
                ))}
              </div>
              <Sidebar />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
