import React from "react";

const Markstaffattendance = () => {
    return (
        <React.Fragment>
            <div className="commontoall">
                <div className="container W-95 bg-light mb-5 pb-3">
                    <div className="bg-success W-100 text-light d-flex justify-content-start rounded-top align-items-center">
                        <h4 className="h4 mx-3">Mark Staff Attendance</h4>
                    </div>
                    <div className="mt-3">
                        <div className="d-flex align-items-center">
                            <input type="text" className="w-75" />
                            <button className="btn btn-primary w-auto ms-5 rounded-pill">GET DATA</button>
                        </div>
                        <hr />
                        <div className="mt-3 text-secondary text-start">
                            <h6 className="mt-3 text-secondary ">Date:</h6>
                            <input type="date" />
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col text-start d-flex flex-column justify-content-center">
                                <div className="d-flex align-items-center justify-content-start mt-2">
                                    <label htmlFor="name" className="text-secondary fw-bold">Name:</label>
                                    <span id="name" className="ms-2" name="name">Agra_Wa</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-start mt-2">
                                    <label htmlFor="emp" className="text-secondary fw-bold">Employee Code:- </label>
                                    <span id="emp" className="ms-2" name="emp"></span>
                                </div>
                                <div className="d-flex align-items-center justify-content-start mt-2">
                                    <label htmlFor="dept" className="text-secondary fw-bold">Department:- </label>
                                    <span id="dept" className="ms-2" name="dept">IT</span>
                                </div>
                            </div>
                            <div className="col d-flex flex-column border rounded align-items-center">
                                <h5 className="text-danger h5">Full Day</h5>
                                <h5 className="bg-success w-25 text-light border rounded h5">Updated</h5>
                                <div className="d-flex align-items-center justify-content-start">
                                    <input type="radio" id="absent" name="absent" className="w-auto"/>
                                    <label htmlFor="absent">Absent</label>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="radio" id="present" name="present" className="w-auto"/>
                                    <label htmlFor="absent">Present</label>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="radio" id="leave" name="leave" className="w-auto"/>
                                    <label htmlFor="leave">Leave</label>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="radio" id="halfday" name="halfday" className="w-auto"/>
                                    <label htmlFor="halfday">Half Day</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Markstaffattendance