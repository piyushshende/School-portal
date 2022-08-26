import React, { useState } from "react";
import smiling from '../../images/smiling.jpg'
import './studentdetails.css';
const StudentDetails = () => {



    return (
        <React.Fragment>
            <div class="container cont2 bg-light studetail">
                <div class="userdetails bg-success">
                    <div className="image">
                        <img src={smiling} alt="Student photo" class="img-thumbnail bg-success" />
                        <h3>STUDENT 2</h3>
                        <h6>2-A</h6>
                    </div>
                    <span></span>
                    <div class="grid text-white">
                        <div class="row">
                            <div class="col">
                                SR No.
                            </div>
                            <div class="col">
                                -
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                Father's Name
                            </div>
                            <div class="col">
                                Father 2
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                Mothers Name
                            </div>
                            <div class="col">
                                -
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                Father Contact
                            </div>
                            <div class="col">
                                1234567890
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="nav nav-tabs mt-">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Student info</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Siblings</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Attendance</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Groups</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Notifications</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">SR Register</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Result</a>
                    </li>
                </ul>
                <div class="grid1">
                    <div class="row mt-5">
                        <div class="col text-left fs1">
                            Student Details
                        </div>
                        <div class="col text-right">
                            <button type="button" class="btn btn-success h-auto">PRINT PROFILE</button>
                            <button type="button" class="btn btn-info text-light h-auto">SEND APP ID PASSWORD</button>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col text-left">
                            <div className="uploadimage">
                            </div>
                            <button type="button" class="btn btn-primary btn-sm h-auto">Open webcam</button>
                        </div>
                        <div class="col mr-5">
                            <div class="row personal text-left">
                                <div class="col text-secondary">
                                    <h6>Name</h6>
                                </div>
                                <div class="col">
                                    <input type="text" class={(e) => e.target.value === 'Enter Value' ? 'text-danger' : 'text-info'} value='Enter Value' />
                                </div>
                            </div>
                            <div class="row personal text-left">
                                <div class="col text-secondary">
                                    <h6>SR No</h6>
                                </div>
                                <div class="col">
                                    <input type="text" class={(e) => e.target.value === 'Enter Value' ? 'text-danger' : 'text-info'} value='Enter Value' />
                                </div>
                            </div>
                            <div class="row personal text-left">
                                <div class="col text-secondary">
                                    <h6>Standard</h6>
                                </div>
                                <div class="col">
                                    <input type="text" class={(e) => e.target.value === 'Enter Value' ? 'text-danger' : 'text-info'} value='Enter Value' />
                                </div>
                            </div>
                            <div class="row personal text-left">
                                <div class="col text-secondary">
                                    <h6>DOB</h6>
                                </div>
                                <div class="col">
                                    <input type="text" class={(e) => e.target.value === 'Enter Value' ? 'text-danger' : 'text-info'} value='Enter Value' />
                                </div>
                            </div>
                            <div class="row personal text-left">
                                <div class="col text-secondary">
                                    <h6>Roll No</h6>
                                </div>
                                <div class="col">
                                    <input type="text" class={(e) => e.target.value === 'Enter Value' ? 'text-danger' : 'text-info'} value='Enter Value' />
                                </div>
                            </div>
                            <div class="row personal text-left">
                                <div class="col text-secondary">
                                    <h6>Admission No</h6>
                                </div>
                                <div class="col">
                                    <input type="text" class={(e) => e.target.value === 'Enter Value' ? 'text-danger' : 'text-info'} value='Enter Value' />
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
                                        <h6>Aadhaar No.</h6>
                                    </div>
                                    <div className="col">
                                        <input type="text" class={(e) => e.target.value === 'Enter Value' ? 'text-danger' : 'text-info'} value='Enter Value' />
                                    </div>
                                </div>
                                <div className="row personal text-left">
                                    <div className="col">
                                        <h6>Religion</h6>
                                    </div>
                                    <div className="col">
                                        <input type="text" class={(e) => e.target.value === 'Enter Value' ? 'text-danger' : 'text-info'} value='Enter Value' />
                                    </div>
                                </div>
                                <div className="row personal text-left">
                                    <div className="col">
                                        <h6>Gender</h6>
                                    </div>
                                    <div className="col">
                                        <input type="text" class={(e) => e.target.value === 'Enter Value' ? 'text-danger' : 'text-info'} value='Enter Value' />
                                    </div>
                                </div>
                                <div className="row personal text-left">
                                    <div className="col">
                                        <h6>Address</h6>
                                    </div>
                                    <div className="col">
                                        <input type="text" class={(e) => e.target.value === 'Enter Value' ? 'text-danger' : 'text-info'} value='Enter Value' />
                                    </div>
                                </div>
                                <div className="row personal text-left">
                                    <div className="col">
                                        <h6>State</h6>
                                    </div>
                                    <div className="col">
                                        <input type="text" class={(e) => e.target.value === 'Enter Value' ? 'text-danger' : 'text-info'} value='Enter Value' />
                                    </div>
                                </div>
                                <div className="row personal text-left">
                                    <div className="col">
                                        <h6>Schooling Type</h6>
                                    </div>
                                    <div className="col">
                                        <input type="text" class={(e) => e.target.value === 'Enter Value' ? 'text-danger' : 'text-info'} value='Enter Value' />
                                    </div>
                                </div>
                                <div className="row personal text-left">
                                    <div className="col">
                                        <h6>Staff relation</h6>
                                    </div>
                                    <div className="col">
                                        <input type="text" class={(e) => e.target.value === 'Enter Value' ? 'text-danger' : 'text-info'} value='Enter Value' />
                                    </div>
                                </div>
                                <div className="row personal text-left">
                                    <div className="col">
                                        <h6>Medium</h6>
                                    </div>
                                    <div className="col">
                                        <input type="text" class={(e) => e.target.value === 'Enter Value' ? 'text-danger' : 'text-info'} value='Enter Value' />
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div className="g2 row text-right text-secondary">
                            <div className="col">
                            <div className="row personal text-left">
                                    <div className="col">
                                        <h6>DOA</h6>
                                    </div>
                                    <div className="col">
                                        <input type="text" class={(e) => e.target.value === 'Enter Value' ? 'text-danger' : 'text-info'} value='Enter Value' />
                                    </div>
                                </div>
                                <div className="row personal text-left">
                                    <div className="col">
                                        <h6>Category</h6>
                                    </div>
                                    <div className="col">
                                        <input type="text" class={(e) => e.target.value === 'Enter Value' ? 'text-danger' : 'text-info'} value='Enter Value' />
                                    </div>
                                </div>
                                <div className="row personal text-left">
                                    <div className="col">
                                        <h6>Nationality</h6>
                                    </div>
                                    <div className="col">
                                        <input type="text" class={(e) => e.target.value === 'Enter Value' ? 'text-danger' : 'text-info'} value='Enter Value' />
                                    </div>
                                </div>
                                <div className="row personal text-left">
                                    <div className="col">
                                        <h6>City</h6>
                                    </div>
                                    <div className="col">
                                        <input type="text" class={(e) => e.target.value === 'Enter Value' ? 'text-danger' : 'text-info'} value='Enter Value' />
                                    </div>
                                </div>
                                <div className="row personal text-left">
                                    <div className="col">
                                        <h6>Pincode</h6>
                                    </div>
                                    <div className="col">
                                        <input type="text" class={(e) => e.target.value === 'Enter Value' ? 'text-danger' : 'text-info'} value='Enter Value' />
                                    </div>
                                </div>
                                <div className="row personal text-left">
                                    <div className="col">
                                        <h6>Transport</h6>
                                    </div>
                                    <div className="col">
                                        <input type="text" class={(e) => e.target.value === 'Enter Value' ? 'text-danger' : 'text-info'} value='Enter Value' />
                                    </div>
                                </div>
                                <div className="row personal text-left">
                                    <div className="col">
                                        <h6>RFID Card No</h6>
                                    </div>
                                    <div className="col">
                                        <input type="text" class={(e) => e.target.value === 'Enter Value' ? 'text-danger' : 'text-info'} value='Enter Value' />
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