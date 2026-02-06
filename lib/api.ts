export interface Article {
    title: string;
    description: string;
    content: string;
    url: string;
    image: string;
    publishedAt: string;
    source: {
        name: string;
        url: string;
    };
    category: string;
    author: string;
    readTime: string;
    slug: string;
    date: string;
}

interface GNewsResponse {
    totalArticles: number;
    articles: Partial<Article>[];
}

const MOCK_ARTICLES: Article[] = [
    {
        title: "SpaceX Successfully Launches Next-Gen Starship",
        description: "The massive rocket achieved orbit for the first time, marking a significant milestone in the company's ambition to colonize Mars.",
        content: "SpaceX has successfully launched its next-generation Starship rocket from the Starbase facility in Texas. The massive launch vehicle, the most powerful ever built, achieved orbit for the first time, marking a significant milestone in the company's ambition to colonize Mars.\n\nThe launch proceeded without issues, and the booster separated cleanly before splashing down in the Gulf of Mexico. The upper stage continued to orbit, demonstrating its capability to deliver heavy payloads to space. 'This is a day for the history books,' said Elon Musk, viewing the launch from mission control. 'We are one step closer to making life multi-planetary.'\n\nEngineers warn that challenges remain, including the complex process of orbital refueling and the safe return of the upper stage. However, the data gathered from this flight will be invaluable for future missions. NASA has already contracted SpaceX to use a version of Starship for its upcoming Artemis lunar landing missions, adding pressure to perfect the technology rapidly.",
        url: "#",
        image: "https://images.unsplash.com/photo-1541185933-71abb8524942?q=80&w=2070&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "Space Tech", url: "#" },
        category: "technology",
        author: "Elon Musk",
        readTime: "5 min read",
        slug: "spacex-successfully-launches-next-gen-starship",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    },
    {
        title: "Global Markets Rally as Inflation Cools",
        description: "Stock markets across the globe surged today as new data indicates inflation is slowing down faster than expected.",
        content: "Global stock markets experienced a significant rally today following the release of the latest economic data, which showed inflation cooling at a faster rate than economists had predicted. The S&P 500 and Nasdaq both hit record highs, driven by gains in the technology and consumer sectors. The Dow Jones Industrial Average climbed over 500 points in early trading.\n\nCentral banks have signaled that interest rate cuts could be on the horizon, further fueling investor optimism. 'The worst of the inflationary period appears to be behind us,' noted Chief Market Strategist Sarah Jenkins. 'Consumers are feeling more confident, and businesses are seeing stable growth.'\n\nAnalysts warn, however, that while the immediate outlook is positive, geopolitical tensions remain a risk factor for the global economy. Energy prices remain volatile, and supply chain disruptions could re-emerge if regional conflicts escalate. For now, however, Wall Street is in a celebratory mood.",
        url: "#",
        image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=2064&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "Finance Weekly", url: "#" },
        category: "business",
        author: "Sarah Jenkins",
        readTime: "4 min read",
        slug: "global-markets-rally-as-inflation-cools",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    },
    {
        title: "New AI Model Breaks Records in Medical Diagnosis",
        description: "A revolutionary AI system has demonstrated higher accuracy than human specialists in detecting early-stage diseases.",
        content: "Researchers have unveiled a new artificial intelligence model that outperforms human doctors in diagnosing complex medical conditions. The system, trained on millions of medical images and patient records, demonstrated a 99% accuracy rate in detecting early signs of cancer and heart disease. This breakthrough was published today in the New England Journal of Medicine.\n\nMedical professionals have welcomed the tool as a powerful assistant that can help catch diseases earlier and save lives. 'It's not about replacing doctors,' explained Dr. Alan Turing, the lead researcher. 'It's about giving them a super-powered second opinion that never gets tired or distracted.'\n\nThe technology is expected to be rolled out to research hospitals pending regulatory approval next year. Privacy advocates have raised questions about patient data usage, but the development team assures that all data is anonymized and encrypted. If successful, this could reduce diagnostic errors by over 80%.",
        url: "#",
        image: "https://images.unsplash.com/photo-1581093458891-7f3d39559cf3?q=80&w=2070&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "Health AI", url: "#" },
        category: "technology",
        author: "Dr. Alan Turing",
        readTime: "6 min read",
        slug: "new-ai-model-breaks-records-in-medical-diagnosis",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    },
    {
        title: "Championship Finals: Underdog Team Takes the Trophy",
        description: "In a stunning upset, the city's favorites were defeated in the final minutes of the game.",
        content: "The annual championship finals ended in a dramatic upset last night as the underdog team secured victory in the final minutes of the match. The favorites, who had dominated the season, were left stunned by a late goal that sealed their fate. The score remained 0-0 for most of the intense match until the 89th minute breakaway.\n\nFans erupted in celebration as the final whistle blew, marking a historic first win for the club in over two decades. 'We never stopped believing,' said the team captain in a tearful post-match interview. 'We knew if we held our defensive line, our chance would come.'\n\nThe victory parade is scheduled for tomorrow in the city center, with an expected attendance of over 100,000 fans. City officials have announced road closures and increased public transit services to accommodate the crowds.",
        url: "#",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2070&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "Sports Central", url: "#" },
        category: "sports",
        author: "Mike Commentary",
        readTime: "3 min read",
        slug: "championship-finals-underdog-team-takes-the-trophy",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    },
    {
        title: "Senate Passes Historic Climate Bill",
        description: "Legislation aims to reduce carbon emissions by 50% over the next decade through aggressive investments in green energy.",
        content: "The Senate has passed a landmark climate bill aimed at drastically reducing the nation's carbon footprint. The legislation, which passed by a narrow margin of 51-49, allocates billions of dollars for investment in renewable energy infrastructure, electric vehicle subsidies, and carbon capture technology.\n\nProponents hail it as a necessary step to combat climate change, citing recent extreme weather events as proof that action cannot wait. 'This is an investment in our children's future,' stated Senator Jane Doe. 'We are finally taking the crisis seriously.'\n\nCritics argue it places an undue burden on traditional energy sectors and could lead to short-term job losses in coal and oil industries. However, the bill includes provisions for retraining programs to help workers transition to green energy jobs. The bill now heads to the House for final approval, where it is expected to pass.",
        url: "#",
        image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "Gov Watch", url: "#" },
        category: "politics",
        author: "Jane Doe",
        readTime: "7 min read",
        slug: "senate-passes-historic-climate-bill",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    },
    {
        title: "Cultural Festival Draws Millions to City Center",
        description: "The annual arts and culture festival broke attendance records this weekend.",
        content: "The city's annual Cultural Arts Festival set a new attendance record this weekend, drawing over two million visitors to the downtown area. The event featured live music performances from international stars, large-scale art installations, and culinary experiences from over 50 countries.\n\nLocal businesses reported record sales, with hotels and restaurants fully booked for the three-day event. City officials praised the peaceful atmosphere despite the massive crowds. 'This event truly showcases the diversity and vibrancy of our community,' said the Mayor.\n\nHighlights included a drone light show over the harbor and a surprise performance by a legendary rock band on Saturday night. Planning for next year's festival is already underway, with organizers promising an even larger lineup.",
        url: "#",
        image: "https://images.unsplash.com/photo-1514525253440-b393452e3726?q=80&w=2070&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "City Arts", url: "#" },
        category: "culture",
        author: "Art Lover",
        readTime: "5 min read",
        slug: "cultural-festival-draws-millions-to-city-center",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    },
    {
        title: "UN Summit Addresses Global Water Crisis",
        description: "Leaders meet to discuss urgent solutions for water scarcity affecting developing nations.",
        content: "World leaders gathered at the UN headquarters today to address the escalating global water crisis. With droughts becoming more frequent and severe due to climate change, millions are at risk of water scarcity in developing nations. The summit aims to establish a global fund for water infrastructure projects.\n\n'Water is a fundamental human right,' declared the UN Secretary-General in the opening address. 'We cannot stand by while communities dry up.' The proposal includes new desalination technologies and improved irrigation methods for agriculture, which consumes 70% of the world's freshwater.\n\nSeveral wealthy nations have already pledged billions in aid, but experts say more is needed. The summit will continue for three days, with a binding agreement expected to be signed on Friday. Activists gathered outside the venue to demand immediate action.",
        url: "#",
        image: "https://images.unsplash.com/photo-1516937941348-c09e554b9c5c?q=80&w=2070&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "World News", url: "#" },
        category: "world",
        author: "Global Corresp.",
        readTime: "6 min read",
        slug: "un-summit-addresses-global-water-crisis",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    }
];

export async function getTopHeadlines(category: string = 'general'): Promise<Article[]> {
    const apiKey = process.env.GNEWS_API_KEY;

    // Always use mock data if no key, or if fetch fails.
    let articles: Article[] = [];

    if (apiKey) {
        try {
            const res = await fetch(
                `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&apikey=${apiKey}`,
                { next: { revalidate: 3600 } }
            );

            if (res.ok) {
                const data: GNewsResponse = await res.json();
                if (data.articles && data.articles.length > 0) {
                    articles = data.articles.map(processArticle);
                }
            } else {
                console.error(`Failed to fetch news: ${res.status} ${res.statusText}`);
            }

        } catch (error) {
            console.error("News fetch error:", error);
        }
    }

    // Fallback to mock data if API failed or returned empty
    if (articles.length === 0) {
        console.log("Using Mock Data");
        if (category === 'general') {
            return MOCK_ARTICLES;
        }
        return MOCK_ARTICLES.filter(a => a.category.toLowerCase() === category.toLowerCase());
    }

    return articles;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
    if (!slug) return null;

    // 1. Try finding in the live content first
    const articles = await getTopHeadlines('general');
    let found = articles.find(a => a.slug === slug);
    if (found) return found;

    // 2. Try finding in MOCK data specifically (fast local lookup)
    const mockFound = MOCK_ARTICLES.find(a => a.slug === slug);
    if (mockFound) return mockFound;

    // 3. If not found, try searching via API as a last resort
    const apiKey = process.env.GNEWS_API_KEY;
    if (!apiKey) return null;

    const query = slug.replace(/-/g, ' ');

    try {
        const res = await fetch(
            `https://gnews.io/api/v4/search?q="${query}"&lang=en&apikey=${apiKey}`,
            { next: { revalidate: 3600 } }
        );

        if (res.ok) {
            const data: GNewsResponse = await res.json();
            if (data.articles && data.articles.length > 0) {
                return processArticle(data.articles[0]);
            }
        }
    } catch (e) {
        console.error("Search article failed", e);
    }

    return null;
}

function processArticle(article: Partial<Article>): Article {
    const title = article.title || "No Title";
    const desc = article.description || "No description available.";
    const publishedAt = article.publishedAt || new Date().toISOString();

    return {
        title,
        description: desc,
        content: article.content || desc,
        url: article.url || "#",
        image: article.image || "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&auto=format&fit=crop&q=60",
        publishedAt,
        source: article.source || { name: "NewsHub", url: "#" },

        category: "General",
        author: article.source?.name || "NewsHub",
        readTime: `${Math.ceil(Math.random() * 8) + 3} min read`,
        slug: slugify(title),
        date: new Date(publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    } as Article;

}

function slugify(text: string): string {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}
