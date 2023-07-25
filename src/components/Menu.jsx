
const Menu = () => {

    return <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#N/A">Stanley</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-menu-up"></i>
                </button>
                <div className="collapse navbar-collapse d-flex-lg justify-content-lg-end gap-2" id="navbarSupportedContent">
                    <ul className="navbar-nav d-flex gap-2 mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#about-me">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#resume">Download Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}


export default Menu;