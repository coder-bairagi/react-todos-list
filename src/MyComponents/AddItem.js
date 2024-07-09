import React, { useState } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'

const AddItem = (props) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [titleError, setTitleError] = useState(false)
    const [descError, setDescError] = useState(false)

    const submit = (e) => {
        e.preventDefault();
        let isValid = true;

        if (title.trim() === "") {
            setTitleError(true);
            isValid = false;
        } else {
            setTitleError(false);
        }
        if (desc.trim() === "") {
            setDescError(true);
            isValid = false;
        } else {
            setDescError(false);
        }

        if (isValid) {
            // // Hide the modal after successful submission
            setTimeout(() => {
                $("#exampleModal").hide();
            }, 100);
            setTimeout(() => {
                $('.modal-backdrop').remove();
                // Reset form field to it's inital state
                setTitle("");
                setDesc("");
            }, 200);

            // Saving form field
            props.addTodoItem(title, desc);

            // Auto click to resolve twice modal button clicking bug
            document.getElementById("addTodoItemBtn").click();
        }
    }

    return (
        <>
            <button type="button" id="addTodoItemBtn" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Task
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{props.title}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={submit}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <input type="text" className={`form-control ${titleError ? 'is-invalid' : ''}`} id="exampleFormControlInput1" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder={titleError ? 'Tittle is Required' : 'Tittle'} />
                                </div>
                                <div className="mb-3">
                                    <textarea className={`form-control ${descError ? 'is-invalid' : ''}`} id="exampleFormControlTextarea1" rows="4" value={desc} onChange={(e) => { setDesc(e.target.value) }} placeholder={descError ? 'Description is Required' : 'Description'}></textarea>
                                </div>
                            </div>
                            <div className="modal-footer d-flex justify-content-start">
                                <button type="submit" className="btn btn-outline-primary">Add Task</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

AddItem.propTypes = {
    title: PropTypes.string,
    addTodoItem: PropTypes.func
}

export default AddItem
