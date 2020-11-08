import React from 'react';
import styles from './Nav.module.scss';
import logo from '../../assets/images/logo_transparent.png'


const Nav = (props) => {
    const {signOut} = props;

    return (
        <nav className={styles.nav}>
            <img src={logo} alt='logo' />
            <h1>Punk Api</h1>
            <button onClick={signOut}>Sign Out</button>
        </nav>
    )
}

export default Nav;
