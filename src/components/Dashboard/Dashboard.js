import React from "react";
import '../../commontoall.css';
import './dashboard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faMale } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { PieChart, Pie, Cell } from "recharts";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
    const studentData = [
        {
            'name': "Present",
            'value': 10,
            'fill': "#198754"
        },
        {
            'name': "Absent",
            'value': 4,
            'fill': "#dc3545"
        }
    ]

    const staffData = [
        {
            'name': "Present",
            'value': 10,
            'fill': "#198754"
        },
        {
            'name': "Absent",
            'value': 4,
            'fill': "#dc3545"
        }
    ]
    return (
        <React.Fragment>
            <div className="commontoall dashboard">
                <div className="leftd">
                    <div class="container">
                        <div className="card">
                            <div className="icon1">
                                <h1 class="h1"><FontAwesomeIcon icon={faPeopleGroup} /></h1>
                            </div>
                            <div className="stu81">
                                <h5 class="h5 mt-3">STUDENT
                                    <p> 8</p>
                                </h5>
                            </div>
                        </div>
                        <h5 class="text-success mt-5">Student Attendance</h5>
                        <div className="attendace mx-5">
                            <div class="d-flex flex-row mb-3 mt-5">
                                <p>
                                    <span class="bg-success vh-25 vw-25 text-success mx-1">Present</span>
                                    Present ({studentData[0].value})
                                </p>
                                <p>
                                    <span class="bg-danger mx-3 text-danger">Absent</span>
                                    Absent ({studentData[1].value})
                                </p>
                            </div>
                            <PieChart width={300} height={300}>
                                <Pie
                                    data={studentData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={150}
                                    fill="#fff"
                                >
                                    {studentData.map((entry, index) => {
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={entry.color}
                                        />

                                    })}
                                </Pie>
                            </PieChart>

                        </div>
                    </div>
                </div>
                <div className="middled">
                    <div class="container">
                        <div className="card">
                            <div className="icon2">
                                <h1 class="h1"><FontAwesomeIcon icon={faMessage} /></h1>
                            </div>
                            <div className="stu82 flex-column">
                                <h5 class="h5">SMS SENT</h5>
                                <span>3</span>
                            </div>
                        </div>
                        <div className="card mt-5" >
                            <div className="icon2" style={{ background: "#ffda6a" }}>
                                <h1 class="h1"><FontAwesomeIcon icon={faGift} /></h1>
                            </div>
                            <div className="stu82 flex-column" style={{ background: "#ffc107" }}>
                                <h5 class="h5">BIRTHDAYS</h5>
                                <span>1</span>
                            </div>
                        </div>
                        <div className="card mt-5" >
                            <div className="icon2" style={{ background: "#8c68cd" }}>
                                <h1 class="h1"><FontAwesomeIcon icon={faIdCard} /></h1>
                            </div>
                            <div className="stu82 flex-column" style={{ background: "#6f42c1" }}>
                                <h5 class="h5">NEW ADMISSIONS</h5>
                                <span> 8</span>
                            </div>
                        </div>
                        <button class="btn btn-warning mt-5 mx-5 text-light extra">
                            <FontAwesomeIcon icon={faFilePdf} />
                            DOWNLOAD STUDENTS EXCEL
                        </button>
                        <button class="btn btn-success mt-5 mx-5 text-light extra">
                            <FontAwesomeIcon icon={faBell} />
                            SMS CREDENTIALS TO ALL
                        </button>
                    </div>

                </div>
                <div className="rightd">
                    <div class="container">
                        <div className="card">
                            <div className="icon3">
                                <h1 class="h1"><FontAwesomeIcon icon={faMale} /></h1>
                            </div>
                            <div className="stu83">
                                <h5 class="h5 mt-3">STAFF
                                    <p> 8</p></h5>
                            </div>
                        </div>
                        <h5 class="text-success mt-5 text-danger">Staff Attendance</h5>
                        <div className="attendace mx-5">
                            <div class="d-flex flex-row mb-3 mt-5">
                                <p>
                                    <span class="bg-success vh-25 vw-25 text-success mx-3">Present</span>
                                    Present ({staffData[0].value})
                                </p>
                                <p>
                                    <span class="bg-danger mx-3 text-danger">Absent</span>
                                    Absent ({staffData[1].value})
                                </p>
                            </div>
                            <PieChart width={300} height={300}>
                                <Pie
                                    data={staffData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={150}
                                    fill="#fff"
                                >
                                    {staffData.map((entry, index) => {
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={entry.color}
                                        />

                                    })}
                                </Pie>
                            </PieChart>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Dashboard;