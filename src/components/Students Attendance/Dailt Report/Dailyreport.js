import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

const Dailyreport = () => {
    return (
        <div className="commontoall">
            <div className="container W-95 bg-light mb-5 pb-3">
                <div className="bg-success W-100 text-light d-flex justify-content-start rounded-top">
                    <h4 className="h4 mx-3">DAILY ATTENDANCE REPORT</h4>
                </div>
                <div className="mt-3 d-flex justify-content-start mx-3 flex-column">
                    <input type="date" className="w-25" />
                    <div className="d-flex justify-content-start mt-4">
                        <div>
                            <div>
                                <button className="btn btn-warning rounded-pill h-auto"><FontAwesomeIcon icon={faFileExcel} className="wid text-light" />EXPORT EXCEL</button>
                                <button className="btn btn-success rounded-pill h-auto w-auto">PRINT DAILY ATTENDANCE REPORT</button>
                            </div>
                            <div className="mt-4 d-flex justify-content-start mt-4">
                                <button className="btn btn-primary rounded-pill w-auto">SEND SMS</button>
                            </div>
                        </div>
                        <div className="yellow d-flex col justify-content-end">
                                <div className="d-flex flex-column justify-content-center W-30 bg-lightdanger rounded-start">
                                    <FontAwesomeIcon icon={faPeopleGroup} className="text-light W-100 fa-4x" />
                                </div>
                                <div className="d-flex flex-column justify-content-center align-items-center W-30 bg-danger rounded-end">
                                    <h6 className="text-light fs-5">Absent</h6>
                                </div>
                            </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Dailyreport;