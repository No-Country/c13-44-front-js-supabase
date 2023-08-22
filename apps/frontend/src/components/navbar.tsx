import { Navbar, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import logo from '../img/icono00.png'
import './navbar.css';
import { useLocation } from "wouter";

export default function NavbarOffLogin() {
    const [_location, setLocation] = useLocation(); //_ para especificar que no se utiliza


    return (
        <Navbar className="nav" shouldHideOnScroll>
            <div className="img_nav">
                <img src={logo} alt="" />
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
                    <Button onClick={() => setLocation("/login")} className="btn1" color="danger" variant="bordered" startContent=''>
                        Iniciar Sesión
                    </Button>
                    <Button onClick={() => setLocation("/register")} className="btn1" color="danger" variant="bordered" startContent=''>
                        Registrarse
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
