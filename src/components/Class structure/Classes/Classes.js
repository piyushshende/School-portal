import React, { useState } from "react";
import '../../../commontoall.css';
import './classes.css';
import { useSelector,useDispatch } from "react-redux/es/exports";
import { Addsections,selectSections } from "../../Redux/Reducer/Classesreducer";
const Classes = () => {
    const [sections, setSections] = useState([]);
    const [clas,setClas] = useState();
    const [inp, setInp] = useState("");
    const reducerSection = useSelector(selectSections);
    const dispatch = useDispatch();

    const handleKeyPress = (e) => {
        if (e.key == 'Enter') {
            setInp("");
            setSections([...sections, inp]);
        }
    }
    const handleClass = (e)=>{
        setClas(e.target.value);
    }
    const handleChange = (e) => {
        const str = e.target.value;
        setInp(str);
    }
    const handleDelete = (id) => {
        const newList = sections.filter((item) => item !== id);
        setSections(newList);
    }
    const handleAddSections = ()=>{
        if(clas==='Select Class'){
            alert('Please select class');
        }
        else if(sections.length==0){
            alert('Please add sections');
        }
        else{
        const newData = {
            class:clas,
            sections:sections
        }
        dispatch(Addsections(newData));
        setSections([]);
    }
    }
    return (
        <React.Fragment>
            <div class="commontoall classes">
                <div class="container W-90 bg-light rounded-top pb-5">
                    <div class="bg-success text-light h4 d-flex justify-content-start rounded-top w-100">
                        <h4 class="h4 mx-3">Add Classes & Sections</h4>
                    </div>
                    <div class="row">
                        <div class="col d-flex justify-content-start">
                            <h5 class="h5">Class</h5>
                        </div>
                        <div class="col d-flex justify-content-start">
                            <h5 class="h5">Sections</h5>
                        </div>
                        <div class="col d-flex justify-content-start">
                            <h5 class="h5"></h5>
                        </div>
                    </div>

                    <div class="mt-3">
                    {
                        reducerSection.map((item,key) => {
                            return (
                                <div key={key} class="row mt-3 border-top border-success border-opacity-25 d-flex justify-content-center align-items-center">
                                    <div class="col d-flex justify-content-start h-4">
                                        <span class="fs-5">{item.class}</span>
                                    </div>
                                    <div class="col d-flex justify-content-start mt-3">
                                        {
                                    item.sections.map((sec) => {
                                        return (
                                            <div key={sec} class="mx-2 w-10 mybg1 mx-1 text-dark d-flex justify-content-center align-items-center rounded">
                                                <span class="p-1 text-dark text-uppercase fw-bold">{sec}</span>
                                                <button class=" mybg1 border border-0 text-success pe-auto h-auto">x</button>
                                            </div>
                                        )
                                    })
                                }
                                    </div>
                                    <div className="col">
                                    <button type="button" class="btn btn-danger h-auto rounded-pill btn-sm display-6">Update Sections</button>
                                    </div>
                                </div>

                            )
                        })
                    }
                    </div>
                    <div class="row border-top border-success border-opacity-25 mt-4">
                        <div class="col d-flex justify-content-start align-items-center mt-3">
                            <select class="form-select form-select-sm" aria-label="Default select example"
                            onChange = {(e)=>handleClass(e)}
                            >
                                <option selected>Select Class</option>
                                <option value="Pre Nursery">Pre Nursery</option>
                                <option value="Nursery">Nursery</option>
                                <option value="LKG">LKG</option>
                                <option value="UKG">UKG</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <div class="col mt-3 d-flex justify-content-start align-items-center">
                            <div class="input-group input-group-lg input-group-lg d-flex justify-content-center border border-success border-opacity-25">

                                {
                                    sections.map((sec) => {
                                        return (
                                            <div key={sec} class="w-10 mybg1 mx-1 text-dark d-flex justify-content-center align-items-center rounded">
                                                <span class="p-1 text-dark text-uppercase fw-bold">{sec}</span>
                                                <button class=" mybg1 border border-0 text-success pe-auto h-auto "
                                                    onClick={() => handleDelete(sec)}
                                                >x</button>
                                            </div>
                                        )
                                    })
                                }

                                <input type="text" class="form-control border-0" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
                                    value={inp}
                                    onChange={(e) => handleChange(e)}
                                    onKeyPress={e => handleKeyPress(e)}
                                />
                            </div>
                        </div>
                        <div class="col mt-3 d-flex justify-content-start align-items-center">
                            <div class="input-group input-group-lg  d-flex justify-content-center align-items-center">
                                <button 
                                type="button" 
                                class="btn btn-outline-success rounded-pill addsec btn-sm display-6"
                                onClick = {handleAddSections}
                                >Add sections</button>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Classes;