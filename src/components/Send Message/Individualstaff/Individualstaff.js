import React from "react";
import '../../../commontoall.css';
import Selectcontact from "../Selectcontact";
import Mail from "../Mail";
import Card from "../Card";

const Individualstaff = ()=>{
    return(
        <React.Fragment>
            <div className="commontoall">
                <div className="container W-95 bg-light mb-5 pb-3">
                    <div className="bg-success W-100 text-light d-flex align-items-start rounded-top">
                        <h4 className="h4 mx-3">Send to Departments</h4>
                    </div>
                    <div className="mt-3 d-flex flex-column">
                        <div className="mt-4 ">
                            <div class="input-group mb-3">
                                <select class="form-select" id="inputGroupSelect01">
                                    <option selected>Select Staff</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                    <option value="4">Four</option>
                                </select>
                            </div>
                        </div>
                        <Card />
                        <Selectcontact />
                        <hr />
                        <Mail />

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Individualstaff