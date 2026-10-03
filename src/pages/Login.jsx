import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();

        if (username.trim() === "") {
            alert("Please Enter The User Name");
            return;
        }

        if (password.trim() === "") {
            alert("Please Enter The User Password");
            return;
        }

        const validUsername =
            username.toLowerCase() === "admin";

        const validPassword =
            password.toLowerCase() === "p";

        if (validUsername && validPassword) {
            navigate("/admin");
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <div className="phoenix-login-page min-vh-100 d-flex align-items-center justify-content-center p-3 p-md-4">

            {/* =========================================
                BACKGROUND
            ========================================== */}
            <div className="phoenix-background">

                <div className="phoenix-grid"></div>

                <div className="phoenix-glow phoenix-glow-1"></div>
                <div className="phoenix-glow phoenix-glow-2"></div>

                <div className="phoenix-line phoenix-line-1"></div>
                <div className="phoenix-line phoenix-line-2"></div>
                <div className="phoenix-line phoenix-line-3"></div>

                <div className="phoenix-dot phoenix-dot-1"></div>
                <div className="phoenix-dot phoenix-dot-2"></div>
                <div className="phoenix-dot phoenix-dot-3"></div>
                <div className="phoenix-dot phoenix-dot-4"></div>

            </div>


            {/* =========================================
                MAIN LOGIN CONTAINER
            ========================================== */}
            <div className="phoenix-login-card row g-0 w-100">


                {/* =========================================
                    LEFT BRAND PANEL
                ========================================== */}
                <div className="col-lg-6 phoenix-brand-panel d-none d-lg-flex">

                    {/* =====================================
                        LEFT SIDE ANIMATED BACKGROUND
                    ====================================== */}
                    <div className="phoenix-left-animation" >

                        <div className="left-grid"></div>

                        <div className="left-glow left-glow-1" ></div>
                        <div className="left-glow left-glow-2"></div>
                        <div className="left-glow left-glow-3"></div>

                        <div className="left-line left-line-1"></div>
                        <div className="left-line left-line-2"></div>
                        <div className="left-line left-line-3"></div>

                        <div className="left-orbit orbit-1"></div>
                        <div className="left-orbit orbit-2"></div>

                        <div className="left-dot left-dot-1"></div>
                        <div className="left-dot left-dot-2"></div>
                        <div className="left-dot left-dot-3"></div>
                        <div className="left-dot left-dot-4"></div>
                        <div className="left-dot left-dot-5"></div>
                        <div className="left-dot left-dot-6"></div>

                    </div>


                    {/* =====================================
                        BRAND CONTENT
                    ====================================== */}
                    <div className="phoenix-brand-content w-100 p-5">


                        {/* Logo */}
                        <div className="phoenix-logo-wrapper mb-4">

                            <div className="phoenix-logo">
                                PSTL
                            </div>

                            <div className="phoenix-logo-circle circle-1"></div>
                            <div className="phoenix-logo-circle circle-2"></div>

                        </div>


                        {/* Brand */}
                        <div className="text-uppercase small phoenix-label mb-2">
                            Phoenix Softnet
                        </div>


                        <h1 className="phoenix-title">
                            Phoenix
                        </h1>


                        <h4 className="phoenix-subtitle mb-4">
                            Enterprise Management Platform
                        </h4>


                        <p className="phoenix-description col-xl-9">
                            Welcome to the Phoenix Softnet administration
                            platform. Manage your applications, operations
                            and business information from one secure
                            workspace.
                        </p>


                        {/* =========================================
                            PLATFORM INFORMATION
                        ========================================== */}
                        <div className="phoenix-information mt-5">


                            {/* ITEM 01 */}
                            <div className="phoenix-info-item">

                                <div className="phoenix-info-number">
                                    01
                                </div>

                                <div>

                                    <div className="phoenix-info-title">
                                        Centralized Operations
                                    </div>

                                    <small>
                                        Manage your business operations
                                        from one platform
                                    </small>

                                </div>

                            </div>


                            {/* ITEM 02 */}
                            <div className="phoenix-info-item">

                                <div className="phoenix-info-number">
                                    02
                                </div>

                                <div>

                                    <div className="phoenix-info-title">
                                        Real-Time Information
                                    </div>

                                    <small>
                                        Access updated information
                                        whenever you need it
                                    </small>

                                </div>

                            </div>


                            {/* ITEM 03 */}
                            <div className="phoenix-info-item">

                                <div className="phoenix-info-number">
                                    03
                                </div>

                                <div>

                                    <div className="phoenix-info-title">
                                        Enterprise Platform
                                    </div>

                                    <small>
                                        Designed for secure and reliable
                                        business workflows
                                    </small>

                                </div>

                            </div>

                        </div>


                        {/* Bottom text */}
                        <div className="phoenix-bottom-text">

                            <span>OPERATIONS</span>

                            <span className="separator">
                                •
                            </span>

                            <span>INFORMATION</span>

                            <span className="separator">
                                •
                            </span>

                            <span>CONTROL</span>

                        </div>

                    </div>

                </div>


                {/* =========================================
                    RIGHT LOGIN PANEL
                ========================================== */}
                <div className="col-lg-6 phoenix-login-panel bg-white">


                    <div className="phoenix-form-container w-100">


                        {/* =====================================
                            MOBILE LOGO
                        ====================================== */}
                        <div className="d-flex d-lg-none justify-content-center mb-4">

                            <div className="phoenix-mobile-logo">
                                PSTL
                            </div>

                        </div>


                        {/* =====================================
                            SYSTEM STATUS
                        ====================================== */}
                        <div className="phoenix-status mb-3">

                            <span className="phoenix-status-dot"></span>

                            <span>
                                SYSTEM ONLINE
                            </span>

                        </div>


                        {/* =====================================
                            LOGIN HEADING
                        ====================================== */}
                        <div className="mb-4">

                            <h2 className="phoenix-login-title">
                                Welcome Back
                            </h2>

                            <p className="phoenix-login-description">
                                Sign in to continue to your workspace
                            </p>

                        </div>


                        {/* =====================================
                            LOGIN FORM
                        ====================================== */}
                        <form onSubmit={handleLogin}>


                            {/* =================================
                                USERNAME
                            ================================== */}
                            <div className="mb-3">

                                <label
                                    htmlFor="username"
                                    className="form-label phoenix-field-label"
                                >
                                    Username
                                </label>


                                <div className="input-group phoenix-input-group">

                                    <span className="input-group-text">
                                        <span className="phoenix-input-icon">
                                            👤
                                        </span>
                                    </span>


                                    <input
                                        id="username"
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your username"
                                        value={username}
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                        autoComplete="username"
                                    />

                                </div>

                            </div>


                            {/* =================================
                                PASSWORD
                            ================================== */}
                            <div className="mb-3">

                                <label
                                    htmlFor="password"
                                    className="form-label phoenix-field-label"
                                >
                                    Password
                                </label>


                                <div className="input-group phoenix-input-group">

                                    <span className="input-group-text">
                                        <span className="phoenix-input-icon">
                                            🔒
                                        </span>
                                    </span>


                                    <input
                                        id="password"
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        autoComplete="current-password"
                                    />

                                </div>

                            </div>


                            {/* =================================
                                REMEMBER / FORGOT PASSWORD
                            ================================== */}
                            <div className="d-flex justify-content-between align-items-center mb-4">


                                <div className="form-check">

                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="remember"
                                    />

                                    <label
                                        className="form-check-label small text-secondary"
                                        htmlFor="remember"
                                    >
                                        Remember me
                                    </label>

                                </div>


                                <button
                                    type="button"
                                    className="btn btn-link btn-sm phoenix-forgot"
                                    onClick={() =>
                                        alert(
                                            "Please contact administrator to reset your password."
                                        )
                                    }
                                >
                                    Forgot Password?
                                </button>

                            </div>


                            {/* =================================
                                LOGIN BUTTON
                            ================================== */}
                            <button
                                type="submit"
                                className="btn phoenix-login-button w-100 py-3"
                            >

                                <span>
                                    Sign In
                                </span>

                                <span className="phoenix-arrow">
                                    →
                                </span>

                            </button>

                        </form>


                        {/* =====================================
                            HIDDEN DEMO ACCESS
                        ====================================== */}
                        <div
                            className="ai-demo-box mt-4 p-3 rounded"
                            style={{ display: "none" }}
                        >

                            <div className="d-flex justify-content-between mb-2">

                                <small className="text-secondary fw-bold">
                                    DEMO ACCESS
                                </small>

                                <small className="text-success">
                                    ● ONLINE
                                </small>

                            </div>


                            <div className="d-flex justify-content-between">

                                <small className="text-secondary">

                                    Username:

                                    <strong className="text-dark ms-1">
                                        admin
                                    </strong>

                                </small>


                                <small className="text-secondary">

                                    Password:

                                    <strong className="text-dark ms-1">
                                        p
                                    </strong>

                                </small>

                            </div>

                        </div>


                        {/* =====================================
                            FOOTER
                        ====================================== */}
                        <div className="phoenix-footer mt-4">

                            <small>
                                © 2026 Phoenix Softnet
                            </small>

                            <small>
                                Enterprise Platform
                            </small>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Login;