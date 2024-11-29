import resume from "./images/Standli-Metray-Resume.jpg"; 
import resumePDF from "./files/Standli-Metray-Resume.pdf";

const Resume = () => {
    return <div id="resume" className="resume py-5 d-flex flex-column gap-3 align-items-center">
        <h2 className="fw-bold">My Resume</h2>
        <img src={resume} className="img-fluid rounded" alt="resume.img"></img>
        <a className="btn btn-primary mt-3" href={resumePDF} download={true}>Download Resume</a>
    </div>
}

export default Resume;