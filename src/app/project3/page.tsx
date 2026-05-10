import HeaderProject from "../components/header-project";
import ImageGallery from "../components/image-galery";
import { images } from "../components/image-data";
import Footer from "../components/footer";
import Link from "next/link";

export default function Project3() {

    return (
        <div className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 font-mono bg-slate-50 dark:bg-slate-900 dark:text-white selection:bg-indigo-500 selection:text-white">
            <HeaderProject />
            {/* <!-- Project Detail Section --> */}
            <section className="min-h-screen pt-24 pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* <!-- Back Button --> */}
                    <Link
                        href="/#projects"
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
                    </Link>
                    {/* <!-- Project Header --> */}
                    <div className="max-w-4xl mx-auto mb-12">
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-800 dark:text-white"
                        >
                            C.R.A.C.K Project Frontend
                        </h1>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span
                                className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium"
                            >Next.js</span
                            >
                            <span
                                className="badge bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-4 py-2 rounded-full text-sm font-medium"
                            >Tailwind CSS</span
                            >
                            <span
                                className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium"
                            >Axios</span
                            >
                            <span
                                className="badge bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-4 py-2 rounded-full text-sm font-medium"
                            >TypeScript</span
                            >
                        </div>
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                            Frontend development for C.R.A.C.K educational platform featuring
                            role-based access control, dynamic course management, and responsive
                            user interfaces.
                        </p>
                    </div>

                    {/* <!-- Project Image Gallery --> */}
                    <div className="max-w-5xl mx-auto mb-12">
                        <div
                            className="glass-card rounded-2xl overflow-hidden shadow-2xl p-8 bg-gradient-to-br from-teal-500 via-indigo-500 to-purple-500 cursor-pointer group"
                        // onclick="openImageModal(0)"
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
                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    ></path>
                                </svg>
                                <h2 className="text-2xl font-bold">C.R.A.C.K Project</h2>
                                <p className="opacity-80">Frontend Interface</p>
                            </div>
                        </div>
                        <div className="flex gap-3 overflow-x-auto pb-2 mt-4">
                            <ImageGallery images={images.slice(8, 12)} />
                        </div>
                    </div>


                    {/* <!-- Project Content Grid --> */}
                    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* <!-- Main Content --> */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Overview */}
                            <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-xl">
                                <h2
                                    className="text-2xl font-bold mb-4 text-slate-800 dark:text-white"
                                >
                                    Project Overview
                                </h2>
                                <p
                                    className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4"
                                >
                                    The C.R.A.C.K Project Frontend is a modern web application built
                                    with Next.js that provides an intuitive interface for students
                                    and administrators to manage educational content, courses, and
                                    assignments.
                                </p>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    The frontend seamlessly communicates with the backend API to
                                    provide real-time data fetching for student progress tracking,
                                    analytics dashboard, and comprehensive course management
                                    features.
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
                                            >Role-Based Access Control</span
                                            >
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                                Engineered a role-based access control system using
                                                Next.js middleware to secure sensitive admin and student
                                                dashboard environments.
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
                                            >Course & Assignment Management</span
                                            >
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                                Developed dynamic course and assignment management
                                                modules, enabling administrators to perform CRUD
                                                operations on educational content.
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
                                            >API Integration with Axios</span
                                            >
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                                Integrated Axios for seamless communication with a backend
                                                API, facilitating real-time data fetching for student
                                                progress and analytics.
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
                                            >Performance Optimization</span
                                            >
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                                Optimized application performance and responsiveness by
                                                utilizing Tailwind CSS and Next.js, ensuring cross-device
                                                accessibility and enhancing user experience.
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
                                            Next.js Middleware Security
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                                            Implemented Next.js middleware to handle authentication
                                            checks and role verification before allowing access to
                                            protected routes.
                                        </p>
                                    </div>
                                    <div
                                        className="p-4 rounded-xl bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800"
                                    >
                                        <h3
                                            className="text-lg font-semibold text-teal-600 dark:text-teal-400 mb-2"
                                        >
                                            Responsive Design
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                                            Built with Tailwind CSS to ensure pixel-perfect responsive
                                            layouts that work seamlessly across all device sizes.
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
                                            Frontend Developer
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
                                            Frontend Development
                                        </p>
                                    </li>
                                    <li>
                                        <span className="text-sm text-slate-500 dark:text-slate-400"
                                        >Team Size</span
                                        >
                                        <p className="text-slate-800 dark:text-white font-medium">
                                            Individual Project
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
                                    >Next.js</span
                                    >
                                    <span
                                        className="badge bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-lg text-sm"
                                    >TypeScript</span
                                    >
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-lg text-sm"
                                    >Tailwind CSS</span
                                    >
                                    <span
                                        className="badge bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-lg text-sm"
                                    >Axios</span
                                    >
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-lg text-sm"
                                    >React</span
                                    >
                                    <span
                                        className="badge bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-lg text-sm"
                                    >Vercel</span
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
                                        href="#"
                                        className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center py-3 px-4 rounded-xl font-semibold transition-all duration-300 btn-primary"
                                    >
                                        Live Demo
                                    </Link>
                                    <Link
                                        href="https://github.com/Revou-FSSE-Jun25/crack-fe-perhisi"
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
                                        href="/project4"
                                        className="block p-3 rounded-xl bg-slate-100 dark:bg-slate-700/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors duration-300"
                                    >
                                        <span
                                            className="text-slate-800 dark:text-white font-medium text-sm"
                                        >Milestone 4 Backend</span
                                        >
                                        <span
                                            className="block text-xs text-slate-500 dark:text-slate-400 mt-1"
                                        >Nest.js, JWT</span
                                        >
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}