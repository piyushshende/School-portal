import React from "react";
import '../../commontoall.css'


const Selectcontact = () => {
    return (
        <div className="d-flex align-items-center mt-4 ">
            <h6 className="text-secondary">Select Contact</h6>

            <input type="radio" name="selectcontact" value="" className="W-5 h-50" />
            <label htmlFor="primary" className="">Primary</label>

            <input type="radio" name="selectcontact" value="" className="W-5 h-50" />
            <label htmlFor="primary+secondary" ClassName="">Primary + Secondary</label>

            <input type="radio" name="selectcontact" value="" className="W-5 h-50" />
            <label htmlFor="all">All</label>

        </div>
    )
}
export default Selectcontact;