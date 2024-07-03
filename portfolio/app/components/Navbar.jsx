import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

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
    return (
        <nav>
            <div className="flex flex-wrap items-center justify-between mx-auto p-8">
             <Link href={'/'} className="text-5xl text-white font-semibold">
                LOGO
             </Link>
             <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul>
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