export type Article = {
  id: number;
  title: string;
  category: string;
  tag: string;
  location: string;
  date: string; // ISO date string preferred for computing
  time: string;
  image: string;
  summary: string;
  content: string;
};

// Simulated mock database with standard news data
export const NewsData: Article[] = [
  {
    id: 1, title: 'H-1B Visa Lottery 2025: Key Changes and Registration Dates Announced',
    category: 'Work-Visas', tag: 'H-1B Update', location: 'Washington, D.C.',
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day old (SSR)
    time: '10:00 AM EDT', image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&q=80',
    summary: 'USCIS announces massive overhaul to the H-1B lottery system focusing on beneficiary-centric selection.',
    content: '<p>The U.S. Citizenship and Immigration Services (USCIS) has officially unveiled the schedule...</p>'
  },
  {
    id: 2, title: 'USCIS Fee Increases Go Into Effect Today: What You Need to Know',
    category: 'Immigration-Policy', tag: 'Policy Changes', location: 'New York, NY',
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days old (SSG)
    time: '08:30 AM EDT', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80',
    summary: 'The long-awaited fee hike is now active, significantly increasing costs for employment-based petitions.',
    content: '<p>Starting today, the sweeping fee increases for almost all immigration and naturalization benefit requests...</p>'
  }
];

export async function getArticleById(id: number): Promise<Article | undefined> {
  // Simulating DB fetch
  return NewsData.find(a => a.id === id);
}

export async function getAllArticles(): Promise<Article[]> {
  return NewsData;
}
