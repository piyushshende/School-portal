import React from "react";

const Searchstaff = () => {
    return (
        <React.Fragment>
            <div className="commontoall">
                <div className="container W-95 bg-light mb-5 pb-3">
                    <div className="bg-success W-100 text-light d-flex justify-content-start rounded-top">
                        <h4 className="h4 mx-3">Search Staff</h4>
                    </div>
                    <div className="d-flex mt-5">
                        <select className="w-auto form-select rounded-start bg-primary text-light rounded-2 rounded-end" aria-label="Default select example">
                            <option selected value="1" className="bg-light text-dark">Name</option>
                            <option value="2" className="bg-light text-dark">Contact</option>
                            <option value="3" className="bg-light text-dark">Employee Code</option>
                            <option value="3" className="bg-light text-dark">Department</option>
                            <option value="3" className="bg-light text-dark">Designation</option>
                        </select>
                        <input type="text" className="w-100"/>
                        <button className="btn btn-success w-auto h-auto rounded-5 rounded-start">GO!</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Searchstaff;