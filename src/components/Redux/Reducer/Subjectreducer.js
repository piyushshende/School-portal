import { createSlice } from "@reduxjs/toolkit";

const Subjectreducer = createSlice({
    name:"subjects",
    initialState:{
        subjectData:[]
    },
    reducers:{
        addSubjects: (state,action)=>{
            const newData = action.payload;
            const myclass = newData.Myclass;
            const sections = newData.section;
            const subjects = newData.subjects;

            // console.log(myclass);
            // console.log(sections);
            // console.log(subjects);


            sections.map((sec)=>{
                        const data = {
                            'class':myclass,
                            'section':sec,
                            'subject':subjects
                        }
                        state.subjectData.push(data);
            })



            // Below logic To be added when modifying the Editsubjects data

            // let gotsubjects = [];
            // let gotclass = false;
            // state.subjectData.map((data)=>{
            //     if(data['class']===myclass){
            //         gotclass = true;
            //         sections.map((sec)=>{
            //             if(data['section']===sec){
            //                 gotsubjects.push(sec);
            //                 data['subject'] = subjects;
            //             }
            //         })
            //     }
            // })
            // if(gotclass===false){
            //     sections.map((sec)=>{
            //         const data = {
            //             'class':myclass,
            //             'section':sec,
            //             'subject':subjects
            //         }
            //         state.subjectData.push(data);
            //     })  
            // }
            // else{
            //     if(gotsubjects!==0){
            //     const sectionList = subjects.map((sub)=>{
            //         return gotsubjects.map((item)=>{
            //             return sub!==item
            //         })
            //     })
            //     console.log(sectionList);
            //     }
                
            // }
            console.log(state.subjectData);
        }
    }

})
export const {addSubjects} = Subjectreducer.actions;

export const selectSubjects = (state) => state.subjectData;

export default Subjectreducer.reducer;