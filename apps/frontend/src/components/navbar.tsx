import { Navbar, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import logo from '../img/icono00.png'
import './navbar.css';

export default function NavbarOffLogin() {
    return (
        <Navbar className="nav" shouldHideOnScroll>
            <img style={{ width: '5rem' }} src={logo} alt="" />
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Destinos
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" color="foreground">
                        Hoteles
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Contacto
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Button className="btn" color="danger" variant="bordered" startContent=''>
                        Iniciar Sesión
                    </Button>
                    <Button className="btn" color="danger" variant="bordered" startContent=''>
                        Registrarse
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
