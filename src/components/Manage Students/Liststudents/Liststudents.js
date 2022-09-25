import React from "react";
import '../../../commontoall.css';


const Liststudents = () => {
    return (
        <React.Fragment>
            <div className="commontoall">
                <div className="container W-95 bg-light mb-5 pb-3">
                    <div className="bg-success W-100 text-light d-flex justify-content-start rounded-top">
                        <h4 className="h4 mx-3">VIEW STUDENT DETAILS</h4>
                    </div>
                    <div className="d-flex justify-content-start mx-5 mt-4">
                        <h6 className="bg-primary fs-4 fw-light W-10 H-25 text-light rounded">Classes:</h6>
                        {/* Implement global classes data here whenever the backend implementation is completed */}
                    </div>
                    <div className="d-flex justify-content-start mx-5 mt-4">
                        <h6 className="bg-danger W-10 fs-4 fw-light H-25 text-light rounded">Sections:</h6>
                        {/* Implement global sections data here whenever the backend implementation is completed */}
                    </div>
                    <hr />
                    <h3 className="text-secondary d-flex justify-content-start">No Class Selected</h3>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Liststudents;