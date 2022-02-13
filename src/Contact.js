import React from 'react';
const Contact = () => {
    return (<>
        <div className="mt-3 ml-3 colortext">
            <h1>Contact</h1>
            <hr></hr>
            <div className="bgwhite mt-5">
                <i className="fa fa-envelope ml-3 fac mt-3" aria-hidden="true"><span className="ml-3 mt-3">Email</span></i>
                <div className="mt-3 ml-3 mb-3">
                    <h6>
                        mrityunjay0118@gmail.com
            </h6>
                </div>
            </div>
            <div className="mt-5 bgwhite">
                <i className="fa fa-phone ml-3 fac mt-3" aria-hidden="true"><span className="ml-3 mt-3">Phone</span></i>
                <div className="mt-3 ml-3 mb-3">
                    <h6>
                        9182738104
                    </h6>
                </div>
            </div>
            <div className="mt-5 bgwhite">
                <i className="fa fa-location-arrow ml-3 fac mt-3" aria-hidden="true"><span className="ml-3 mt-3">Address</span></i>
                <div className="mt-3 ml-3 mb-3">
                    <h6>
                        C/O Gaurav Kumar, Satya Krupa Enclave, 
                    </h6>
                    <h6>
                        Ammenpur, Hyderabad. PIN - 500084
                    </h6>
                </div>
            </div>
        </div>
    </>);
}

export default Contact;