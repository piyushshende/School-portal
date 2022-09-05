import React,{useState} from "react";
import { useSelector} from "react-redux/es/hooks/useSelector";
import { selectSections } from "../../Redux/Reducer/Classesreducer";
import { selectSubjects} from "../../Redux/Reducer/Subjectreducer";
import '../../../commontoall.css';
import Editsubjects from "./Editsubjects";


const Subject = () => {
    const data = useSelector(selectSections);
    const subjectsOfSections = useSelector(selectSubjects);
    console.log(subjectsOfSections);    
    
    const [selectedClassAndSections,setSelectedClassAndSections ] = useState({
        myclass:'',
        sections:[]
    });
    const handleSectionCheckbox = (e,Myclass)=>{
        if(selectedClassAndSections.myclass===Myclass){
            if(e.target.checked===true){
                console.log(e.target.value);
                selectedClassAndSections.sections.push(e.target.value);
            }
            else{
                const newList = selectedClassAndSections.sections.filter((item)=>item!==e.target.value);
                setSelectedClassAndSections(
                    {
                        myclass:Myclass,
                        sections:newList
                }
                ); 
            }
        }
        else{
            console.log('else');
            if(e.target.checked===true){
            const section = [e.target.value]
            setSelectedClassAndSections(
               {
                myclass:Myclass,
                sections:section
               }
            )
            }
        }
        // console.log(selectedClassAndSections);
    }

    return (
        <React.Fragment>
            <div class="commontoall">
                <div class="container W-90 bg-light pb-5">
                    <div class="bg-success text-light d-flex justify-content-start rounded-top">
                        <h4 class="h4 mx-3">Add Subject</h4>
                    </div>

                    <div class="mt-3">
                        {
                            data.map((item, i) => {
                                return (
                                    <div class="row border pb-3" key={i+1}>
                                        <div class="row ">
                                            <div class="col d-flex justify-content-start align-items-center">
                                                <input type="checkbox" class="W-3" id="" />
                                                <label htmlFor="" class="mx-2 fs2">{item.Myclass}</label>
                                            </div>
                                            <div class="col d-flex align-items-center">
                                                <Editsubjects Myclass={item.Myclass} index={i} sections = {selectedClassAndSections.sections}/>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col d-block justify-content-start align-items-center">
                                                {
                                                    item.sections.map((sect,i) => {
                                                        return (
                                                            <div class="d-flex justify-content-start align-items-center flex-direction-row mt-2">
                                                                <input type="checkbox" class="W-5 H-20" id="check1" onChange = {(e)=>handleSectionCheckbox(e,item.Myclass)} value={sect}/>
                                                                <label htmlFor="check1" class=" ">{sect}</label>
                                                                

                                                            </div>
                                                        )
                                                    })
                                                }
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