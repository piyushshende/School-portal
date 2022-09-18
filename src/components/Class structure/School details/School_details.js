import React from "react";
import '../../../commontoall.css';
import './schooldetails.css';
const School_details = () => {
    return (
        <React.Fragment>
            <div className="commontoall pb-3 mb-5">
                <div class="container school_details bg-light">
                    <div class="school">
                        <h4 class="bg-success h4 text-light text-left px-3 py-1">School Details</h4>
                    </div>
                    <div className="details text-left px-3">
                        <div class="row">
                            <div class="col w-25 d-flex align-items-end justify-content-start">
                                <h6 class=" blockquote h6">School Name:</h6>
                            </div>
                            <div class="col d-flex align-items-center justify-content-center">
                                <input type="text" class="form-control text-success vw" id="exampleFormControlInput1" placeholder="ABC MODERN SCHOOL" />
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col d-flex align-items-end justify-content-start ">
                                <h6 class="blockquote h6">Address:</h6>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control text-success vw" id="exampleFormControlInput1" placeholder="NEAR PARK AVENUE HOTEL, COURT ROAD" />
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="row d-flex">
                                <div class="col w-25 d-flex align-items-end justify-content-start">
                                    <h6 class="blockquote h6">City:</h6>
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control text-success w-100" id="exampleFormControlInput1" placeholder="SIKAR" />
                                </div>
                                <div class="col w-25 d-flex align-items-end justify-content-start">
                                    <h6 class="blockquote h6 w-25">State:</h6>
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control text-success w-100" id="exampleFormControlInput1" placeholder="RAJASTHAN" />
                                </div>
                                <div class="col w-25 d-flex align-items-end justify-content-start">
                                    <h6 class=" h6 blockquote w-25">Pincode:</h6>
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control text-success w-100" id="exampleFormControlInput1" placeholder="112233" />
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="row d-flex">
                                <div class="col d-flex align-items-end justify-content-start">
                                    <h6 class=" h6 blockquote">Contact1:</h6>
                                </div>
                                <div class="col">
                                    <input type="tel" class="form-control text-success vw-24" id="exampleFormControlInput1" placeholder="123456789" />
                                </div>
                                <div class="col w-25 d-flex align-items-end justify-content-start">
                                    <h6 class="blockquote w-25 h6">Contact2:</h6>
                                </div>
                                <div class="col">
                                    <input type="tel" class="form-control text-success vw-24" id="exampleFormControlInput1" placeholder="987654321" />
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="row d-flex">
                                <div class="col d-flex align-items-end justify-content-start">
                                    <h6 class="blockquote h6">Email:</h6>
                                </div>
                                <div class="col">
                                    <input type="email" class="form-control text-success vw-24" id="exampleFormControlInput1" placeholder="info@schoollog.in" />
                                </div>
                                <div class="col w-25 d-flex align-items-end justify-content-start">
                                    <h6 class="blockquote w-25 h6">Village:</h6>
                                </div>
                                <div class="col">
                                    <input type="number" class="form-control text-success vw-24" id="exampleFormControlInput1" placeholder="SIKAR" />
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="row d-flex justify-content-center align-items-center">
                                <div class="col d-flex align-items-end justify-content-start">
                                    <h6 class="blockquote h6">Parent Organisation:</h6>
                                </div>
                                <div class="col">
                                    <input type="email" class="form-control text-success vw-63" id="exampleFormControlInput1" placeholder="info@schoollog.in" />
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="row d-flex">
                                <div class="col d-flex align-items-end justify-content-start">
                                    <div>
                                        <h6 for="formFileLg" class="form-label blockquote h6">School logo</h6>
                                        <input class="form-control form-control-lg yborders mt-3" id="formFileLg" type="file" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <h6 class="blockquote h6">School Location(Select on map)</h6>
                            <div class="row d-flex">
                                <div class="col d-flex align-items-end justify-content-start">
                                    <h6 class="blockquote h6">Latitude:</h6>
                                </div>
                                <div class="col">
                                    <input type="email" class="form-control text-success w-100" id="exampleFormControlInput1" placeholder="info@schoollog.in" />
                                </div>
                                <div class="col d-flex align-items-end justify-content-start">
                                    <h6 class="blockquote h6">Longitude:</h6>
                                </div>
                                <div class="col">
                                    <input type="email" class="form-control text-success w-100" id="exampleFormControlInput1" placeholder="info@schoollog.in" />
                                </div>
                                <div class="col">
                                    <button type="button" class="btn btn-warning d-flex w-50 justify-content-center blockquote align-items-center text-dark">Show Map</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )

}
export default School_details;