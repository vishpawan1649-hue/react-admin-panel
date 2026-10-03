import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <div className="contact-page">

            {/* =====================================================
                HERO SECTION
            ====================================================== */}
            <section className="container-fluid px-0">

                <div className="contact-hero">

                    <div className="row align-items-center g-5">

                        {/* LEFT CONTENT */}
                        <div className="col-lg-7">

                            <div className="contact-badge">
                                <i className="bi bi-headset-fill me-2"></i>
                                SUPPORT & CONTACT
                            </div>

                            <h1 className="contact-title">
                                We're here to
                                <span> help you.</span>
                            </h1>

                            <p className="contact-description">
                                Have a question, need technical assistance, or
                                want to know more about our enterprise platform?
                                Our team is ready to assist you.
                            </p>

                            <div className="d-flex flex-wrap gap-3 mt-4">

                                <a
                                    href="mailto:admin@example.com"
                                    className="btn contact-primary-btn"
                                >
                                    <i className="bi bi-envelope-fill me-2"></i>
                                    Send Email
                                </a>

                                <a
                                    href="tel:+919876543210"
                                    className="btn contact-outline-btn"
                                >
                                    <i className="bi bi-telephone-fill me-2"></i>
                                    Call Us
                                </a>

                            </div>

                            {/* QUICK INFORMATION */}
                            <div className="row g-3 mt-4">

                                <div className="col-sm-4">

                                    <div className="hero-mini-info">

                                        <i className="bi bi-shield-check"></i>

                                        <div>
                                            <strong>Secure</strong>
                                            <span>Support</span>
                                        </div>

                                    </div>

                                </div>

                                <div className="col-sm-4">

                                    <div className="hero-mini-info">

                                        <i className="bi bi-lightning-charge-fill"></i>

                                        <div>
                                            <strong>Fast</strong>
                                            <span>Response</span>
                                        </div>

                                    </div>

                                </div>

                                <div className="col-sm-4">

                                    <div className="hero-mini-info">

                                        <i className="bi bi-people-fill"></i>

                                        <div>
                                            <strong>Expert</strong>
                                            <span>Team</span>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* RIGHT VISUAL */}
                        <div className="col-lg-5">

                            <div className="contact-hero-visual">

                                <div className="hero-circle circle-one"></div>

                                <div className="hero-circle circle-two"></div>

                                <div className="hero-circle circle-three"></div>


                                {/* MAIN LOGO / ICON */}
                                <div className="contact-main-icon">

                                    <div className="logo-placeholder">
                                        <span style={{fontSize:"40px",fontWeight:800}}>PSTL</span>
                                    </div>

                                    <i className="bi bi-headset-fill"></i>

                                </div>


                                {/* CARD ONE */}
                                <div className="floating-contact-card card-one">

                                    <div className="floating-icon">
                                        <i className="bi bi-envelope-fill"></i>
                                    </div>

                                    <div>
                                        <small>Email Support</small>
                                        <strong>Available</strong>
                                    </div>

                                    <i className="bi bi-check-circle-fill text-success ms-2"></i>

                                </div>


                                {/* CARD TWO */}
                                <div className="floating-contact-card card-two">

                                    <div className="floating-icon">
                                        <i className="bi bi-clock-fill"></i>
                                    </div>

                                    <div>
                                        <small>Response Time</small>
                                        <strong>Within 24 Hours</strong>
                                    </div>

                                </div>


                                {/* CARD THREE */}
                                {/* <div className="floating-contact-card card-three">

                                    <div className="floating-icon">
                                        <i className="bi bi-geo-alt-fill"></i>
                                    </div>

                                    <div>
                                        <small>Location</small>
                                        <strong>India</strong>
                                    </div>

                                </div> */}

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CONTACT INFORMATION
            ====================================================== */}
            <section className="container-fluid px-0 mt-4">

                <div className="row g-4">

                    {/* EMAIL */}
                    <div className="col-xl-4 col-md-6">

                        <div className="contact-info-card">

                            <div className="contact-info-icon email-icon">
                                <i className="bi bi-envelope-fill"></i>
                            </div>

                            <div className="contact-info-content">

                                <span className="contact-label">
                                    EMAIL US
                                </span>

                                <h4>
                                    Email Support
                                </h4>

                                <p>
                                    Send us your questions and our support
                                    team will get back to you.
                                </p>

                                <a href="mailto:admin@example.com">
                                    admin@example.com
                                    <i className="bi bi-arrow-up-right ms-2"></i>
                                </a>

                            </div>

                        </div>

                    </div>


                    {/* PHONE */}
                    <div className="col-xl-4 col-md-6">

                        <div className="contact-info-card">

                            <div className="contact-info-icon phone-icon">
                                <i className="bi bi-telephone-fill"></i>
                            </div>

                            <div className="contact-info-content">

                                <span className="contact-label">
                                    CALL US
                                </span>

                                <h4>
                                    Phone Support
                                </h4>

                                <p>
                                    Speak directly with our support team
                                    for quick assistance.
                                </p>

                                <a href="tel:+919876543210">
                                    +91 9876543210
                                    <i className="bi bi-arrow-up-right ms-2"></i>
                                </a>

                            </div>

                        </div>

                    </div>


                    {/* LOCATION */}
                    <div className="col-xl-4 col-md-12">

                        <div className="contact-info-card">

                            <div className="contact-info-icon location-icon">
                                <i className="bi bi-geo-alt-fill"></i>
                            </div>

                            <div className="contact-info-content">

                                <span className="contact-label">
                                    OUR LOCATION
                                </span>

                                <h4>
                                    Office Address
                                </h4>

                                <p>
                                    Visit our office or send correspondence
                                    to our enterprise operations team.
                                </p>

                                <span className="contact-address">
                                    Vidya Vihar, India
                                    <i className="bi bi-geo-alt-fill ms-2"></i>
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CONTACT FORM + SUPPORT
            ====================================================== */}
            <section className="container-fluid px-0 mt-5">

                <div className="row g-4">

                    {/* CONTACT FORM */}
                    <div className="col-xl-8">

                        <div className="contact-form-card">

                            <div className="section-heading">

                                <div>

                                    <span className="section-small-title">
                                        GET IN TOUCH
                                    </span>

                                    <h2>
                                        Send us a message
                                    </h2>

                                    <p>
                                        Complete the form below and our team
                                        will contact you.
                                    </p>

                                </div>

                                <div className="section-heading-icon">
                                    <i className="bi bi-chat-square-text-fill"></i>
                                </div>

                            </div>


                            <form>

                                <div className="row g-4">

                                    {/* NAME */}
                                    <div className="col-md-6">

                                        <label className="form-label">
                                            Full Name
                                        </label>

                                        <div className="input-wrapper">

                                            <i className="bi bi-person-fill"></i>

                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter your name"
                                            />

                                        </div>

                                    </div>


                                    {/* EMAIL */}
                                    <div className="col-md-6">

                                        <label className="form-label">
                                            Email Address
                                        </label>

                                        <div className="input-wrapper">

                                            <i className="bi bi-envelope-fill"></i>

                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter your email"
                                            />

                                        </div>

                                    </div>


                                    {/* PHONE */}
                                    <div className="col-md-6">

                                        <label className="form-label">
                                            Phone Number
                                        </label>

                                        <div className="input-wrapper">

                                            <i className="bi bi-telephone-fill"></i>

                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="+91 XXXXX XXXXX"
                                            />

                                        </div>

                                    </div>


                                    {/* SUBJECT */}
                                    <div className="col-md-6">

                                        <label className="form-label">
                                            Subject
                                        </label>

                                        <div className="input-wrapper">

                                            <i className="bi bi-bookmark-fill"></i>

                                            <select className="form-select">

                                                <option value="">
                                                    Select Subject
                                                </option>

                                                <option>
                                                    General Enquiry
                                                </option>

                                                <option>
                                                    Technical Support
                                                </option>

                                                <option>
                                                    Account Assistance
                                                </option>

                                                <option>
                                                    Business Enquiry
                                                </option>

                                            </select>

                                        </div>

                                    </div>


                                    {/* PRIORITY */}
                                    <div className="col-md-6">

                                        <label className="form-label">
                                            Priority
                                        </label>

                                        <div className="input-wrapper">

                                            <i className="bi bi-flag-fill"></i>

                                            <select className="form-select">

                                                <option>
                                                    Normal
                                                </option>

                                                <option>
                                                    Low
                                                </option>

                                                <option>
                                                    High
                                                </option>

                                                <option>
                                                    Urgent
                                                </option>

                                            </select>

                                        </div>

                                    </div>


                                    {/* DEPARTMENT */}
                                    <div className="col-md-6">

                                        <label className="form-label">
                                            Department
                                        </label>

                                        <div className="input-wrapper">

                                            <i className="bi bi-diagram-3-fill"></i>

                                            <select className="form-select">

                                                <option>
                                                    Select Department
                                                </option>

                                                <option>
                                                    Administration
                                                </option>

                                                <option>
                                                    Technical
                                                </option>

                                                <option>
                                                    Operations
                                                </option>

                                                <option>
                                                    Support
                                                </option>

                                            </select>

                                        </div>

                                    </div>


                                    {/* MESSAGE */}
                                    <div className="col-12">

                                        <label className="form-label">
                                            Message
                                        </label>

                                        <div className="input-wrapper textarea-wrapper">

                                            <i className="bi bi-chat-left-text-fill"></i>

                                            <textarea
                                                className="form-control"
                                                rows="6"
                                                placeholder="Write your message here..."
                                            ></textarea>

                                        </div>

                                    </div>


                                    {/* ATTACHMENT */}
                                    <div className="col-12">

                                        <label className="form-label">
                                            Attachment
                                        </label>

                                        <div className="attachment-box">

                                            <i className="bi bi-cloud-arrow-up-fill"></i>

                                            <div>

                                                <strong>
                                                    Upload supporting document
                                                </strong>

                                                <span>
                                                    PDF, JPG, PNG up to 5 MB
                                                </span>

                                            </div>

                                            <button
                                                type="button"
                                                className="btn attachment-btn"
                                            >
                                                Browse
                                            </button>

                                        </div>

                                    </div>


                                    {/* FOOTER */}
                                    <div className="col-12">

                                        <div className="form-footer">

                                            <div className="privacy-note">

                                                <i className="bi bi-shield-check"></i>

                                                <span>
                                                    Your information is kept
                                                    secure and confidential.
                                                </span>

                                            </div>

                                            <button
                                                type="submit"
                                                className="btn send-message-btn"
                                            >
                                                <i className="bi bi-send-fill me-2"></i>
                                                Send Message
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            </form>

                        </div>

                    </div>


                    {/* SUPPORT PANEL */}
                    <div className="col-xl-4">

                        <div className="support-panel">

                            <div className="support-panel-header">

                                <div className="support-panel-icon">
                                    <i className="bi bi-life-preserver"></i>
                                </div>

                                <div>

                                    <span>
                                        SUPPORT CENTER
                                    </span>

                                    <h3>
                                        How can we help?
                                    </h3>

                                </div>

                            </div>


                            {/* SUPPORT ITEM */}
                            <div className="support-item">

                                <div className="support-item-icon">
                                    <i className="bi bi-question-circle-fill"></i>
                                </div>

                                <div className="flex-grow-1">

                                    <h5>
                                        General Questions
                                    </h5>

                                    <p>
                                        Get answers about our platform,
                                        services and operations.
                                    </p>

                                </div>

                                <i className="bi bi-chevron-right"></i>

                            </div>


                            {/* SUPPORT ITEM */}
                            <div className="support-item">

                                <div className="support-item-icon">
                                    <i className="bi bi-tools"></i>
                                </div>

                                <div className="flex-grow-1">

                                    <h5>
                                        Technical Support
                                    </h5>

                                    <p>
                                        Need help with a technical issue?
                                        Our team can assist you.
                                    </p>

                                </div>

                                <i className="bi bi-chevron-right"></i>

                            </div>


                            {/* SUPPORT ITEM */}
                            <div className="support-item">

                                <div className="support-item-icon">
                                    <i className="bi bi-shield-lock-fill"></i>
                                </div>

                                <div className="flex-grow-1">

                                    <h5>
                                        Security & Access
                                    </h5>

                                    <p>
                                        Contact us regarding access and
                                        security-related concerns.
                                    </p>

                                </div>

                                <i className="bi bi-chevron-right"></i>

                            </div>


                            {/* SUPPORT ITEM */}
                            <div className="support-item">

                                <div className="support-item-icon">
                                    <i className="bi bi-person-check-fill"></i>
                                </div>

                                <div className="flex-grow-1">

                                    <h5>
                                        Account Assistance
                                    </h5>

                                    <p>
                                        Get assistance with your account
                                        and enterprise access.
                                    </p>

                                </div>

                                <i className="bi bi-chevron-right"></i>

                            </div>


                            {/* AVAILABILITY */}
                            <div className="support-availability">

                                <div className="availability-dot"></div>

                                <div>

                                    <strong>
                                        Support Team Online
                                    </strong>

                                    <span>
                                        Typically responds within 24 hours
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                OFFICE SECTION
            ====================================================== */}
            <section className="container-fluid px-0 mt-5">

                <div className="office-section">

                    <div className="row align-items-center g-5">

                        <div className="col-lg-7">

                            <span className="section-small-title">
                                <i className="bi bi-building me-2"></i>
                                VISIT OUR OFFICE
                            </span>

                            <h2>
                                Let's connect and
                                <span> work together.</span>
                            </h2>

                            <p>
                                Our team is available to discuss your
                                requirements, technical questions, enterprise
                                solutions and business needs.
                            </p>


                            <div className="row g-3 mt-3">

                                <div className="col-md-6">

                                    <div className="office-detail">

                                        <div className="office-detail-icon">
                                            <i className="bi bi-geo-alt-fill"></i>
                                        </div>

                                        <div>

                                            <small>
                                                OFFICE
                                            </small>

                                            <strong>
                                                Vidya Vihar, India
                                            </strong>

                                        </div>

                                    </div>

                                </div>


                                <div className="col-md-6">

                                    <div className="office-detail">

                                        <div className="office-detail-icon">
                                            <i className="bi bi-clock-fill"></i>
                                        </div>

                                        <div>

                                            <small>
                                                WORKING HOURS
                                            </small>

                                            <strong>
                                                Monday - Friday
                                            </strong>

                                            <span>
                                                09:30 AM - 06:30 PM
                                            </span>

                                        </div>

                                    </div>

                                </div>


                                <div className="col-md-6">

                                    <div className="office-detail">

                                        <div className="office-detail-icon">
                                            <i className="bi bi-envelope-fill"></i>
                                        </div>

                                        <div>

                                            <small>
                                                EMAIL
                                            </small>

                                            <strong>
                                                admin@example.com
                                            </strong>

                                        </div>

                                    </div>

                                </div>


                                <div className="col-md-6">

                                    <div className="office-detail">

                                        <div className="office-detail-icon">
                                            <i className="bi bi-telephone-fill"></i>
                                        </div>

                                        <div>

                                            <small>
                                                PHONE
                                            </small>

                                            <strong>
                                                +91 9876543210
                                            </strong>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* MAP */}
                        <div className="col-lg-5">

                            <div className="map-placeholder">

                                <div className="map-grid"></div>

                                <div className="map-road road-one"></div>

                                <div className="map-road road-two"></div>

                                <div className="map-pin">

                                    <div className="pin-pulse"></div>

                                    <i className="bi bi-geo-alt-fill"></i>

                                </div>

                                <div className="map-label">

                                    <i className="bi bi-building-fill"></i>

                                    <div>

                                        <strong>
                                            Phoenix Softnet
                                        </strong>

                                        <span>
                                            Vidya Vihar, India
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                FAQ
            ====================================================== */}
            <section className="container-fluid px-0 mt-5">

                <div className="faq-section">

                    <div className="text-center mb-5">

                        <span className="section-small-title">
                            <i className="bi bi-patch-question-fill me-2"></i>
                            FAQ
                        </span>

                        <h2>
                            Frequently Asked Questions
                        </h2>

                        <p>
                            Find quick answers to common questions.
                        </p>

                    </div>


                    <div className="row g-4">

                        {/* FAQ 1 */}
                        <div className="col-lg-6">

                            <div className="faq-card">

                                <div className="faq-number">
                                    <i className="bi bi-1-circle-fill"></i>
                                </div>

                                <div>

                                    <h5>
                                        How can I contact support?
                                    </h5>

                                    <p>
                                        You can contact our support team by
                                        email or phone using the information
                                        provided above.
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* FAQ 2 */}
                        <div className="col-lg-6">

                            <div className="faq-card">

                                <div className="faq-number">
                                    <i className="bi bi-2-circle-fill"></i>
                                </div>

                                <div>

                                    <h5>
                                        What are your working hours?
                                    </h5>

                                    <p>
                                        Our standard working hours are Monday
                                        to Friday, from 09:30 AM to 06:30 PM.
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* FAQ 3 */}
                        <div className="col-lg-6">

                            <div className="faq-card">

                                <div className="faq-number">
                                    <i className="bi bi-3-circle-fill"></i>
                                </div>

                                <div>

                                    <h5>
                                        How quickly will I receive a response?
                                    </h5>

                                    <p>
                                        Our support team generally responds
                                        to enquiries within 24 hours.
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* FAQ 4 */}
                        <div className="col-lg-6">

                            <div className="faq-card">

                                <div className="faq-number">
                                    <i className="bi bi-4-circle-fill"></i>
                                </div>

                                <div>

                                    <h5>
                                        Can I request technical assistance?
                                    </h5>

                                    <p>
                                        Yes. Select Technical Support in the
                                        contact form and describe your issue.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                FINAL CTA
            ====================================================== */}
            <section className="container-fluid px-0 mt-5 mb-4">

                <div className="contact-cta">

                    <div className="cta-icon">
                        <i className="bi bi-chat-dots-fill"></i>
                    </div>

                    <div className="flex-grow-1">

                        <span>
                            NEED MORE ASSISTANCE?
                        </span>

                        <h3>
                            Our team is ready to help.
                        </h3>

                        <p>
                            Reach out to us and we'll help you find
                            the right solution.
                        </p>

                    </div>

                    <div className="d-flex flex-wrap gap-2">

                        <a
                            href="mailto:admin@example.com"
                            className="btn cta-button"
                        >
                            <i className="bi bi-envelope-fill me-2"></i>
                            Contact Support
                        </a>

                        <a
                            href="tel:+919876543210"
                            className="btn cta-call-button"
                        >
                            <i className="bi bi-telephone-fill me-2"></i>
                            Call Now
                        </a>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default Contact;