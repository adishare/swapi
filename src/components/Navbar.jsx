import React from "react";
import { Navbar, Container } from "react-bootstrap";
import LogoGeekseat from "../assets/img/geekseat.png";
import LogoSwapi from "../assets/img/swapi.png";
import { NavLink } from "react-router-dom";

const NavbarGlobal = ({ ...props }) => {
    return (
        <Navbar
            bg="white"
            expand="lg"
            style={{
                boxShadow:
                    "0 0 1px 1px rgba(20,23,28,.1), 0 3px 1px 0 rgba(20,23,28,.1)",
                zIndex: 10,
            }}
        >
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>
                        <img
                            src={LogoGeekseat}
                            height="40"
                            className="d-inline-block align-top"
                            alt="Geekseat logo"
                        />
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Brand className="ml-auto mr-4">
                    <img
                        src={LogoSwapi}
                        height="40"
                        className="d-inline-block align-top"
                        alt="swapi logo"
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default NavbarGlobal
