import {
    NavLink,
    Outlet,
    useLocation,
    useNavigate
} from "react-router-dom";

import React, { useState } from "react";
import "./AdminPanal.css";

function AdminLayout() {

    const navigate = useNavigate();
    const location = useLocation();

    const [sidebarOpen, setSidebarOpen] = useState(false);


    /* =========================================
       LOGOUT
    ========================================== */

    const handleLogout = () => {
        setSidebarOpen(false);
        navigate("/");
    };


    /* =========================================
       CLOSE SIDEBAR
    ========================================== */

    const closeSidebar = () => {
        setSidebarOpen(false);
    };


    /* =========================================
       HOME ACTIVE CHECK
    ========================================== */

    const isHomeActive =
        location.pathname === "/admin" ||
        location.pathname === "/admin/" ||
        location.pathname === "/admin/home";


    /* =========================================
       SVG ICONS
    ========================================== */

    const HomeIcon = () => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <path d="M3 10.5L12 3l9 7.5" />
            <path d="M5.5 9.5V21h13V9.5" />
            <path d="M9.5 21v-6h5v6" />
        </svg>
    );

    const AboutIcon = () => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 10v6" />
            <circle
                cx="12"
                cy="7"
                r="0.7"
                fill="currentColor"
            />
        </svg>
    );

    const ContactIcon = () => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
            />
            <path d="M3 7l9 6 9-6" />
        </svg>
    );

    const LogoutIcon = () => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <path d="M10 5H5v14h5" />
            <path d="M13 8l4 4-4 4" />
            <path d="M8 12h9" />
        </svg>
    );

    const BellIcon = () => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
            <path d="M10 21h4" />
        </svg>
    );

    const MenuIcon = () => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
        </svg>
    );

    const CloseIcon = () => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path d="M6 6l12 12" />
            <path d="M18 6L6 18" />
        </svg>
    );


    return (

        <div className="admin-container">

            {/* OVERLAY */}

            <div
                className={`sidebar-overlay ${
                    sidebarOpen ? "show" : ""
                }`}
                onClick={closeSidebar}
            />


            {/* SIDEBAR */}

            <aside
                className={`sidebar ${
                    sidebarOpen ? "sidebar-open" : ""
                }`}
            >

                {/* HEADER */}

                <div className="sidebar-header">

                    <div className="brand-logo">
                        PSTL
                    </div>

                    <div className="brand-content">

                        <div className="brand-name">
                            Phoenix
                        </div>

                        <div className="brand-subtitle">
                            Softnet
                        </div>

                    </div>

                    <button
                        type="button"
                        className="sidebar-close"
                        onClick={closeSidebar}
                    >
                        <CloseIcon />
                    </button>

                </div>


                {/* NAVIGATION */}

                <div className="navigation-wrapper">

                    <div className="navigation-label">
                        MAIN MENU
                    </div>

                    <nav className="sidebar-nav">


                        {/* HOME */}

                        <NavLink
                            to="/admin/home"
                            onClick={closeSidebar}
                            className={`menu-link ${
                                isHomeActive ? "active" : ""
                            }`}
                        >

                            <span className="menu-icon">
                                <HomeIcon />
                            </span>

                            <span className="menu-text">
                                Home
                            </span>

                            <span className="active-arrow">
                                →
                            </span>

                        </NavLink>


                        {/* ABOUT */}

                        <NavLink
                            to="/admin/about"
                            onClick={closeSidebar}
                            className={({ isActive }) =>
                                `menu-link ${
                                    isActive ? "active" : ""
                                }`
                            }
                        >

                            <span className="menu-icon">
                                <AboutIcon />
                            </span>

                            <span className="menu-text">
                                About
                            </span>

                            <span className="active-arrow">
                                →
                            </span>

                        </NavLink>


                        {/* CONTACT */}

                        <NavLink
                            to="/admin/contact"
                            onClick={closeSidebar}
                            className={({ isActive }) =>
                                `menu-link ${
                                    isActive ? "active" : ""
                                }`
                            }
                        >

                            <span className="menu-icon">
                                <ContactIcon />
                            </span>

                            <span className="menu-text">
                                Contact
                            </span>

                            <span className="active-arrow">
                                →
                            </span>

                        </NavLink>

                    </nav>

                </div>


                {/* SIDEBAR BOTTOM */}

                <div className="sidebar-bottom">

                    <div className="system-status">

                        <div className="status-icon">
                            <span className="status-pulse"></span>
                        </div>

                        <div className="status-content">

                            <strong>
                                System Online
                            </strong>

                            <span>
                                All services operational
                            </span>

                        </div>

                    </div>


                    <button
                        type="button"
                        className="logout-button"
                        onClick={handleLogout}
                    >

                        <span className="logout-icon">
                            <LogoutIcon />
                        </span>

                        <span>
                            Logout
                        </span>

                    </button>

                </div>

            </aside>


            {/* MAIN */}

            <section className="main-section">


                {/* HEADER */}

                <header className="top-header">

                    <button
                        type="button"
                        className="mobile-menu-button"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <MenuIcon />
                    </button>


                    <div className="header-title">

                        <h1>
                            Admin Dashboard
                        </h1>

                        <span>
                            Manage your enterprise workspace
                        </span>

                    </div>


                    <div className="header-actions">

                        <button
                            className="notification-button"
                            type="button"
                        >

                            <BellIcon />

                            <span className="notification-badge">
                                1
                            </span>

                        </button>

                        <div className="header-divider"></div>


                        <div className="user-profile">

                            <div className="user-avatar">
                                A
                            </div>

                            <div className="user-details">

                                <strong>
                                    Admin
                                </strong>

                                <span>
                                    Administrator
                                </span>

                            </div>

                            <span className="user-arrow">
                                ▾
                            </span>

                        </div>

                    </div>

                </header>


                {/* CONTENT */}

                <main className="content">

                    <Outlet />

                </main>


                {/* FOOTER */}

                <footer className="admin-footer">

                    <span>
                        © 2026 Phoenix Softnet
                    </span>

                    <span>
                        Enterprise Management Platform
                    </span>

                </footer>

            </section>

        </div>
    );
}

export default AdminLayout;