import React from "react";
import Container from "./container";
import Logo from "@/app/assets/logo/logo.png";
import CTAButton from "./call-to-action-button";
import Image from "next/image";
import Link from "next/link";
import { footerMenu, mainMenu } from "@/lib/menu-navigation";
import Title from "./title";

const Navigation = () => {
  return (
    <header className="bg-white sticky top-0 z-10 py-3 border-b">
      <nav>
        <Container className="flex justify-between items-center">
          <div>
            <Link href="/">
              <Image src={Logo} alt="Modiggo logo" width={80} />
            </Link>
          </div>
          <div>
            <ul className="flex gap-6">{renderMainMenu()}</ul>
          </div>
          <div>
            <CTAButton size="default" />
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Navigation;

export const renderMainMenu = () => {
  return mainMenu.map((item, index) => (
    <li>
      <Link href={item.href as string} key={`main_menu_${index}`}>
        {item.label}
      </Link>
    </li>
  ));
};

export const renderFooterMenu = () => {
  return footerMenu.map((item, index) => {
    if (item.group) {
      return (
        <div key={`footer_menu_${index}`}>
          <Title order={4}>{item.group.label}</Title>
          <ul>
            {item.group.items.map((groupItem, groupItemIndex) => (
              <li key={`footer_group_menu_${groupItemIndex}`}>
                <Link href={groupItem.href as string}>{groupItem.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return null;
  });
};
