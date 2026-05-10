import Link from "next/link";
import Image from "next/image";

export default function Project() {
    return (
        <div>
            {/* <!-- Projects Section --> */}
            <section id="projects" className="py-16 sm:py-20 lg:py-24 section-hover" >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* <!-- Section Title --> */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            <span className="text-slate-800 dark:text-white">My </span>
                            <span className="gradient-text">Projects</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-6">
                            A showcase of my recent work and personal projects
                        </p>
                        <div
                            className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-teal-500 mx-auto rounded-full"
                        ></div>
                    </div>

                    {/* <!-- Projects Grid --> */}
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
                    >
                        {/* <!-- Project 1 --> */}
                        <div
                            className="project-card bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden flex flex-col group"
                        >
                            <div className="relative overflow-hidden">
                                <Image src="/icons/project-1/Screenshot 2026-03-15 111721.png" alt="Portfolio Website Screenshot" width={600} height={192} className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                ></div>
                            </div>
                            <div className="p-5 sm:p-6 flex flex-col flex-1">
                                <h3
                                    className="text-lg sm:text-xl font-semibold mb-3 text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300"
                                >
                                    Portfolio Website
                                </h3>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-lg"
                                    >HTML</span
                                    >
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-lg"
                                    >CSS</span
                                    >
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-lg"
                                    >JavaScript</span
                                    >
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-1">
                                    A personal website to showcase my work and skills with modern
                                    design.<br /><span
                                        className="italic text-indigo-600 dark:text-indigo-400"
                                    >Role: Frontend Developer</span
                                    >
                                </p>
                                <div className="flex gap-3 mt-auto">
                                    <Link
                                        href="./project1"
                                        className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-center py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 btn-primary"
                                    >View Details</Link
                                    >
                                    <Link
                                        href="https://github.com/perhisi/tailwind"
                                        target="_blank"
                                        className="flex-1 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-white text-center py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300"
                                    >Source Code</Link
                                    >
                                </div>
                            </div>
                        </div>

                        {/* <!-- Project 2 --> */}
                        <div
                            className="project-card bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden flex flex-col group"
                        >
                            <div className="relative overflow-hidden">
                                <Image src="/icons/project-2/Screenshot 2026-01-28 032931.png" alt="C.R.A.C.K Project Backend" width={600} height={192} className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                ></div>
                            </div>
                            <div className="p-5 sm:p-6 flex flex-col flex-1">
                                <h3
                                    className="text-lg sm:text-xl font-semibold mb-3 text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300"
                                >
                                    C.R.A.C.K Project Backend
                                </h3>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-lg"
                                    >Nest.js</span
                                    >
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-lg"
                                    >PostgreSQL</span
                                    >
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-lg"
                                    >PrismaORM</span
                                    >
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-lg"
                                    >Passport-JWT</span
                                    >
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-lg"
                                    >Bcrypt</span
                                    >
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-lg"
                                    >Railway</span
                                    >
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-1">
                                    Backend development for C.R.A.C.K educational platform with
                                    secure authentication, role-based access control, and robust
                                    database architecture.<br /><span
                                        className="italic text-indigo-600 dark:text-indigo-400"
                                    >Role: Backend Developer</span
                                    >
                                </p>
                                <div className="flex gap-3 mt-auto">
                                    <Link
                                        href="./project2"
                                        className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-center py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 btn-primary"
                                    >View Details</Link
                                    >
                                    <Link
                                        href="https://github.com/Revou-FSSE-Jun25/crack-be-perhisi"
                                        target="_blank"
                                        className="flex-1 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-white text-center py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300"
                                    >Source Code</Link
                                    >
                                </div>
                            </div>
                        </div>

                        {/* <!-- Project 3 --> */}
                        <div
                            className="project-card bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden flex flex-col group"
                        >
                            <div className="relative overflow-hidden">
                                <Image src="/icons/project-3/Screenshot 2026-01-28 032122.png" alt="C.R.A.C.K Project Frontend" width={600} height={192} className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                ></div>
                            </div>
                            <div className="p-5 sm:p-6 flex flex-col flex-1">
                                <h3
                                    className="text-lg sm:text-xl font-semibold mb-3 text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300"
                                >
                                    C.R.A.C.K Project Frontend
                                </h3>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-lg"
                                    >Next.js</span
                                    >
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-lg"
                                    >Tailwind CSS</span
                                    >
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-lg"
                                    >Axios</span
                                    >
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-lg"
                                    >TypeScript</span
                                    >
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-1">
                                    Frontend development for C.R.A.C.K educational platform
                                    featuring role-based access control, dynamic course management,
                                    and responsive user interfaces.<br /><span
                                        className="italic text-indigo-600 dark:text-indigo-400"
                                    >Role: Frontend Developer</span
                                    >
                                </p>
                                <div className="flex gap-3 mt-auto">
                                    <Link
                                        href="./project3"
                                        className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-center py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 btn-primary"
                                    >View Details</Link
                                    >
                                    <Link
                                        href="https://github.com/Revou-FSSE-Jun25/crack-fe-perhisi"
                                        target="_blank"
                                        className="flex-1 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-white text-center py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300"
                                    >Source Code</Link
                                    >
                                </div>
                            </div>
                        </div>

                        {/* <!-- Project 4 --> */}
                        <div
                            className="project-card bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden flex flex-col group"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src="icons/project-4/Screenshot 2026-03-15 105918.png"
                                    alt="Milestone 4 Backend"
                                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                ></div>
                            </div>
                            <div className="p-5 sm:p-6 flex flex-col flex-1">
                                <h3
                                    className="text-lg sm:text-xl font-semibold mb-3 text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300"
                                >
                                    Milestone 4 Backend
                                </h3>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-lg"
                                    >Nest.js</span
                                    >
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-lg"
                                    >TypeScript</span
                                    >
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-lg"
                                    >PostgreSQL</span
                                    >
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-lg"
                                    >PrismaORM</span
                                    >
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-lg"
                                    >JWT</span
                                    >
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-lg"
                                    >Railway</span
                                    >
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-1">
                                    Backend API for financial account management with dual-token
                                    authentication, secure CRUD operations, and robust data validation.<br /><span
                                        className="italic text-indigo-600 dark:text-indigo-400"
                                    >Role: Backend Developer</span
                                    >
                                </p>
                                <div className="flex gap-3 mt-auto">
                                    <a
                                        href="./project4"
                                        className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-center py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 btn-primary"
                                    >View Details</a
                                    >
                                    <a
                                        href="https://github.com/Revou-FSSE-Jun25/milestone-4-perhisi"
                                        target="_blank"
                                        className="flex-1 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-white text-center py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300"
                                    >Source Code</a
                                    >
                                </div>
                            </div>
                        </div>

                        {/* <!-- Project 5 --> */}
                        <div
                            className="project-card bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden flex flex-col group"
                        >
                            <div className="relative overflow-hidden">
                                <Image src="/icons/project-5/Screenshot 2026-05-10 110202.png" alt="WeRent Backend System" width={600} height={192} className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                ></div>
                            </div>
                            <div className="p-5 sm:p-6 flex flex-col flex-1">
                                <h3
                                    className="text-lg sm:text-xl font-semibold mb-3 text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300"
                                >
                                    WeRent Backend System
                                </h3>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-lg"
                                    >Nest.js</span
                                    >
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-lg"
                                    >PostgreSQL</span
                                    >
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-lg"
                                    >Prisma</span
                                    >
                                    <span
                                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-lg"
                                    >JWT</span
                                    >
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-1">
                                    Scalable rental platform backend with RESTful APIs, role-based 
                                    access control, and comprehensive booking & payment logic.<br /><span
                                        className="italic text-indigo-600 dark:text-indigo-400"
                                    >Role: Backend Engineer</span
                                    >
                                </p>
                                <div className="flex gap-3 mt-auto">
                                    <Link
                                        href="./project5"
                                        className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-center py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 btn-primary"
                                    >View Details</Link
                                    >
                                    <Link
                                        href="https://github.com/vincentsim01/werent-frontend-1"
                                        target="_blank"
                                        className="flex-1 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-white text-center py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300"
                                    >Source Code</Link
                                    >
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}