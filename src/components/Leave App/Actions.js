import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faCross } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Actions = ()=>{
    return(
        <div className="d-flex justify-content-center">
            <button className="btn btn-outline-primary w-auto h-auto mx-2"><FontAwesomeIcon icon={faEye}/></button>
            <button className="btn btn-outline-success w-auto h-auto mx-2"><FontAwesomeIcon icon={faCheck}/></button>
            <button className="btn btn-outline-warning w-auto h-auto mx-2"><FontAwesomeIcon icon={faCross}/></button>
            <button className="btn btn-outline-danger w-auto h-auto mx-2"><FontAwesomeIcon icon={faTrash}/></button>
        </div>
    )
}
export default Actions