import React from "react";
import '../../../commontoall.css';
import { useSelector } from "react-redux";
import { selectSections } from "../../Redux/Reducer/Classesreducer";
import Selectteacher from "./Selectteacher";
import './selectteacher.css';

const Updateclassteacher = () => {
    const classesData = useSelector(selectSections);


    return (
        <React.Fragment>
            <div class="commontoall pb-3 mb-5">
                <div class="container W-90 bg-light pb-5">
                    <div class="bg-success text-light d-flex justify-content-start rounded-top">
                        <h4 class="h4 mx-3">Update Class Teacher</h4>
                    </div>
                    <div className="mt-3 d-flex justify-content-end mx-4">
                        <div className="btn btn-primary rounded-pill mx-3">Print</div>
                    </div>
                    <table className="table table-striped mt-4 table-bordered border-dark">
                        <thead >
                            <th scope="col">Class</th>
                            <th scope="col">Student Count</th>
                            <th scope="col">Teacher</th>
                        </thead>
                        <tbody>
                            {
                                classesData.map((classes,key) => {
                                    let str = classes.Myclass
                                    return (
                                        classes.sections.length !== 0 ? classes.sections.map((sec,key) => {
                                            return (
                                                <tr i={key}>
                                                    <td>
                                                        {str + '-' + sec.toUpperCase()}
                                                    </td>
                                                    <td></td>
                                                    <td>
                                                        <Selectteacher index={key} Myclass={str + '-' + sec.toUpperCase()}/>
                                                    </td>
                                                </tr>
                                            )
                                        }) : 
                                        <tr i={key}>
                                            <td>{str}</td>
                                            <td></td>
                                            <td><Selectteacher index={key} Myclass={str}/></td>
                                        </tr>
                                    
                                    )
                                }
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Updateclassteacher;