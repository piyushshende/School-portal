import { createSlice } from "@reduxjs/toolkit";

const Subjectreducer = createSlice({
    name:"subjects",
    initialState:{
        subjectData:[]
    },
    reducers:{
        addSubjects: (state,action)=>{
            state.subjectData.push(action.payload);
        }
    }

})
export const {addSubjects} = Subjectreducer.actions;

export const selectSubjects = state => state.subjects.subjectData;

export default Subjectreducer.reducer;