import React from "react";
import { Link } from "react-router-dom";
import './sidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTachometer } from "@fortawesome/free-solid-svg-icons";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faDashboard } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";



const Sidebar = () => {
    return (
        <React.Fragment>
            <nav class="flex-sm-column bg-dark sidebar">
                <nav class="navbar navbar-expand-lg bg-dark">
                    <div class="container-fluid d-flex flex-column">
                        <button class="navbar-toggler bg-light text-primary w-50" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-column justify-content-center align-items-start mx-5">
                                <li class="nav-item text-success mt-5 mx-3 pt-3 only-bottom-border">
                                    <form role="search">
                                        <input class="form-control me-4 bg-dark" type="search" placeholder="Search..." aria-label="Search" />
                                    </form>
                                </li>
                                <li class="nav-item text-success mt-1 mx-1 me-4 w-75">
                                    <a class="nav-link text-success fs-6 " aria-current="page" href="#"><Link to="/searchstudent"><FontAwesomeIcon icon={faSearch} className="wid" />Search Student</Link></a>
                                </li>
                                <li class="nav-item mt-3 w-75">
                                    <a class="nav-link text-success fs-6" href="#"><Link to="/dashboard"><FontAwesomeIcon icon={faTachometer} className="wid" />Dashboard</Link></a>
                                </li>
                                <li class="nav-item mx-3">
                                    <a class="nav-link text-success fs-6 accordion" href="#" id="accordionExample">
                                        <div class="accordion-item accordion-flush">
                                            <h2 class="accordion-header" id="headingOne">
                                                <button class="accordion-button text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    <FontAwesomeIcon icon={faNoteSticky} className="wid" />
                                                    Class structure
                                                </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse  collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <ul class="accordion-menu" aria-labelledby="offcanvasNavbarDropdown">
                                                        <li class="mt-3"><Link to="/class_structure/school_details"><a class="accordion-item" href="#"><FontAwesomeIcon icon={faSchool} className="wid" />School Details</a></Link></li>
                                                        <li class="mt-3"><Link to="/class_structure/classes"><a class="accordion-item" href="#"><FontAwesomeIcon icon={faMobileScreen} className="wid" />Classes</a></Link></li>
                                                        <li class="mt-3"><Link to="/class_structure/subjects"><a class="accordion-item" href="#"><FontAwesomeIcon icon={faBook} className="wid" />Subjects</a></Link></li>
                                                        <li class="mt-3"><Link to=""><a class="accordion-item" href="#"><FontAwesomeIcon icon={faChalkboardTeacher} className="wid" />Class Teacher</a></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item mx-3">
                                    <a class="nav-link text-success accordion fs-6" href="#" id="accordionExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingTwo">
                                                <button class="accordion-button text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    <FontAwesomeIcon icon={faBell} className="wid" />Send Message
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <ul>
                                                        <li class="mt-3"><Link to=""><a class="accordion-item" href="#"><FontAwesomeIcon icon={faSchool} className="wid" />School Details</a></Link></li>
                                                        <li class="mt-3"><Link to=""><a class="accordion-item" href="#"><FontAwesomeIcon icon={faMobileScreen} className="wid" />Classes</a></Link></li>
                                                        <li class="mt-3"><Link to=""><a class="accordion-item" href="#"><FontAwesomeIcon icon={faBook} className="wid" />Subjects</a></Link></li>
                                                        <li class="mt-3"><Link to=""><a class="accordion-item" href="#"><FontAwesomeIcon icon={faChalkboardTeacher} className="wid" />Class Teacher</a></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item mx-3">
                                    <a class="nav-link text-success accordion fs-6" href="#" id="accordionExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingThree">
                                                <button class="accordion-button text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    <FontAwesomeIcon icon={faPeopleGroup} className="wid" />Manage Students
                                                </button>
                                            </h2>
                                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <ul>
                                                        <li class="mt-3"><Link to=""><a class="accordion-item" href="#"><FontAwesomeIcon icon={faSchool} className="wid" />School Details</a></Link></li>
                                                        <li class="mt-3"><Link to=""><a class="accordion-item" href="#"><FontAwesomeIcon icon={faMobileScreen} className="wid" />Classes</a></Link></li>
                                                        <li class="mt-3"><Link to=""><a class="accordion-item" href="#"><FontAwesomeIcon icon={faBook} className="wid" />Subjects</a></Link></li>
                                                        <li class="mt-3"><Link to=""><a class="accordion-item" href="#"><FontAwesomeIcon icon={faChalkboardTeacher} className="wid" />Class Teacher</a></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item mx-3">
                                    <a class="nav-link text-success accordion fs-6" href="#" id="accordionExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingFour">
                                                <button class="accordion-button text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    <FontAwesomeIcon icon={faNoteSticky} className="wid" />Student Attendance
                                                </button>
                                            </h2>
                                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <ul>
                                                        <li class="mt-3"><Link to=""><a class="accordion-item" href="#"><FontAwesomeIcon icon={faSchool} className="wid" />School Details</a></Link></li>
                                                        <li class="mt-3"><Link to=""><a class="accordion-item" href="#"><FontAwesomeIcon icon={faMobileScreen} className="wid" />Classes</a></Link></li>
                                                        <li class="mt-3"><Link to=""><a class="accordion-item" href="#"><FontAwesomeIcon icon={faBook} className="wid" />Subjects</a></Link></li>
                                                        <li class="mt-3"><Link to=""><a class="accordion-item" href="#"><FontAwesomeIcon icon={faChalkboardTeacher} className="wid" />Class Teacher</a></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item mx-3">
                                    <a class="nav-link text-success accordion fs-6" href="#" id="accordionExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingFive">
                                                <button class="accordion-button text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                    <FontAwesomeIcon icon={faWifi} className="wid" />Biometric
                                                </button>
                                            </h2>
                                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <ul>
                                                        <li class="mt-3"><Link to=""><a class="accordion-item" href="#"><FontAwesomeIcon icon={faSchool} className="wid" />School Details</a></Link></li>
                                                        <li class="mt-3"><Link to=""><a class="accordion-item" href="#"><FontAwesomeIcon icon={faMobileScreen} className="wid" />Classes</a></Link></li>
                                                        <li class="mt-3"><Link to=""><a class="accordion-item" href="#"><FontAwesomeIcon icon={faBook} className="wid" />Subjects</a></Link></li>
                                                        <li class="mt-3"><Link to=""><a class="accordion-item" href="#"><FontAwesomeIcon icon={faChalkboardTeacher} className="wid" />Class Teacher</a></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item mx-3">
                                    <a class="nav-link text-success accordion fs-6" href="#" id="accordionExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingSix">
                                                <button class="accordion-button text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                    <FontAwesomeIcon icon={faFilePdf} className="wid" />Manage Exams
                                                </button>
                                            </h2>
                                            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <ul>
                                                        <li class="mt-3"><Link to=""><a class="accordion-item" href="#"><FontAwesomeIcon icon={faSchool} className="wid" />School Details</a></Link></li>
                                                        <li class="mt-3"><Link to=""><a class="accordion-item" href="#"><FontAwesomeIcon icon={faMobileScreen} className="wid" />Classes</a></Link></li>
                                                        <li class="mt-3"><Link to=""><a class="accordion-item" href="#"><FontAwesomeIcon icon={faBook} className="wid" />Subjects</a></Link></li>
                                                        <li class="mt-3"><Link to=""><a class="accordion-item" href="#"><FontAwesomeIcon icon={faChalkboardTeacher} className="wid" />Class Teacher</a></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item mx-3">
                                    <a class="nav-link text-success accordion fs-6" href="#" id="accordionExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingSeven">
                                                <button class="accordion-button text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                    <FontAwesomeIcon icon={faPeopleGroup} className="wid" />Manage Staff
                                                </button>
                                            </h2>
                                            <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <ul>
                                                        <li class="mt-3"><Link to=""><a class="accordion-item" href="#"><FontAwesomeIcon icon={faSchool} className="wid" />School Details</a></Link></li>
                                                        <li class="mt-3"><Link to=""><a class="accordion-item" href="#"><FontAwesomeIcon icon={faMobileScreen} className="wid" />Classes</a></Link></li>
                                                        <li class="mt-3"><Link to=""><a class="accordion-item" href="#"><FontAwesomeIcon icon={faBook} className="wid" />Subjects</a></Link></li>
                                                        <li class="mt-3"><Link to=""><a class="accordion-item" href="#"><FontAwesomeIcon icon={faChalkboardTeacher} className="wid" />Class Teacher</a></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item mx-3 w-75">
                                    <a class="nav-link text-success fs-6" href="#"><Link to=""><FontAwesomeIcon icon={faDashboard} className="wid" />Staff Attendance</Link></a>
                                </li>
                                <li class="nav-item mx-3 w-75">
                                    <a class="nav-link text-success fs-6" href="#"><Link to=""><FontAwesomeIcon icon={faCalendar} className="wid" />View Birthdays</Link></a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </nav>
        </React.Fragment>
    )
}

export default Sidebar;