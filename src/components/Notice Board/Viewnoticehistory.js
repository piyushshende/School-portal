import React from "react";

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
            </div>
        </div>
    )
}

export default Viewnoticehistory;