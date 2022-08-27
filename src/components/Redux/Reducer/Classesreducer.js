import { createSlice } from "@reduxjs/toolkit";
import { data } from "jquery";

const Classesreducer = createSlice({
    name:"classes",
    initialState:{
        data:[]
    },
    reducers:{
        Addsections: (state,action)=>{
            state.data.push(action.payload);
        }
    }

})

export const {Addsections} = Classesreducer.actions;

export const selectSections = state => state.classes.data;

export default Classesreducer.reducer;