import Footer from "../components/footer";
import HeaderProject from "../components/header-project";
import ImageGallery from "../components/image-galery";
import { images } from "../components/image-data";
import Link from "next/link";


export default function Project6() {
    
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
                            Mamabear E-Commerce Backend
                        </h1>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span
                                className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium"
                            >NestJS</span
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
                            >pgvector</span
                            >
                            <span
                                className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium"
                            >JWT Auth</span
                            >
                            <span
                                className="badge bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-4 py-2 rounded-full text-sm font-medium"
                            >Cloudinary</span
                            >
                            <span
                                className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium"
                            >Docker</span
                            >
                        </div>
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                            Production-grade e-commerce backend for Mamabear, a specialized platform 
                            for dietary products and supplements targeting breastfeeding mothers. Built 
                            with enterprise-level architecture, comprehensive security, and scalable infrastructure.
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
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    ></path>
                                </svg>
                                <h2 className="text-2xl font-bold">Mamabear Backend</h2>
                                <p className="opacity-80">Enterprise E-Commerce Infrastructure</p>
                            </div>
                        </div>
                        <div className="flex gap-3 overflow-x-auto pb-2 mt-4">
                            <ImageGallery images={images.slice(20, 24)} />
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
                                    Mamabear is a specialized e-commerce platform serving the unique needs of breastfeeding mothers. The backend service handles high-traffic inventory management, structured catalog systems, localized logistics coordination, and comprehensive administrative reporting mechanisms. This production-grade infrastructure replaces legacy systems with a robust, secure, and scalable architecture built on NestJS and PostgreSQL.
                                </p>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    The system supports dynamic multi-variant inventory controls, transaction records with payment gateway integration, sophisticated shipping estimations based on location data, and real-time analytics dashboards. It features an enterprise-grade relational database schema with over 30 sequential migrations, vectorized semantic similarity for product recommendations, automated load testing validations, and comprehensive API endpoint configurations.
                                </p>
                            </div>

                            {/* Key Achievements */}
                            <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-xl">
                                <h2
                                    className="text-2xl font-bold mb-6 text-slate-800 dark:text-white"
                                >
                                    Key Achievements
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
                                            >30+ Database Migrations</span
                                            >
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                                Engineered an enterprise-grade relational database schema with over 30 sequential code-driven migration modules maximizing structural data integrity and supporting complex product relationships.
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
                                            >Vectorized Embeddings for Recommendations</span
                                            >
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                                Integrated geometric embedding service executing similarity computations on text inputs to serve context-aware related-product recommendations using pgvector technology.
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
                                            >Load Testing & Performance Validation</span
                                            >
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                                Configured explicit load-testing automation using k6 with targeted concurrent virtual users validating sub-500ms API response latency thresholds under production load.
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
                                            >Automated CSV Export Utilities</span
                                            >
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                                Formulated automated data processing utilities utilizing stream-based formatting to safely export system dashboard metrics into portable comma-separated spreadsheets.
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
                                            Multi-Tenant Architecture
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                                            Structured modular NestJS architecture with feature modules for Auth, Products, Cart, Orders, Inventory, Payments, and Analytics. JWT-based authentication with role-based access control (RBAC) guards protecting sensitive endpoints.
                                        </p>
                                    </div>
                                    <div
                                        className="p-4 rounded-xl bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800"
                                    >
                                        <h3
                                            className="text-lg font-semibold text-teal-600 dark:text-teal-400 mb-2"
                                        >
                                            Third-Party Integrations
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                                            Bound transactional merchant integrations with Midtrans payment gateway, location-based shipping cost calculations, and Cloudinary cloud-based media file uploading. Nodemailer for transactional email workflows.
                                        </p>
                                    </div>
                                    <div
                                        className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800"
                                    >
                                        <h3
                                            className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2"
                                        >
                                            Advanced Database Design
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                                            Prisma ORM for declarative data modeling, pgvector for semantic similarity computations, and database seeding for consistent testing environments. Complex relational schemas handling products, variants, inventory, orders, and shipments.
                                        </p>
                                    </div>
                                    <div
                                        className="p-4 rounded-xl bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800"
                                    >
                                        <h3
                                            className="text-lg font-semibold text-teal-600 dark:text-teal-400 mb-2"
                                        >
                                            CI/CD & DevOps
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                                            Docker containerization, GitHub Actions automated pipelines, Railway deployment infrastructure, and comprehensive test coverage with Jest and Supertest for smoke testing.
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
                                        >Category</span
                                        >
                                        <p className="text-slate-800 dark:text-white font-medium">
                                            E-Commerce Backend
                                        </p>
                                    </li>
                                    <li>
                                        <span className="text-sm text-slate-500 dark:text-slate-400"
                                        >Scale</span
                                        >
                                        <p className="text-slate-800 dark:text-white font-medium">
                                            High-Traffic Production
                                        </p>
                                    </li>
                                    <li>
                                        <span className="text-sm text-slate-500 dark:text-slate-400"
                                        >Environment</span
                                        >
                                        <p className="text-slate-800 dark:text-white font-medium">
                                            Docker + Railway
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
                                    >NestJS</span
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
                                    >Prisma</span
                                    >
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-lg text-sm"
                                    >pgvector</span
                                    >
                                    <span
                                        className="badge bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-lg text-sm"
                                    >JWT</span
                                    >
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-lg text-sm"
                                    >Cloudinary</span
                                    >
                                    <span
                                        className="badge bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-lg text-sm"
                                    >Midtrans</span
                                    >
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-lg text-sm"
                                    >Docker</span
                                    >
                                    <span
                                        className="badge bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-lg text-sm"
                                    >Railway</span
                                    >
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-lg text-sm"
                                    >Jest</span
                                    >
                                    <span
                                        className="badge bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-lg text-sm"
                                    >k6</span
                                    >
                                </div>
                            </div>

                            {/* Links */}
                            <div className="glass-card rounded-2xl p-6 shadow-xl">
                                <h3
                                    className="text-lg font-semibold mb-4 text-slate-800 dark:text-white"
                                >
                                    Links
                                </h3>
                                <div className="flex flex-col gap-3">
                                    <Link
                                        href="https://mamabearmart.vercel.app/"
                                        target="_blank"
                                        className="w-full bg-slate-800 hover:bg-slate-700 text-white py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 text-center"
                                    >
                                        Live Demo
                                    </Link
                                    >
                                    <Link
                                        href="https://github.com/regencode/mamabear-backend"
                                        target="_blank"
                                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 text-center"
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
                                    <Link
                                        href="/project5"
                                        className="block p-3 rounded-xl bg-slate-100 dark:bg-slate-700/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors duration-300"
                                    >
                                        <span
                                            className="text-slate-800 dark:text-white font-medium text-sm"
                                        >WeRent Backend System </span
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
                </div>
            </section>

            <Footer />
        </div>
    );
}
