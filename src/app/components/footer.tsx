export default function Footer() {
    return (
        <div>
        {/* <!-- Footer --> */ }
        <footer className = "py-8 border-t border-slate-200 dark:border-slate-700" >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="flex flex-col sm:flex-row justify-between items-center gap-4"
                >
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                        © 2026 Perhisi Ardhian. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/perhisi"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="My GitHub Profile"
                            className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors duration-300"
                        >
                            <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/perhisi-ardhian-dec89/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="My LinkedIn Profile"
                            className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors duration-300"
                        >
                            <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
            </footer>
    </div>
    );
}