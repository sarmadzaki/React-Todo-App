import React from 'react'
import { connect } from 'react-redux'

import NewTodo from './NewTodo'
import { addTodo, deleteTodo } from '../actions'
var heading = "{{Todo-App}}"
const Todos = ({todos, dispatch}) => (
  <div>
    <h1>{heading}</h1>
    <NewTodo onChange={e => {
      if(e.keyCode == 13){
        dispatch(addTodo(e.target.value))
        e.target.value = ''
      }
    }}/>
    {todos.map((todo, index) => <p className="well" key={index}>{todo} <button className="btn btn-outline-success" onClick={e => {
      dispatch(deleteTodo(index))
    }}><img src="../delete.png" height="20px"/></button></p>)}
  </div>
)

function mapStateToProps(todos) {
  return {
    todos
  }
}

export default connect(mapStateToProps)(Todos)
