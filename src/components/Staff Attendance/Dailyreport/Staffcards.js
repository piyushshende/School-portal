import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
const Staffcards = () => {
    return (
        <React.Fragment>
            <div className="row mt-3">
                <div className="col d-flex">
                    <div className="d-flex flex-column justify-content-center W-40 bg-lightdanger rounded-start">
                        <FontAwesomeIcon icon={faPeopleGroup} className="text-light W-100 fa-2x" />
                    </div>
                    <div className="d-flex flex-column justify-content-center text-light align-items-center W-40 bg-danger rounded-end">
                        <h6 className="h6 p-2">Absent</h6>
                        <h6>1</h6>
                    </div>
                </div>
                <div className="col d-flex">
                    <div className="d-flex flex-column justify-content-center W-40 bg-lightinfo rounded-start">
                        <FontAwesomeIcon icon={faPeopleGroup} className="text-light W-100 fa-2x" />
                    </div>
                    <div className="d-flex flex-column justify-content-center text-light align-items-center W-40 bg-info rounded-end">
                        <h6 className="h6 p-2">Leave</h6>
                        <h6>1</h6>
                    </div>
                </div>
                <div className="col d-flex">
                    <div className="d-flex flex-column justify-content-center W-40 bg-lightsuccess rounded-start">
                        <FontAwesomeIcon icon={faPeopleGroup} className="text-light W-100 fa-2x" />
                    </div>
                    <div className="d-flex flex-column justify-content-center text-light align-items-center W-40 bg-success rounded-end">
                        <h6 className="h6 p-2">HalfDay</h6>
                        <h6>1</h6>
                    </div>
                </div>
            </div>

        </React.Fragment>

    )
}

export default Staffcards