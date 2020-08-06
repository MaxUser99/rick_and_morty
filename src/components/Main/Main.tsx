import React from 'react';
import logo from 'assets/logo-big.png';
import styles from './Main.module.css';

interface IMainProps {}

const Main = (props: IMainProps) => {
    return <>
        <img src={logo} className={styles.logo} alt='' />
    </>;
}

export default Main;
