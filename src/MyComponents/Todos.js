import React from 'react'
import TodoItem from './TodoItem'
import AddItem from './AddItem'
import PropTypes from 'prop-types'

const Todos = (props) => {
  return (
    <div className="container" style={{ minHeight: "83vh" }}>
      <div className="row">
        <div className="col-md-12">
          <h3 className="mb-2">Todos List</h3>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-12">
          <AddItem title={props.title} addTodoItem={props.addTodoItem}/>
        </div>
      </div>
      <div className="row">
        {props.todos.length === 0 ?
          <div className="col-md-12 d-flex justify-content-center">
            <p className="fs-5 p-3 text-secondary">No Todos to Display</p>
          </div> : props.todos.slice().reverse().map((todo) => {
            return <TodoItem todo={todo} key={todo.sno} onDelete={() => { props.onDelete(todo) }} onUpdate={props.onUpdate} />
          })}
      </div>
    </div>
  )
}

Todos.propTypes = {
  title: PropTypes.string,
  todos: PropTypes.array,
  onDelete: PropTypes.func,
  addTodoItem: PropTypes.func,
  onUpdate: PropTypes.func,
}

export default Todos
