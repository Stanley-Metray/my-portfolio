const Projects = () => {
    return <div id="projects" className="projects py-5">
        <h2 className="fw-bold">Projects</h2>
        <div className="d-flex flex-column gap-5">
            <div className="project pb-3">
                <h3 className="my-4 text-center">FoodiePlus</h3>
                <a className="alert text-danger text-underline ms-2 ms-md-4" href="https://foodieplus.netlify.app" target="_blank">Visit Original Site for Better Navigation</a>
                <iframe src="https://foodieplus.netlify.app"></iframe>
                <p className="my-4">Welcome to our Food Recipe Web App – a delightful culinary journey crafted with <strong>HTML, CSS, JavaScript, Bootstrap, and React.js</strong>. Introducing our Food Recipe Web App – a culinary haven that brings together a vast collection of delectable recipes from around the world. Discover the joy of cooking and exploring new flavors with our user-friendly platform. Whether you're a seasoned chef or a kitchen novice, our app offers step-by-step instructions, captivating images, and helpful cooking tips to ensure every dish is a masterpiece. With a personalized account, you can save your favorite recipes, create shopping lists, and even share your culinary triumphs with friends. Elevate your cooking experience and let the Food Recipe Web App inspire your inner chef today!</p>
                <a className="btn btn-primary ms-2 ms-md-4" href="https://foodieplus.netlify.app" target="_blank">Visit Site &nbsp;<i className="bi bi-box-arrow-up-right"></i></a>
            </div>
            <div className="project pb-3">
                <h3 className="my-4 text-center">MovieLore</h3>
                <iframe src="https://movieslore.netlify.app"></iframe>
                <p className="my-4">Welcome to our Movie Information Web App – your ultimate destination for film enthusiasts, meticulously crafted with <strong>HTML, CSS, JavaScript, Bootstrap, and React.js</strong>. Dive into the magical world of cinema with our user-friendly interface, where you can access comprehensive details about a vast array of movies.</p>
                <a className="btn btn-primary ms-2 ms-md-4" href="https://movieslore.netlify.app" target="_blank">Visit Site &nbsp;<i className="bi bi-box-arrow-up-right"></i></a>
            </div>
            <div className="project pb-3">
                <h3 className="my-4 text-center">Phonebook</h3>
                <iframe src=" https://stanley-metray.github.io/new-phonebook/"></iframe>
                <p className="my-4">Introducing our Phonebook Application – your modern, efficient contact management solution developed with <strong>HTML, CSS, JavaScript, Bootstrap, and React.js</strong>. Seamlessly organize and access your contacts with a sleek and user-friendly interface. Add, edit, and search for contacts effortlessly, thanks to the power of React.js for a smooth user experience. Our app's responsive design ensures seamless functionality on any device, making it the perfect companion for staying connected on the go</p>
                <a className="btn btn-primary ms-2 ms-md-4" href="https://stanley-metray.github.io/new-phonebook/" target="_blank">Visit Site &nbsp;<i className="bi bi-box-arrow-up-right"></i></a>
            </div>
            <div className="project pb-3">
                <h3 className="my-4 text-center">Text Editor</h3>
                <iframe src="https://stanley-metray.github.io/text-editor.github.io/"></iframe>
                <p className="my-4">Welcome to our Text Editor Web App – a versatile writing tool crafted with <strong>HTML, CSS, and JavaScript</strong>. Experience a clean and intuitive interface that makes writing a breeze. Format and style your text easily with our user-friendly editor.</p>
                <a className="btn btn-primary ms-2 ms-md-4" href="https://stanley-metray.github.io/text-editor.github.io/" target="_blank">Visit Site &nbsp;<i className="bi bi-box-arrow-up-right"></i></a>
            </div>
            <div className="project pb-3">
                <h3 className="my-4 text-center">JavaScript Music Player</h3>
                <iframe src="https://stanley-metray.github.io/js-music-player.github.io/"></iframe>
                <p className="my-4">Welcome to our Simple Music Play Web App – a delightful musical journey brought to life with <strong>HTML, CSS, and JavaScript</strong>. Immerse yourself in a clean and intuitive interface designed for seamless music playback. Easily browse and play your favorite tunes with just a few clicks. Enjoy the convenience of play, pause, and volume controls at your fingertips.</p>
                <a className="btn btn-primary ms-2 ms-md-4" href="https://stanley-metray.github.io/js-music-player.github.io/" target="_blank">Visit Site &nbsp;<i className="bi bi-box-arrow-up-right"></i></a>
            </div>
        </div>
    </div>
}

export default Projects;