import React, { useState } from 'react';
import { Avatar, Divider, Tooltip } from 'antd';
import Button from './Button';
import Education from './Education';
import About from './About';
import Contact from './Contact';
import Skills from './Skills';

const Home = () => {
    const [buttons,setButtons]=useState('Home')
console.log("hi",buttons)
    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <div className={"col-md-3 col-sm-12 text-danger leftside"}>
                        <div className={"text-center mt-3"}>
                            <Avatar size={130} className="text-center" src="image.jpg" />
                        </div>
                        <div className={"text-center mt-3"}>
                            <h3>MRITYUNJAY</h3>
                        </div>
                        <div className={"text-center mt-5"}>
                            <Button name={"Home"} buttons={buttons} setButtons={setButtons} />
                            <Button name={"Skills"} buttons={buttons} setButtons={setButtons}/>
                            <Button name={"Experience"}buttons={buttons} setButtons={setButtons}/>
                            <Button name={"Education"}buttons={buttons} setButtons={setButtons}/>
                            <Button name={"Contact"}buttons={buttons} setButtons={setButtons}/>
                        </div>
                    </div>
                    <div className={"col-md-9  col-sm-12  rightside"}>
                        {buttons==='Education'&& <Education/>}
                        {buttons==='Home'&& <About/>}
                        {buttons==='Contact'&& <Contact/>}
                        {buttons==='Skills'&& <Skills/>}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;