"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav className="flex flex-col items-start h-screen p-5 fixed">
                {/* Home Link */}
                <Link
                    href={"/"}
                    className="mb-6 text-lg font-semibold relative group"
                >
                    <span className="block opacity-100 transition-opacity duration-300">
                        H
                    </span>
                    <span className="absolute left-8 top-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Home
                    </span>
                </Link>

                {/* Portfolio Link */}
                <Link
                    href={"/portfolio"}
                    className="mb-6 text-lg font-semibold relative group"
                >
                    <span className="block opacity-100 transition-opacity duration-300">
                        P
                    </span>
                    <span className="absolute left-8 top-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Portfolio
                    </span>
                </Link>

                {/* Contact Link */}
                <Link
                    href={"/contact"}
                    className="mb-6 text-lg font-semibold relative group"
                >
                    <span className="block opacity-100 transition-opacity duration-300">
                        A
                    </span>
                    <span className="absolute left-8 top-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        About/Contact
                    </span>
                </Link>

                {/* Projects Link */}
                <Link
                    href={"/projects"}
                    className="mb-6 text-lg font-semibold relative group"
                >
                    <span className="block opacity-100 transition-opacity duration-300">
                        P
                    </span>
                    <span className="absolute left-8 top-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Projects
                    </span>
                </Link>
            </nav>
        </>
    );
}
