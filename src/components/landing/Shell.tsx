"use client";

import React from "react";
import { useModal } from "@/contexts/ModalContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactModal from "./ContactModal";
import type { Contact } from "@/types/contact";

export default function Shell({
  children,
  contact,
}: {
  children: React.ReactNode;
  contact: Contact;
}) {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div className="scroll-progress"></div>
      <div className="bg-grid"></div>

      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute inset-0 bg-slate-175"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-indigo-200/50 rounded-full blur-[120px] animate-blob mix-blend-multiply"></div>
        <div
          className="absolute top-[30%] left-[-20%] w-[90vw] h-[90vw] bg-blue-200/40 rounded-full blur-[130px] animate-blob mix-blend-multiply"
          style={{ animationDelay: "5s" }}
        ></div>
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-indigo-300/30 rounded-full blur-[100px] animate-blob mix-blend-multiply"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <Navbar onOpenModal={openModal} />

      <main className="relative z-10 min-h-screen">{children}</main>

      <Footer />
      <ContactModal contact={contact} isOpen={isOpen} onClose={closeModal} />
    </>
  );
}
