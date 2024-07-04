import { PropsWithChildren, useState } from 'react';
import { useLocation } from "react-router-dom";
import { useUser } from "@hooks/useUser";
import { useConfig } from "@hooks/useConfig.ts";
import { useTranslation } from "react-i18next";

const drawerWidth = 240;

export const Navbar = (props: PropsWithChildren) => {
  const {t} = useTranslation();
  const [{paletteMode, rtl, locale}, updateConfig] = useConfig();
  const currentUser = useUser();
  const location = useLocation();
  const {children} = props;
  const [open, setOpen] = useState(false);
  const navItems = [
    {text: t('home'), href: '/', icon: undefined},
    {text: t('login'), href: '/auth/login', icon: undefined},
    {text: t('protected'), href: '/protected', icon: undefined},
  ];

  const handleLocaleToggle = () => {
    updateConfig({locale: locale === 'faIR' ? 'enUS' : 'faIR'});
  }

  const handleDirectionToggle = () => {
    updateConfig({rtl: !rtl});
  }

  const handleThemeToggle = () => {
    updateConfig({paletteMode: paletteMode === "light" ? "dark" : "light"});
  }

  const handleDrawerToggle = () => {
    setOpen(prev => !prev);
  };

  const drawer = (
      <div>Drawer</div>
  );

  return (
      <>
        <div>Nabar</div>
        {children}
      </>
  );
}
