import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { api } from '../services/api';
import './Layout.css';

const Layout = () => {
    const [appInfo, setAppInfo] = useState(null);

    useEffect(() => {
        api.getAppInfo().then(setAppInfo).catch(() => {});
    }, []);

    return (
        <div className="layout">
            <header className="layout-header">
                <div className="header-content">
                    <h1>MQ Provisioning Portal</h1>
                    <p>Självbetjäningsportal för ActiveMQ Artemis</p>
                </div>
                <nav className="main-nav">
                    <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Köer & Topics
                    </NavLink>
                    <NavLink to="/users" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Användare
                    </NavLink>
                </nav>
            </header>
            <main className="layout-main">
                <Outlet />
            </main>
            <footer className="layout-footer">
                <p>ActiveMQ Artemis Provisioning Portal</p>
                {appInfo?.version && (
                    <span className="footer-version">v{appInfo.version}</span>
                )}
            </footer>
        </div>
    );
};

export default Layout;