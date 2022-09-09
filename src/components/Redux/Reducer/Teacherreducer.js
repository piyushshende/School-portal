import { createSlice } from "@reduxjs/toolkit";

const Teacherreducer = createSlice({
    name:"teachers",
    initialState:{
        data:[]
    },
    reducers:{
        addTeacher:(state,action)=>{
            const teachersData = action.payload;
            const newData = {
                Myclass:teachersData.Myclass,
                teacher:teachersData.teacher
            }
        state.data.push(newData);
        console.log(state.data);
        },
        deleteTeacher:(state,action)=>{
            const deleteTeacher = state.data.map((item)=>{
                return(item.Myclass!==action.payload.Myclass)
            })
            state.data = deleteTeacher
        }
    }
})

export const {addTeacher,deleteTeacher} = Teacherreducer.actions;

export const teachersData = state=>state.teachers.data;

export default Teacherreducer.reducer