"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XmarkIcon } from "@heroicons/react/24/solid";

const NavLinks = [
    {
        title: "Sobre",
        path: "#sobre",
    },
    {
        title: "Projetos",
        path: "#projetos",
    },
    {
        title: "Contato",
        path: "#contato",
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4">
             <Link href={'/'} className="text-2xl md:text-5xl text-white font-semibold">
                LOGO
             </Link>
             <div className="mobile-menu block md:hidden">
                {
                    navbarOpen ? (
                        <button></button>
                    ) : (
                        <button></button>
                    )
                }
                </div>
             <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0">
                    {
                        NavLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                         )
                        )
                    }
                </ul>
             </div>
            </div>
        </nav>
    )
}

export default Navbar