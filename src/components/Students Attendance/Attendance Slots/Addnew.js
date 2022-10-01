import React from "react";

const Addnew = (props) => {
    const index = props.index

    return (
        <div>
            <button type="button" className="btn btn-primary w-auto d-flex justify-content-end ms-5" data-bs-toggle="modal" data-bs-target={"#exampleModal"+index}>
                ADD NEW
            </button>
            <div className="modal fade" id={"exampleModal"+index} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header  bg-success">
                            <h5 className="modal-title text-light" id="exampleModalLabel">Attendance Slots</h5>
                            <button type="button" className="btn-close text-light" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-secondary">
                            <div className="d-flex justify-content-start flex-column">
                                <label htmlFor="Start" className="d-flex justify-content-start fw-bold">Start Time</label>
                                <input type="text" className="" id="Start" name="Start"/>
                            </div>
                            <div className="d-flex justify-content-start flex-column mt-2">
                                <label htmlFor="Message" className="d-flex justify-content-start fw-bold">Message Time</label>
                                <input type="text" className="" id="Message" name="Message"/>
                            </div>
                            <div className="d-flex justify-content-start flex-column mt-2">
                                <label htmlFor="End" className="d-flex justify-content-start fw-bold">End Time</label>
                                <input type="text" className="" id="End" name="End"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                            <button type="button" className="btn btn-primary w-100 rounded-pill">Add Attendance Slot</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Addnew;