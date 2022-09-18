import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faTowerBroadcast } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
const Card = ()=>{
    return(
        <div className="cards d-flex row mt-3 flex-start">
                            <div className="yellow d-flex col">
                                <div className="d-flex flex-column justify-content-center W-40 bg-lightwarning rounded-start">
                                    <FontAwesomeIcon icon={faMessage} className="text-light W-100 fa-2x" />
                                </div>
                                <div className="d-flex flex-column justify-content-center align-items-center W-40 bg-warning rounded-end">
                                    <input type="radio" value="onlySMS" className="W-10" name="what_to_send"/>
                                    <label htmlFor="onlySMS" className="fs-6 text-light">Only SMS</label>
                                </div>
                            </div>

                            <div className="yellow d-flex col">
                                <div className="d-flex flex-column justify-content-center W-40 bg-lightinfo rounded-start">
                                    <FontAwesomeIcon icon={faTowerBroadcast} className="text-light W-100 fa-2x" />
                                </div>
                                <div className="d-flex flex-column justify-content-center align-items-center W-40 bg-info rounded-end">
                                    <input type="radio" value="SMS-App" className="W-10" name="what_to_send"/>
                                    <label htmlFor="SMS-App" className="fs-6 text-light">SMS-App</label>
                                </div>
                            </div>

                            <div className="yellow d-flex col">
                                <div className="d-flex flex-column justify-content-center W-40 bg-lightsuccess rounded-start">
                                    <FontAwesomeIcon icon={faMobile} className="text-light W-100 fa-2x" />
                                </div>
                                <div className="d-flex flex-column justify-content-center align-items-center W-40 bg-success rounded-end">
                                    <input type="radio" value="onlyApp" className="W-10" name="what_to_send"/>
                                    <label htmlFor="onlyApp" className="fs-6 text-light">Only App</label>
                                </div>
                            </div>
                            
                        </div>
    )
}

export default Card;