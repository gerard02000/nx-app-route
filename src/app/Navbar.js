import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <Link href="/">Inicio</Link>
                <Link href="/tienda">Tienda</Link>
                <Link href="/blog">Blog</Link>
            </div>
            <div>
                <Link href="/about">About-Company</Link>
                <Link href="/registro">Resgistrarme</Link>
            </div>
        </nav>
    )
}

export default Navbar