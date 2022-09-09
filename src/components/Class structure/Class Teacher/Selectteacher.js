import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import './selectteacher.css';
import Confirm from "./Confirm";
import { addTeacher, teachersData, deleteTeacher } from "../../Redux/Reducer/Teacherreducer";

const Selectteacher = (props) => {
    const index = props.index;
    const Myclass = props.Myclass;
    const dispatch = useDispatch();
    const teacher = useSelector(teachersData);
    const [getTeacher,setGetTeacher] = useState([]);
    useEffect(() => {
        const value = (teacher.filter((teachers) => { return teachers.Myclass === Myclass }));
        setGetTeacher(value);
    }, [])


    const teachers = ['ABHINAV', 'ARUN', 'BHANU', 'DEEKSHA SHARMA', 'HEAD TEACHER', 'KISHAN LAL SHARMA'];

    const handleAddTeacher = (e, teacher) => {
        e.preventDefault();
        console.log("under handleTeacher")
        const teacherData = {
            'Myclass': Myclass,
            'teacher': teacher
        }
        dispatch(addTeacher(teacherData));
        setGetTeacher([teacherData]);
    }
    const handleDeleteTeacher = (e)=>{
        e.preventDefault();
        dispatch(deleteTeacher(getTeacher));
        setGetTeacher([]);

    }
    return (
        <React.Fragment>
            {
                getTeacher.length!== 0 ? 
                <div class="btn btn-success">
                    {getTeacher[0].teacher}
                    <button class="btn-close mx-3 btn btn-light" onClick = {(e)=>handleDeleteTeacher(e)}></button>
                </div>:
                    <div>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#exampleModal" + index}>
                            SELECT TEACHER
                        </button>

                        <div class="modal fade modal-xl" id={"exampleModal" + index} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">SELECT TEACHER</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body display-grid">
                                        {
                                            teachers.map((teacher, key) => {
                                                return (
                                                    <div className="mt-3" i={key}>
                                                        <button
                                                            class="btn btn-success h-auto d-flex align-items-center justify-content-center"
                                                            onClick={(e) => handleAddTeacher(e, teacher)}
                                                            data-bs-dismiss="modal">{teacher}
                                                        </button>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    }
        </React.Fragment>
    )
}

export default Selectteacher