import HeaderNavigation from "./header-navigation";
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
    label: "Recent works",
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
          href: "#",
        },
        {
          label: "Custom e-commerce",
          href: "#",
        },
        {
          label: "Custom web apps",
          href: "#",
        },
        {
          label: "Custom mobile apps",
          href: "#",
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

const Navigation = HeaderNavigation;

export default Navigation;
