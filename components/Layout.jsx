import React from 'react';

const Layout = ({ children }) => {
    return (
        <>
            <nav style={{ backgroundColor: 'pink' }}>
                <ul>
                    <li>Nosotros</li>
                    <li>Contacto</li>
                    <li>Productos</li>
                </ul>
            </nav>
            <main>{children}</main>
            <footer></footer>
        </>
    );
};

export default Layout;
