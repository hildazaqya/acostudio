'use client'
import { useState } from "react";
import Link from 'next/link';
import { HamburgerIcon, XIcon } from "./navbarIcon";

type NavItem = {
    href: string;
    label: string;
};

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems: NavItem[] = [
        { href: "/", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#services", label: "Services" },
        { href: "#price", label: "Price" },
        { href: "#contact", label: "Contact" },
    ]

    return (
        <nav className="flex flex-col lg:flex-row justify-between py-5 px-10 lg:px-[80px] bg-gradient-to-b from-neutral to-[#A0BAD3] text-accent tracking-wide">
            <div className="flex flex-row justify-between w-full lg:w-auto">
            <Link href="/" passHref>
                <h5 className="text-h6 sm:text-h5 text-base">A.COSTUDIOINDONESIA</h5>
            </Link>
            <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-accent focus:outline-none">
                    {isOpen ? <XIcon /> : <HamburgerIcon />}
                </button>
            </div>
            </div>
            <ul className={`flex-col mt-5 lg:mt-0 lg:flex lg:flex-row gap-6 lg:items-center nav-transition ${isOpen ? 'flex ' : 'hidden'}`}>
                {navItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                        <li className={`hover:text-primary text-base`}>
                            {item.label}
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;