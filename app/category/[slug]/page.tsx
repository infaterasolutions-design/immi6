import { getAllArticles } from '@/lib/data';
import Link from 'next/link';

// Categories are dynamically rendered to always fetch the latest bucket of related articles Server-Side.
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: `${params.slug.replace(/-/g, ' ').toUpperCase()} | Live Updates`
  };
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const articles = await getAllArticles();
  const categoryArticles = articles.filter(a => a.category.toLowerCase() === params.slug.toLowerCase());

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 headline-font border-b border-primary text-primary pb-4 capitalize">
        {params.slug.replace(/-/g, ' ')} News
      </h1>
      
      <div className="flex flex-col gap-8 max-w-4xl">
        {categoryArticles.map((article) => (
          <Link href={`/article/${article.id}`} key={article.id} className="flex gap-6 group items-start border-b border-slate-100 pb-6">
            <div className="w-48 h-32 flex-shrink-0 overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">{article.title}</h2>
              <p className="text-slate-600 mt-2">{article.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
