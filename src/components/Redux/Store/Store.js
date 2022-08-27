import { configureStore } from "@reduxjs/toolkit";
import Classesreducer from "../Reducer/Classesreducer";

export default configureStore({
    reducer:{
        classes:Classesreducer
    }
})
