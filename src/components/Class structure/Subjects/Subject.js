import React from "react";
import { useSelector, useDispatch } from "react-redux/es/hooks/useSelector";
import { Addsections, selectSections } from "../../Redux/Reducer/Classesreducer";
import '../../../commontoall.css';


const Subject = () => {
    const data = useSelector(selectSections);
    return (
        <React.Fragment>
            <div class="commontoall">
                <div class="container W-90 bg-light">
                    <div class="bg-success text-light d-flex justify-content-start rounded-top">
                        <h4 class="h4 mx-3">Add Subject</h4>
                    </div>

                    <div class="mt-3">
                        {
                            data.map((item, i) => {
                                return (
                                    <div class="row border" key={i+1}>
                                        <div class="row ">
                                            <div class="col d-flex justify-content-start align-items-center">
                                                <input type="checkbox" class="W-3" id="" />
                                                <label htmlFor="" class="mx-2 fs2">{i+1}</label>
                                            </div>
                                            <div class="col d-flex align-items-center">
                                                <button type="button" class="btn btn-outline-danger d-flex align-items-center h-75 justify-content-center">EDIT SUBJECTS</button>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col d-flex justify-content-start align-items-center">
                                                {
                                                    item.sections.map((sect,i) => {
                                                        return (
                                                            <div class="d-flex justify-content-center align-items-center">
                                                                <input type="checkbox" class="w-75" id="check1" />
                                                                <label htmlFor="check1" class="mx-2 ">{sect}</label>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div class="col">
                                            </div>
                                        </div>
                                    </div>
                                )

                            })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Subject