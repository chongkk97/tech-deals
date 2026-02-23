const articles = [
    {
        title: "The Best AI Coding Assistants I Use Daily",
        description: "A deep dive into how tools like GitHub Copilot and Claude are fundamentally changing my software development workflow.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        category: "Software",
    },
    {
        title: "My Essential WFH Desk Setup for 2026",
        description: "Optimizing ergonomics, lighting, and computing power for maximum productivity in a remote-first world.",
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=800",
        category: "Hardware",
    },
    {
        title: "Travel Hacks: Planning Tech-Optimized Trips Across Asia",
        description: "How I use automation and data parsing to find the best flight deals and smart travel routes without the headache.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800",
        category: "Travel",
    }
];

const Blog = () => {
    return (
        <section id="recommendations" className="py-24 px-6 bg-slate-900/50 backdrop-blur-sm border-t border-white/5">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                        Latest Tech & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Travel Insights</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Curated recommendations, industry deep-dives, and guides on living a tech-optimized life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div
                            key={index}
                            className="group glass-effect rounded-2xl overflow-hidden hover-lift flex flex-col h-full"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-brand-primary/20 mix-blend-overlay z-10" />
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 outline-none left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/20">
                                    {article.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors line-clamp-2">
                                    {article.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-6 flex-1 line-clamp-3">
                                    {article.description}
                                </p>

                                {/* CTA */}
                                <div className="mt-auto">
                                    <a
                                        href="#read"
                                        onClick={(e) => e.preventDefault()}
                                        className="inline-flex items-center text-sm font-medium text-brand-primary hover:text-brand-secondary transition-colors"
                                    >
                                        Read More
                                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
