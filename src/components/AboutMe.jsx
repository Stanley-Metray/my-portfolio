import c1 from "../certificates/Udemy-Full-Stack.jpg";
import c2 from "../certificates/FreeCodeCampAlgorithms.png";

const AboutMe = () => {
    return <>
        <div id="about-me" className="about-me">
            <p>Hello, and thank you for visiting my portfolio! I’m <strong>Stanley Metray</strong>, a passionate and eager web developer. As I begin my journey in the field of web development, I’m excited to share my portfolio, which highlights the skills I’ve developed so far and my commitment to learning and creating meaningful web experiences. Below are the technologies I’m working with:</p>

            <h1 className="fs-6 fw-bold">HTML5, CSS3, and JavaScript - Building the Foundation:</h1>
            <p>Skilled in creating visually appealing and responsive websites using HTML5, CSS3, and JavaScript. I focus on crafting elegant layouts and dynamic features to ensure a smooth user experience across various devices.</p>

            <h1 className="fs-6 fw-bold">React.js - Interactive and Modern Frontend:</h1>
            <p>With React.js, I build interactive and modern user interfaces by leveraging its component-based structure. I aim to create efficient and reusable UI elements that enhance the user experience and performance of web applications.</p>

            <h1 className="fs-6 fw-bold">Bootstrap - Responsive Design Made Easy:</h1>
            <p>Using Bootstrap, I design websites with a mobile-first approach. The grid system and pre-designed components help me create visually appealing and user-friendly interfaces, ensuring the website looks great on different devices.</p>

            <h1 className="fs-6 fw-bold">Node.js & Express.js - Powering the Backend:</h1>
            <p>Working with Node.js and Express.js, I develop scalable and robust backend applications. I focus on ensuring smooth data management and secure communication between the frontend and backend of web applications.</p>

            <h1 className="fs-6 fw-bold">MongoDB - Efficient Database Solutions:</h1>
            <p>Experienced in MongoDB, I design and implement efficient NoSQL database solutions that help manage application data effectively while maintaining good performance.</p>

            <h1 className="fs-6 fw-bold">MySQL - Structured and Reliable Databases:</h1>
            <p>Proficient in MySQL, I design relational databases with a focus on data integrity and efficient querying. I apply SQL best practices to manage and organize data effectively in web applications.</p>

            <h1 className="fs-6 fw-bold">Sequelize - ORM for Simplified Data Management:</h1>
            <p>With Sequelize, I simplify database interactions in Node.js applications, using its ORM capabilities for MySQL and other relational databases. This helps streamline data management and improve the efficiency of database operations.</p>


            <p>I am always eager to learn and take on new challenges to improve my skills. My portfolio includes projects where I’ve applied these technologies to solve real-world problems and deliver practical solutions.</p>
            <p>As a fresher, I’m excited about the opportunity to collaborate, grow, and contribute to innovative projects. Feel free to reach out to me via email if you're interested in working together or have any questions. Thank you for visiting, and I invite you to explore my projects further.</p>
            <div className="certificates">
                <h2 className="fw-bold text-white my-5">Certificates</h2>
                <div className="row">
                    <div className="col-md-6">
                        <img src={c1} alt="Udemy" />
                        <button onClick={() => { window.location = "https://www.udemy.com/certificate/UC-5e28cd3c-8aa4-4c04-b544-5da0868a0ea1" }} ><span>Show credential</span><i></i></button>
                    </div>
                    <div className="col-md-6 mt-3 mt-md-0">
                        <img src={c2} alt="FreeCodeCamp" />
                        <button onClick={() => { window.location = "https://www.freecodecamp.org/certification/Stanley-Metray/javascript-algorithms-and-data-structures" }}><span>Show credential</span><i></i></button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default AboutMe;