// Write your code here
import './index.css'

const TodoItem = props => {
  const {tododetails, deletetodo} = props
  const {id, title} = tododetails
  const ondeletetodo = () => {
    deletetodo(id)
  }
  return (
    <li className="list-item">
      <p className="head">{title}</p>
      <button type="button" className="button" onClick={ondeletetodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
