import React, { useState } from "react";
import './selectteacher.css';
import Confirm from "./Confirm";

const Selectteacher = (props) => {
    const index = props.index;
    const [popKey, setPopKey] = useState(0);
    let pop = 0;
    const teachers = ['ABHINAV', 'ARUN', 'BHANU', 'DEEKSHA SHARMA', 'HEAD TEACHER', 'KISHAN LAL SHARMA'];

    const handlePopKey = (e,k) => {
        e.preventDefault();
        setPopKey(k);
    }

    return (
        <React.Fragment>
            <div className="modal fade modal-xl" id={"exampleModalToggle"+index} aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel">SELECT TEACHER</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body display-grid">
                            {
                                teachers.map((teacher, key) => {
                                    return (   
                                        <div>
                                            <div>
                                                <button className="btn btn-success h-auto mt-2" data-bs-target={"#exampleModalToggle2"+key} onClick={(e)=>handlePopKey(e,key)} data-bs-toggle="modal">{teacher}</button>                                               
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id={"exampleModalToggle2"+popKey} aria-hidden="true" aria-labelledby={"exampleModalToggleLabel2"+popKey} tabindex="-1">
                {console.log(popKey)}
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={"exampleModalToggleLabel2"+popKey}>Modal 2</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {popKey}
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
                        </div>
                    </div>
                </div>
            </div>
            <a className="btn btn-primary" data-bs-toggle="modal" href={"#exampleModalToggle"+index} role="button">SELECT TEACHER</a>
        </React.Fragment>
    )
}

export default Selectteacher