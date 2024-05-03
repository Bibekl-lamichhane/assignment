'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import Logo from "./logo";
import Link from "next/link";

const NavBar=(props)=>{
  
  return (
    <Navbar>
    <NavbarBrand>
    <Logo user="Online calculator"/>  
    </NavbarBrand>
    <NavbarContent className="flex gap-4">
      <NavbarItem>
        <Link color="foreground" href="#">
          Features
        </Link>
      </NavbarItem>
      <NavbarItem isActive>
        <Link href="#" aria-current="page">
          Home
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          Modes
        </Link>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex">
        <Link href="/login">Login</Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="primary" href="/register" variant="flat" className="">
          Sign Up
        </Button>
      </NavbarItem>
    </NavbarContent>
  </Navbar>
  );
}
export default NavBar 