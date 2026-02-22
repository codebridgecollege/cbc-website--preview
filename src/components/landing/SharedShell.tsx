import React from "react";
import { ModalProvider } from "@/contexts/ModalContext";
import Shell from "./Shell";
import { getContact } from "@/lib/content";

export default function SharedShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const contact = getContact();
  return (
    <ModalProvider>
      <Shell contact={contact}>{children}</Shell>
    </ModalProvider>
  );
}
