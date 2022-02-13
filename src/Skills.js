import React from 'react';
import { Rate } from 'antd';
const Skills = () => {
    return (
        <>
            <div className="mt-3 ml-3 colortext">
                <h1>Skills</h1>
                <hr></hr>
                <div className="mt-5">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Frameworks / Libraries</th>
                                    <th>Rating</th>
                                    

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span><img src="1611079.png" height="35px" width="40px"></img></span>
                                    <span className="ml-3">React JS</span></td>
                                    <td><Rate disabled defaultValue={4} /></td>
                                    
                                </tr>
                                <tr>
                                    <td><span><img src="node.png" height="35px" width="40px"></img></span>
                                    <span className="ml-3">Node JS</span></td>
                                    <td><Rate disabled defaultValue={4} /></td>
                                    
                                </tr>

                            </tbody>
                        </table>
                </div>
            </div>

        </>
    );
}

export default Skills;