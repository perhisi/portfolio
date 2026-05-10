"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from 'react';
import Header from "./components/header";
import Project from "./components/project";


export default function Home() {
  return (
    <div
      className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 font-mono bg-slate-50 dark:bg-slate-900 dark:text-white selection:bg-indigo-500 selection:text-white"
    >
      {/* <!-- Header Section --> */}
      <Header />

      {/* <!-- Home Section --> */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* <!-- Profile Image with Glow --> */}
            <div className="relative inline-block mb-8">
              <div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 rounded-full blur-xl opacity-50 animate-pulse"
              ></div>
              <Image
                src="/profile.png"
                alt="Perhisi Ardhian Profile&apos;s"
                width={128}
                height={128}
                className="relative object-cover rounded-full border-4 border-indigo-500 shadow-2xl animate-float"
              />
            </div>

            {/* <!-- Title --> */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up"
            >
              <span className="text-slate-800 dark:text-white">Hi, I&apos;m </span>
              <span className="gradient-text">Perhisi Ardhian</span>
            </h1>

            {/* <!-- Subtitle --> */}
            <p
              className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6 animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              Full-Stack Developer
            </p>

            {/* <!-- Description --> */}
            <p
              className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Passionate about building modern, responsive, and user-friendly web
              applications. Always learning and exploring new technologies to
              create impactful digital experiences.
            </p>

            {/* <!-- Buttons --> */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              <Link
                href="#projects"
                className="btn-primary bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-indigo-500/30"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="btn-primary bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-indigo-600 dark:text-indigo-400 px-8 py-3 rounded-xl font-semibold shadow-lg border border-indigo-200 dark:border-indigo-800"
              >
                Contact Me
              </Link>
            </div>

            {/* <!-- Social Links (Mobile) --> */}
            <div
              className="flex justify-center gap-4 mt-8 sm:hidden animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              <Link
                href="https://github.com/perhisi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="My GitHub Profile"
                className="p-3 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors duration-300"
              >
                <Image src="/github.svg" alt="GitHub" width={24} height={24} className="" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/perhisi-ardhian-dec89/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="My LinkedIn Profile"
                className="p-3 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors duration-300"
              >
                <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} className="" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- About Section --> */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 section-hover">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* <!-- Section Title --> */}
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-slate-800 dark:text-white">About </span>
                <span className="gradient-text">Me</span>
              </h2>
              <div
                className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-teal-500 mx-auto rounded-full"
              ></div>
            </div>

            {/* <!-- About Card --> */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
              <article
                className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-justify"
              >
                <p className="text-base sm:text-lg">
                  I am a software engineer who anchors every project in honesty
                  and collaborative problem solving to deliver reliable
                  applications. Through a
                  <span className="text-indigo-600 dark:text-indigo-400 font-medium"
                  >RevoU project</span
                  >, I integrated
                  <span className="text-indigo-600 dark:text-indigo-400 font-medium"
                  >Next.js</span
                  >
                  on the frontend with
                  <span className="text-indigo-600 dark:text-indigo-400 font-medium"
                  >Nest.js</span
                  >
                  on the backend to deliver a responsive web app while sharing
                  debugging lessons with teammates. My work with
                  <span className="text-teal-600 dark:text-teal-400 font-medium"
                  >JavaScript, TypeScript, and Tailwind CSS</span
                  >
                  , combined with my ability to read code paths and resolve bugs,
                  helps me stabilize applications quickly. I follow best practices
                  and stay adaptable by learning new tools so I can keep improving
                  performance and guide teammates toward maintainable code. I am
                  eager to join a software engineering team where I can keep
                  learning, welcome feedback, and help deliver high-quality
                  features for users.
                </p>
                <p className="text-base sm:text-lg">
                  I believe in continuous learning and staying current with the
                  latest web technologies and best practices. Every project is an
                  opportunity to grow, experiment, and refine my skills.
                </p>
                <p className="text-base sm:text-lg">
                  In my portfolio, you&apos;ll find a collection of
                  <span className="text-indigo-600 dark:text-indigo-400 font-medium"
                  >projects that showcase my skills</span
                  >
                  and creativity. Each project reflects my commitment to quality,
                  attention to detail, and passion for clean code.
                </p>
                <p className="text-base sm:text-lg">
                  Thank you for visiting my portfolio. I hope you find my work
                  inspiring and informative. If you have any questions or would
                  like to collaborate on a project, please feel free to reach out.
                  I&apos;m always excited to connect with like-minded individuals and
                  explore new opportunities!
                </p>
              </article>

              {/* <!-- Skills Tags --> */}
              <div
                className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700"
              >
                <h3
                  className="text-lg font-semibold mb-4 text-slate-800 dark:text-white"
                >
                  Technical Skills
                </h3>
                <ul>
                  <li
                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-2"
                  >
                    <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium"
                    >Programming languages:</span
                    >
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="badge bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-4 py-2 rounded-full text-sm font-medium"
                      >JavaScript</span
                      >
                      <span
                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium"
                      >TypeScript</span
                      >
                    </div>
                  </li>
                  <li
                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-2"
                  >
                    <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium"
                    >Frontend Framework:</span
                    >
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium"
                      >Next.js</span
                      >
                      <span
                        className="badge bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-4 py-2 rounded-full text-sm font-medium"
                      >Tailwind CSS</span
                      >
                    </div>
                  </li>
                  <li
                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-2"
                  >
                    <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium"
                    >Backend Framework:</span
                    >
                    <span
                      className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium"
                    >Nest.js</span
                    >
                  </li>
                  <li
                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-2"
                  >
                    <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium"
                    >Database Management:</span
                    >
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium"
                      >PostgreSQL</span
                      >
                      <span
                        className="badge bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-4 py-2 rounded-full text-sm font-medium"
                      >PrismaORM</span
                      >
                    </div>
                  </li>
                  <li
                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-2"
                  >
                    <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium"
                    >Cloud Servers / Infrastructure:</span
                    >
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium"
                      >Vercel</span
                      >
                      <span
                        className="badge bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-4 py-2 rounded-full text-sm font-medium"
                      >Netlify</span
                      >
                      <span
                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium"
                      >Railway</span
                      >
                      <span
                        className="badge bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-4 py-2 rounded-full text-sm font-medium"
                      >Supabase</span
                      >
                    </div>
                  </li>
                  <li
                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-2"
                  >
                    <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium"
                    >Version Control System:</span
                    >
                    <span
                      className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium"
                    >Git</span
                    >
                  </li>
                  <li
                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-2"
                  >
                    <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium"
                    >Software Development Tools:</span
                    >
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium"
                      >Visual Studio Code</span
                      >
                      <span
                        className="badge bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-4 py-2 rounded-full text-sm font-medium"
                      >Postman</span
                      >
                    </div>
                  </li>
                </ul>
                <h3
                  className="text-lg font-semibold mb-4 text-slate-800 dark:text-white"
                >
                  Soft Skills
                </h3>

                <div className="flex flex-wrap gap-3">
                  <span
                    className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium"
                  >Problem Solving</span
                  >
                  <span
                    className="badge bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-4 py-2 rounded-full text-sm font-medium"
                  >Adaptability and Learning new technologies</span
                  >
                  <span
                    className="badge bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium"
                  >Teamwork</span
                  >
                  <span
                    className="badge bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-4 py-2 rounded-full text-sm font-medium"
                  >Collaborations</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Education Section --> */}
      <section id="education" className="py-16 sm:py-20 lg:py-24 section-hover">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* <!-- Section Title --> */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-slate-800 dark:text-white">My </span>
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-6">
              A brief overview of my educational background and qualifications
            </p>
            <div
              className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-teal-500 mx-auto rounded-full"
            ></div>
          </div>

          {/* <!-- Education Content --> */}
          <div className="max-w-3xl mx-auto space-y-8">
            {/* <!-- Education Item 1 --> */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
              <h3
                className="text-xl font-semibold mb-2 text-slate-800 dark:text-white"
              >
                RevoU
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Full-stack Software Engineering, Jun 2025 - Jan 2026
              </p>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Trained as a full-stack software engineer, learning structured web
                applications and framework using Next.js and Nest.js, managing
                databases with PostgreSQL and Prisma ORM, and Git-based
                collaboration.
              </p>
              <br />
              <h4
                className="text-xl font-semibold mb-2 text-slate-800 dark:text-white"
              >
                Final Project:
                <Link
                  href="https://crack-fe-perhisi-deploy.vercel.app/"
                  target="_blank"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >C.R.A.C.K Project</Link
                >
              </h4>
              <p className="text-base text-slate-600 dark:text-slate-300">
                For my final project, I am developing a comprehensive Learning
                Management System (LMS) designed to facilitate online education.
                It serves as a centralized platform for academic collaboration,
                bridging the gap between administrators and students through a
                secure digital environment.
              </p>
              <br />
              <h3
                className="text-xl font-semibold mb-2 text-slate-800 dark:text-white"
              >
                SMK Satya Bhakti 1
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Automotive Mechanic, Jul 2004- Jun 2007
              </p>
            </div>
          </div>
        </div>
      </section>

      <Project />

      {/* <!-- Working Experiences Section --> */}
      <section id="experience" className="py-16 sm:py-20 lg:py-24 section-hover">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* <!-- Section Title --> */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-slate-800 dark:text-white">My </span>
              <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-6">
              A summary of my professional experience and roles in the software development industry
            </p>
            <div
              className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-teal-500 mx-auto rounded-full"
            ></div>
          </div>

          {/* <!-- Experience Content with Pagination & Scroll (React) --> */}
          <div className="max-w-3xl mx-auto">
            <ExperienceCarousel />
          </div>
        </div>
      </section>

      {/* <!-- Contact Section --> */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 section-hover">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* <!-- Section Title --> */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-slate-800 dark:text-white">Get In </span>
              <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-6">
              Have a project in mind or want to collaborate? Let&apos;s connect and
              discuss your next project.
            </p>
            <div
              className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-teal-500 mx-auto rounded-full"
            ></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* <!-- Contact Form --> */}
              <div className="gradient-border">
                <div className="gradient-border-inner">
                  <h3
                    className="text-xl font-semibold mb-6 text-slate-800 dark:text-white"
                  >
                    Send Me a Message
                  </h3>
                  <form
                    action="https://formsubmit.co/perhisi01@gmail.com"
                    method="POST"
                    encType="text/plain"
                    className="space-y-5"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
                      >Name</label
                      >
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        required
                        className="input-field w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900/50"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
                      >Email</label
                      >
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your@email.com"
                        required
                        className="input-field w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900/50"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
                      >Subject</label
                      >
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Project discussion"
                        required
                        className="input-field w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900/50"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
                      >Message</label
                      >
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        required
                        rows={5}
                        className="input-field w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900/50 resize-none"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn-primary w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/30 transition-all duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

              {/* <!-- Contact Information --> */}
              <div
                className="glass-card rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-center"
              >
                <h3
                  className="text-xl font-semibold mb-6 text-slate-800 dark:text-white"
                >
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl flex items-center justify-center"
                    >
                      <svg
                        className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 dark:text-white mb-1">
                        Email
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        perhisi01@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-xl flex items-center justify-center"
                    >
                      <svg
                        className="w-6 h-6 text-teal-600 dark:text-teal-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 dark:text-white mb-1">
                        Phone
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        +62 838-0885-2470
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl flex items-center justify-center"
                    >
                      <svg
                        className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 dark:text-white mb-1">
                        Location
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        Depok, Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-xl flex items-center justify-center"
                    >
                      <svg
                        className="w-6 h-6 text-teal-600 dark:text-teal-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 dark:text-white mb-1">
                        WhatsApp
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        +62 838-0885-2470
                      </p>
                    </div>
                  </div>
                </div>

                {/* <!-- Social Links --> */}
                <div
                  className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700"
                >
                  <h4 className="font-medium text-slate-800 dark:text-white mb-4">
                    Follow Me
                  </h4>
                  <div className="flex gap-4">
                    <Link
                      href="https://github.com/perhisi"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="My GitHub Profile"
                      className="social-icon p-3 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-all duration-300 group"
                    >
                      <Image src="/github.svg" alt="GitHub" width={24} height={24} className="group-hover:scale-110 transition-transform" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/perhisi-ardhian-dec89/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="My LinkedIn Profile"
                      className="social-icon p-3 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-all duration-300 group"
                    >
                      <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} className="group-hover:scale-110 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer Section --> */}
      <footer
        className="py-8 mt-8 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="flex gap-4">
              <Link
                href="https://github.com/perhisi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="My GitHub Profile"
                className="social-icon p-2 rounded-lg bg-white dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-all duration-300"
              >
                <Image src="/github.svg" alt="GitHub" width={20} height={20} className="" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/perhisi-ardhian-dec89/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="My LinkedIn Profile"
                className="social-icon p-2 rounded-lg bg-white dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-all duration-300"
              >
                <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} className="" />
              </Link>
            </div>

            <nav className="hidden sm:flex gap-6 text-sm">
              <Link
                href="#home"
                className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >Home</Link
              >
              <Link
                href="#about"
                className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >About</Link
              >
              <Link
                href="#projects"
                className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >Projects</Link
              >
              <Link
                href="#contact"
                className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >Contact</Link
              >
            </nav>

            <p className="text-sm text-slate-500 dark:text-slate-500">
              &copy; 2026 Perhisi Ardhian. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

function ExperienceCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef<HTMLDivElement | null>(null);

  const slides = [
    <div key={0} className="w-full flex-shrink-0 px-2">
      <div className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl max-h-[500px] overflow-y-auto">
        <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">Courier, Shopee Express / SPX Express</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Apr 2022 - Mar 2025</p>
        <p className="text-base text-slate-600 dark:text-slate-300">● Delivered packages to customers&apos; homes daily, raising customer satisfaction by 70% by adhering to scheduled routes and providing reliable updates.</p>
        <p className="text-base text-slate-600 dark:text-slate-300">● Prioritized expedited packages for timely delivery, lifting customer satisfaction by 80% by aligning with scheduled time windows and consistently communicating arrival estimates.</p>
        <p className="text-base text-slate-600 dark:text-slate-300">● Managed COD collections and same-day deposits, raising company satisfaction by 70% through compliance with penalty policies and transparent reporting.</p>
        <p className="text-base text-slate-600 dark:text-slate-300">● Managed reports daily for packages not successfully delivered and returned them to the warehouse, raising company satisfaction by 70% through improved tracking systems and effective package management strategies.</p>
      </div>
    </div>,
    <div key={1} className="w-full flex-shrink-0 px-2">
      <div className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl max-h-[500px] overflow-y-auto">
        <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">Courier, J&T Express</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Sep 2017 - Feb 2022</p>
        <p className="text-base text-slate-600 dark:text-slate-300">● Delivered packages to customers&apos; homes, boosting satisfaction 70% through reliable route adherence, proactive communication, and timely issue resolution daily across zones.</p>
        <p className="text-base text-slate-600 dark:text-slate-300">● Prioritized expedited packages for timely delivery, lifting customer satisfaction by 80%by aligning with time windows and managing route logistics effectively.</p>
        <p className="text-base text-slate-600 dark:text-slate-300">● Managed COD collections and same-day deposits, raising company satisfaction 70% through consistent controls and compliance with penalty policies.</p>
        <p className="text-base text-slate-600 dark:text-slate-300">● Managed time efficiently to deliver routes promptly, raising delivery efficiency by 70% and consistently meeting daily performance targets through optimized scheduling.</p>
      </div>
    </div>,
    <div key={2} className="w-full flex-shrink-0 px-2">
      <div className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl max-h-[500px] overflow-y-auto">
        <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">Staff Warehouse, PT. Indah Berkah Bersaudara (JNE Depok)</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Jun 2017 - Aug 2017</p>
        <p className="text-base text-slate-600 dark:text-slate-300">● Managed and sorted inbound and outbound packages, reducing processing time by 2 hours and enhancing overall warehouse efficiency by 30%.</p>
        <p className="text-base text-slate-600 dark:text-slate-300">● Created daily reports for incoming and outgoing packages, raising company satisfaction by 70% through improved transparency and enhanced tracking mechanisms.</p>
        <p className="text-base text-slate-600 dark:text-slate-300">● Managed priority packages, delivering to customers’ homes, raising customer satisfaction by 80% while significantly improving service reliability through timely deliveries.</p>
        <p className="text-base text-slate-600 dark:text-slate-300">● Managed sorted packages for destination areas, raising company satisfaction by 70% through enhanced routing strategies and improved delivery accuracy.</p>
      </div>
    </div>,
    <div key={3} className="w-full flex-shrink-0 px-2">
      <div className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl max-h-[500px] overflow-y-auto">
        <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">Mechanical Engineer, Yamaha JG Cibinong</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Jun 2015 - Jul 2015</p>
        <p className="text-base text-slate-600 dark:text-slate-300">● Analyzed customer motorcycles and provided tailored recommendations, raising customer satisfaction by 70% through effective communication and personalized service.</p>
        <p className="text-base text-slate-600 dark:text-slate-300">● Repaired motorcycles by replacing broken parts, raising company satisfaction by 70% through timely service and significantly improving vehicle performance.</p>
        <p className="text-base text-slate-600 dark:text-slate-300">● Analyzed motorcycle drives for issues, improving customer satisfaction by 70% through thorough inspections and prompt resolution of identified concerns.</p>
        <p className="text-base text-slate-600 dark:text-slate-300">● Executed cleaning of workshop areas and tools, improving company satisfaction by 70% by enhancing safety standards and workspace efficiency.</p>
      </div>
    </div>,
    <div key={4} className="w-full flex-shrink-0 px-2">
      <div className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl max-h-[500px] overflow-y-auto">
        <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">Sales and Installation Support / Setter Speedy, PT. Telkom STO Kalibata</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Mar 2014 - Aug 2014</p>
        <p className="text-base text-slate-600 dark:text-slate-300">● Implemented strategies for door-to-door modem offerings, raising company satisfaction by 80% through personalized service and prompt resolution of customer inquiries.</p>
        <p className="text-base text-slate-600 dark:text-slate-300">● Installed speedy modems in customer homes, raising company satisfaction by 80% through efficient setup and significantly enhanced internet connectivity.</p>
        <p className="text-base text-slate-600 dark:text-slate-300">● Managed daily reports of customer installations, raising company satisfaction by 70% through accurate data tracking and timely follow-ups ensuring seamless communication.</p>
      </div>
    </div>,
    <div key={5} className="w-full flex-shrink-0 px-2">
      <div className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl max-h-[500px] overflow-y-auto">
        <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">Staff IT Maintenance, PT. Wika Beton 2</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Jul 2012 - Nov 2012</p>
        <p className="text-base text-slate-600 dark:text-slate-300">● Performed maintenance and optimization on office PCs, resulting in a 50% reduction in downtime and a 70% increase in company satisfaction by enhancing overall functionality and user experience.</p>
        <p className="text-base text-slate-600 dark:text-slate-300">● Installed LAN cables, enhancing internet connectivity by 60% and reducing loading times by 40%, contributing to a 70% increase in company satisfaction through streamlined network performance.</p>
        <p className="text-base text-slate-600 dark:text-slate-300">● Analyzed and resolved operating system issues, leading to a 50% reduction in system downtime and a 40% improvement in user support response times, contributing to a 70% increase in company satisfaction through enhanced system stability.</p>
      </div>
    </div>,
    <div key={6} className="w-full flex-shrink-0 px-2">
      <div className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl max-h-[500px] overflow-y-auto">
        <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">Quality Control, PT. Siemens Power Distribution and Transmission</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Jan 2008 - Mar 2008</p>
        <p className="text-base text-slate-600 dark:text-slate-300">● Maintained and optimized electrical wiring systems for robust connections and precise routing, resulting in a 70% increase in company satisfaction by enhancing safety protocols and operational efficiency.</p>
        <p className="text-base text-slate-600 dark:text-slate-300">● Maintained and inspected 3-phase kilovolt input wiring, directly leading to a 30% reduction in operational incidents and enhancing company satisfaction by achieving a client retention rate of 85%, through strict adherence to safety standards.</p>
        <p className="text-base text-slate-600 dark:text-slate-300">● Managed communication reports for production staff regarding critical wiring replacements, resulting in a 40% reduction in safety incidents and a 25% improvement in response time, leading to a significant 70% increase in company satisfaction.</p>
      </div>
    </div>
  ];

  useEffect(() => {
    if (slidesRef.current) {
      slidesRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && currentSlide > 0) setCurrentSlide((s) => s - 1);
      if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) setCurrentSlide((s) => s + 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [currentSlide, slides.length]);

  return (
    <div className="relative">
      <button
        onClick={() => setCurrentSlide((s) => Math.max(0, s - 1))}
        disabled={currentSlide === 0}
        aria-label="Previous experience"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:pointer-events-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((s) => Math.min(slides.length - 1, s + 1))}
        disabled={currentSlide === slides.length - 1}
        aria-label="Next experience"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:pointer-events-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div id="experience-carousel" className="overflow-x-hidden">
        <div ref={slidesRef} id="experience-slides" className="flex transition-transform duration-500 ease-in-out">
          {slides.map((s) => s)}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={
                `w-3 h-3 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-indigo-600 dark:bg-indigo-400 scale-125' : 'bg-slate-300 dark:bg-slate-600 hover:bg-indigo-400 dark:hover:bg-indigo-400'}`
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
