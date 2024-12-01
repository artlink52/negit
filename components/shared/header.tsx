"use client";
import React, { useState } from "react";
import Image from "next/image";
import { HeaderContainer } from "./header-container";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import ClientSideNavigation from "./header-nav"; // Импортируем клиентскую навигацию
import ContactModal from "@/app/@modal/page";
import Link from "next/link";

import { BurgerMenu } from "./burger-menu";

export const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className="bg-[#faf9f6] z-50">
      <HeaderContainer>
        <div className="flex justify-between items-center w-full h-full">
          {/* Лого */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="assets/image.svg"
                alt="Лого"
                width={450}
                height={67}
                className="h-auto w-auto max-w-[450px] max-h-[67px] object-contain"
                id="logo"
              />
            </Link>
          </div>

          {/* Клиентская навигация */}
          <ClientSideNavigation />

          {/* Блок для кнопки и бургер-меню */}
          <div className="flex-shrink-0 flex items-center z-10">
            <div className="lg:hidden">
              <BurgerMenu openModal={openModal} />
            </div>
            <div className="hidden lg:flex">
              <Button variant="default" className="mx-auto" onClick={openModal}>
                Связаться с нами
              </Button>
            </div>
            <ContactModal isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </div>
      </HeaderContainer>
    </header>
  );
};
