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

            console.log(state.subjectData);
        }
    }
})
export const {addSubjects} = Subjectreducer.actions;

export const selectSubjects = (state) => state.subjectData;

export default Subjectreducer.reducer;