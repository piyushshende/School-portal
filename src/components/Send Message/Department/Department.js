import React from "react";
import '../../../commontoall.css';
import Selectcontact from "../Selectcontact";
import Studentfilters from "../Studentfilters";
import Mail from "../Mail";
import Card from "../Card";

const Department = () => {
    return (
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
                                    <option selected>Select Department</option>
                                    <option value="1">IT</option>
                                    <option value="2">Computer Science</option>
                                    <option value="3">Electronics</option>
                                    <option value="4">Mechanical</option>
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
export default Department;