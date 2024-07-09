import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

const TodoItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.todo.title);
  const [editedDesc, setEditedDesc] = useState(props.todo.desc);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      autoResizeTextarea(textareaRef.current);
    }
  }, [isEditing, editedDesc]);

  const autoResizeTextarea = (textarea) => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  const handleEdit = ()=>{
    setIsEditing(true);
  }

  const handleSave = ()=>{
    setIsEditing(false);
    props.onUpdate(props.sno, editedTitle, editedDesc);
  } 

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <div className="col-md-4">
      <div className="card mt-4">
        <div className="card-body">
          {isEditing ? (
            <>
              <input type="text" className="form-control card-title" id="exampleFormControlInput1" value={editedTitle} onChange={(e) => { setEditedTitle(e.target.value) }} onKeyPress={(e)=>{handleKeyPress(e)}} />
              <textarea className="form-control card-text my-4" style={{ textAlign: "justify", overflow: "hidden", resize: "none", minHeight: "20px" }} id="exampleFormControlTextarea1" rows="4" value={editedDesc} onChange={(e) => { setEditedDesc(e.target.value); autoResizeTextarea(e.target) }} onKeyPress={(e)=>{handleKeyPress(e)}}>{editedDesc}</textarea>
            </>
          ) : (
            <>
              <h5 className="card-title">{editedTitle}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">{props.todo.date + ' ' + props.todo.time}</h6>
              <p className="card-text" style={{ textAlign: "justify" }}>{editedDesc}</p>
              <button className="btn btn-sm btn-outline-danger" onClick={props.onDelete}>Delete</button>
            </>
          )}
          <button className="btn btn-sm btn-outline-primary mx-2" onClick={isEditing ? handleSave : handleEdit}>{isEditing ? "Save Changes" : "Make Changes"}</button>
        </div>
      </div>
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func
}

export default TodoItem
