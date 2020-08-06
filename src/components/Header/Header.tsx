import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
    return (
        <nav className={styles.nav}>
            <NavLink to='/characters'>characters</NavLink>
            <NavLink to='/episodes'>episodes</NavLink>
            <NavLink to='/locations'>locations</NavLink>
        </nav>
    );
}

export default Header;
