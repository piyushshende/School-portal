import React from "react";
import Actions from "./Actions";

const Calendarevents = () => {
    return (
        <React.Fragment>
            <div className="commontoall">
                <div className="container W-95 bg-light mb-5 pb-3">
                    <div className="bg-success W-100 text-light d-flex justify-content-start rounded-top">
                        <h4 className="h4 mx-3">Add New Event/Holiday</h4>
                    </div>
                    <div className="row mt-3">
                        <div className="col text-start text-secondary fw-bold">
                            <label htmlFor="type" >Type</label>
                            <select className="form-select text-start mt-2" aria-label="Default select example" id="type" name="type">
                                <option selected className=" bg-secondary text-light">Select Type</option>
                                <option value="1" className=" bg-secondary text-light">Event</option>
                                <option value="2" className=" bg-secondary text-light">Holiday</option>
                                <option value="3" className=" bg-secondary text-light">Sport</option>
                                <option value="4" className=" bg-secondary text-light">Exam</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col text-start text-secondary fw-bold">
                            <label htmlFor="title" >Title</label>
                            <input type="text" className="mt-2 w-100" id="title" name="title" placeholder="Enter Title" />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col text-start text-secondary fw-bold">
                            <label htmlFor="exampleFormControlTextarea1" >Description</label>
                            <textarea className="w-100 mt-2 border border-secondary p-2" id="exampleFormControlTextarea1" name="exampleFormControlTextarea1" rows="4" placeholder="Enter Description"></textarea>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col text-start text-secondary fw-bold">
                            <label htmlFor="startdate" >Start Date:</label>
                            <input type="date" className="mt-2 w-100" id="startdate" name="startdate" />
                        </div>
                        <div className="col text-start text-secondary fw-bold">
                            <label htmlFor="enddate" >End Date:</label>
                            <input type="date" className="mt-2 w-100" id="enddate" name="enddate" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col text-center text-secondary fw-bold">
                            <button className="btn btn-primary w-auto h-auto rounded-pill">SELECT CLASSES</button>
                        </div>
                        <div className="col text-center text-secondary fw-bold">
                            <h6>Or</h6>
                        </div>
                        <div className="col text-center text-secondary fw-bold">
                            <button className="btn btn-primary w-auto h-auto rounded-pill">WHOLE SCHOOL</button>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col text-center text-secondary fw-bold">
                            <button className="btn btn-outline-primary w-100 h-auto rounded-pill">ADD EVENT</button>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col text-secondary text-start">
                            <h5>View Events</h5>
                        </div>
                    </div>
                    <div className="row text-start fw-bold">
                        <div className="col text-secondary">
                            <label htmlFor="start">Start Date:</label>
                            <input type="date" id="start" name="start" className="w-100 mt-1" />
                        </div>
                        <div className="col text-secondary">
                            <label htmlFor="end">End Date:</label>
                            <input type="date" id="end" name="end" className="w-100 mt-1" />
                        </div>
                    </div>
                    <div className="row mt-3 ">
                        <div className="col">
                            <table class="table text-start table-bordered border-dark text-secondary">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Subject</th>
                                        <th scope="col">Body</th>
                                        <th scope="col">Sent To</th>
                                        <th scope="col">Start Time</th>
                                        <th scope="col">End Time</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Summer Vacation</td>
                                        <td>Class 1 to 5 will have summer holidays from today.</td>
                                        <td>1-A,1-B,2-A,2-B,3-A,3-B,4-A,4-B</td>
                                        <td>05 Jun 2019 11:56 am</td>
                                        <td>12 Jun 2019 11:56 am</td>
                                        <td><Actions/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Calendarevents;