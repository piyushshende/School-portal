import React from "react";

const Wholeschool = () => {
    return (
        <React.Fragment>
            <div className="commontoall">
                <div className="container W-95 bg-light mb-5 pb-3">
                    <div className="bg-success W-100 text-light d-flex justify-content-start rounded-top">
                        <h4 className="h4 mx-3">Send to All Students</h4>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <h6 className="h6 text-secondary text-start fw-bold fw-bold">SEND TO ALL STUDENTS</h6>
                        </div>
                    </div>
                    <div className="row mt-3 text-start text-secondary">
                        <div className="col fw-bold">
                            <label htmlFor="start">Start Datetime</label>
                            <input type="date" className="w-100 mt-2" id="start" name="start" />
                        </div>
                        <div className="col fw-bold">
                            <label htmlFor="end">End Datetime</label>
                            <input type="date" className="w-100 mt-2" id="end" name="end" />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col text-secondary text-start fw-bold">
                            <label htmlFor="category">Category</label>
                            <select className="form-select text-start mt-2" aria-label="Default select example">
                                <option selected>Select Category</option>
                                <option value="1" className="text-light bg-secondary">Sport</option>
                                <option value="2" className="text-light bg-secondary">Exam</option>
                                <option value="3" className="text-light bg-secondary">Event</option>
                            </select>
                        </div>
                    </div>
                    <div className="row text-start mt-3 text-secondary">
                        <div className="col fw-bold">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" className="mt-2 w-100" placeholder="Enter Subject" />
                        </div>
                    </div>
                    <div className="row text-start mt-3">
                        <div className="col text-secondary">
                            <label htmlFor="message" className="fw-bold">Message (Select typing language)</label>
                            <div className="d-flex mt-2">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        English
                                    </label>
                                </div>
                                <div class="form-check ms-2">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Hindi
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Enter Message"></textarea>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col text-start fw-bold text-secondary">
                            <label htmlFor="attachments">Attachments</label>
                            <input type="file" id="attachments" name="attachments" className="mt-2"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-end">
                            <button className="btn btn-outline-warning w-auto h-auto rounded-pill">PRINT PREVIEW</button>
                            <button className="btn btn-outline-primary w-auto h-auto rounded-pill ms-3">SEND</button>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Wholeschool;