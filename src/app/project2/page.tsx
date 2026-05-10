import Footer from "../components/footer";
import HeaderProject from "../components/header-project";
import ImageGallery from "../components/image-galery";
import { images } from "../components/image-data";
import Link from "next/link";

export default function Project2() {

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
                            C.R.A.C.K Project Backend
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
                            >Passport-JWT</span
                            >
                            <span
                                className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium"
                            >Bcrypt</span
                            >
                        </div>
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                            Backend development for C.R.A.C.K educational platform with secure
                            authentication, role-based access control, and robust database
                            architecture.
                        </p>
                    </div>

                    {/* <!-- Project Image Gallery --> */}
                    <div className="max-w-5xl mx-auto mb-12">
                        <div
                            className="glass-card rounded-2xl overflow-hidden shadow-2xl p-8 bg-gradient-to-br from-purple-500 via-indigo-500 to-teal-500 group"
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
                                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                                    ></path>
                                </svg>
                                <h2 className="text-2xl font-bold">C.R.A.C.K Project</h2>
                                <p className="opacity-80">Backend Architecture</p>
                            </div>
                        </div>
                        <div className="flex gap-3 overflow-x-auto pb-2 mt-4">
                            <ImageGallery images={images.slice(4, 8)} />
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
                                    C.R.A.C.K is a comprehensive educational platform built with
                                    Nest.js backend, featuring secure authentication systems,
                                    role-based access control, and efficient data management using
                                    Prisma ORM with PostgreSQL.
                                </p>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    This backend system handles user authentication, course
                                    management, and administrative operations with a focus on
                                    security, scalability, and maintainability.
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
                                            >Secure Authentication System</span
                                            >
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                                Engineered a secure authentication system using
                                                Passport-JWT and Bcrypt to protect sensitive user data and
                                                manage session persistence.
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
                                            >Role-Based Access Control (RBAC)</span
                                            >
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                                Developed a role-based access control framework with
                                                custom guards to strictly differentiate administrative
                                                privileges from student access levels.
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
                                            >Relational Database Schema</span
                                            >
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                                Architected a relational database schema using Prisma ORM
                                                and PostgreSQL to efficiently manage many-to-many
                                                relationships between users and courses.
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
                                            >Data Validation Pipes</span
                                            >
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                                Created automated data validation and transformation pipes
                                                globally to ensure API reliability and maintain consistent
                                                data integrity across all endpoints.
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
                                            Security First
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                                            Implemented JWT tokens with refresh token rotation for
                                            persistent and secure sessions. All passwords hashed with
                                            Bcrypt for maximum security.
                                        </p>
                                    </div>
                                    <div
                                        className="p-4 rounded-xl bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800"
                                    >
                                        <h3
                                            className="text-lg font-semibold text-teal-600 dark:text-teal-400 mb-2"
                                        >
                                            Scalable Architecture
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                                            Built with Nest.js modular architecture allowing easy
                                            scaling and maintenance. Used dependency injection for loose
                                            coupling.
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
                                    >Passport-JWT</span
                                    >
                                    <span
                                        className="badge bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-lg text-sm"
                                    >Bcrypt</span
                                    >
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-lg text-sm"
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
                                    <button
                                        // onclick="openImageModal(0)"
                                        className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center py-3 px-4 rounded-xl font-semibold transition-all duration-300 btn-primary"
                                    >
                                        Live Demo
                                    </button>
                                    <Link
                                        href="https://github.com/Revou-FSSE-Jun25/crack-be-perhisi"
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
        </div >
    );
}