import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

const Cards = () => {
    return (
        <React.Fragment>
            <div className="row mt-4">
                <div className="col d-flex">
                    <div className="d-flex flex-column justify-content-center W-40 bg-lightdanger rounded-start">
                        <FontAwesomeIcon icon={faPeopleGroup} className="text-light W-100 fa-2x" />
                    </div>
                    <div className="d-flex flex-column justify-content-center text-light align-items-center W-40 bg-danger rounded-end">
                        <h6 className="h6 p-2">Total Students</h6>
                        <h6>1</h6>
                    </div>
                </div>
                <div className="col d-flex">
                    <div className="d-flex flex-column justify-content-center W-40 bg-lightsuccess rounded-start">
                        <FontAwesomeIcon icon={faPeopleGroup} className="text-light W-100 fa-2x" />
                    </div>
                    <div className="d-flex flex-column justify-content-center text-light align-items-center W-40 bg-success rounded-end">
                        <h6 className="h6 p-2">Total Staff</h6>
                        <h6>1</h6>
                    </div>
                </div>
                <div className="col">

                </div>
            </div>
        </React.Fragment>
    )
}

export default Cards;