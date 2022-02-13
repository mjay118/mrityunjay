import React from 'react';
import { Button } from 'antd';
const About = () => {
    return (
        <>
            <div className=" ml-3 center colortext">
                <h1>Hi, I am Mrityunjay.</h1>

            </div>
            <div className="mt-5">
                <ul>
                    <li class="or"><p class="lead leadc">I am a UI Developer with 1.2 Years of
            experience in Software Development and Testing Life Cycle.</p></li>
                    <li class="or"><p class="lead leadc">I have experience in utilising open-source
            libraries/Frameworks such as React.js, Node.js, Angular, Bootstrap.</p></li>
                    <li class="or"><p class="lead leadc">I have sound knowlege of JavaScript Testing Framework such as JEST.</p></li>
                </ul>
            </div>
            <div className=" ml-4 mt-5">
                <Button><a
                    href="https://www.dropbox.com/s/jwz0afr9iwwln0x/Mrityunjay_resume.pdf?dl=1"
                    // target="_blank"
                    download="Mrityunjay_resume.pdf"
                >
                    Download CV</a></Button>

            </div>
            
        </>
    );
}

export default About;