// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetials, onDeleteTodo} = props
  const {id, title} = todoDetials
  const onDelete = () => {
    onDeleteTodo(id)
  }
  return (
    <li className="lists">
      <p className="p">{title}</p>
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
