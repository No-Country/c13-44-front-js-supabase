import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarBrand,
} from "@nextui-org/react";
import { ThemeSwitcher } from "../theme_button";
import logo from "../../img/icono00.png";
import { useLocation } from "wouter";
import React from "react";
import { PerfilToken } from "../../routers/auth/types";


export default function NavbarOnLogin({ token }: PerfilToken) {
  const [, setLocation] = useLocation(); //_ para especificar que no se utiliza
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Destinos", route: "/destination" },
    { name: "Contacto", route: "/contact" },
    { name: "Perfil", route: "/perfil" },
    { name: "Iniciar Sesión", route: "/login" },
    { name: "Registro", route: "/register" },

  ];

  return (
    <>
    <Navbar onMenuOpenChange={setIsMenuOpen} className="hover:cursor-pointer" shouldHideOnScroll>
        <NavbarContent>
          <NavbarBrand>
            <div className="max-w-[5rem]" onClick={() => setLocation("/")}>
              <img src={logo} />
            </div>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="options hidden lg:flex gap-2" justify="center">
          <NavbarItem>
            <Link color="foreground" onClick={() => setLocation("/destination")}>
              Destinos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" onClick={() => setLocation("/contact")}>
              Contacto
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" onClick={() => setLocation("/reservacion")}>
              Reservar
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" onClick={() => setLocation("/postvivienda")}>
              Crear publicación
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" onClick={() => setLocation("/posting")}>
              Publicaciónes
            </Link>
          </NavbarItem>
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end" className="lg:hidden">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent justify="end" className="hidden lg:flex">
          <NavbarItem className="hidden lg:flex  items-center gap-2">
          {token?.user.user_metadata.user_name}
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={index > 2 ? "primary" : "foreground"}
                className="w-full"
                onClick={() => {
                  setLocation(item.route);
                }}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}
