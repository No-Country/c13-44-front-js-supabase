import { Navbar, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import logo from '../img/icono00.png'
import './navbar.css';

export default function NavbarOffLogin() {
    return (
        <Navbar className="nav" shouldHideOnScroll>
            <img style={{ width: '5rem' }} src={logo} alt="" />
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
                    <Button className="btn" color="danger" variant="bordered" startContent=''>
                        <Link href="/login">
                            Iniciar Sesión
                        </Link>
                    </Button>
                    <Button className="btn" color="danger" variant="bordered" startContent=''>
                        <Link href="/register">
                            Registrarse
                        </Link>
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
