import React from 'react'
import Cartwidget from "../CartWidget/CartWidget"
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>

        <div className={styles.navbarTitle}>
            <NavLink to='/'>Tienda Areli </NavLink>
        </div>

            <section className={styles.navbarItems}>

                <NavLink to='/category/ropa'>Ropa</NavLink>

                <NavLink to='/category/cosmeticos'>Cosmeticos</NavLink>

                <NavLink to='/category/uñas'>Uñas</NavLink>
            </section>
            <Cartwidget/>
        </nav>
    )
}
export default Navbar