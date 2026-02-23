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
      <div className="scroll-progress" />
      <div className="fixed inset-0 -z-10 bg-slate-175 pointer-events-none" />

      <Navbar onOpenModal={openModal} />

      <main className="relative z-10 min-h-screen">{children}</main>

      <Footer />
      <ContactModal contact={contact} isOpen={isOpen} onClose={closeModal} />
    </>
  );
}
