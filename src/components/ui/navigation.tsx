import Logo from "@/app/assets/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import CTAButton from "./call-to-action-button";
import Container from "./container";
import NavigationLink from "./navigation-link";
import Title from "./title";
interface Menu {
  label?: string;
  href?: string;
  group?: {
    label: string;
    items: Omit<Menu, "group">[];
  };
}

export const mainMenu: Menu[] = [
  {
    label: "Recent work",
    href: "#case-studies",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Contact us",
    href: "#contact",
  },
];

export const footerMenu: Menu[] = [
  {
    group: {
      label: "Services",
      items: [
        {
          label: "Custom websites",
          href: "",
        },
        {
          label: "Custom e-commerce",
          href: "",
        },
        {
          label: "Custom web apps",
          href: "",
        },
        {
          label: "Custom mobile apps",
          href: "",
        },
      ],
    },
  },
  {
    group: {
      label: "Modiggo",
      items: [...mainMenu],
    },
  },
];

export const renderMainMenu = () => {
  return mainMenu.map((item, index) => (
    <li key={`main_menu_${index}`}>
      <NavigationLink href={item.href}>{item.label}</NavigationLink>
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
                <NavigationLink href={groupItem.href} dark>
                  {groupItem.label}
                </NavigationLink>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return null;
  });
};

const Navigation = () => {
  return (
    <header className="bg-white sticky top-0 z-50 py-3 border-b">
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
