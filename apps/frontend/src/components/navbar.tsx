import {
    Navbar,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    NavbarBrand,
  } from "@nextui-org/react";
  import { IconChristmasTree, IconSend } from "@tabler/icons-react";
  import logo from "../img/icono00.png";
  import "./navbar.css";
  import { useLocation } from "wouter";
  import React from "react";
  
  
  export default function NavbarOffLogin() {
    const [, setLocation] = useLocation(); //_ para especificar que no se utiliza
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
    const menuItems = [
      {name: "Destinos", route: '/destination'},
      {name: "Contacto", route: '/contact'},
      {name: "Iniciar Sesión", route: '/login'},
      {name: "Registro", route: '/register'},
    ];
  
    return (
      <Navbar onMenuOpenChange={setIsMenuOpen} className="nav" shouldHideOnScroll>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <div className="img_nav" onClick={() => setLocation('/')}>
              <img src={logo} alt="" />
            </div>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="options hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/destination">
              Destinos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/contact">
              Contacto
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <IconChristmasTree className="mt-3.5 w-7 h-7" />
            <Button
              onClick={() => setLocation("/login")}
              className="btn1"
              color="danger"
              variant="bordered"
              startContent=""
            >
              Iniciar Sesión
            </Button>
            <IconSend className="mt-4 w-6 h-6" />
            <Button
              onClick={() => setLocation("/register")}
              className="btn1"
              color="danger"
              variant="bordered"
              startContent=""
            >
              Registrarse
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                    index > 1 ? 'primary' : 'foreground'
                }
                className="w-full"
                onClick={() => {
                  setLocation(item.route)
                }}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    );
  }
  