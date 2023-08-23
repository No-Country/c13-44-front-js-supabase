import { Navbar, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { IconChristmasTree, IconSend } from '@tabler/icons-react';
import logo from '../img/icono00.png'
import './navbar.css';

export default function NavbarOffLogin() {
    return (
        <Navbar className="nav" shouldHideOnScroll>
            <div className="img_nav">
                <img  src={logo} alt="" />
            </div>
            <NavbarContent className="options hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/destination">
                        Destinos
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="/hotels" color="foreground">
                        Hoteles
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
                    <IconChristmasTree className="mt-3.5 w-7 h-7"/>
                    <Button className="btn1" color="danger" variant="bordered" startContent=''>
                        Iniciar Sesión
                    </Button>
                    <IconSend className="mt-4 w-6 h-6" />
                    <Button className="btn1" color="danger" variant="bordered" startContent=''>
                        Registrarse
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
