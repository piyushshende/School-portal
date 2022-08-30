import { configureStore } from "@reduxjs/toolkit";
import Classesreducer from "../Reducer/Classesreducer";
import Subjectreducer from "../Reducer/Subjectreducer";

export default configureStore({
    reducer:{
        classes:Classesreducer,
        subject:Subjectreducer
    }
})
