import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "The Digital Diplomat | USA Immigration News",
  description: "Expert reporting and live updates on USA immigration, H-1B, and Policy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="text-on-surface overflow-x-hidden min-h-screen flex flex-col pt-20">
        <Header />
        
        <main className="flex-1 mb-20 md:mb-0">
          {children}
        </main>
        
        <footer className="bg-[#0f172a] text-slate-300 py-16 border-t border-slate-800">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="space-y-4">
                <span className="text-2xl font-black tracking-tighter text-white">THE DIGITAL DIPLOMAT</span>
                <p className="text-sm text-slate-400">Demystifying U.S. Immigration through crisp, accurate reporting and live case tracking.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
                <ul className="space-y-3 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Latest News</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">H-1B Tracker</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">USCIS Fees</a></li>
                </ul>
              </div>
              <div className="md:col-span-2">
                <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Never Miss an Alert</h4>
                <div className="flex">
                  <input type="email" placeholder="Enter your email" className="bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-l-md w-full focus:outline-none focus:border-blue-500" />
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-r-md font-bold hover:bg-blue-500 transition-colors whitespace-nowrap">Subscribe</button>
                </div>
              </div>
            </div>
            <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
              <p>&copy; 2025 The Digital Diplomat. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
