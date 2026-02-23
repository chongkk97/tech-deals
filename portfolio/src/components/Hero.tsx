const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none opacity-50 mix-blend-screen" />

            <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <div className="inline-block px-4 py-1.5 mb-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary font-medium text-sm tracking-wide shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    Welcome to my digital space
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                    <span className="block">Kok Keong Chong</span>
                    <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                        Senior Software Engineer
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
                    Building AI-powered tools and curating the best in tech, software, and smart travel.
                </p>

                <div className="pt-8">
                    <a
                        href="#recommendations"
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-300 ease-in-out hover:scale-105"
                    >
                        {/* Button background + glow */}
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary opacity-90 group-hover:opacity-100 transition-opacity blur-[2px]" />
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary shadow-[0_0_30px_rgba(59,130,246,0.5)] group-hover:shadow-[0_0_40px_rgba(139,92,246,0.6)]" />

                        {/* Button Content */}
                        <span className="relative flex items-center gap-2">
                            View My Recommendations
                            <svg
                                className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
