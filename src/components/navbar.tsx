'use client'
import { useState } from "react";
import Link from 'next/link';

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
        { href: "/", label: "Home"},
        { href: "#about", label: "About"},
        { href: "#layanan", label: "Layanan"},
        { href: "#price", label: "Price"},
        { href: "#contact", label: "Contact"},
    ]

    return (
        <nav className="flex flex-row items-center justify-between py-5 px-6 bg-gradient-to-b from-neutral to-[#A0BAD3] text-accent tracking-wide">
            <Link href="/" passHref>
            <h5 className="text-h5 text-base">A.COSTUDIOINDONESIA</h5> 
            </Link>
            <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-neutral focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                </svg>
                </button>
            </div>
            <ul className={`flex-col lg:flex lg:flex-row gap-6 ${isOpen ? 'flex': 'hidden'}`}>
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