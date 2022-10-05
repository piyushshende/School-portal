import React from "react";

const Liststaff = () => {
    return (
        <React.Fragment>
            <div className="commontoall">
                <div className="container W-95 bg-light mb-5 pb-3">
                    <div className="bg-success W-100 text-light d-flex justify-content-start rounded-top">
                        <h4 className="h4 mx-3">Manage Staff</h4>
                    </div>
                    <div className="mt-3">
                        <div className="row">
                            <div className="col d-flex justify-content-end align-items-center">
                                <button className="btn btn-primary h-auto w-auto rounded-pill">PRINT</button>
                                <button className="btn btn-warning ms-2 h-auto w-auto rounded-pill">EXPORT EXCEL</button>
                                <button className="btn btn-success ms-2 h-auto w-auto rounded-pill">SMS CREDENTIALS TO TEACHERS</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Liststaff;