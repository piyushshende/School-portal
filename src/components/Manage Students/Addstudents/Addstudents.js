import React from "react";
import '../../../commontoall.css';

const Addstudents = () => {
    return (
        <React.Fragment>
            <div className="commontoall">
                <div className="container W-95 bg-light mb-5 pb-3">
                    <div className="bg-success W-100 text-light d-flex justify-content-start rounded-top">
                        <h4 className="h4 mx-3">Add Students</h4>
                    </div>
                    <div className="">
                        <div className="mt-3 d-flex align-items-start">
                            <h5 className="text-secondary ms-4 ">Student Details</h5>
                        </div>
                        <div className=" mt-2">
                            <div className="row">
                                <div className="col d-flex align-items-start W-110">
                                    <h6 className="text-secondary fw-bold">Student Name</h6>
                                </div>
                                <div className="col d-flex align-items-start">
                                    <h6 className="text-secondary fw-bold">SR No</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col d-flex align-items-start">
                                    <input type="text" className="W-110 border border-secondary" />
                                </div>
                                <div className="col d-flex align-items-start">
                                    <input type="Number" className="w-100 border border-secondary" />
                                </div>
                            </div>
                        </div>
                        <div className=" mt-2">
                            <div className="row">
                                <div className="col d-flex align-items-start">
                                    <h6 className="text-secondary fw-bold">Gender</h6>
                                </div>
                                <div className="col d-flex align-items-start">
                                    <h6 className="text-secondary fw-bold">Date Of Birth</h6>
                                </div>
                                <div className="col d-flex align-items-start">
                                    <h6 className="text-secondary fw-bold">Aadhaar Number</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col d-flex align-items-center justify-content-">
                                    <input type="radio" id="male" className="W-3" name="gender" value="male" />
                                    <label htmlFor="male" className="ms-2">Male</label>
                                    <input type="radio" id="female" className="W-3 ms-2" name="gender" value="female" />
                                    <label htmlFor="female" className="ms-2">Female</label>
                                </div>
                                <div className="col d-flex align-items-start">
                                    <input type="Number" className="w-100 border border-secondary" />
                                </div>
                                <div className="col d-flex align-items-start">
                                    <input type="Number" className="w-100 border border-secondary" />
                                </div>
                            </div>
                        </div>
                        <div className=" mt-2">
                            <div className="row">
                                <div className="col d-flex align-items-start">
                                    <h6 className="text-secondary fw-bold">Address:</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col d-flex align-items-start">
                                    <input type="Number" className="w-100 border border-secondary" />
                                </div>
                            </div>
                        </div>
                        <div className=" mt-2">
                            <div className="row">
                                <div className="col d-flex align-items-start">
                                    <h6 className="text-secondary fw-bold">City</h6>
                                </div>
                                <div className="col d-flex align-items-start">
                                    <h6 className="text-secondary fw-bold">State</h6>
                                </div>
                                <div className="col d-flex align-items-start">
                                    <h6 className="text-secondary fw-bold">Pin Code</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col d-flex align-items-center justify-content-">
                                    <input type="text" className="W-100 border border-secondary" />
                                </div>
                                <div className="col d-flex align-items-start">
                                    <input type="text" className="w-100 border border-secondary" />
                                </div>
                                <div className="col d-flex align-items-start">
                                    <input type="Number" className="w-100 border border-secondary" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="row">
                                <div className="col d-flex align-items-start">
                                    <h6 className="text-secondary fw-bold">Religion</h6>
                                </div>
                                <div className="col d-flex align-items-start">
                                    <h6 className="text-secondary fw-bold">Category</h6>
                                </div>
                                <div className="col d-flex align-items-start">
                                    <h6 className="text-secondary fw-bold">Date Of Admission</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col d-flex align-items-center justify-content-">
                                    <select name="religion" id="religion " className="W-100 border border-secondary text-black rounded-0">
                                        <option value=""></option>
                                        <option value="Hindu">Hindu</option>
                                        <option value="Muslim">Muslim</option>
                                        <option value="Christian">Christian</option>
                                        <option value="Buddhism">Buddhism</option>
                                        <option value="Jain">Jain</option>
                                    </select>
                                </div>
                                <div className="col d-flex align-items-start">
                                    <select name="religion" id="religion " className="W-100 border border-secondary text-black rounded-0">
                                        <option value=""></option>
                                        <option value="Open">Open</option>
                                        <option value="OBC">OBC</option>
                                        <option value="SC">SC</option>
                                        <option value="ST">ST</option>
                                        <option value="VJ/NT">VJ/NT</option>
                                    </select>
                                </div>
                                <div className="col d-flex align-items-start">
                                    <input type="Date" className="w-100 border border-secondary" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="row">
                                <div className="col d-flex align-items-start">
                                    <h6 className="text-secondary fw-bold">Nationality</h6>
                                </div>
                                <div className="col d-flex align-items-start">
                                    <h6 className="text-secondary fw-bold">Schooling Type</h6>
                                </div>
                                <div className="col d-flex align-items-start">
                                    <h6 className="text-secondary fw-bold">Transport</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col d-flex align-items-center justify-content-">
                                    <input type="text" className="w-100 border border-secondary" />
                                </div>
                                <div className="col d-flex align-items-start">
                                    <select name="schooling" id="schooling" className="W-100 border border-secondary text-black rounded-0">

                                    </select>
                                </div>
                                <div className="col d-flex align-items-start">
                                    <select name="transport" id="transport" className="W-100 border border-secondary text-black rounded-0">

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="row">
                                <div className="col d-flex align-items-start">
                                    <h6 className="text-secondary fw-bold">Staff Relation</h6>
                                </div>
                                <div className="col d-flex align-items-start">
                                    <h6 className="text-secondary fw-bold">New Admission</h6>
                                </div>
                                <div className="col d-flex align-items-start">
                                    <h6 className="text-secondary fw-bold"></h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col d-flex align-items-center justify-content-">
                                    <select name="staff" id="staff" className="W-100 border border-secondary text-black rounded-0">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="col d-flex align-items-start">
                                    <select name="schooling" id="schooling" className="W-100 border border-secondary text-black rounded-0">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="col d-flex align-items-start">
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="row">
                                <div className="col d-flex align-items-start">
                                    <h6 className="text-secondary fw-bold">Class</h6>
                                </div>
                                <div className="col d-flex align-items-start">
                                    <h6 className="text-secondary fw-bold">Section</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col d-flex align-items-center justify-content-">
                                    <select name="class" id="class" className="W-100 border border-secondary text-black rounded-0">
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div className="col d-flex align-items-start">
                                    <select name="schooling" id="schooling" className="W-100 border border-secondary text-black rounded-0">
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div>
                            <div className="d-flex align-items-center">
                                <h5 className="text-secondary">Parent/Guardian Details</h5>
                                <button className="btn btn-primary w-auto ms-2 rounded-pill">Add</button>
                            </div>
                            <div className="border border-secondary mt-3">
                                <div className="row">
                                    <div class="col-md-2">
                                        <label for="validationServer01" className="form-label d-flex align-items-start">Relation</label>
                                        <input type="text" className="is-valid form-control" required id="validationServer01" />
                                    </div>
                                    <div class="col-md-2">
                                        <label for="validationServer02" className="form-label d-flex align-items-start">Name</label>
                                        <input type="text" className="is-valid form-control" required id="validationServer02" />
                                    </div>
                                    <div class="col-md-2">
                                        <label for="validationServer03" className="form-label d-flex align-items-start">Occupation</label>
                                        <input type="text" className="is-valid form-control" required id="validationServer03" />
                                    </div>
                                    <div class="col-md-2">
                                        <label for="validationServer04" className="form-label d-flex align-items-start">Primary Contact</label>
                                        <input type="text" className="is-valid w-auto form-control" required id="validationServer04" />
                                    </div>
                                    <div className="col-md-2 grid d-flex flex-column ms-5">
                                        <div className="d-flex align-items-center">
                                            <input type="checkbox" className="W-10 " name="app-access" />
                                            <label htmlFor="app-access">App Access</label>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <input type="checkbox" className="W-10" name="gateapp-access" />
                                            <label htmlFor="gateapp-access">GatePass Access</label>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div class="col-md-2">
                                        <label for="validationServer01" className="form-label d-flex align-items-start">Relation</label>
                                        <input type="text" className="is-valid form-control" required id="validationServer01" />
                                    </div>
                                    <div class="col-md-2">
                                        <label for="validationServer02" className="form-label d-flex align-items-start">Name</label>
                                        <input type="text" className="is-valid form-control" required id="validationServer02" />
                                    </div>
                                    <div class="col-md-2">
                                        <label for="validationServer03" className="form-label d-flex align-items-start">Occupation</label>
                                        <input type="text" className="is-valid form-control" required id="validationServer03" />
                                    </div>
                                    <div class="col-md-2">
                                        <label for="validationServer04" className="form-label d-flex align-items-start">Secondary Contact</label>
                                        <input type="text" className="is-valid w-auto form-control" required id="validationServer04" />
                                    </div>
                                    <div className="col-md-2 grid d-flex flex-column ms-5">
                                        <div className="d-flex align-items-center">
                                            <input type="checkbox" className="W-10 " name="app-access" />
                                            <label htmlFor="app-access">App Access</label>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <input type="checkbox" className="W-10" name="gateapp-access" />
                                            <label htmlFor="gateapp-access">GatePass Access</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <hr />
                        <h5 className="text-secondary d-flex align-items-start">Previous School Details</h5>
                        <div className="row">
                            <div className="col d-flex flex-column align-items-start">
                                <label htmlFor="last-class" className="text-secondary fw-bold">Last Class</label>
                                <input type="text" id="last-class" className="w-100"/>
                            </div>
                            <div className="col d-flex flex-column align-items-start">
                                <label htmlFor="school-name" className="text-secondary fw-bold">School Name</label>
                                <input type="text" id="school-name" className="w-100"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex flex-column align-items-start">
                                <label htmlFor="per/grade" className="text-secondary fw-bold">Percentage/Grade</label>
                                <input type="text" id="per/grade" className="w-100"/>
                            </div>
                            <div className="col d-flex flex-column align-items-start">
                                <label htmlFor="result" className="text-secondary fw-bold">Result(Pass/Fail)</label>
                                <input type="text" id="result" className="w-100"/>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <h5 className="text-secondary d-flex align-items-start">Transport Details</h5>
                            <div className="col d-flex align-items-start">
                                <button className="btn btn-primary rounded-pill h-auto">ADD BUS STOP</button>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col d-flex align-items-center justify-content-start text-secondary">
                                <h5>Additional Information</h5>
                                <button className="btn btn-primary ms-4 h-auto">ADD NEW FIELD</button>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col d-flex justify-content-end">
                                <button className="btn btn-secondary h-auto w-auto">RESET</button>
                                <button className="btn btn-outline-primary h-auto ms-3">ADD STUDENT</button>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Addstudents;