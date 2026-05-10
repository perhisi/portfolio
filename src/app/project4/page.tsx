import Link from "next/link";
import HeaderProject from "../components/header-project";
import ImageGallery from "../components/image-galery";
import { images } from "../components/image-data";
import Footer from "../components/footer";

export default function Project4() {
    return (
        <div className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 font-mono bg-slate-50 dark:bg-slate-900 dark:text-white selection:bg-indigo-500 selection:text-white">

            <HeaderProject />
            <section className="min-h-screen pt-24 pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* <!-- Back Button --> */}
                    <a
                        href="index.html#projects"
                        className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-300 mb-8 group"
                    >
                        <svg
                            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            ></path>
                        </svg>
                        Back to Projects
                    </a>
                    {/* <!-- Project Header --> */}
                    <div className="max-w-4xl mx-auto mb-12">
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-800 dark:text-white"
                        >
                            Milestone 4 Backend
                        </h1>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span
                                className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium"
                            >Nest.js</span
                            >
                            <span
                                className="badge bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-4 py-2 rounded-full text-sm font-medium"
                            >PostgreSQL</span
                            >
                            <span
                                className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium"
                            >Prisma ORM</span
                            >
                            <span
                                className="badge bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-4 py-2 rounded-full text-sm font-medium"
                            >JWT</span
                            >
                            <span
                                className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium"
                            >Refresh Token</span
                            >
                        </div>
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                            Backend API for financial account management with dual-token
                            authentication, secure CRUD operations, and robust data validation.
                        </p>
                    </div>


                    {/* <!-- Project Image Gallery --> */}
                    <div className="max-w-5xl mx-auto mb-12">
                        <div
                            className="glass-card rounded-2xl overflow-hidden shadow-2xl p-8 bg-gradient-to-br from-purple-500 via-indigo-500 to-teal-500 group"
                        >
                            <div className="text-center text-teal-700 dark:text-teal-300">
                                <svg
                                    className="w-24 h-24 mx-auto mb-4 opacity-80"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                                <h2 className="text-2xl font-bold">Milestone 4 Backend</h2>
                                <p className="opacity-80">Financial Account Management API</p>
                            </div>
                        </div>
                        <div className="flex gap-3 overflow-x-auto pb-2 mt-4">
                            <ImageGallery images={images.slice(12, 16)} />
                        </div>
                    </div>


                    {/* <!-- Project Content Grid --> */}
                    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* <!-- Main Content --> */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* <!-- Overview --> */}
                            <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-xl">
                                <h2
                                    className="text-2xl font-bold mb-4 text-slate-800 dark:text-white"
                                >
                                    Project Overview
                                </h2>
                                <p
                                    className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4"
                                >
                                    The Milestone 4 Backend is a robust RESTful API built with
                                    Nest.js for managing personal financial accounts. It features a
                                    secure dual-token authentication system with JWT and refresh
                                    token rotation.
                                </p>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    The system enables users to perform secure CRUD operations on
                                    their financial records while maintaining strict data integrity
                                    through Prisma ORM and comprehensive validation pipes.
                                </p>
                            </div>

                            {/* <!-- Key Features --> */}
                            <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-xl">
                                <h2
                                    className="text-2xl font-bold mb-6 text-slate-800 dark:text-white"
                                >
                                    Key Responsibilities
                                </h2>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span
                                            className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                        >
                                            <svg
                                                className="w-4 h-4 text-indigo-600 dark:text-indigo-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                ></path>
                                            </svg>
                                        </span>
                                        <div>
                                            <span className="font-semibold text-slate-800 dark:text-white"
                                            >Dual-Token Authentication</span
                                            >
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                                Engineered a dual-token authentication system using JWT
                                                and Refresh Token rotation to ensure persistent and secure
                                                user sessions.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span
                                            className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                        >
                                            <svg
                                                className="w-4 h-4 text-indigo-600 dark:text-indigo-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                ></path>
                                            </svg>
                                        </span>
                                        <div>
                                            <span className="font-semibold text-slate-800 dark:text-white"
                                            >Account Management Services</span
                                            >
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                                Developed modular Account Management services that enable
                                                users to perform secure CRUD operations on personal
                                                financial records efficiently.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span
                                            className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                        >
                                            <svg
                                                className="w-4 h-4 text-indigo-600 dark:text-indigo-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                ></path>
                                            </svg>
                                        </span>
                                        <div>
                                            <span className="font-semibold text-slate-800 dark:text-white"
                                            >Database Schema Design</span
                                            >
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                                Architected a relational database schema using Prisma ORM
                                                to maintain strict data integrity between User entities
                                                and Accounts.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span
                                            className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                        >
                                            <svg
                                                className="w-4 h-4 text-indigo-600 dark:text-indigo-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                ></path>
                                            </svg>
                                        </span>
                                        <div>
                                            <span className="font-semibold text-slate-800 dark:text-white"
                                            >Data Validation & Error Handling</span
                                            >
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                                Implemented global data validation pipes and exception
                                                filters to standardize API responses and prevent malformed
                                                data from persisting.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* <!-- Technical Highlights --> */}
                            <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-xl">
                                <h2
                                    className="text-2xl font-bold mb-6 text-slate-800 dark:text-white"
                                >
                                    Technical Highlights
                                </h2>
                                <div className="space-y-4">
                                    <div
                                        className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800"
                                    >
                                        <h3
                                            className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2"
                                        >
                                            Refresh Token Rotation
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                                            Implemented automatic refresh token rotation where each new
                                            access token comes with a new refresh token, enhancing
                                            security against token theft.
                                        </p>
                                    </div>
                                    <div
                                        className="p-4 rounded-xl bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800"
                                    >
                                        <h3
                                            className="text-lg font-semibold text-teal-600 dark:text-teal-400 mb-2"
                                        >
                                            Modular Architecture
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                                            Built with Nest.js modular architecture for easy maintenance
                                            and scalability. Each module handles specific domain logic.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Sidebar --> */}
                        <div className="space-y-6">
                            {/* <!-- Project Info Card --> */}
                            <div className="glass-card rounded-2xl p-6 shadow-xl">
                                <h3
                                    className="text-lg font-semibold mb-4 text-slate-800 dark:text-white"
                                >
                                    Project Information
                                </h3>
                                <ul className="space-y-4">
                                    <li>
                                        <span className="text-sm text-slate-500 dark:text-slate-400"
                                        >Role</span
                                        >
                                        <p className="text-slate-800 dark:text-white font-medium">
                                            Backend Developer
                                        </p>
                                    </li>
                                    <li>
                                        <span className="text-sm text-slate-500 dark:text-slate-400"
                                        >Timeline</span
                                        >
                                        <p className="text-slate-800 dark:text-white font-medium">
                                            Nov, 2025 - Jan, 2026
                                        </p>
                                    </li>
                                    <li>
                                        <span className="text-sm text-slate-500 dark:text-slate-400"
                                        >Category</span
                                        >
                                        <p className="text-slate-800 dark:text-white font-medium">
                                            Backend Development
                                        </p>
                                    </li>
                                    <li>
                                        <span className="text-sm text-slate-500 dark:text-slate-400"
                                        >Project Type</span
                                        >
                                        <p className="text-slate-800 dark:text-white font-medium">
                                            RevoU Milestone
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            {/* <!-- Tech Stack --> */}
                            <div className="glass-card rounded-2xl p-6 shadow-xl">
                                <h3
                                    className="text-lg font-semibold mb-4 text-slate-800 dark:text-white"
                                >
                                    Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-lg text-sm"
                                    >Nest.js</span
                                    >
                                    <span
                                        className="badge bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-lg text-sm"
                                    >TypeScript</span
                                    >
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-lg text-sm"
                                    >PostgreSQL</span
                                    >
                                    <span
                                        className="badge bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-lg text-sm"
                                    >Prisma ORM</span
                                    >
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-lg text-sm"
                                    >JWT</span
                                    >
                                    <span
                                        className="badge bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-lg text-sm"
                                    >Railway</span
                                    >
                                </div>
                            </div>

                            {/* <!-- Action Buttons --> */}
                            <div className="glass-card rounded-2xl p-6 shadow-xl">
                                <h3
                                    className="text-lg font-semibold mb-4 text-slate-800 dark:text-white"
                                >
                                    View Project
                                </h3>
                                <div className="space-y-3">
                                    <Link
                                        href="https://milestone-4-perhisi-deploy-production.up.railway.app/"
                                        className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center py-3 px-4 rounded-xl font-semibold transition-all duration-300 btn-primary"
                                    >
                                        Live Demo
                                    </Link>
                                    <Link
                                        href="https://github.com/Revou-FSSE-Jun25/milestone-4-perhisi"
                                        target="_blank"
                                        className="block w-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-white text-center py-3 px-4 rounded-xl font-semibold transition-all duration-300"
                                    >
                                        Source Code
                                    </Link>
                                </div>
                            </div>

                            {/* <!-- Other Projects --> */}
                            <div className="glass-card rounded-2xl p-6 shadow-xl">
                                <h3
                                    className="text-lg font-semibold mb-4 text-slate-800 dark:text-white"
                                >
                                    Other Projects
                                </h3>
                                <div className="space-y-3">
                                    <Link
                                        href="/project2"
                                        className="block p-3 rounded-xl bg-slate-100 dark:bg-slate-700/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors duration-300"
                                    >
                                        <span
                                            className="text-slate-800 dark:text-white font-medium text-sm"
                                        >C.R.A.C.K Backend</span
                                        >
                                        <span
                                            className="block text-xs text-slate-500 dark:text-slate-400 mt-1"
                                        >Nest.js, PostgreSQL</span
                                        >
                                    </Link>
                                    <Link
                                        href="/project3"
                                        className="block p-3 rounded-xl bg-slate-100 dark:bg-slate-700/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors duration-300"
                                    >
                                        <span
                                            className="text-slate-800 dark:text-white font-medium text-sm"
                                        >C.R.A.C.K Frontend</span
                                        >
                                        <span
                                            className="block text-xs text-slate-500 dark:text-slate-400 mt-1"
                                        >Next.js, Tailwind CSS</span
                                        >
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="image-modal" className="fixed inset-0 z-50 hidden items-center justify-center bg-black/80 p-4">
                        <button id="modal-close" className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-300"> <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg></button>
                        <button id="modal-prev" className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-300">
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
                                    d="M15 19l-7-7 7-7"
                                ></path>
                            </svg>
                        </button>
                        <div className="max-w-4xl w-full">
                            <img id="modal-img" src="./icons/project-4/Screenshot 2026-01-28 032931.png" alt="Preview" className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-2xl" />
                        </div>
                        <button id="modal-next" className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-300">
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
                                    d="M9 5l7 7-7 7"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}