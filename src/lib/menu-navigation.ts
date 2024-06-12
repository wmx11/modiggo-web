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
    label: "Case studies",
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
