import Link from 'next/link'

function layout({ children }) {
    return (
        <>
            <div>
                <Link href='/tienda/electronica'><p>Electronica</p></Link>
                <Link href='/tienda/decoracion'><p>Decoracion</p></Link>
                <Link href='/tienda/mobiliario'><p>Mobiliario</p></Link>
                <Link href='/tienda/libros'><p>Libros</p></Link>
            </div>
            {children}
        </>
    )
}

export default layout