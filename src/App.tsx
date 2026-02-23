import Hero from './components/Hero';
import About from './components/About';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <main className="w-full min-h-screen font-sans antialiased text-slate-100 selection:bg-brand-primary/30 selection:text-white">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-[-2] min-h-screen bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>

      {/* Content wrapper */}
      <div className="relative z-0">
        <Hero />
        <About />
        <Blog />
        <Footer />
      </div>
    </main>
  );
}

export default App;
