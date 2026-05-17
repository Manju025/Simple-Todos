import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {
    isEditing: false,
    editText: '',
  }

  onClickEdit = () => {
    const {todoDetials} = this.props
    const {title} = todoDetials

    this.setState({
      isEditing: true,
      editText: title,
    })
  }

  onChangeInput = event => {
    this.setState({editText: event.target.value})
  }

  onClickSave = () => {
    const {todoDetials, onSaveTodo} = this.props
    const {id} = todoDetials
    const {editText} = this.state

    onSaveTodo(id, editText)
    this.setState({
      isEditing: false,
    })
  }

  onDelete = () => {
    const {todoDetials, onDeleteTodo} = this.props
    onDeleteTodo(todoDetials.id)
  }

  render() {
    const {todoDetials} = this.props
    const {title} = todoDetials
    const {isEditing, editText} = this.state

    return (
      <li className="lists">
        {isEditing ? (
          <input type="text" value={editText} onChange={this.onChangeInput} />
        ) : (
          <p className="p">{title}</p>
        )}

        <div className="btns">
          {isEditing ? (
            <button type="button" onClick={this.onClickSave}>
              Save
            </button>
          ) : (
            <button type="button" onClick={this.onClickEdit}>
              Edit
            </button>
          )}

          <button type="button" onClick={this.onDelete}>
            Delete
          </button>
        </div>
      </li>
    )
  }
}

export default TodoItem
