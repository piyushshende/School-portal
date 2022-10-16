import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
const Actions = ()=>{
    return(
        <div className="ms-2">
            <div className="text-warning fs-4"><FontAwesomeIcon icon={faEdit}/></div>
        </div>
    )
}
export default Actions;