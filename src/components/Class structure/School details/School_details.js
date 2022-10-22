import React from "react";
import '../../../commontoall.css';
import './schooldetails.css';
const School_details = () => {
    return (
        <React.Fragment>
            <div className="commontoall">
                <div className="container W-95 bg-light mb-5 pb-3">
                    <div className="bg-success W-100 text-light d-flex justify-content-start rounded-top">
                        <h4 className="h4 mx-3">School Details</h4>
                    </div>
                    <div className="mt-3 text-secondary">
                        <div className="row text-start mt-3">
                            <div className="col d-flex align-items-center">
                                <h6 className="h6 w-25">School Name:</h6>
                                <input type="text" className="w-100 bg-transparent border-top-0 border-end-0 border-start-0 border-bottom border-success" />
                            </div>
                        </div>
                        <div className="row text-start mt-3">
                            <div className="col d-flex align-items-center w-100">
                                <h6 className="h6 w-25">Address:</h6>
                                <input type="text" className=" text-start w-100 bg-transparent border-top-0 border-end-0 border-start-0 border-bottom border-success" />
                            </div>
                        </div>
                        <div className="row text-start mt-3">
                            <div className="col d-flex align-items-center">
                                <h6 className="h6 w-25">City:</h6>
                                <input type="text" className="w-100 bg-transparent border-top-0 border-end-0 border-start-0 border-bottom border-success" />
                            </div>
                            <div className="col d-flex align-items-center">
                                <h6 className="h6 w-25">State:</h6>
                                <input type="text" className="w-100 bg-transparent border-top-0 border-end-0 border-start-0 border-bottom border-success" />
                            </div>
                            <div className="col d-flex align-items-center">
                                <h6 className="h6 w-25">Pincode:</h6>
                                <input type="number" className="w-100 bg-transparent border-top-0 border-end-0 border-start-0 border-bottom border-success" />
                            </div>
                        </div>
                        <div className="row text-start mt-3">
                            <div className="col d-flex align-items-center">
                                <h6 className="h6 w-25">Contact1:</h6>
                                <input type="number" className="w-100 bg-transparent border-top-0 border-end-0 border-start-0 border-bottom border-success" />
                            </div>
                            <div className="col d-flex align-items-center">
                                <h6 className="h6 w-25">Contact2:</h6>
                                <input type="number" className="w-100 bg-transparent border-top-0 border-end-0 border-start-0 border-bottom border-success" />
                            </div>
                        </div>
                        <div className="row text-start mt-3">
                            <div className="col d-flex align-items-center">
                                <h6 className="h6 w-25">Email:</h6>
                                <input type="email" className="w-100 bg-transparent border-top-0 border-end-0 border-start-0 border-bottom border-success" />
                            </div>
                            <div className="col d-flex align-items-center">
                                <h6 className="h6 w-25">Village:</h6>
                                <input type="text" className="w-100 bg-transparent border-top-0 border-end-0 border-start-0 border-bottom border-success" />
                            </div>
                        </div>
                        <div className="row text-start mt-3">
                            <div className="col d-flex align-items-center">
                                <h6 className="h6 w-25">Parent Organisation:</h6>
                                <input type="email" className="w-100 bg-transparent border-top-0 border-end-0 border-start-0 border-bottom border-success" />
                            </div>
                        </div>
                        <div className="row text-start mt-4">
                            <div className="col d-flex align-items-center">
                                <h6 className="h6 w-25">School Logo</h6>
                                <input type="file" className="w-100 bg-transparent " />
                            </div>
                            <div className="col d-flex align-items-center">
                                <h6 className="h6">School Logo(SMALL)</h6>
                                <input type="file" className="w-auto bg-transparent" />
                            </div>
                        </div>
                        <div className="row text-start mt-3">
                            <div className="col d-block align-items-center">
                                <h6 className="h6 w-25">Latitude</h6>
                                <input type="number" className="w-100 bg-transparent border-top-0 border-end-0 border-start-0 border-bottom border-success" />
                            </div>
                            <div className="col d-block align-items-center">
                                <h6 className="h6 w-25">Longitude</h6>
                                <input type="number" className="w-100 bg-transparent border-top-0 border-end-0 border-start-0 border-bottom border-success" />
                            </div>
                        </div>
                        <div className="row text-start mt-3">
                            <div className="col d-block align-items-center">
                                <button className="bg-warning rounded-pill w-100 h-auto border-warning fw-bold">SHOW MAP</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </React.Fragment>
    )

}
export default School_details;