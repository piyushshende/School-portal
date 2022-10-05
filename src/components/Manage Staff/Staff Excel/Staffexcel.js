import React from "react";


const Staffexcel = () => {
    return (
        <React.Fragment>
            <div className="commontoall">
                <div className="container W-95 bg-light mb-5 pb-3">
                    <div className="bg-success W-100 text-light d-flex justify-content-start rounded-top">
                        <h4 className="h4 mx-3">Staff Excel</h4>
                    </div>
                    <div className="mt-3">
                        <div className="row">
                            <div className="col d-flex justify-content-end align-items-start">
                                <button className="btn btn-primary rounded-pill w-auto h-auto">PRINT</button>
                                <button className="btn btn-warning ms-2 rounded-pill w-auto h-auto">EXPORT EXCEL</button>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col text-secondary text-start fw-bold">
                                <label htmlFor="columns">Select Additional Columns</label>
                                <input type="text" id="columns" name="columns" className="w-100 rounded-0 d-block mt-2" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <table className="w-100">
                                <thead>
                                    <tr className="text-start border border-dark">
                                        <th scope="col" className="border border-dark">#</th>
                                        <th scope="col" className="border border-dark">Staff</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Staffexcel;