import { Navbar, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
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
                    <Button className="btn1" color="danger" variant="bordered" startContent=''>
                        Iniciar Sesión
                    </Button>
                    <Button className="btn1" color="danger" variant="bordered" startContent=''>
                        Registrarse
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
