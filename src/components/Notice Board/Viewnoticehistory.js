import React from "react";
import Actions from "./Actions";

const Viewnoticehistory = () => {
    return (
        <div className="commontoall">
            <div className="container W-95 bg-light mb-5 pb-3">
                <div className="bg-success W-100 text-light d-flex justify-content-start rounded-top">
                    <h4 className="h4 mx-3"></h4>
                </div>
                <div className="row mt-3 text-start d-flex align-items-center">
                    <div className="col text-secondary fw-bold">
                        <label htmlFor="start">Start Date:</label>
                        <input type="date" className="w-100 mt-1" />
                    </div>
                    <div className="col text-secondary fw-bold">
                        <label htmlFor="end">End Date:</label>
                        <input type="date" className="w-100 mt-1" />
                    </div>
                    <div className="col text-secondary fw-bold">
                        <label htmlFor="select"></label>
                        <select className="form-select text-start mt-1" aria-label="Default select example">
                            <option selected>Select Filter</option>
                            <option value="1">All</option>
                            <option value="2">Pending</option>
                            <option value="3">Approved</option>
                            <option value="4">Rejected</option>
                        </select>
                    </div>
                    <div className="col text-secondary fw-bold">
                        <label htmlFor="go"></label>
                        <button className="mt-4 btn btn-primary h-auto rounded-pill mt-1">GO</button>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col text-start">
                        <button className="btn btn-success w-auto h-auto rounded-pill">PRINT</button>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Subject</th>
                                    <th scope="col">Body</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Start Time</th>
                                    <th scope="col">End Time</th>
                                    <th scope="col">Sent To</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">Gardening Classes</td>
                                    <td>School is organizing gardening classes in morning 6 to 7 am</td>
                                    <td></td>
                                    <td>05 Jun 2019 12:00 pm</td>
                                    <td>12 Jun 2019 12:01 pm</td>
                                    <td>WHOLE SCHOOL</td>
                                    <td><Actions/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewnoticehistory;