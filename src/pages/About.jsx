import React from "react";
import "./About.css";

function About() {

    return (
        <div className="container-fluid py-3">

            {/* =====================================================
                HERO SECTION
            ====================================================== */}
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden about-hero mb-4">

                <div className="card-body p-4 p-lg-5">

                    <div className="row align-items-center">

                        <div className="col-12 col-xl-7">

                            <span className="badge rounded-pill bg-primary-subtle text-primary px-3 py-2 mb-3">
                                <i className="bi bi-stars me-1"></i>
                                ABOUT PHOENIX SOFTNET
                            </span>

                            <h1 className="display-5 fw-bold text-dark mb-3">
                                Building smarter
                                <span className="text-primary">
                                    {" "}digital experiences
                                </span>
                                for modern enterprises.
                            </h1>

                            <p className="lead text-secondary mb-4">
                                Phoenix Softnet is an enterprise technology
                                platform focused on creating secure,
                                scalable and intelligent solutions that
                                simplify complex business operations.
                            </p>

                            <div className="d-flex flex-wrap gap-2">

                                <button className="btn btn-primary rounded-pill px-4">
                                    Explore Platform
                                    <i className="bi bi-arrow-right ms-2"></i>
                                </button>

                                <button className="btn btn-outline-dark rounded-pill px-4">
                                    <i className="bi bi-play-circle me-2"></i>
                                    Learn More
                                </button>

                            </div>

                        </div>


                        {/* HERO VISUAL */}
                        <div className="col-12 col-xl-5 mt-5 mt-xl-0">

                            <div className="about-hero-visual">

                                <div className="hero-circle circle-one"></div>
                                <div className="hero-circle circle-two"></div>

                                <div className="hero-dashboard-card">

                                    <div className="d-flex
                                        justify-content-between
                                        align-items-center
                                        mb-4">

                                        <div>

                                            <small className="text-secondary">
                                                Enterprise Overview
                                            </small>

                                            <h5 className="fw-bold mb-0">
                                                Platform Analytics
                                            </h5>

                                        </div>

                                        <span className="badge bg-success-subtle text-success">
                                            Live
                                        </span>

                                    </div>


                                    <div className="row g-2 mb-3">

                                        <div className="col-6">

                                            <div className="mini-stat">

                                                <small>
                                                    Users
                                                </small>

                                                <strong>
                                                    12.4K
                                                </strong>

                                                <span className="text-success">
                                                    +12.5%
                                                </span>

                                            </div>

                                        </div>

                                        <div className="col-6">

                                            <div className="mini-stat">

                                                <small>
                                                    Projects
                                                </small>

                                                <strong>
                                                    248
                                                </strong>

                                                <span className="text-success">
                                                    +8.2%
                                                </span>

                                            </div>

                                        </div>

                                    </div>


                                    <div className="mini-chart">

                                        <div style={{ height: "35%" }}></div>
                                        <div style={{ height: "48%" }}></div>
                                        <div style={{ height: "43%" }}></div>
                                        <div style={{ height: "65%" }}></div>
                                        <div style={{ height: "58%" }}></div>
                                        <div style={{ height: "80%" }}></div>
                                        <div style={{ height: "94%" }}></div>

                                    </div>


                                    <div className="d-flex
                                        justify-content-between
                                        mt-3">

                                        <small className="text-secondary">
                                            Platform Growth
                                        </small>

                                        <strong className="text-primary">
                                            94.6%
                                        </strong>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* =====================================================
                INTRODUCTION
            ====================================================== */}
            <div className="row g-4 mb-4">

                <div className="col-12 col-lg-7">

                    <div className="card border-0 shadow-sm rounded-4 h-100">

                        <div className="card-body p-4 p-lg-5">

                            <span className="text-primary fw-semibold small">
                                WHO WE ARE
                            </span>

                            <h2 className="fw-bold mt-2 mb-3">
                                Technology that works around your business.
                            </h2>

                            <p className="text-secondary">
                                Phoenix Softnet is designed around a simple
                                principle: technology should make business
                                operations easier, faster and more transparent.
                            </p>

                            <p className="text-secondary">
                                Our platform brings together business
                                operations, information management,
                                automation, analytics and intelligent
                                workflows into a centralized environment.
                            </p>

                            <p className="text-secondary mb-0">
                                From day-to-day administration to enterprise
                                reporting and intelligent decision support,
                                the platform is designed to provide teams
                                with the information they need when they
                                need it.
                            </p>

                        </div>

                    </div>

                </div>


                <div className="col-12 col-lg-5">

                    <div className="card border-0 shadow-sm rounded-4 h-100 bg-primary text-white">

                        <div className="card-body p-4 p-lg-5">

                            <div className="about-large-icon mb-4">
                                <i className="bi bi-bullseye"></i>
                            </div>

                            <h3 className="fw-bold">
                                Our Purpose
                            </h3>

                            <p className="text-white-50 mt-3">
                                To create reliable digital platforms that
                                connect people, processes, information and
                                intelligent technology.
                            </p>

                            <div className="border-top border-white border-opacity-25 mt-4 pt-4">

                                <div className="d-flex align-items-center">

                                    <i className="bi bi-check-circle-fill me-2"></i>

                                    <span>
                                        Secure business workflows
                                    </span>

                                </div>

                                <div className="d-flex align-items-center mt-3">

                                    <i className="bi bi-check-circle-fill me-2"></i>

                                    <span>
                                        Data-driven operations
                                    </span>

                                </div>

                                <div className="d-flex align-items-center mt-3">

                                    <i className="bi bi-check-circle-fill me-2"></i>

                                    <span>
                                        Intelligent automation
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* =====================================================
                STATS
            ====================================================== */}
            <div className="row g-3 mb-4">

                <div className="col-6 col-lg-3">

                    <div className="card border-0 shadow-sm rounded-4 text-center h-100">

                        <div className="card-body py-4">

                            <i className="bi bi-people text-primary fs-2"></i>

                            <h2 className="fw-bold mt-2 mb-1">
                                12K+
                            </h2>

                            <small className="text-secondary">
                                Platform Users
                            </small>

                        </div>

                    </div>

                </div>


                <div className="col-6 col-lg-3">

                    <div className="card border-0 shadow-sm rounded-4 text-center h-100">

                        <div className="card-body py-4">

                            <i className="bi bi-kanban text-success fs-2"></i>

                            <h2 className="fw-bold mt-2 mb-1">
                                248+
                            </h2>

                            <small className="text-secondary">
                                Active Projects
                            </small>

                        </div>

                    </div>

                </div>


                <div className="col-6 col-lg-3">

                    <div className="card border-0 shadow-sm rounded-4 text-center h-100">

                        <div className="card-body py-4">

                            <i className="bi bi-building text-warning fs-2"></i>

                            <h2 className="fw-bold mt-2 mb-1">
                                50+
                            </h2>

                            <small className="text-secondary">
                                Enterprise Workflows
                            </small>

                        </div>

                    </div>

                </div>


                <div className="col-6 col-lg-3">

                    <div className="card border-0 shadow-sm rounded-4 text-center h-100">

                        <div className="card-body py-4">

                            <i className="bi bi-activity text-danger fs-2"></i>

                            <h2 className="fw-bold mt-2 mb-1">
                                99.9%
                            </h2>

                            <small className="text-secondary">
                                Platform Availability
                            </small>

                        </div>

                    </div>

                </div>

            </div>


            {/* =====================================================
                MISSION / VISION / VALUES
            ====================================================== */}
            <div className="row g-4 mb-4">

                <div className="col-12 col-md-4">

                    <div className="card border-0 shadow-sm rounded-4
                        h-100 about-feature-card">

                        <div className="card-body p-4">

                            <div className="feature-icon bg-primary bg-opacity-10 text-primary">
                                <i className="bi bi-compass"></i>
                            </div>

                            <h4 className="fw-bold mt-4">
                                Our Mission
                            </h4>

                            <p className="text-secondary mb-0">
                                Simplify complex enterprise operations
                                through technology, automation and
                                connected digital workflows.
                            </p>

                        </div>

                    </div>

                </div>


                <div className="col-12 col-md-4">

                    <div className="card border-0 shadow-sm rounded-4
                        h-100 about-feature-card">

                        <div className="card-body p-4">

                            <div className="feature-icon bg-success bg-opacity-10 text-success">
                                <i className="bi bi-eye"></i>
                            </div>

                            <h4 className="fw-bold mt-4">
                                Our Vision
                            </h4>

                            <p className="text-secondary mb-0">
                                Build intelligent enterprise platforms
                                where information, people and technology
                                work together seamlessly.
                            </p>

                        </div>

                    </div>

                </div>


                <div className="col-12 col-md-4">

                    <div className="card border-0 shadow-sm rounded-4
                        h-100 about-feature-card">

                        <div className="card-body p-4">

                            <div className="feature-icon bg-warning bg-opacity-10 text-warning">
                                <i className="bi bi-heart"></i>
                            </div>

                            <h4 className="fw-bold mt-4">
                                Our Values
                            </h4>

                            <p className="text-secondary mb-0">
                                Reliability, transparency, innovation,
                                security and continuous improvement
                                guide the way we build.
                            </p>

                        </div>

                    </div>

                </div>

            </div>


            {/* =====================================================
                PLATFORM CAPABILITIES
            ====================================================== */}
            <div className="card border-0 shadow-sm rounded-4 mb-4">

                <div className="card-body p-4 p-lg-5">

                    <div className="text-center mb-5">

                        <span className="text-primary fw-semibold small">
                            PLATFORM CAPABILITIES
                        </span>

                        <h2 className="fw-bold mt-2">
                            Everything connected in one platform
                        </h2>

                        <p className="text-secondary mx-auto"
                            style={{ maxWidth: "650px" }}>
                            A modern enterprise architecture designed
                            to bring business operations and technology
                            together.
                        </p>

                    </div>


                    <div className="row g-4">

                        {[
                            {
                                icon: "bi-speedometer2",
                                title: "Operations",
                                text: "Centralized management for everyday business operations."
                            },
                            {
                                icon: "bi-database",
                                title: "Data Management",
                                text: "Organize, manage and access business information efficiently."
                            },
                            {
                                icon: "bi-robot",
                                title: "Artificial Intelligence",
                                text: "Use intelligent technologies to automate and improve workflows."
                            },
                            {
                                icon: "bi-bar-chart-line",
                                title: "Analytics",
                                text: "Transform operational data into meaningful insights."
                            },
                            {
                                icon: "bi-shield-check",
                                title: "Security",
                                text: "Designed with controlled access and secure enterprise workflows."
                            },
                            {
                                icon: "bi-cloud",
                                title: "Cloud Ready",
                                text: "Flexible architecture prepared for modern cloud environments."
                            }
                        ].map((item, index) => (

                            <div
                                className="col-12 col-sm-6 col-lg-4"
                                key={index}
                            >

                                <div className="d-flex
                                    align-items-start
                                    about-capability">

                                    <div className="feature-icon
                                        bg-primary
                                        bg-opacity-10
                                        text-primary
                                        flex-shrink-0">

                                        <i className={`bi ${item.icon}`}></i>

                                    </div>

                                    <div className="ms-3">

                                        <h5 className="fw-bold mb-2">
                                            {item.title}
                                        </h5>

                                        <p className="text-secondary small mb-0">
                                            {item.text}
                                        </p>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>


            {/* =====================================================
                TECHNOLOGY STACK
            ====================================================== */}
            <div className="row g-4 mb-4">

                <div className="col-12 col-lg-6">

                    <div className="card border-0 shadow-sm rounded-4 h-100">

                        <div className="card-body p-4 p-lg-5">

                            <span className="text-primary fw-semibold small">
                                TECHNOLOGY
                            </span>

                            <h3 className="fw-bold mt-2 mb-4">
                                Built with modern technologies
                            </h3>

                            <div className="row g-3">

                                <div className="col-6">

                                    <div className="technology-item">

                                        <i className="bi bi-filetype-jsx text-primary"></i>

                                        <div>
                                            <strong>React JS</strong>
                                            <small>Frontend</small>
                                        </div>

                                    </div>

                                </div>


                                <div className="col-6">

                                    <div className="technology-item">

                                        <i className="bi bi-node-plus text-success"></i>

                                        <div>
                                            <strong>Node.js</strong>
                                            <small>Backend</small>
                                        </div>

                                    </div>

                                </div>


                                <div className="col-6">

                                    <div className="technology-item">

                                        <i className="bi bi-filetype-py text-warning"></i>

                                        <div>
                                            <strong>Python</strong>
                                            <small>AI / Services</small>
                                        </div>

                                    </div>

                                </div>


                                <div className="col-6">

                                    <div className="technology-item">

                                        <i className="bi bi-database text-danger"></i>

                                        <div>
                                            <strong>Oracle</strong>
                                            <small>Database</small>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                <div className="col-12 col-lg-6">

                    <div className="card border-0 shadow-sm rounded-4 h-100">

                        <div className="card-body p-4 p-lg-5">

                            <span className="text-primary fw-semibold small">
                                ENGINEERING
                            </span>

                            <h3 className="fw-bold mt-2 mb-4">
                                Designed for enterprise scale
                            </h3>


                            <div className="mb-4">

                                <div className="d-flex
                                    justify-content-between mb-2">

                                    <span className="small fw-semibold">
                                        Platform Reliability
                                    </span>

                                    <span className="small text-success">
                                        99.9%
                                    </span>

                                </div>

                                <div className="progress"
                                    style={{ height: "8px" }}>

                                    <div
                                        className="progress-bar bg-success"
                                        style={{ width: "99.9%" }}
                                    ></div>

                                </div>

                            </div>


                            <div className="mb-4">

                                <div className="d-flex
                                    justify-content-between mb-2">

                                    <span className="small fw-semibold">
                                        Data Availability
                                    </span>

                                    <span className="small text-primary">
                                        98.7%
                                    </span>

                                </div>

                                <div className="progress"
                                    style={{ height: "8px" }}>

                                    <div
                                        className="progress-bar"
                                        style={{ width: "98.7%" }}
                                    ></div>

                                </div>

                            </div>


                            <div>

                                <div className="d-flex
                                    justify-content-between mb-2">

                                    <span className="small fw-semibold">
                                        Automation Coverage
                                    </span>

                                    <span className="small text-warning">
                                        87.4%
                                    </span>

                                </div>

                                <div className="progress"
                                    style={{ height: "8px" }}>

                                    <div
                                        className="progress-bar bg-warning"
                                        style={{ width: "87.4%" }}
                                    ></div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* =====================================================
                JOURNEY / TIMELINE
            ====================================================== */}
            <div className="card border-0 shadow-sm rounded-4 mb-4">

                <div className="card-body p-4 p-lg-5">

                    <div className="text-center mb-5">

                        <span className="text-primary fw-semibold small">
                            OUR JOURNEY
                        </span>

                        <h2 className="fw-bold mt-2">
                            From idea to enterprise platform
                        </h2>

                    </div>


                    <div className="row g-4">

                        <div className="col-12 col-md-3">

                            <div className="timeline-step">

                                <div className="timeline-number">
                                    01
                                </div>

                                <h5 className="fw-bold mt-3">
                                    Foundation
                                </h5>

                                <p className="text-secondary small">
                                    Building the foundation for reliable
                                    enterprise software.
                                </p>

                            </div>

                        </div>


                        <div className="col-12 col-md-3">

                            <div className="timeline-step">

                                <div className="timeline-number">
                                    02
                                </div>

                                <h5 className="fw-bold mt-3">
                                    Expansion
                                </h5>

                                <p className="text-secondary small">
                                    Expanding workflows and connecting
                                    business operations.
                                </p>

                            </div>

                        </div>


                        <div className="col-12 col-md-3">

                            <div className="timeline-step">

                                <div className="timeline-number">
                                    03
                                </div>

                                <h5 className="fw-bold mt-3">
                                    Intelligence
                                </h5>

                                <p className="text-secondary small">
                                    Introducing analytics, automation
                                    and intelligent capabilities.
                                </p>

                            </div>

                        </div>


                        <div className="col-12 col-md-3">

                            <div className="timeline-step">

                                <div className="timeline-number">
                                    04
                                </div>

                                <h5 className="fw-bold mt-3">
                                    Enterprise
                                </h5>

                                <p className="text-secondary small">
                                    Creating a connected platform for
                                    modern enterprise operations.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* =====================================================
                CTA
            ====================================================== */}
            <div className="card border-0 shadow-sm rounded-4
                bg-dark text-white overflow-hidden">

                <div className="card-body p-4 p-lg-5">

                    <div className="row align-items-center">

                        <div className="col-12 col-lg-8">

                            <span className="badge bg-primary rounded-pill mb-3">
                                PHOENIX SOFTNET
                            </span>

                            <h2 className="fw-bold mb-2">
                                Operations • Information • Control
                            </h2>

                            <p className="text-white-50 mb-0">
                                One centralized platform for managing
                                modern enterprise operations.
                            </p>

                        </div>

                        <div className="col-12 col-lg-4 mt-4 mt-lg-0">

                            <div className="d-flex
                                flex-column
                                flex-sm-row
                                flex-lg-column
                                gap-2">

                                <button className="btn btn-primary
                                    rounded-pill">
                                    Explore Dashboard
                                    <i className="bi bi-arrow-right ms-2"></i>
                                </button>

                                <button className="btn btn-outline-light
                                    rounded-pill">
                                    Contact Us
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default About;