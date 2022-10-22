import React, { useState } from "react";
import './searchstudent.css';
import '../../commontoall.css';
import smiling from '../../images/smiling.jpg'
import Popper from "popper.js";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "bootstrap";
import { ButtonGroup } from "react-bootstrap";
import StudentDetails from "./StudentDetails.js";


const Searchstudent = () => {
    const [search,setSearch] = useState({
        option:'',
        inpvalue:'',
    });
    const options = ['Name','SR No',"Guardian's name",'Contact','Roll No','Admission No.','Section'];
    const [input,setInput] = useState('')
    const [value,setValue] = useState(null);

    const handleChange = (opt)=>{
        setValue(opt);
        console.log(value);
    }
    const handleInput = (e)=>{
        setInput(e.target.value);
    }
    const onSearch = (opt)=>{
        setSearch({
            option:value,
            inpvalue:input
        })
    }
    

    return (
        <React.Fragment>
            <div className="commontoall">
                <div className="container bg-light cont1">
                    <div class="input-group">
                        <select name="Name" id="" placeholder="name" className='bg-primary text-center ps-3' onChange={e=>handleChange(e.target.value)}>
                            {options.map((option)=>(
                                <option value={option} className="bg-light text-dark text-start">{option}</option>
                            ))}
                        </select>
                        <input type="text" class="form-control" aria-label="Text input with dropdown button" onChange={handleInput}/>
                        <button class="btn btn-success" type="button" id="button-addon2">Search</button>
                    </div>
                </div>
                <StudentDetails/>
            </div>
        </React.Fragment>
    )
}

export default Searchstudent;