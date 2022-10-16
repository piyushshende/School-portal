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
import { faHistory } from "@fortawesome/free-solid-svg-icons";


const Sidebar = () => {
    return (
        <React.Fragment>
            <nav className="flex-sm-column bg-dark sidebar">
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid d-flex flex-column">
                        <button className="navbar-toggler bg-light text-primary w-50" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-column justify-content-center align-items-start mx-5">
                                <li className="nav-item text-success mt-5 mx-3 pt-3 only-bottom-border">
                                    <form role="search">
                                        <input className="form-control me-4 bg-dark" type="search" placeholder="Search..." aria-label="Search" />
                                    </form>
                                </li>
                                <li className="nav-item text-success mt-1 mx-1 me-4 w-75">
                                    <a className="nav-link text-success fs-6 " aria-current="page" href="#"><Link to="/searchstudent"><FontAwesomeIcon icon={faSearch} className="wid" />Search Student</Link></a>
                                </li>
                                <li className="nav-item mt-3 w-75">
                                    <a className="nav-link text-success fs-6" href="#"><Link to="/dashboard"><FontAwesomeIcon icon={faTachometer} className="wid" />Dashboard</Link></a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link text-success fs-6 accordion" href="#" id="accordionExample">
                                        <div className="accordion-item accordion-flush">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    <FontAwesomeIcon icon={faNoteSticky} className="wid" />
                                                    Class structure
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse  collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <ul className="accordion-menu" aria-labelledby="offcanvasNavbarDropdown">
                                                        <li className="mt-3"><Link to="/class_structure/school_details"><a className="accordion-item" href="#"><FontAwesomeIcon icon={faSchool} className="wid" />School Details</a></Link></li>
                                                        <li className="mt-3"><Link to="/class_structure/classes"><a className="accordion-item" href="#"><FontAwesomeIcon icon={faMobileScreen} className="wid" />Classes</a></Link></li>
                                                        <li className="mt-3"><Link to="/class_structure/subjects"><a className="accordion-item" href="#"><FontAwesomeIcon icon={faBook} className="wid" />Subjects</a></Link></li>
                                                        <li className="mt-3"><Link to="/class_structure/class_teacher"><a className="accordion-item" href="#"><FontAwesomeIcon icon={faChalkboardTeacher} className="wid" />Class Teacher</a></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link text-success accordion fs-6" href="#" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    <FontAwesomeIcon icon={faBell} className="wid" />Send Message
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <ul>
                                                        <li className="mt-3"><Link to="/Send_Message/All_Students"><a className="accordion-item" href="#"><FontAwesomeIcon className="wid" />All Students</a></Link></li>
                                                        <li className="mt-3"><Link to="/Send_Message/Individual_Classes"><a className="accordion-item" href="#"><FontAwesomeIcon className="wid" />Individual Classes</a></Link></li>
                                                        <li className="mt-3"><Link to="/Send_Message/Individual_Students"><a className="accordion-item" href="#"><FontAwesomeIcon className="wid" />Individual Students</a></Link></li>
                                                        <li className="mt-3"><Link to="/Send_Message/Whole_Staff"><a className="accordion-item" href="#"><FontAwesomeIcon className="wid" />Whole Staff</a></Link></li>
                                                        <li className="mt-3"><Link to="/Send_Message/Department"><a className="accordion-item" href="#"><FontAwesomeIcon className="wid" />Department</a></Link></li>
                                                        <li className="mt-3"><Link to="/Send_Message/Individual_Staff"><a className="accordion-item" href="#"><FontAwesomeIcon className="wid" />Individual Staff</a></Link></li>
                                                        <li className="mt-3"><Link to="/Send_Message/View_History"><a className="accordion-item" href="#"><FontAwesomeIcon className="wid" />View History</a></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link text-success accordion fs-6" href="#" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    <FontAwesomeIcon icon={faPeopleGroup} className="wid" />Manage Students
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <ul>
                                                        <li className="mt-3"><Link to="/Manage_Students/Add_Students"><a className="accordion-item" href="#"><FontAwesomeIcon className="wid" />Add Students</a></Link></li>
                                                        <li className="mt-3"><Link to="/Manage_Students/List_Students"><a className="accordion-item" href="#"><FontAwesomeIcon className="wid" />List Students</a></Link></li>
                                                        <li className="mt-3"><Link to="/Manage_Students/Move_Students"><a className="accordion-item" href="#"><FontAwesomeIcon className="wid" />Move Students</a></Link></li>
                                                        <li className="mt-3"><Link to="/Manage_Students/Class_Students_Lists"><a className="accordion-item" href="#"><FontAwesomeIcon className="wid" />Class Students Lists</a></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link text-success accordion fs-6" href="#" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingFour">
                                                <button className="accordion-button text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    <FontAwesomeIcon icon={faNoteSticky} className="wid" />Student Attendance
                                                </button>
                                            </h2>
                                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <ul>
                                                        <li className="mt-3"><Link to="/Students_Attendance/Mark_Attendance"><a className="accordion-item" href="#"><FontAwesomeIcon className="wid" />Mark Attendance</a></Link></li>
                                                        <li className="mt-3"><Link to="/Students_Attendance/Daily_Report"><a className="accordion-item" href="#"><FontAwesomeIcon className="wid" />Daily Report</a></Link></li>
                                                        <li className="mt-3"><Link to="/Students_Attendance/Attendance_Slot"><a className="accordion-item" href="#"><FontAwesomeIcon className="wid" />Attendance Slots</a></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link text-success accordion fs-6" href="#" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingSix">
                                                <button className="accordion-button text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                    <FontAwesomeIcon icon={faBell} className="wid" />Notice Board
                                                </button>
                                            </h2>
                                            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <ul>
                                                        <li className="mt-3"><Link to="/Notice_Board/Whole_School"><a className="accordion-item" href="#"><FontAwesomeIcon icon={faSchool} className="wid" />Whole School</a></Link></li>
                                                        <li className="mt-3"><Link to="/Notice_Board/Individual_Classes"><a className="accordion-item" href="#"><FontAwesomeIcon icon={faMobileScreen} className="wid" />Individual Classes</a></Link></li>
                                                        <li className="mt-3"><Link to="/Notice_Board/View_History"><a className="accordion-item" href="#"><FontAwesomeIcon icon={faHistory} className="wid" />View History</a></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link text-success accordion fs-6" href="#" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingSeven">
                                                <button className="accordion-button text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                    <FontAwesomeIcon icon={faPeopleGroup} className="wid" />Manage Staff
                                                </button>
                                            </h2>
                                            <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <ul>
                                                        <li className="mt-3"><Link to="/Manage_Staff/Search_Staff"><a className="accordion-item" href="#"><FontAwesomeIcon className="wid" />Search Staff</a></Link></li>
                                                        <li className="mt-3"><Link to="/Manage_Staff/Add_Staff"><a className="accordion-item" href="#"><FontAwesomeIcon className="wid" />Add Staff</a></Link></li>
                                                        <li className="mt-3"><Link to="/Manage_Staff/List_Staff"><a className="accordion-item" href="#"><FontAwesomeIcon className="wid" />List Staff</a></Link></li>
                                                        <li className="mt-3"><Link to="/Manage_Staff/Staff_Excel"><a className="accordion-item" href="#"><FontAwesomeIcon className="wid" />Staff Excel</a></Link></li>
                                                        <li className="mt-3"><Link to="/Manage_Staff/List_Departments"><a className="accordion-item" href="#"><FontAwesomeIcon className="wid" />List Departments</a></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item mx-3 w-75">
                                    <a className="nav-link text-success accordion fs-6" href="#" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingEight">
                                                <button className="accordion-button text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                    <FontAwesomeIcon icon={faNoteSticky} className="wid" />Staff Attendance
                                                </button>
                                            </h2>
                                            <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <ul>
                                                        <li className="mt-3"><Link to="/Staff_Attendance/Mark_Attendance"><a className="accordion-item" href="#"><FontAwesomeIcon className="wid" />Mark Attendance</a></Link></li>
                                                        <li className="mt-3"><Link to="/Staff_Attendance/Daily_Report"><a className="accordion-item" href="#"><FontAwesomeIcon className="wid" />Daily Report</a></Link></li>
                                                        <li className="mt-3"><Link to="/Staff_Attendance/Attendance_Slots"><a className="accordion-item" href="#"><FontAwesomeIcon className="wid" />Attendance Slots</a></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </a>                                
                                </li>
                                <li className="nav-item mx-3 w-75">
                                    <a className="nav-link text-success accordion fs-6" href="#" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingNine">
                                                <button className="accordion-button text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                                    <FontAwesomeIcon icon={faNoteSticky} className="wid" />Leave App
                                                </button>
                                            </h2>
                                            <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <ul>
                                                        <li className="mt-3"><Link to="/Leave_App/Pending"><a className="accordion-item" href="#"><FontAwesomeIcon className="wid" />Pending</a></Link></li>
                                                        <li className="mt-3"><Link to="/Leave App/ApprovedRejected"><a className="accordion-item" href="#"><FontAwesomeIcon className="wid" />Approved/Rejected</a></Link></li>                                                    
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </a>                                
                                </li>
                                <li className="nav-item mx-3 w-75">
                                    <a className="nav-link text-success fs-6" href="#"><Link to="/View_Birthdays"><FontAwesomeIcon icon={faCalendar} className="wid" />View Birthdays</Link></a>
                                </li>
                                <li className="nav-item mx-3 w-75">
                                    <a className="nav-link text-success fs-6" href="#"><Link to="/Calendar_Events"><FontAwesomeIcon icon={faCalendar} className="wid" />Calendar Events</Link></a>
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