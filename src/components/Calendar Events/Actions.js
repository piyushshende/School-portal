import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Actions = ()=>{
    return(
        <div className="ms-3">
            <div className="w-auto text-warning pe-auto"><FontAwesomeIcon icon={faEdit}/></div>
            <div className="w-auto text-danger pe-auto"><FontAwesomeIcon icon={faTrash}/></div>
        </div>
    )
}

export default Actions