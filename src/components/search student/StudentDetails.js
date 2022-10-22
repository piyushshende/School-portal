import React, { useState } from "react";
import smiling from '../../images/smiling.jpg'
import './studentdetails.css';
const StudentDetails = () => {
    return (
        <React.Fragment>
            <div className="container cont2 bg-light studetail">
                <div className="userdetails bg-success">
                    <div className="image">
                        <img src={smiling} alt="Student photo" className="img-thumbnail bg-success" />
                        <h3>STUDENT 2</h3>
                        <h6>2-A</h6>
                    </div>
                    <span></span>
                    <div className="row text-white">
                        <div className="row text-start">
                            <div className="col w-100">
                                SR No.
                            </div>
                            <div className="col w-100">
                                -
                            </div>
                        </div>
                        <div className="row text-start mt-3">
                            <div className="col w-100">
                                Father's Name
                            </div>
                            <div className="col w-100 text-start">
                                Father 2
                            </div>
                        </div>
                        <div className="row text-start mt-3">
                            <div className="col w-100">
                                Mothers Name
                            </div>
                            <div className="col w-100">
                                -
                            </div>
                        </div>
                        <div className="row text-start mt-3">
                            <div className="col w-100">
                                Father Contact
                            </div>
                            <div className="col w-100">
                                1234567890
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="nav nav-tabs mt-">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Student info</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Siblings</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Attendance</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Groups</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Notifications</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">SR Register</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Result</a>
                    </li>
                </ul>
                <div className="">
                    <div className="row mt-5">
                        <div className="col text-left fs1">
                            Student Details
                        </div>
                        <div className="col text-right">
                            <button type="button" className="btn btn-success h-auto w-auto fs-6 rounded-pill">PRINT PROFILE</button>
                            <button type="button" className="btn btn-info text-light h-auto w-auto fs-6 rounded-pill">SEND APP ID PASSWORD</button>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col text-left">
                            <div className="uploadimage">
                            </div>
                            <button type="button" className="btn btn-primary btn-sm h-auto">Open webcam</button>
                        </div>
                        <div className="col mr-5">
                            <div className="row personal text-left">
                                <div className="col text-secondary">
                                    <h6 className="h6">Name</h6>
                                </div>
                                <div className="col">
                                    <input type="text" className="w-100" placeholder="Enter Value'" />
                                </div>
                            </div>
                            <div className="row personal text-left">
                                <div className="col text-secondary">
                                    <h6 className="h6">SR No</h6>
                                </div>
                                <div className="col">
                                    <input type="text" className="w-100" placeholder="Enter Value'" />
                                </div>
                            </div>
                            <div className="row personal text-left">
                                <div className="col text-secondary">
                                    <h6 className="h6">Standard</h6>
                                </div>
                                <div className="col">
                                    <input type="text" className="w-100" placeholder="Enter Value'" />
                                </div>
                            </div>
                            <div className="row personal text-left">
                                <div className="col text-secondary">
                                    <h6 className="h6">DOB</h6>
                                </div>
                                <div className="col">
                                    <input type="text" className="w-100" placeholder="Enter Value'" />
                                </div>
                            </div>
                            <div className="row personal text-left">
                                <div className="col text-secondary">
                                    <h6 className="h6">Roll No</h6>
                                </div>
                                <div className="col">
                                    <input type="text" className="w-100" placeholder="Enter Value'" />
                                </div>
                            </div>
                            <div className="row personal text-left">
                                <div className="col text-secondary">
                                    <h6 className="h6">Admission No</h6>
                                </div>
                                <div className="col">
                                    <input type="text" className="w-100" placeholder="Enter Value'" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid2">
                    <div className="g1 row text-left text-secondary">
                        <div className="col">
                            <div className="row personal text-left">
                                <div className="col">
                                    <h6 className="h6">Aadhaar No.</h6>
                                </div>
                                <div className="col">
                                    <input type="text" className="w-100" placeholder="Enter Value'" />
                                </div>
                            </div>
                            <div className="row personal text-left">
                                <div className="col">
                                    <h6 className="h6">Religion</h6>
                                </div>
                                <div className="col">
                                    <input type="text" className="w-100" placeholder="Enter Value'" />
                                </div>
                            </div>
                            <div className="row personal text-left">
                                <div className="col">
                                    <h6 className="h6">Gender</h6>
                                </div>
                                <div className="col">
                                    <input type="text" className="w-100" placeholder="Enter Value'" />
                                </div>
                            </div>
                            <div className="row personal text-left">
                                <div className="col">
                                    <h6 className="h6">Address</h6>
                                </div>
                                <div className="col">
                                    <input type="text" className="w-100" placeholder="Enter Value'" />
                                </div>
                            </div>
                            <div className="row personal text-left">
                                <div className="col">
                                    <h6 className="h6">State</h6>
                                </div>
                                <div className="col">
                                    <input type="text" className="w-100" placeholder="Enter Value'" />
                                </div>
                            </div>
                            <div className="row personal text-left">
                                <div className="col">
                                    <h6 className="h6">Schooling Type</h6>
                                </div>
                                <div className="col">
                                    <input type="text" className="w-100" placeholder="Enter Value'" />
                                </div>
                            </div>
                            <div className="row personal text-left">
                                <div className="col">
                                    <h6 className="h6">Staff relation</h6>
                                </div>
                                <div className="col">
                                    <input type="text" className="w-100" placeholder="Enter Value'" />
                                </div>
                            </div>
                            <div className="row personal text-left">
                                <div className="col">
                                    <h6 className="h6">Medium</h6>
                                </div>
                                <div className="col">
                                    <input type="text" className="w-100" placeholder="Enter Value'" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="g2 row text-right text-secondary">
                        <div className="col">
                            <div className="row personal text-left">
                                <div className="col">
                                    <h6 className="h6">DOA</h6>
                                </div>
                                <div className="col">
                                    <input type="text" className="w-100" placeholder="Enter Value'" />
                                </div>
                            </div>
                            <div className="row personal text-left">
                                <div className="col">
                                    <h6 className="h6">Category</h6>
                                </div>
                                <div className="col">
                                    <input type="text" className="w-100" placeholder="Enter Value'" />
                                </div>
                            </div>
                            <div className="row personal text-left">
                                <div className="col">
                                    <h6 className="h6">Nationality</h6>
                                </div>
                                <div className="col">
                                    <input type="text" className="w-100" placeholder="Enter Value'" />
                                </div>
                            </div>
                            <div className="row personal text-left">
                                <div className="col">
                                    <h6 className="h6">City</h6>
                                </div>
                                <div className="col">
                                    <input type="text" className="w-100" placeholder="Enter Value'" />
                                </div>
                            </div>
                            <div className="row personal text-left">
                                <div className="col">
                                    <h6 className="h6">Pincode</h6>
                                </div>
                                <div className="col">
                                    <input type="text" className="w-100" placeholder="Enter Value'" />
                                </div>
                            </div>
                            <div className="row personal text-left">
                                <div className="col">
                                    <h6 className="h6">Transport</h6>
                                </div>
                                <div className="col">
                                    <input type="text" className="w-100" placeholder="Enter Value'" />
                                </div>
                            </div>
                            <div className="row personal text-left">
                                <div className="col">
                                    <h6 className="h6">RFID Card No</h6>
                                </div>
                                <div className="col">
                                    <input type="text" className="w-100" placeholder="Enter Value'" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default StudentDetails;