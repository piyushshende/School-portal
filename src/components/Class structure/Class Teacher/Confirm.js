import React from "react";

const Confirm = (props) => {
    const name = props.name;
    const index=props.index+1;
    return (
        <React.Fragment>
            <button type="button" class="btn btn-success h-auto" data-bs-toggle="modal" data-bs-target={"#staticBackdrop"+index}>
                {name}
            </button>

            <div class="modal fade" id={"staticBackdrop"+index} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Confirm;