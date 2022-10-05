import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Listdepartments = () => {
    return (
        <React.Fragment>
            <div className="commontoall">
                <div className="container W-95 bg-light mb-5 pb-3">
                    <div className="bg-success W-100 text-light d-flex justify-content-start rounded-top">
                        <h4 className="h4 mx-3">Add Department</h4>
                    </div>
                    <div className="mt-3">
                        <div className="row">
                            <div className="col text-secondary text-start fw-bold d-flex flex-column justify-content-start">
                                <label htmlFor="dept">Department Name:</label>
                                <input type="text" id="dept" name="dept" className="w-50 mt-2" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col text-secondary text-start fw-bold d-flex flex-column justify-content-start">
                                <button className="btn btn-outline-primary w-50 h-auto rounded-pill">Add Department</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-secondary">
                                <h5 className="mt-5 h5 text-start fst-normal">All Department</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <table>
                                    <thead>
                                        <tr className="border border-secondary ">
                                            <th className="border border-dark pe-5 text-secondary">#</th>
                                            <th className="border border-dark pe-5 text-secondary">Department</th>
                                            <th className="border border-dark pe-5 text-secondary">Designations</th>
                                            <th className="border border-dark pe-5 text-secondary">Add Designation</th>
                                            <th className="border border-dark pe-5 text-secondary">Delete Department</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th className="border border-dark pe-5 text-secondary">1</th>
                                            <td className="border border-dark pe-5 text-secondary">IT</td>
                                            <td className="border border-dark pe-5 text-secondary">Website Admin</td>
                                            <td className="border border-dark pe-5 text-secondary">
                                                <button className="btn btn-outline-primary w-auto text-center">+</button>
                                            </td>
                                            <td className="border border-dark pe-5 text-secondary">
                                                <button className="btn btn-outline-danger w-auto text-center H-10">
                                                    <FontAwesomeIcon icon={faTrash}/>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Listdepartments;