'use client'
import Link from "next/link";
import Navbar from "./Navbar";
import { UserDropdown } from "./UserDropdown";
const Header=()=>{
    // const isMobile = window.innerWidth<640;
    return(
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href="/">Home</Link>
                <nav className="hidden sm:block">
                <Navbar/>
                </nav>
                {<UserDropdown />}
            </div>
        </header>
    )
}

export default Header;