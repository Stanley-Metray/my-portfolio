const ContactMe = () => {
    return <div id="contact-me" className="contact-me py-5">
        <h2 className="fw-bold mb-5 text-center">Connect to me</h2>
        <div className="d-flex flex-column flex-md-row justify-content-around align-items-center">
            <div className="d-flex flex-column align-items-center">
                <i className="bi bi-envelope-fill text-danger fs-3"></i>
                <a href="#n/a">stanleymetray@gmail.com</a>
            </div>
            <div className="d-flex flex-column align-items-center mt-3 mt-md-0">
                <i className="bi bi-linkedin text-primary fs-3"></i>
                <a href="https://rb.gy/e687z">linkedin/Stanley Metray</a>
            </div>
            <div className="d-flex flex-column align-items-center mt-3 mt-md-0">
                <i className="bi bi-github fs-3"></i>
                <a href="https://github.com/Stanley-Metray">github/Stanley Metray</a>
            </div>
            <div className="d-flex flex-column align-items-center mt-4 mt-md-0">
                <i className="bi bi-telephone-outbound-fill fs-3 text-success"></i>
                <p className="fs-6 text-primary"><u>+9188067604488</u></p>
            </div>
        </div>
    </div>
}

export default ContactMe;