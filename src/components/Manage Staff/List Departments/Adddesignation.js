import React from "react";

const Adddesignation = () => {
    return (
        <React.Fragment>
            <button type="button" className="btn btn-outline-primary w-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">
                +
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-success text-light">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Designation</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-start">
                            <h6>Add Name</h6>
                            <input type="text" className="w-100"/>
                        </div>
                        <div className="modal-footer d-flex ">
                            <button type="button" className="btn btn-primary w-100 rounded-pill">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Adddesignation;