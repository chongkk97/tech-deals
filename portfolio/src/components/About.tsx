const About = () => {
    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <div className="glass-effect rounded-3xl p-8 md:p-12 border-t border-brand-primary/20 hover-lift relative group">

                    {/* subtle glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">

                        {/* Left side text content */}
                        <div className="flex-1 space-y-6">
                            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
                            <div className="w-12 h-1 bg-brand-primary rounded-full" />

                            <div className="space-y-4 text-slate-300 leading-relaxed text-lg font-light">
                                <p>
                                    I'm a <strong className="text-white font-medium">Senior Software Engineer</strong> with a strong foundation in <span className="text-brand-primary">C# and Python</span> development. Over the years, I've specialized in building robust, scalable applications that solve real-world problems.
                                </p>
                                <p>
                                    Currently, my focus is on developing <strong className="text-white font-medium">AI automation tools</strong> that streamline workflows and push the boundaries of what technology can achieve.
                                </p>
                                <p>
                                    Beyond code, I have a deep passion for optimizing everyday life. Whether it's curating the perfect WFH tech gear or discovering travel strategies for tech-optimized trips across Asia, I believe the right tools make all the difference.
                                </p>
                            </div>
                        </div>

                        {/* Right side visual element - could be a tech stack visual or a silhouette abstract image */}
                        <div className="w-full md:w-1/3 flex justify-center">
                            <div className="relative w-48 h-48 md:w-64 md:h-64">
                                {/* Abstract tech representation */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-primary/30 to-brand-secondary/30 blur-xl animate-pulse" />
                                <div className="absolute inset-4 rounded-3xl bg-bg-dark border border-white/10 flex items-center justify-center rotate-3 overflow-hidden shadow-2xl">
                                    {/* Grid background pattern */}
                                    <div className="absolute inset-0 opacity-20"
                                        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                                    <div className="text-center z-10 space-y-2">
                                        <div className="text-brand-primary font-mono text-sm">&lt;code&gt;</div>
                                        <div className="text-xl font-bold font-outfit">AI &<br />Automation</div>
                                        <div className="text-brand-secondary font-mono text-sm">&lt;/code&gt;</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
