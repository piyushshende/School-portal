import React from "react";

const Studentfilters = () => {
    return (
        <div className="mt-3">
            <h5 className="text-secondary d-flex flex-start">Student Filters</h5>
            <div className="d-flex align-items-center mt-3">
                <h6 className="text-secondary ">Schooling Type</h6>
                <input type="radio" name="schoolingtype" value="All" className="W-5 h-50" />
                <label htmlFor="All" className="">All</label>

                <input type="radio" name="schoolingtype" value="Dayscholar" className="W-5 h-50" />
                <label htmlFor="Dayscholar" ClassName="">Dayscholar</label>

                <input type="radio" name="schoolingtype" value="Hosteler" className="W-5 h-50" />
                <label htmlFor="Hosteler">Hosteler</label>
            </div>
            <div className="d-flex align-items-center mt-2">
                <h6 className="text-secondary">Transport</h6>
                <input type="radio" name="Transport" value="All" className="W-5 h-50" />
                <label htmlFor="All" className="">All</label>

                <input type="radio" name="Transport" value="bus" className="W-5 h-50" />
                <label htmlFor="bus" ClassName="">Bus</label>

                <input type="radio" name="Transport" value="one-way" className="W-5 h-50" />
                <label htmlFor="one-way">One-way Bus</label>

                <input type="radio" name="Transport" value="private" className="W-5 h-50" />
                <label htmlFor="private">Private</label>
            </div>
        </div>
    )
}

export default Studentfilters;