import React from "react";

const Mail = () => {
    return (
        <div className="mail d-flex flex-column justify-content-start align-items-start">
            <h6 className="text-secondary">Subject</h6>
            <input type="text" className="H-10 w-100" />

            <h6 className="text-secondary">Message(Select typing language)</h6>

            <div className="d-flex align-items-center">
                <input type="radio" value="language" className="W-10 mx-2" name="language" />
                <label htmlFor="language" className="fs-6">English</label>

                <input type="radio" value="language" className="W-10 mx-2" name="language" />
                <label htmlFor="language" className="fs-6">Hindi</label>
            </div>
            <textarea name="" id="" cols="30" rows="10" className="w-100"></textarea>

            <h6 className="text-secondary mt-2">Attachments</h6>
            <input type="file" className="btn btn-primary" />
            <div className="d-flex align-items-end justify-content-end w-100 mt-3">
                <button type="button" class="btn btn-success w-auto rounded-pill">Send</button>
            </div>

        </div>
    )
}

export default Mail;