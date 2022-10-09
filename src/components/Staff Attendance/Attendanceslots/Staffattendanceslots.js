import React, { useState } from "react";
import Addnew from "./Addnew";

const Staffattendanceslots = () => {

    const [teacherData, setTeacherData] = useState([
        { 'Name': 'Teacher 5', 'Emp.Code': '1' },
        { 'Name': 'Teacher 4', 'Emp.Code': '2' },
        { 'Name': 'Teacher 3', 'Emp.Code': '3' },
        { 'Name': 'Teacher 2', 'Emp.Code': '4' },
        { 'Name': 'Teacher 1', 'Emp.Code': '5' }
    ]);

    const addTeachers = () => {
    }

    return (
        <div className="commontoall">
            <div className="container W-95 bg-light mb-5 pb-3">
                <div className="bg-success W-100 text-light d-flex justify-content-start rounded-top">
                    <h4 className="h4 mx-3">Daily Staff Attendance</h4>
                </div>
                <div className="mt-3">
                    {
                        teacherData.map((teacher, key) => {
                            return (
                                <div className="row border border-secondary p-2">
                                    <div className="col text-start">
                                        <div className="d-flex text-secondary fw-bold">
                                            <h6>Name:</h6>
                                            <h6>{teacher.Name}</h6>
                                        </div>
                                        <div className="d-flex text-secondary fw-bold">
                                            <h6>Emp.Code:</h6>
                                            <h6>{teacher["Emp.Code"]}</h6>
                                        </div>
                                    </div>
                                    <div className="col text-end d-flex justify-content-end align-items-center">
                                        <Addnew index={key}/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

        </div>
    )
}

export default Staffattendanceslots;