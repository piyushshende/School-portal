import React from "react";

const Addstaff = () => {
    return (
        <React.Fragment>
            <div className="commontoall">
                <div className="container W-95 bg-light mb-5 pb-3">
                    <div className="bg-success W-100 text-light d-flex justify-content-start rounded-top">
                        <h4 className="h4 mx-3">Add Staff</h4>
                    </div>
                    <div className="mt-3">
                        <div className="row">
                            <div className="col text-secondary d-flex flex-column justify-content-start">
                                <label htmlFor="tname" className="text-start fw-bold">Teachers Name</label>
                                <input type="text" id="tname" name="tname" placeholder="Teachers Name" className="mt-2 text-secondary w-100" />
                            </div>
                            <div className="col text-secondary d-flex flex-column justify-content-start">
                                <label htmlFor="scn" className="text-start fw-bold">Short Code Name</label>
                                <input type="text" id="scn" name="scn" placeholder="Short Code Name" className="mt-2 text-secondary w-100" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col text-secondary d-flex flex-column justify-content-start">
                                <label htmlFor="empcode" className="text-start fw-bold">Employee Code</label>
                                <input type="text" id="empcode" name="empcode" placeholder="Employee Code" className="mt-2 text-secondary w-100" />
                            </div>
                            <div className="col text-secondary d-flex flex-column justify-content-start">
                                <label htmlFor="dob" className="text-start fw-bold">Date Of Birth</label>
                                <input type="date" id="dob" name="dob" placeholder="Date Of Birth" className="mt-2 text-secondary w-100" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col text-secondary d-flex flex-column justify-content-start">
                                <label htmlFor="deptname" className="text-start fw-bold">Department Name</label>
                                <select className="w-100 mt-2 form-select text-secondary text-start rounded-0" aria-label="Default select example">
                                    <option selected value="1" className="bg-light text-dark">IT</option>
                                    <option value="2" className="bg-light text-dark">Electric</option>
                                    <option value="3" className="bg-light text-dark">CSE</option>
                                    <option value="4" className="bg-light text-dark">Fishery</option>
                                    <option value="5" className="bg-light text-dark">General</option>
                                </select>
                            </div>
                            <div className="col text-secondary d-flex flex-column justify-content-start">
                                <label htmlFor="designation" className="text-start fw-bold">Designation</label>
                                <select className="w-100 mt-2 form-select text-secondary text-start rounded-0" aria-label="Default select example">
                                    <option selected value="1" className="bg-light text-dark">Head Teacher</option>
                                    <option value="2" className="bg-light text-dark">Teacher</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col text-secondary d-flex flex-column justify-content-start">
                                <label htmlFor="ulr" className="text-start fw-bold">User Login Role (Requited for Teacher, Head Teacher)</label>
                                <select className="w-100 mt-2 form-select text-secondary text-start rounded-0" aria-label="Default select example" id="ulr" name="ulr">
                                    <option selected value="1" className="bg-light text-dark">Head Teacher</option>
                                    <option value="2" className="bg-light text-dark">Teacher</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col text-secondary d-flex flex-column justify-content-start">
                                <h6 className="text-start fw-bold">Gender</h6>
                                <div className="d-flex justify-content-start align-items-center">
                                    <input type="radio" className="W-3" id="male" name="male" />
                                    <label htmlFor="male" className="ms-2">Male</label>
                                    <input type="radio" className="W-3 ms-2" id="female" name="female" />
                                    <label htmlFor="male" className="ms-2">Female</label>
                                </div>

                            </div>
                            <div className="col text-secondary d-flex flex-column justify-content-start">
                                <label htmlFor="aadharnumber" className="text-start fw-bold">Aadhaar Number</label>
                                <input type="text" id="aadharnumber" name="aadharnumber" placeholder="Aadhaar Number" className="mt-2 text-secondary w-100" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col text-secondary d-flex flex-column justify-content-start">
                                <label htmlFor="address" className="text-start fw-bold">Address:</label>
                                <input type="text" id="address" name="address" placeholder="Full address without state and city" className="mt-2 text-secondary w-100" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col text-secondary d-flex flex-column justify-content-start">
                                <label htmlFor="city" className="text-start fw-bold">City</label>
                                <input type="text" id="city" name="city" placeholder="City" className="mt-2 text-secondary w-100" />
                            </div>
                            <div className="col text-secondary d-flex flex-column justify-content-start">
                                <label htmlFor="state" className="text-start fw-bold">State</label>
                                <select className="w-100 mt-2 form-select text-secondary text-start rounded-0" aria-label="Default select example">
                                    <option selected value="1" className="bg-light text-dark">Maharashtra</option>
                                    <option value="2" className="bg-light text-dark">UP</option>
                                    <option value="3" className="bg-light text-dark">MP</option>
                                    <option value="4" className="bg-light text-dark">Goa</option>
                                    <option value="5" className="bg-light text-dark">Andhra Pradesh</option>
                                </select>
                            </div>
                            <div className="col text-secondary d-flex flex-column justify-content-start">
                                <label htmlFor="pincode" className="text-start fw-bold">Pin Code</label>
                                <input type="text" id="pincode" name="pincode" placeholder="Pin Code" className="mt-2 text-secondary w-100" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col text-secondary d-flex flex-column justify-content-start">
                                <label htmlFor="religion" className="text-start fw-bold">Religion</label>
                                <input type="text" id="religion" name="religion" placeholder="Religion" className="mt-2 text-secondary w-100" />
                            </div>
                            <div className="col text-secondary d-flex flex-column justify-content-start">
                                <label htmlFor="category" className="text-start fw-bold">Category</label>
                                <input type="text" id="category" name="category" placeholder="Category" className="mt-2 text-secondary w-100" />
                            </div>
                            <div className="col text-secondary d-flex flex-column justify-content-start">
                                <label htmlFor="nationality" className="text-start fw-bold">Nationality</label>
                                <input type="text" id="nationality" name="nationality" placeholder="Nationality" className="mt-2 text-secondary w-100" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col text-secondary d-flex flex-column justify-content-start">
                                <label htmlFor="dop" className="text-start fw-bold">Date of Profession</label>
                                <input type="date" id="dop" name="dop" placeholder="Date Of Profession(DD-MM-YYYY)" className="mt-2 text-secondary w-100" />
                            </div>
                            <div className="col text-secondary d-flex flex-column justify-content-start">
                                <label htmlFor="doj" className="text-start fw-bold">Date OF Joining</label>
                                <input type="date" id="doj" name="doj" placeholder="Date Of Joining(DD-MM-YYYY)" className="mt-2 text-secondary w-100" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col text-secondary d-flex flex-column justify-content-start">
                                <label htmlFor="almamater" className="text-start fw-bold">Alma Mater</label>
                                <input type="text" id="almamater" name="almamater" placeholder="Alma Mater" className="mt-2 text-secondary w-100" />
                            </div>
                            <div className="col text-secondary d-flex flex-column justify-content-start">
                                <label htmlFor="major" className="text-start fw-bold">Major</label>
                                <input type="text" id="major" name="major" placeholder="major" className="mt-2 text-secondary w-100" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col text-secondary d-flex flex-column justify-content-start">
                                <label htmlFor="primarycontact" className="text-start fw-bold">Primary Contact</label>
                                <input type="text" id="primarycontact" name="primarycontact" placeholder="Primary Contact" className="mt-2 text-secondary w-100" />
                            </div>
                            <div className="col text-secondary d-flex flex-column justify-content-start">
                                <label htmlFor="secondarycontact" className="text-start fw-bold">Secondary Contact</label>
                                <input type="text" id="secondarycontact" name="secondarycontact" placeholder="Secondary Contact" className="mt-2 text-secondary w-100" />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col d-flex justify-content-start align-items-center">
                                <h6 className="text-start text-secondary">Additional Information</h6>
                                <button className="btn btn-primary w-auto h-auto rounded-pill ms-4">ADD NEW FIELD</button>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col d-flex justify-content-end align-items-center">
                                <button className="btn btn-outline-success w-auto h-auto rounded-pill ms-4">ADD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Addstaff;