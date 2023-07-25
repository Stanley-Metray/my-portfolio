import c1 from "../certificates/Udemy-Full-Stack.jpg";
import c2 from "../certificates/FreeCodeCampAlgorithms.png";

const AboutMe = () => {
    return <>
        <div id="about-me" className="about-me">
            <p>Hello thank you for visiting my portfolio, I'm <strong>Stanley Metray</strong>, a passionate and ambitious web developer. As a fresher in the field of web development, I'm thrilled to present my portfolio that showcases my growing skills and dedication to creating exceptional web experiences. Here are the technologies I specialize in:</p>

            <h1 className="fs-6 fw-bold">HTML5, CSS3, and JavaScript - Building the Foundation:</h1>
            <p>Proficient in the trio of web development, I create visually appealing and responsive websites using HTML5, CSS3, and JavaScript. From crafting elegant layouts to implementing dynamic features, I strive to provide a seamless user experience across all devices.</p>

            <h1 className="fs-6 fw-bold">React.js - Interactive and Modern Frontend:</h1>
            <p>I have a strong command of React.js, which enables me to build interactive and modern user interfaces. With a component-based approach, I develop efficient and reusable UI elements that enhance the performance and functionality of web applications.</p>

            <h1 className="fs-6 fw-bold">Bootstrap - Responsive Design Made Easy:</h1>
            <p>Utilizing Bootstrap, I design websites with a mobile-first approach, ensuring they look stunning on various devices. By leveraging Bootstrap's grid system and pre-designed components, I create visually appealing and user-friendly interfaces.</p>

            <h1 className="fs-6 fw-bold">Node.js & Express.js - Powering the Backend:</h1>
            <p>Familiar with Node.js and Express.js, I dive into backend development to build robust and scalable server-side applications. With a focus on data management and security, I ensure seamless communication between the frontend and backend.</p>

            <h1 className="fs-6 fw-bold">MongoDB - Efficient Database Solutions:</h1>
            <p>I have hands-on experience with MongoDB, a powerful NoSQL database, allowing me to design and implement efficient database solutions for web applications. This ensures data is managed effectively and applications perform optimally.</p>

            <p>I am enthusiastic about tackling challenges and learning new technologies to stay at the forefront of web development. My portfolio showcases a variety of projects where I've applied my skills to solve problems and deliver compelling solutions.</p>
            <p>As a fresher, I'm eager to collaborate and contribute to innovative projects. If you are interested in working together or have any inquiries, please feel free to reach out to me via email. Thank you for visiting my portfolio, and scroll down to explore more about me and my projects.</p>
            <div className="certificates">
                <h2 className="fw-bold text-white my-5">Certificates</h2>
                <div className="row">
                    <div className="col-md-6">
                        <img src={c1} alt="Udemy" />
                        <button onClick={()=>{window.location="https://www.udemy.com/certificate/UC-5e28cd3c-8aa4-4c04-b544-5da0868a0ea1"}} ><span>Show credential</span><i></i></button>
                    </div>
                    <div className="col-md-6 mt-3 mt-md-0">
                        <img src={c2} alt="FreeCodeCamp" />
                        <button onClick={()=>{window.location="https://www.freecodecamp.org/certification/Stanley-Metray/javascript-algorithms-and-data-structures"}}><span>Show credential</span><i></i></button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default AboutMe;