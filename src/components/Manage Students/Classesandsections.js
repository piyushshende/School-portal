import React, { useState,useEffect } from "react";
import '../../commontoall.css'
import { useSelector } from "react-redux";
import { selectSections } from "../Redux/Reducer/Classesreducer";

const Classesandsections = (props) => {
    const classes = useSelector(selectSections);
    const [sections, setSections] = useState([]);
    const [currentClass, setCurrentClass] = useState();
    const [selectedSections, setSelectedSections] = useState([]);

    useEffect(()=>{
        console.log(sections,currentClass,selectedSections);
    },[sections,currentClass,selectedSections])
    const handleClassButton = (e, Myclass) => {
        e.preventDefault();
        const sec = classes.filter((item) => { return item.Myclass === Myclass });
        setCurrentClass(sec[0].Myclass);
        setSections(sec[0].sections);
    }
    const handleSectionsButton = (e, sec) => {
        e.preventDefault();
        const str = currentClass + '-' + sec;
        setSelectedSections([...selectedSections, str]);
        console.log(selectedSections);
        props.parentCallBack(selectedSections);
    }

    return (
        <React.Fragment>
                    <div className="mt-3 d-flex flex-column">
                        <div className="d-flex justify-content-start mx-5">
                            <h6 className="bg-primary fs-4 fw-light W-10 H-25 text-light rounded">Classes:</h6>
                            {
                                classes.map((item, key) => {
                                    return (
                                        <button className="btn btn-outline-primary W-10 ms-4" onClick={(e) => {
                                            handleClassButton(e, item.Myclass)
                                        }} index={key}>{item.Myclass}</button>
                                    )
                                })
                            }
                        </div>
                        <div className="d-flex justify-content-start mx-5 mt-4">
                            <h6 className="bg-danger W-10 fs-4 fw-light H-25 text-light rounded">Sections:</h6>
                            {
                                sections.map((item, key) => {
                                    return (
                                        <button index={key} className="btn btn-outline-danger W-10 ms-4"
                                            onClick={(e) => { handleSectionsButton(e, item) }}
                                        >{item}</button>
                                    )
                                })
                            }
                        </div>
                    </div>
        </React.Fragment>
    )
}

export default Classesandsections;