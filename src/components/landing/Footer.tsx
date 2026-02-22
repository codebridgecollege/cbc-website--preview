"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const PhoneLink = ({ href, text }: { href: string; text: string }) => {
  const [status, setStatus] = useState<"idle" | "copied">("idle");

  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setStatus("copied");
        setTimeout(() => setStatus("idle"), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <>
      <a
        href={href}
        className="md:hidden hover:text-white transition-colors block w-fit"
      >
        {text}
      </a>

      <button
        onClick={handleCopy}
        className="hidden md:block hover:text-white transition-colors relative group w-fit text-left cursor-pointer"
        type="button"
      >
        {text}
        <span
          className={`absolute left-full ml-3 top-1/2 -translate-y-1/2 text-xs font-mono px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none ${status === "copied" ? "!opacity-100 !bg-emerald-950/80 !text-emerald-400 !border-emerald-800" : ""}`}
        >
          {status === "copied" ? "Copied!" : "Copy"}
        </span>
      </button>
    </>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-blue/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row lg:justify-between gap-12 relative z-10">
        <div className="md:col-span-2 lg:w-fit">
          <div className="flex items-center gap-2 mb-8">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="CodeBridge Logo"
                width={158}
                height={48}
                className="h-12 w-auto object-contain opacity-90"
                style={{ filter: "brightness(0) invert(1)" }}
                unoptimized
              />
            </Link>
          </div>
          <p className="max-w-sm mb-6 text-lg leading-relaxed text-slate-500">
            Bridging the gap between academic theory and real-world data science
            application. Built for the curious.
          </p>

          <div className="mt-8">
            <h5 className="text-white font-bold text-sm uppercase tracking-wider mb-2 opacity-50">
              Organiser
            </h5>
            <p className="text-lg font-medium text-slate-300">
              CodeBridge College
            </p>
            <p className="text-base text-slate-600">Legal Entity (o.z. / s.r.o.)</p>
          </div>
        </div>

        <div className="lg:w-fit">
          <h4 className="text-white font-bold mb-6 text-base uppercase tracking-wider">
            Legal
          </h4>
          <ul className="space-y-4 text-lg">
            <li>
              <a
                href="https://codebridgecollege.com/assets/Storno%20podmienky%20a%20reklamac%CC%8Cny%CC%81%20poriadok.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-blueLight transition-colors flex items-center gap-2"
              >
                Cancellation & Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand-blueLight transition-colors">
                GDPR
              </a>
            </li>
          </ul>
        </div>

        <div id="contact" className="lg:w-fit">
          <h4 className="text-white font-bold mb-6 text-base uppercase tracking-wider">
            Contact Us
          </h4>
          <ul className="space-y-4 text-lg mb-8">
            <li>
              <span className="block text-sm text-brand-blue font-bold uppercase tracking-widest mb-1">
                Call
              </span>
              <PhoneLink href="tel:+447858115591" text="+44 7858 115 591" />
              <PhoneLink href="tel:+421911662436" text="+421 911 662 436" />
            </li>
            <li>
              <span className="block text-sm text-brand-blue font-bold uppercase tracking-widest mb-1">
                Email
              </span>
              <a
                href="mailto:laura.johanesova@codebridgecollege.com"
                className="hover:text-white transition-colors block lg:whitespace-nowrap break-words lg:break-normal"
              >
                laura.johanesova@codebridgecollege.com
              </a>
            </li>
          </ul>

          <h5 className="text-brand-blue font-bold text-sm uppercase tracking-widest mb-4">
            Follow Us
          </h5>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/company/codebridge-college/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-[#0077b5] hover:scale-110 transition-all duration-300 border border-slate-700"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/codebridge_college?igsh=MW81Zmo1bDB0d2hzag%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-[#E1306C] hover:scale-110 transition-all duration-300 border border-slate-700"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center text-slate-600 gap-6">
        <div className="text-center md:text-left flex flex-col sm:flex-row gap-4 sm:gap-8 items-center">
          <p>&copy; 2026 Copyright Róbert Kolek</p>
          <p className="hidden sm:block text-slate-700">|</p>
          <p className="flex items-center justify-center gap-1">
            Design
            <span className="w-1 h-1 bg-slate-700 rounded-full mx-1"></span>
            <a
              href="https://www.behance.net/robertkolek"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-blueLight transition-colors"
            >
              Behance
            </a>
            <span className="w-1 h-1 bg-slate-700 rounded-full mx-1"></span>
            <a
              href="https://www.linkedin.com/in/robert-kolek/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-blueLight transition-colors"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
