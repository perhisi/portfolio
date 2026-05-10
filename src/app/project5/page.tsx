import Footer from "../components/footer";
import HeaderProject from "../components/header-project";
import ImageGallery from "../components/image-galery";
import { images } from "../components/image-data";
import Link from "next/link";


export default function Project5() {
    
    return (
        <div className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 font-mono bg-slate-50 dark:bg-slate-900 dark:text-white selection:bg-indigo-500 selection:text-white">
            <HeaderProject />

            {/* <!-- Project Detail Section --> */}
            <section className="min-h-screen pt-24 pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
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

                    {/* Project Header */}
                    <div className="max-w-4xl mx-auto mb-12">
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-800 dark:text-white"
                        >
                            WeRent Backend System
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
                            >Bcrypt</span
                            >
                        </div>
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                            Scalable rental platform backend with comprehensive RESTful APIs, 
                            role-based access control, and robust business logic for property 
                            and booking management.
                        </p>
                    </div>

                    {/* Project Image Gallery */}
                    <div className="max-w-5xl mx-auto mb-12">
                        {/* Main Image */}
                        <div
                            className="glass-card rounded-2xl overflow-hidden shadow-2xl mb-4 group"
                        >
                            <div className="text-center text-teal-700 dark:text-teal-300 p-16 bg-gradient-to-br from-indigo-500 via-purple-500 to-teal-500">
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
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    ></path>
                                </svg>
                                <h2 className="text-2xl font-bold">WeRent Platform</h2>
                                <p className="opacity-80">Backend Architecture & API Design</p>
                            </div>
                        </div>
                        <div className="flex gap-3 overflow-x-auto pb-2 mt-4">
                            <ImageGallery images={images.slice(16, 20)} />
                        </div>
                    </div>

                    {/* Project Content Grid */}
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
                                    WeRent is a comprehensive rental platform backend built with 
                                    Nest.js, designed to handle property listings, user management, 
                                    bookings, and payment processing. The system implements secure 
                                    authentication, role-based access control, and a scalable 
                                    architecture suitable for high-traffic scenarios.
                                </p>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    The platform serves two primary user roles: Renters who browse 
                                    and book properties, and Owners who list and manage their 
                                    properties. The backend enforces business rules for bookings, 
                                    handles payment integrations, and provides comprehensive API 
                                    documentation for frontend integration.
                                </p>
                            </div>

                            {/* Key Responsibilities */}
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
                                            >RESTful API Development</span
                                            >
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                                Designed and implemented comprehensive REST APIs for 
                                                users, properties, bookings, and payments with proper 
                                                HTTP standards and status codes.
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
                                                Implemented granular permissions for Renters, Owners, 
                                                and Admins using Nest.js guards and decorators to 
                                                protect endpoints and resources.
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
                                            >Relational Database Design</span
                                            >
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                                Architected a normalized PostgreSQL schema with Prisma 
                                                ORM, handling complex relationships between users, 
                                                properties, bookings, and reviews.
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
                                            >Business Logic Implementation</span
                                            >
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                                Developed core rental logic including availability 
                                                checking, double-booking prevention, booking lifecycle 
                                                management, and payment status tracking.
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
                                            >Data Validation & Sanitization</span
                                            >
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                                Created validation pipes and DTOs for all input data, 
                                                ensuring data integrity and security across all endpoints.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Technical Highlights */}
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
                                            Modular Nest.js Architecture
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                                            Organized code into feature modules (Auth, Users, 
                                            Properties, Bookings, Payments) with dedicated controllers, 
                                            services, and repositories for separation of concerns.
                                        </p>
                                    </div>
                                    <div
                                        className="p-4 rounded-xl bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800"
                                    >
                                        <h3
                                            className="text-lg font-semibold text-teal-600 dark:text-teal-400 mb-2"
                                        >
                                            Transactional Booking System
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                                            Ensured atomic booking operations using database 
                                            transactions to prevent race conditions and double bookings 
                                            during concurrent requests.
                                        </p>
                                    </div>
                                    <div
                                        className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800"
                                    >
                                        <h3
                                            className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2"
                                        >
                                            Secure JWT Authentication
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                                            Implemented JWT-based authentication with refresh token 
                                            rotation, password encryption using Bcrypt, and protected 
                                            routes with custom guards.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Project Info Card */}
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
                                            Backend Engineer
                                        </p>
                                    </li>
                                    <li>
                                        <span className="text-sm text-slate-500 dark:text-slate-400"
                                        >Timeline</span
                                        >
                                        <p className="text-slate-800 dark:text-white font-medium">
                                            Mar, 2026 - Apr, 2026
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
                                            Cross-functional Team
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            {/* Tech Stack */}
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
                                    >Bcrypt</span
                                    >
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-lg text-sm"
                                    >Docker</span
                                    >
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="glass-card rounded-2xl p-6 shadow-xl">
                                <h3
                                    className="text-lg font-semibold mb-4 text-slate-800 dark:text-white"
                                >
                                    View Project
                                </h3>
                                <div className="space-y-3">
                                    <Link href="https://werent-frontend-1.vercel.app/"
                                        className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center py-3 px-4 rounded-xl font-semibold transition-all duration-300 btn-primary"
                                    >
                                        Live Demo
                                    </Link>
                                    <Link
                                        href="https://github.com/vincentsim01/werent-frontend-1"
                                        target="_blank"
                                        className="block w-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-white text-center py-3 px-4 rounded-xl font-semibold transition-all duration-300"
                                    >
                                        Source Code
                                    </Link>
                                </div>
                            </div>

                            {/* Other Projects */}
                            <div className="glass-card rounded-2xl p-6 shadow-xl">
                                <h3
                                    className="text-lg font-semibold mb-4 text-slate-800 dark:text-white"
                                >
                                    Other Projects
                                </h3>
                                <div className="space-y-3">
                                    <Link
                                        href="/project1"
                                        className="block p-3 rounded-xl bg-slate-100 dark:bg-slate-700/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors duration-300"
                                    >
                                        <span
                                            className="text-slate-800 dark:text-white font-medium text-sm"
                                        >Portfolio Website</span
                                        >
                                        <span
                                            className="block text-xs text-slate-500 dark:text-slate-400 mt-1"
                                        >HTML, CSS, JavaScript</span
                                        >
                                    </Link>
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

            {/* <!-- Footer --> */}
            <Footer />
        </div >
    );
}
