import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return (
        <div>
            {/* <!-- Header Section --> */}
            <header className="glass-header fixed top-0 left-0 right-0 z-50 h-16 flex items-center"
            >
                <div
                    className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8"
                >
                    <div className="flex items-center gap-3">
                        <Link
                            href="https://www.revou.co/"
                            aria-label="Revou Homepage"
                            className="group"
                        >
                            <Image
                                src="/img.webp"
                                alt="Revou Logo"
                                width={40}
                                height={40}
                                className="object-contain rounded-full border-2 border-indigo-500 group-hover:border-teal-400 transition-colors duration-300"
                            />
                        </Link>
                        <span className="hidden sm:block text-lg font-semibold gradient-text"
                        >Perhisi</span
                        >
                    </div>

                    <nav id="desktop-menu" className="hidden md:flex items-center gap-8">
                        <Link
                            href="#home"
                            className="nav-link text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-300"
                        >Home</Link
                        >
                        <Link
                            href="#about"
                            className="nav-link text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-300"
                        >About</Link
                        >
                        <Link
                            href="#projects"
                            className="nav-link text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-300"
                        >Projects</Link
                        >
                        <Link
                            href="#contact"
                            className="nav-link text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-300"
                        >Contact</Link
                        >
                    </nav>

                    <div className="flex gap-4 items-center">
                        {/* <!-- Social Icons --> */}
                        <div className="hidden sm:flex gap-3">
                            <Link
                                href="https://github.com/perhisi"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="My GitHub Profile"
                                className="social-icon p-2 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors duration-300"
                            >
                                <Image src="/github.svg" alt="GitHub" width={20} height={20} className="" />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/perhisi-ardhian-dec89/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="My LinkedIn Profile"
                                className="social-icon p-2 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors duration-300"
                            >
                                <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} className="" />
                            </Link>
                        </div>

                        {/* <!-- Mobile Menu Button --> */}
                        <button
                            id="mobile-open-button"
                            className="md:hidden text-2xl p-2 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors duration-300"
                            aria-label="Open mobile menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
            {/* <!-- Mobile Menu --> */}
            <nav
                id="mobile-menu"
                className="hidden md:hidden fixed inset-0 z-50 bg-slate-900/95 dark:bg-slate-900/98 backdrop-blur-sm"
            >
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    <Link
                        href="#home"
                        className="text-2xl font-semibold text-white hover:text-indigo-400 transition-colors duration-300"
                    >Home</Link
                    >
                    <Link
                        href="#about"
                        className="text-2xl font-semibold text-white hover:text-indigo-400 transition-colors duration-300"
                    >About</Link
                    >
                    <Link
                        href="#projects"
                        className="text-2xl font-semibold text-white hover:text-indigo-400 transition-colors duration-300"
                    >Projects</Link
                    >
                    <Link
                        href="#contact"
                        className="text-2xl font-semibold text-white hover:text-indigo-400 transition-colors duration-300"
                    >Contact</Link
                    >
                    <div className="flex gap-4 mt-4">
                        <Link
                            href="https://github.com/perhisi"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="My GitHub Profile"
                            className="p-3 rounded-lg bg-slate-800 hover:bg-indigo-600 transition-colors duration-300"
                        >
                            <Image src="/github.svg" alt="GitHub" width={24} height={24} className="" />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/perhisi-ardhian-dec89/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="My LinkedIn Profile"
                            className="p-3 rounded-lg bg-slate-800 hover:bg-indigo-600 transition-colors duration-300"
                        >
                            <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} className="" />
                        </Link>
                    </div>
                    <button
                        id="mobile-close-button"
                        className="absolute top-4 right-4 text-white text-3xl p-2"
                        style={{ zIndex: 9999 }}
                        aria-label="Close mobile menu"
                    >
                        &times;
                    </button>
                </div>
            </nav>
        </div>
    );
}