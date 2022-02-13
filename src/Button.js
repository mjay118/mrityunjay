import { ProgressProps } from 'antd';
import React, { useState } from 'react';
const Button = (props) => {
    console.log(props.buttons)
    const handleButtons=()=>{
        props.setButtons(props.name)
    }
    return (
        <>
            <div className={"mt-3"}>

                <button className="button" onClick={handleButtons}>
                    {props.name}
                </button>
            </div>
        </>

    );
}

export default Button;