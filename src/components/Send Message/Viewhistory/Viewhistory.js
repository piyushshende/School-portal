import React from "react";

const Viewhistory = ()=>{
    return(
        <React.Fragment>
            <div className="commontoall">
                <div className="container W-95 bg-light mb-5 pb-3">
                    <div className="bg-success W-100 text-light d-flex align-items-start rounded-top">
                        <h4 className="h4 mx-3">Notification History</h4>
                    </div>
                    <div className="mt-3 d-flex flex-column">
                        <div className="row">
                            <div className="col h5 text-secondary d-flex justify-content-start">Start Date</div>
                            <div className="col h5 text-secondary d-flex justify-content-start">End Date</div>
                            <div className="col h6 text-secondary"></div>
                        </div>
                        <div className="row">
                            <div className="col text-secondary d-flex justify-content-start"><input type="date" className="w-75" /></div>
                            <div className="col text-secondary d-flex justify-content-start"><input type="date" className="w-75"/></div>
                            <div className="col text-secondary w-auto"><button className="btn btn-secondary h-auto rounded-pill">Go</button></div>
                        </div>
                        <div className="btn bg-lightinfo pe-none text-light fw-bolder w-25 mt-5 rounded-pill">VIEW SMS STATUS CODES</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Viewhistory;