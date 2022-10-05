import React, { useState } from "react";
import '../../../commontoall.css';
import Selectcontact from "../Selectcontact";
import Studentfilters from "../Studentfilters";
import Mail from "../Mail";
import { useSelector } from "react-redux";
import { selectSections } from "../../Redux/Reducer/Classesreducer";
import Card from "../Card";

const Individualstudents = () => {

    const classes = useSelector(selectSections);
    const [sections, setSections] = useState([]);
    const [currentClass, setCurrentClass] = useState();
    const [selectedSections, setSelectedSections] = useState([]);


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
    }
    return (
        <React.Fragment>
            <div className="commontoall">
                <div className="container W-95 bg-light mb-5 pb-3">
                    <div className="bg-success W-100 text-light d-flex justify-content-start rounded-top">
                        <h4 className="h4 mx-3">Send to Some Students</h4>
                    </div>
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
                        <div className="mx-5 mt-4 ">
                            <div class="input-group mb-3">
                                <select className="form-select text-start rounded-0" id="inputGroupSelect01">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <hr />
                        <Card />
                        <Selectcontact />
                        <Studentfilters />
                        <hr />
                        <Mail />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Individualstudents;