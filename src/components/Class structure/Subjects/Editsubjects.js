import React, { useState } from "react";
import './subject.css';

const Editsubjects = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedSubjects,setSelectedSubjects] = useState([]);

    const handleSelectSubject = (sub)=>{
        setSelectedSubjects([...selectedSubjects,sub]);
    }

    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleDeleteSubject = (sub)=>{
        const newList = selectedSubjects.filter((item)=>item!==sub);
        setSelectedSubjects(newList);

    }

    const subjects = ['MATHEMATICS', 'PHYSICS', 'CHEMISTRY', 'BIOLOGY', 'COMPUTER SCIENCE', 'HISTORY', 'SOCIAL SCIENCE', 'GEOGRAPHY', 'ENGLISH', 'HINDI',
        'SANSKRIT', 'FRENCH', 'HOME SCIENCE', 'CIVICS', 'ECONOMICS', 'ACCOUNTANCY', 'GK BASIC KNOWLEDGE', 'URDU', 'SCIENCE', 'ENGLISH LIT', 'URDU LIT',
        'DRAWING', 'HINDI LIT', 'E.V.S', 'COMPUTER', 'G.K', 'ENVIRONMENT STUDIES', 'GK'
    ]

    return (
        <React.Fragment>
            <div className="popup">
                <button type="button" class="btn btn-outline-danger mt-1 W-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Edit Subjects
                </button>

                {/* Modal */}
                <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header d-block justify-content-start align-items-start text-align-start">
                                <h5 class="modal-title" id="exampleModalLabel">Edit subjects for sections</h5>
                                <p>
                                    Selected Sections:
                                </p>
                                {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                            </div>
                            <div class="modal-body">
                                <input type="text" class="w-75" placeholder="Filter Subjects" onChange={(e) => handleSearchTerm(e)} />
                                <div class=" mt-3 d-flex">
                                    <span class='fs-4'>Selected subjects:</span>
                                    <div class='display-grid-4'>
                                        {
                                            selectedSubjects.map((item,key)=>{
                                                return(
                                                    <div key={key} class='btn btn-outline-success ms-1 mt-1'>
                                                        {item}
                                                        <span class='ms-3' onClick ={() => handleDeleteSubject(item)}>X</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div class="containe display-grid-3 mt-3">
                                    {
                                        subjects.filter((val) => {
                                            if (searchTerm === "") {
                                                return val;
                                            } else if (val.toLowerCase().includes(searchTerm.toLowerCase())) {
                                                return val;
                                            }
                                        }).map((subjects, i) => {
                                            return (
                                                <div key={i} class='btn btn-success mt-2 w-auto mx-2 d-flex align-items-center justify-content-center rounded' onClick={()=>handleSelectSubject(subjects)}>
                                                    <div>
                                                        {subjects}
                                                    </div>
                                                </div>


                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div class="modal-footer d-flex">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Editsubjects;