import Link from 'next/link'

function layout({ children }) {
    return (
        <>
            <div>
                <Link href='/blog/primer'><p>Primer blog</p></Link>
                <Link href='/blog/segun'><p>Segundo blog</p></Link>
                <Link href='/blog/tercer'><p>Tercer blog</p></Link>
            </div>
            {children}
        </>
    )
}

export default layout