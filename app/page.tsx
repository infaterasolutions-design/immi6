import { getAllArticles } from '@/lib/data';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

function BreakingNewsBanner() {
  return (
    <Link href="/article/1" className="flex items-center gap-4 bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group mb-8">
      <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 bg-white live-dot inline-block"></span>Live
      </span>
      <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">
        H-1B Visa Reform Act 2025: Live Congressional Updates — Follow the latest developments
      </p>
      <span className="material-symbols-outlined text-primary ml-auto mr-2">arrow_forward</span>
    </Link>
  );
}

function HeroGrid() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 border-b border-slate-100 pb-8">
      {/* Left: Featured Story */}
      <Link href="/article/1" className="group cursor-pointer block relative">
        <div className="relative aspect-[16/10] overflow-hidden mb-4">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&q=80" alt="Hero" />
        </div>
        <div className="space-y-3">
          <span className="text-primary text-[10px] font-bold uppercase tracking-widest">H1B Visa</span>
          <h1 className="text-on-surface text-3xl font-extrabold headline-font leading-tight group-hover:text-primary transition-colors">
            Strategic Shifts: The Future of H-1B Visa Modernization and Global Talent Acquisition
          </h1>
          <p className="text-on-surface-variant text-base leading-relaxed line-clamp-3">
            The Department of Homeland Security proposes significant structural changes to the specialty occupation visa program to enhance integrity and flexibility for tech employers.
          </p>
        </div>
      </Link>
      
      {/* Right: 2x2 Grid */}
      <div className="grid grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <Link key={i} href={`/article/${i + 1}`} className="space-y-2 group cursor-pointer block relative">
            <div className="aspect-[4/3] overflow-hidden bg-slate-100">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={`https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80`} alt="Sub" />
            </div>
            <span className="text-primary text-[10px] font-bold uppercase tracking-widest mt-1 block">Green Card</span>
            <h3 className="font-bold headline-font text-sm leading-tight group-hover:text-primary transition-colors line-clamp-3">Supreme Court Rules on Asylum Protections for Green Card Applicants</h3>
            <p className="text-[10px] text-slate-400 font-medium">5 HOURS AGO</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function TopStoriesSlider() {
  return (
    <section className="py-4 border-b border-slate-100 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-extrabold headline-font border-l-4 border-primary pl-4 uppercase tracking-tight">Top Stories</h2>
        <div className="flex items-center gap-2">
          <button className="p-1.5 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-200">
            <span className="material-symbols-outlined text-sm">chevron_left</span>
          </button>
          <button className="p-1.5 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-200">
            <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>
      </div>
      
      <div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar snap-x">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex-shrink-0 w-[280px] snap-start group cursor-pointer relative">
            <Link href={`/article/${i}`} className="absolute inset-0 z-10"><span className="sr-only">Read More</span></Link>
            <div className="relative aspect-[16/10] w-full overflow-hidden mb-3 bg-slate-100">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={`https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&q=80`} alt="Thumb" />
              <div className="absolute top-2 left-2 bg-primary px-2 py-0.5 text-[9px] font-bold text-white uppercase tracking-tighter">USCIS UPDATES</div>
            </div>
            <h4 className="font-bold text-sm leading-snug group-hover:text-primary transition-colors mb-2 line-clamp-3">Labor Shortages Drive New L-1 Visa Expediting Under New Rule</h4>
            <div className="flex items-center gap-3 text-[10px] text-slate-500 font-medium">
              <div className="flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">visibility</span><span>8.5k</span></div>
              <span>•</span><span>6h ago</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CategoryGrid() {
  return (
    <section className="py-4 border-b border-slate-100 mb-8">
      <h2 className="text-xl font-extrabold headline-font border-l-4 border-primary pl-4 uppercase tracking-tight mb-6">Browse by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-blue-50/50 hover:bg-blue-100 transition-colors p-6 flex flex-col items-center justify-center text-center group cursor-pointer border border-blue-100/50">
          <span className="material-symbols-outlined text-blue-600 text-3xl mb-3">school</span>
          <span className="font-bold headline-font text-[11px] uppercase tracking-widest">F1 Student</span>
        </div>
        <div className="bg-indigo-50/50 hover:bg-indigo-100 transition-colors p-6 flex flex-col items-center justify-center text-center group cursor-pointer border border-indigo-100/50">
          <span className="material-symbols-outlined text-indigo-600 text-3xl mb-3">work</span>
          <span className="font-bold headline-font text-[11px] uppercase tracking-widest">H1B Work</span>
        </div>
        <div className="bg-emerald-50/50 hover:bg-emerald-100 transition-colors p-6 flex flex-col items-center justify-center text-center group cursor-pointer border border-emerald-100/50">
          <span className="material-symbols-outlined text-emerald-600 text-3xl mb-3">style</span>
          <span className="font-bold headline-font text-[11px] uppercase tracking-widest">Green Card</span>
        </div>
        <div className="bg-rose-50/50 hover:bg-rose-100 transition-colors p-6 flex flex-col items-center justify-center text-center group cursor-pointer border border-rose-100/50">
          <span className="material-symbols-outlined text-rose-600 text-3xl mb-3">family_restroom</span>
          <span className="font-bold headline-font text-[11px] uppercase tracking-widest">Family Base</span>
        </div>
        <div className="bg-amber-50/50 hover:bg-amber-100 transition-colors p-6 flex flex-col items-center justify-center text-center group cursor-pointer border border-amber-100/50">
          <span className="material-symbols-outlined text-amber-600 text-3xl mb-3">gavel</span>
          <span className="font-bold headline-font text-[11px] uppercase tracking-widest">Asylum</span>
        </div>
        <div className="bg-slate-100/50 hover:bg-slate-200 transition-colors p-6 flex flex-col items-center justify-center text-center group cursor-pointer border border-slate-200/50">
          <span className="material-symbols-outlined text-slate-600 text-3xl mb-3">flight</span>
          <span className="font-bold headline-font text-[11px] uppercase tracking-widest">B1/B2 Visitor</span>
        </div>
      </div>
    </section>
  );
}

function VideoHighlights() {
  return (
    <section className="py-4 border-b border-slate-100 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-extrabold headline-font border-l-4 border-primary pl-4 uppercase tracking-tight">Video Highlights</h2>
        <div className="flex gap-2">
          <button className="p-1.5 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-200"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
          <button className="p-1.5 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-200"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x">
        <div className="flex-shrink-0 w-44 snap-start group cursor-pointer relative">
          <div className="relative aspect-[9/16] video-card-rounded overflow-hidden mb-2 bg-slate-900">
            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=400&q=80" alt="Video" />
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
            </div>
            <div className="absolute bottom-2 left-2 bg-black/50 backdrop-blur-sm px-1.5 py-0.5 text-[10px] text-white font-bold">1:24</div>
          </div>
          <h4 className="text-xs font-bold headline-font line-clamp-2 text-center group-hover:text-primary transition-colors">Understanding 2024 Citizenship Path</h4>
        </div>
        <div className="flex-shrink-0 w-44 snap-start group cursor-pointer relative">
          <div className="relative aspect-[9/16] video-card-rounded overflow-hidden mb-2 bg-slate-900">
            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80" alt="Video" />
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
            </div>
            <div className="absolute bottom-2 left-2 bg-black/50 backdrop-blur-sm px-1.5 py-0.5 text-[10px] text-white font-bold">0:58</div>
          </div>
          <h4 className="text-xs font-bold headline-font line-clamp-2 text-center group-hover:text-primary transition-colors">ESTA Application Review</h4>
        </div>
      </div>
    </section>
  );
}

export default async function HomePage() {
  const articles = await getAllArticles(); // For Latest Updates mapping below
  
  return (
    <div className="max-w-[1100px] mx-auto px-4 lg:px-0">
      <BreakingNewsBanner />
      <HeroGrid />
      <TopStoriesSlider />
      <CategoryGrid />
      <VideoHighlights />
      
      <section className="py-4">
        <h2 className="text-xl font-extrabold headline-font border-l-4 border-primary pl-4 uppercase tracking-tight mb-6">Latest Updates</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {articles.map((article) => (
              <Link href={`/article/${article.id}`} key={article.id} className="flex gap-6 group items-start border-b border-slate-100 pb-6">
                <div className="w-32 lg:w-48 h-20 lg:h-32 flex-shrink-0 overflow-hidden bg-slate-100">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div>
                  <span className="text-primary text-[10px] font-bold uppercase tracking-widest">{article.category}</span>
                  <h3 className="text-lg lg:text-2xl font-bold headline-font group-hover:text-primary transition-colors leading-snug lg:leading-tight mb-2">{article.title}</h3>
                  <p className="text-slate-500 text-xs lg:text-sm line-clamp-2">{article.summary}</p>
                </div>
              </Link>
            ))}
          </div>
          
          <aside className="border border-slate-200 bg-slate-50 p-6 h-fit sticky top-24">
            <h3 className="font-bold headline-font text-lg mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">trending_up</span> Trending Now
            </h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-sm font-semibold hover:text-primary">New F1 STEM Extension Rules Published</Link></li>
              <li><Link href="/" className="text-sm font-semibold hover:text-primary">Prevailing Wage Update for 2024</Link></li>
              <li><Link href="/" className="text-sm font-semibold hover:text-primary">Visa Bulletin Expectations for November</Link></li>
            </ul>
          </aside>
        </div>
      </section>
    </div>
  );
}
