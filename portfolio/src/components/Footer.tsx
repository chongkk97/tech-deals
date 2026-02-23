const Footer = () => {
    return (
        <footer className="py-10 border-t border-white/10 bg-black/40">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Copyright */}
                <div className="text-slate-500 text-sm font-light">
                    &copy; {new Date().getFullYear()} Kok Keong Chong. All rights reserved.
                </div>

                {/* Links */}
                <div className="flex items-center gap-6 text-sm text-slate-500">
                    <a
                        href="#privacy-policy"
                        onClick={(e) => e.preventDefault()}
                        className="hover:text-white transition-colors"
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="#terms-of-service"
                        onClick={(e) => e.preventDefault()}
                        className="hover:text-white transition-colors"
                    >
                        Terms of Service
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
