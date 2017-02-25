import React from 'react'
import { connect } from 'react-redux'

const NewTodo = ({onChange}) => (
  <div>
 
    <label>Add:</label>
    <input className="form-control" type="text" onKeyUp={onChange}/>
    <h3></h3>
  </div>
)

export default NewTodo
