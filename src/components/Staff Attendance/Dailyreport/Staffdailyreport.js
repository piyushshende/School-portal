import React from "react";
import Staffcards from "./Staffcards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const Staffdailyreport = () => {
    return (
        <React.Fragment>
            <div className="commontoall">
                <div className="container W-95 bg-light mb-5 pb-3">
                    <div className="bg-success W-100 text-light d-flex justify-content-start rounded-top">
                        <h4 className="h4 mx-3">Daily Staff Attendance</h4>
                    </div>
                    <div className="row mt-3">
                        <div className="col d-flex justify-content-start">
                            <input type="date" className="w-25" />
                        </div>
                    </div>
                    <Staffcards />

                    <div className="row mt-5">
                        <div className="col text-start">
                            <button className="btn btn-warning w-auto h-auto text-light rounded-pill">
                                <FontAwesomeIcon icon={faFile} className="px-2" />
                                EXPORT EXCEL</button>
                            <button className="btn btn-success w-auto h-auto rounded-pill ms-2">PRINT</button>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <table className="table text-start border border-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">Absent</th>
                                        <th scope="col">Leave</th>
                                        <th scope="col">HalfDay</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>agra_dir</td>
                                        <td>agra_admin</td>
                                        <td>@mdo</td>
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

export default Staffdailyreport