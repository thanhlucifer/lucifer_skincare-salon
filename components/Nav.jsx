"use client"
import Link from "next/link"
import { useContext } from "react"
import { CusorContext } from "./CusorContext"
import { usePathname } from "next/navigation"

const links = [
    {
        href: "/",
        name: "Home"
    },
    {
        href: "/about",
        name: "About"
    },
    {
        href: "/treatments",
        name: "Treatments"
    },
    {
        href: "/contact",
        name: "Contact"
    },
]
const Nav = () => {
    const pathname = usePathname()
    return (
        <nav>
            <div className="container mx-auto flex gap-8">
                {links.map((link, index) => {
                    return <Link href={link.href} key={index} className={`${pathname === link.href && "border-b-2 border-accent"} uppercase`}>{link.name}</Link>
                })}
            </div>
        </nav>
    )
}

export default Nav