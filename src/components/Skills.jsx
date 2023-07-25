const Skills = () => {
    const cimage = require("./images/C.png");
    const htmlimg = require("./images/HTMLCSSJS.jpg");
    const bootrapimg = require("./images/Boostrap5.jpg");
    const reactimg = require("./images/reactandredux.jpg");
    const nodejsimg = require("./images/nodejsexpressjs.png");
    const mongoimg = require("./images/mongodb.jpg");
    const responsiveimg = require("./images/responsive.jpg");
    const domimg = require("./images/DOM.png");
    const figmaimg = require("./images/figma-logo-2.png");

    return <div id="skills" className="skills py-5">
        <h2 className="fw-bold mb-5">My Skills List</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
            <div className="col">
                <div className="card border-secondary shadow">
                    <img src={cimage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">C, C++</h5>
                        <p className="card-text">Proficient in programming with C and C++, enabling the development of efficient and reliable applications for various platforms.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card border-secondary shadow">
                    <img src={htmlimg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">HTML5, CSS3, JavaScript</h5>
                        <p className="card-text">Skilled in front-end web development using HTML5, CSS3, and JavaScript to create engaging and interactive user interfaces.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card border-secondary shadow">
                    <img src={bootrapimg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Bootstrap</h5>
                        <p className="card-text">Skilled in using Bootstrap for responsive and mobile-friendly web designs, ensuring a seamless experience across devices.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card border-secondary shadow">
                    <img src={reactimg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">React.js, Redux</h5>
                        <p className="card-text">Good knowledge in building dynamic web applications with React.js and managing application states with Redux for scalability and maintainable code.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card border-secondary shadow">
                    <img src={nodejsimg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Node.js, Express.js</h5>
                        <p className="card-text">Knowledgeable in back-end development with Node.js and Express.js, creating robust server-side applications and APIs.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card border-secondary shadow">
                    <img src={mongoimg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">MongoDB</h5>
                        <p className="card-text">Familiar with MongoDB, a NoSQL database, for efficient data storage and retrieval, enhancing the performance of web applications.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card border-secondary shadow">
                    <img src={responsiveimg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Responsive Design</h5>
                        <p className="card-text">Skilled in implementing responsive design principles, ensuring web applications adapt seamlessly to different devices and screen sizes.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card border-secondary shadow">
                    <img src={domimg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Document Object Model (DOM)</h5>
                        <p className="card-text">Good understanding in utilizing DOM manipulation to create dynamic and interactive web pages with enhanced user interactions.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card border-secondary shadow">
                    <img src={figmaimg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Figma</h5>
                        <p className="card-text">Skilled in using Figma, a design tool, to create wireframes, mockups, and streamlining the design and development process.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Skills;