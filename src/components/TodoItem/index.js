/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
// Write your code here
import './index.css'

const TodoList = props => {
  const {newTodo, deleteButton, id} = props
  const {title} = newTodo

  const ondeleteButton = () => {
    deleteButton(id)
  }
  return (
    <li className="todoContainer">
      <p className="todoHeading">{title}</p>
      <div className="buttonContainer">
        <button className="button" onClick={ondeleteButton}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoList
