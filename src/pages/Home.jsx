import React from "react";
import './Home.css';

function Home() {
    return (
        <div className="home-page">

            {/* =========================
                PAGE HEADER
            ========================== */}
            <div className="home-header">

                <div>
                    <div className="home-breadcrumb">
                        Dashboard <span>/</span> Home
                    </div>

                    <h1>Good Morning, Admin 👋</h1>

                    <p>
                        Here's what's happening across your enterprise platform today.
                    </p>
                </div>

                <div className="header-date">
                    <div className="date-icon">◷</div>

                    <div>
                        <span>Today</span>
                        <strong>03 October 2026</strong>
                    </div>
                </div>

            </div>


            {/* =========================
                KPI CARDS
            ========================== */}
            <div className="dashboard-stats">

                <div className="stat-card users-card">

                    <div className="stat-top">
                        <div className="stat-icon">
                            👥
                        </div>

                        <span className="growth positive">
                            +12.5%
                        </span>
                    </div>

                    <div className="stat-content">
                        <span>Total Users</span>

                        <h2>12,480</h2>

                        <p>
                            <b>1,240</b> new users this month
                        </p>
                    </div>

                    <div className="stat-line"></div>

                </div>


                <div className="stat-card project-card">

                    <div className="stat-top">
                        <div className="stat-icon">
                            📊
                        </div>

                        <span className="growth positive">
                            +8.2%
                        </span>
                    </div>

                    <div className="stat-content">
                        <span>Active Projects</span>

                        <h2>248</h2>

                        <p>
                            <b>32</b> projects in progress
                        </p>
                    </div>

                    <div className="stat-line"></div>

                </div>


                <div className="stat-card message-card">

                    <div className="stat-top">
                        <div className="stat-icon">
                            ✉
                        </div>

                        <span className="growth positive">
                            +18.7%
                        </span>
                    </div>

                    <div className="stat-content">
                        <span>Total Messages</span>

                        <h2>8,642</h2>

                        <p>
                            <b>426</b> unread messages
                        </p>
                    </div>

                    <div className="stat-line"></div>

                </div>


                <div className="stat-card revenue-card">

                    <div className="stat-top">
                        <div className="stat-icon">
                            ₹
                        </div>

                        <span className="growth positive">
                            +15.4%
                        </span>
                    </div>

                    <div className="stat-content">
                        <span>Monthly Revenue</span>

                        <h2>₹8.42L</h2>

                        <p>
                            <b>₹1.24L</b> increased this month
                        </p>
                    </div>

                    <div className="stat-line"></div>

                </div>

            </div>


            {/* =========================
                MAIN DASHBOARD GRID
            ========================== */}
            <div className="dashboard-grid">

                {/* =========================
                    PERFORMANCE
                ========================== */}
                <div className="dashboard-panel performance-panel">

                    <div className="panel-header">

                        <div>
                            <h3>Performance Overview</h3>
                            <p>Monthly platform performance</p>
                        </div>

                        <select className="period-select">
                            <option>Last 7 Days</option>
                            <option>Last 30 Days</option>
                            <option>Last 6 Months</option>
                            <option>This Year</option>
                        </select>

                    </div>


                    <div className="chart-container">

                        <div className="chart-y-axis">
                            <span>100%</span>
                            <span>75%</span>
                            <span>50%</span>
                            <span>25%</span>
                            <span>0%</span>
                        </div>

                        <div className="chart-area">

                            <div className="chart-grid-line"></div>
                            <div className="chart-grid-line"></div>
                            <div className="chart-grid-line"></div>
                            <div className="chart-grid-line"></div>
                            <div className="chart-grid-line"></div>

                            <svg
                                className="performance-chart"
                                viewBox="0 0 700 260"
                                preserveAspectRatio="none"
                            >

                                <defs>

                                    <linearGradient
                                        id="chartFill"
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                    >

                                        <stop
                                            offset="0%"
                                            stopOpacity="0.25"
                                        />

                                        <stop
                                            offset="100%"
                                            stopOpacity="0"
                                        />

                                    </linearGradient>

                                </defs>

                                <path
                                    className="chart-area-fill"
                                    d="
                                    M0 205
                                    C50 185 75 190 110 165
                                    C145 140 160 160 200 135
                                    C245 108 260 135 300 112
                                    C345 88 360 108 400 82
                                    C445 55 465 80 505 60
                                    C545 38 565 58 605 35
                                    C640 20 670 30 700 15
                                    L700 260
                                    L0 260
                                    Z
                                    "
                                />

                                <path
                                    className="chart-line"
                                    d="
                                    M0 205
                                    C50 185 75 190 110 165
                                    C145 140 160 160 200 135
                                    C245 108 260 135 300 112
                                    C345 88 360 108 400 82
                                    C445 55 465 80 505 60
                                    C545 38 565 58 605 35
                                    C640 20 670 30 700 15
                                    "
                                />

                                <circle
                                    cx="605"
                                    cy="35"
                                    r="6"
                                    className="chart-point"
                                />

                            </svg>

                            <div className="chart-labels">
                                <span>Mon</span>
                                <span>Tue</span>
                                <span>Wed</span>
                                <span>Thu</span>
                                <span>Fri</span>
                                <span>Sat</span>
                                <span>Sun</span>
                            </div>

                        </div>

                    </div>


                    <div className="chart-summary">

                        <div>
                            <span>Average Performance</span>
                            <strong>84.6%</strong>
                        </div>

                        <div>
                            <span>Growth</span>
                            <strong className="green-text">
                                +12.8%
                            </strong>
                        </div>

                        <div>
                            <span>Peak</span>
                            <strong>96.4%</strong>
                        </div>

                    </div>

                </div>


                {/* =========================
                    SYSTEM STATUS
                ========================== */}
                <div className="dashboard-panel system-panel">

                    <div className="panel-header">

                        <div>
                            <h3>System Status</h3>
                            <p>Live infrastructure health</p>
                        </div>

                        <span className="status-live">
                            ● LIVE
                        </span>

                    </div>


                    <div className="system-status-list">

                        <div className="system-item">

                            <div className="system-item-left">
                                <div className="system-icon">
                                    ◉
                                </div>

                                <div>
                                    <strong>Application Server</strong>
                                    <span>Production Environment</span>
                                </div>
                            </div>

                            <div className="system-ok">
                                <i></i>
                                Operational
                            </div>

                        </div>


                        <div className="system-item">

                            <div className="system-item-left">
                                <div className="system-icon">
                                    ◈
                                </div>

                                <div>
                                    <strong>Database</strong>
                                    <span>Oracle Database</span>
                                </div>
                            </div>

                            <div className="system-ok">
                                <i></i>
                                Operational
                            </div>

                        </div>


                        <div className="system-item">

                            <div className="system-item-left">
                                <div className="system-icon">
                                    ⇄
                                </div>

                                <div>
                                    <strong>API Services</strong>
                                    <span>REST API Gateway</span>
                                </div>
                            </div>

                            <div className="system-ok">
                                <i></i>
                                Operational
                            </div>

                        </div>


                        <div className="system-item">

                            <div className="system-item-left">
                                <div className="system-icon">
                                    ☁
                                </div>

                                <div>
                                    <strong>Cloud Storage</strong>
                                    <span>File Storage Service</span>
                                </div>
                            </div>

                            <div className="system-warning">
                                <i></i>
                                98.2%
                            </div>

                        </div>

                    </div>


                    <div className="system-footer">

                        <span>
                            Last checked 12 seconds ago
                        </span>

                        <button>
                            View Details →
                        </button>

                    </div>

                </div>

            </div>


            {/* =========================
                SECOND ROW
            ========================== */}
            <div className="dashboard-grid second-row">


                {/* =========================
                    PROJECTS
                ========================== */}
                <div className="dashboard-panel projects-panel">

                    <div className="panel-header">

                        <div>
                            <h3>Active Projects</h3>
                            <p>Current project progress</p>
                        </div>

                        <button className="view-all-btn">
                            View All →
                        </button>

                    </div>


                    <div className="project-list">

                        <div className="project-row">

                            <div className="project-info">

                                <div className="project-avatar blue">
                                    AI
                                </div>

                                <div>
                                    <strong>
                                        AI Analytics Platform
                                    </strong>

                                    <span>
                                        Development Team
                                    </span>
                                </div>

                            </div>

                            <div className="project-progress">

                                <div className="progress-info">
                                    <span>82%</span>
                                </div>

                                <div className="progress-bar">
                                    <div
                                        className="progress-value"
                                        style={{ width: "82%" }}
                                    ></div>
                                </div>

                            </div>

                            <span className="project-status active">
                                Active
                            </span>

                        </div>


                        <div className="project-row">

                            <div className="project-info">

                                <div className="project-avatar purple">
                                    AP
                                </div>

                                <div>
                                    <strong>
                                        Acquisition Portal
                                    </strong>

                                    <span>
                                        Operations Team
                                    </span>
                                </div>

                            </div>

                            <div className="project-progress">

                                <div className="progress-info">
                                    <span>67%</span>
                                </div>

                                <div className="progress-bar">
                                    <div
                                        className="progress-value"
                                        style={{ width: "67%" }}
                                    ></div>
                                </div>

                            </div>

                            <span className="project-status active">
                                Active
                            </span>

                        </div>


                        <div className="project-row">

                            <div className="project-info">

                                <div className="project-avatar orange">
                                    FD
                                </div>

                                <div>
                                    <strong>
                                        Freedom Finance
                                    </strong>

                                    <span>
                                        Finance Team
                                    </span>
                                </div>

                            </div>

                            <div className="project-progress">

                                <div className="progress-info">
                                    <span>48%</span>
                                </div>

                                <div className="progress-bar">
                                    <div
                                        className="progress-value"
                                        style={{ width: "48%" }}
                                    ></div>
                                </div>

                            </div>

                            <span className="project-status pending">
                                Pending
                            </span>

                        </div>


                        <div className="project-row">

                            <div className="project-info">

                                <div className="project-avatar green">
                                    AD
                                </div>

                                <div>
                                    <strong>
                                        Auction Drive
                                    </strong>

                                    <span>
                                        Legal Team
                                    </span>
                                </div>

                            </div>

                            <div className="project-progress">

                                <div className="progress-info">
                                    <span>91%</span>
                                </div>

                                <div className="progress-bar">
                                    <div
                                        className="progress-value"
                                        style={{ width: "91%" }}
                                    ></div>
                                </div>

                            </div>

                            <span className="project-status active">
                                Active
                            </span>

                        </div>

                    </div>

                </div>


                {/* =========================
                    QUICK ACTIONS
                ========================== */}
                <div className="dashboard-panel quick-panel">

                    <div className="panel-header">

                        <div>
                            <h3>Quick Actions</h3>
                            <p>Frequently used operations</p>
                        </div>

                    </div>


                    <div className="quick-actions">

                        <button className="quick-action">

                            <div className="quick-icon blue-bg">
                                +
                            </div>

                            <div>
                                <strong>Create Project</strong>
                                <span>Start a new project</span>
                            </div>

                            <b>→</b>

                        </button>


                        <button className="quick-action">

                            <div className="quick-icon purple-bg">
                                +
                            </div>

                            <div>
                                <strong>Add User</strong>
                                <span>Create user account</span>
                            </div>

                            <b>→</b>

                        </button>


                        <button className="quick-action">

                            <div className="quick-icon orange-bg">
                                ↑
                            </div>

                            <div>
                                <strong>Upload Document</strong>
                                <span>Add new documents</span>
                            </div>

                            <b>→</b>

                        </button>


                        <button className="quick-action">

                            <div className="quick-icon green-bg">
                                ✓
                            </div>

                            <div>
                                <strong>Review Requests</strong>
                                <span>12 requests pending</span>
                            </div>

                            <b>→</b>

                        </button>

                    </div>

                </div>

            </div>


            {/* =========================
                THIRD ROW
            ========================== */}
            <div className="dashboard-grid third-row">


                {/* =========================
                    RECENT ACTIVITY
                ========================== */}
                <div className="dashboard-panel activity-panel">

                    <div className="panel-header">

                        <div>
                            <h3>Recent Activity</h3>
                            <p>Latest actions from your workspace</p>
                        </div>

                        <button className="view-all-btn">
                            View All →
                        </button>

                    </div>


                    <div className="activity-list">

                        <div className="activity-item">

                            <div className="activity-avatar">
                                AK
                            </div>

                            <div className="activity-content">

                                <p>
                                    <strong>Arun Kumar</strong>{" "}
                                    created a new project
                                    <b> "AI Analytics Platform"</b>
                                </p>

                                <span>
                                    12 minutes ago
                                </span>

                            </div>

                            <div className="activity-type">
                                Project
                            </div>

                        </div>


                        <div className="activity-item">

                            <div className="activity-avatar">
                                RS
                            </div>

                            <div className="activity-content">

                                <p>
                                    <strong>Rahul Sharma</strong>{" "}
                                    uploaded a new document
                                    <b> "Monthly Report.pdf"</b>
                                </p>

                                <span>
                                    35 minutes ago
                                </span>

                            </div>

                            <div className="activity-type document">
                                Document
                            </div>

                        </div>


                        <div className="activity-item">

                            <div className="activity-avatar">
                                PS
                            </div>

                            <div className="activity-content">

                                <p>
                                    <strong>Priya Singh</strong>{" "}
                                    completed project
                                    <b> "Auction Drive"</b>
                                </p>

                                <span>
                                    1 hour ago
                                </span>

                            </div>

                            <div className="activity-type success">
                                Completed
                            </div>

                        </div>


                        <div className="activity-item">

                            <div className="activity-avatar">
                                VM
                            </div>

                            <div className="activity-content">

                                <p>
                                    <strong>Vikas Mehta</strong>{" "}
                                    added a new team member
                                    <b> "Neha Verma"</b>
                                </p>

                                <span>
                                    2 hours ago
                                </span>

                            </div>

                            <div className="activity-type user">
                                User
                            </div>

                        </div>

                    </div>

                </div>


                {/* =========================
                    TEAM
                ========================== */}
                <div className="dashboard-panel team-panel">

                    <div className="panel-header">

                        <div>
                            <h3>Team Members</h3>
                            <p>Active members</p>
                        </div>

                        <span className="team-count">
                            24 Members
                        </span>

                    </div>


                    <div className="team-members">

                        <div className="team-member">

                            <div className="team-avatar">
                                AK
                                <i></i>
                            </div>

                            <div>
                                <strong>Arun Kumar</strong>
                                <span>Project Manager</span>
                            </div>

                        </div>


                        <div className="team-member">

                            <div className="team-avatar">
                                RS
                                <i></i>
                            </div>

                            <div>
                                <strong>Rahul Sharma</strong>
                                <span>Senior Developer</span>
                            </div>

                        </div>


                        <div className="team-member">

                            <div className="team-avatar">
                                PS
                                <i></i>
                            </div>

                            <div>
                                <strong>Priya Singh</strong>
                                <span>UI/UX Designer</span>
                            </div>

                        </div>


                        <div className="team-member">

                            <div className="team-avatar">
                                VM
                                <i></i>
                            </div>

                            <div>
                                <strong>Vikas Mehta</strong>
                                <span>Backend Developer</span>
                            </div>

                        </div>

                    </div>


                    <button className="manage-team-btn">
                        Manage Team →
                    </button>

                </div>

            </div>


            {/* =========================
                BOTTOM BANNER
            ========================== */}
            <div className="dashboard-banner">

                <div className="banner-decoration one"></div>
                <div className="banner-decoration two"></div>

                <div className="banner-content">

                    <div className="banner-icon">
                        ✦
                    </div>

                    <div>

                        <h3>
                            Enterprise Management Platform
                        </h3>

                        <p>
                            Manage your operations, projects, users and
                            business intelligence from one centralized workspace.
                        </p>

                    </div>

                </div>

                <button className="banner-button">
                    Explore Platform →
                </button>

            </div>

        </div>
    );
}

export default Home;