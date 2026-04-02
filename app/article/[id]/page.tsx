import { getAllArticles, getArticleById } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Set ISR Revalidation for static pages to 24 hours (86400 seconds)
export const revalidate = 86400; 

// Helper to determine condition
const isOlderThan3Days = (dateStr: string) => {
  const threeDaysInMs = 3 * 24 * 60 * 60 * 1000;
  return Date.now() - new Date(dateStr).getTime() > threeDaysInMs;
};

// SSG: Pre-build paths for articles OLDEST than 3 days
export async function generateStaticParams() {
  const articles = await getAllArticles();
  
  // Only statically generate pages for articles older than 3 days.
  // New articles will strictly be Server-Side Rendered (SSR) on-demand.
  const staticArticles = articles.filter(a => isOlderThan3Days(a.date));
  
  return staticArticles.map((article) => ({
    id: article.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const article = await getArticleById(parseInt(params.id));
  if (!article) return { title: 'Not Found' };
  
  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      images: [article.image],
    }
  };
}

export default async function ArticlePage({ params }: { params: { id: string } }) {
  const article = await getArticleById(parseInt(params.id));
  if (!article) notFound();

  // If this executes and the article is < 3 days old, Next.js handles it strictly as an SSR request
  // If > 3 days old, Next.js serves it from the super-fast SSG cache.
  
  return (
    <article className="max-w-4xl mx-auto px-4 mt-8 mb-16">
      <header className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold headline-font">{article.title}</h1>
        <div className="text-sm text-slate-500 mt-4 uppercase font-bold tracking-widest flex items-center gap-2">
          <span>{article.category} | {article.tag}</span>
        </div>
      </header>
      
      <img src={article.image} alt={article.title} className="w-full h-[400px] object-cover mb-8 rounded-lg" />
      
      <div className="article-body prose max-w-none text-slate-800 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: article.content }} />
      
      {/* Client Component Island for the SPA Deep Linking Infinite Scroll behavior */}
      {/* <InfiniteScrollReader initialArticleId={article.id} /> */}
    </article>
  );
}
