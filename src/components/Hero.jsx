import img from "./files/myPic.png";
import "./assets/animation.css";

const Hero = () => {
    return <header className="d-flex justify-content-center flex-column align-items-center">
        <div>
            <div style={{ backgroundImage: `url(${img})` }}></div>
        </div>
        <section className="d-flex flex-column align-items-center">
            <h1 className="display-5 fw-bold animate-charcter">Stanley Metray</h1>
            <div className="one">
                <h1 className="lead fw-bold text-danger">Web Developer</h1>
            </div>
        </section>
    </header>
}

export default Hero;