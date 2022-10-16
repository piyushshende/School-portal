import React from "react";
import Actions from "./Actions";
const Pending = () => {
    return (
        <div className="commontoall">
            <div className="container W-95 bg-light mb-5 pb-3">
                <div className="bg-success W-100 text-light d-flex justify-content-start rounded-top">
                    <h4 className="h4 mx-3">Pending Leaves</h4>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Applicant</th>
                                    <th scope="col">SR No./Emp.Code</th>
                                    <th scope="col">Start Date</th>
                                    <th scope="col">End Date</th>
                                    <th scope="col">Reason</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">1</td>
                                    <td>STUDENT 7</td>
                                    <td></td>
                                    <td>06 June 2019</td>
                                    <td>07 June 2019</td>
                                    <td>Ill</td>
                                    <td><Actions/></td>
                                </tr>
                                <tr>
                                    <td scope="row">2</td>
                                    <td>STUDENT 2</td>
                                    <td></td>
                                    <td>06 June 2019</td>
                                    <td>07 June 2019</td>
                                    <td>Ill</td>
                                    <td><Actions/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>




    )
}
export default Pending