import React, { useState } from "react";
import Cards from "./Cards";


const Viewbirthdays = () => {
    const [button, setButton] = useState();

    const buttonSetter = (e) => {
        e.preventDefault();
        setButton(e.target.value);
    }

    return (
        <React.Fragment>
            <div className="commontoall">
                <div className="container W-95 bg-light mb-5 pb-3">
                    <div className="bg-success W-100 text-light d-flex justify-content-start rounded-top">
                        <h4 className="h4 mx-3">Birthday List</h4>
                    </div>
                    <div className="row d-flex align-items-center justify-content-start mt-3">
                        <div className="col text-secondary d-flex flex-column text-start">
                            <label htmlFor="start" className="fw-bold">Start Date:</label>
                            <input type="date" id="start" name="start" className="mt-2" />
                        </div>
                        <div className="col text-secondary d-flex flex-column text-start">
                            <label htmlFor="end" className="fw-bold">End Date:</label>
                            <input type="date" id="end" name="end" className="mt-2" />
                        </div>
                        <div className="col text-secondary d-flex flex-column text-start">
                            <button className="btn btn-success w-auto h-auto rounded-pill mt-4">GO</button>
                        </div>
                    </div>
                    <Cards />
                    <div className="row mt-4">
                        <div className="col">
                            <button className="btn btn-outline-success w-100 h-auto" value='student' onClick={(e) => { buttonSetter(e) }}>Students</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-outline-primary w-100 h-auto" value='staff' onClick={(e) => { buttonSetter(e) }}>Staff</button>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            {
                                button === 'student' ? <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Student</th>
                                            <th scope="col">Father</th>
                                            <th scope="col">Class</th>
                                            <th scope="col">Section</th>
                                            <th scope="col">Birth Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">student 9</th>
                                            <td>Mark</td>
                                            <td>3</td>
                                            <td>A</td>
                                            <td>05 June 2019</td>  
                                        </tr>
                                    </tbody>
                                </table> :
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Staff</th>
                                                <th scope="col">No Column Found</th>
                                                <th scope="col">Birth Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                            }
                        </div>
                    </div>
                </div>
            </div>




        </React.Fragment>
    )
}
export default Viewbirthdays;