"use client";
import ContactForm from "@/components/shared/contact-form";
import Modal from "@/components/shared/modal";
import { Children } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ContactForm onClose={onClose} /> {/* Передача onClose */}
    </Modal>
  );
}
