import React from 'react';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
import styles from './Header.module.css';

interface IHeaderProps extends RouteComponentProps<any> {}

interface IRoute {
    pathname: string;
    title: string;
}

const routes: IRoute[] = [
    { pathname: '/', title: 'home' },
    { pathname: '/characters', title: 'characters' },
    { pathname: '/episodes', title: 'episodes' },
    { pathname: '/locations', title: 'locations' },
];

const Header = ({ location }: IHeaderProps) => (
    <nav className={styles.nav}>
        { routes.map(({ pathname, title }) => <NavLink to={pathname}>{title}</NavLink>) }
    </nav>
);

export default withRouter(Header);
