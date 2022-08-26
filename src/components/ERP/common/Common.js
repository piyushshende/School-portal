import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar.js";
import './common.css';
import Searchstudent from "../../search student/Searchstudent.js";

const Common = () => {
    const [sname, setSname] = useState("agra_admin");
    return (
        <React.Fragment>
            <div class="oneinall">
                <div className="whole bg-dark">
                    <div class="school-name-desktop">
                        <div className="school">
                            <div className="name mt-3">
                                <span>{sname}</span>
                                <a href=""><FontAwesomeIcon icon={faEdit} />Edit Profile</a>
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faLock} />
                            </div>
                        </div>
                        <div class="ion mt-2">
                            <Sidebar />
                        </div>
                    </div>
                    <div class="school-name-mobile">
                        <div className="ion">
                            <Sidebar />
                        </div>
                        <div className="school d-flex justify-content-center align-items-center">
                            <div className="name">
                                <span class="d-block">{sname}</span>
                                <a href=""><FontAwesomeIcon icon={faEdit} />Edit Profile</a>
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faLock} />
                            </div>
                        </div>
                    </div>
                    <nav class="navbar navbar-expand-lg bg-dark">
                        <div class="container-fluid">
                            <a class="navbar-brand text-success" href="#">{sname}</a>
                            <button class="navbar-toggler bg-light text-primary w-50 mx-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link active text-success" aria-current="page" href="#"><FontAwesomeIcon icon={faCalendar} /></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active text-success" aria-current="page" href="#"><FontAwesomeIcon icon={faGear} /></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active text-success" aria-current="page" href="#"><FontAwesomeIcon icon={faMessage} /></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active text-success" aria-current="page" href="#"><FontAwesomeIcon icon={faDollar} /></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active text-success" aria-current="page" href="#"><FontAwesomeIcon icon={faSearch} /></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active text-success" aria-current="page" href="#"><FontAwesomeIcon icon={faPowerOff} /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Common;