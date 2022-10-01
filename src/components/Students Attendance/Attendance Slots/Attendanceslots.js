import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectSections } from "../../Redux/Reducer/Classesreducer";
import Addnew from "./Addnew";

const Attendanceslots = () => {
    const classes = useSelector(selectSections);
    console.log(classes);

    return (
        <div className="commontoall">
            <div className="container W-95 bg-light mb-5 pb-3">
                <div className="bg-success W-100 text-light d-flex justify-content-start rounded-top">
                    <h4 className="h4 mx-3">View Attendance Slots</h4>
                </div>
                <div className="mt-3">
                {
                    classes.map((item,index) => {
                        return (
                            item.sections.map((sec,key)=>{
                                return(
                                    <div
                                    className="border border-secondary p-4 d-flex">
                                        <h6 className="d-flex justify-content-start text-secondary">{item.Myclass+'-'+sec}</h6>
                                        <div className=""><Addnew index={index}/></div>
                                    </div>
                                )
                            })
                        )
                    })

                }
            </div>
            </div>
            

        </div>
    )
}

export default Attendanceslots;