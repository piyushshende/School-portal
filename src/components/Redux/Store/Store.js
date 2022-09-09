import { configureStore } from "@reduxjs/toolkit";
import Classesreducer from "../Reducer/Classesreducer";
import Subjectreducer from "../Reducer/Subjectreducer";
import Teacherreducer from "../Reducer/Teacherreducer";
export default configureStore({
    reducer:{
        classes:Classesreducer,
        subjects:Subjectreducer,
        teachers:Teacherreducer
    }
})
