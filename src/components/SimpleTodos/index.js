import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    todoDetailsList: initialTodosList,
    text: '',
  }

  onChangeInput = event => {
    this.setState({text: event.target.value})
  }

  onClickAddBtn = () => {
    const {text, todoDetailsList} = this.state
    const trimmedText = text.trim()

    if (trimmedText === '') return

    const match = trimmedText.match(/(.*)\s(\d+)$/)

    if (match) {
      const titleText = match[1]
      const count = parseInt(match[2], 10)

      const newTodos = Array.from({length: count}, (_, index) => ({
        id: todoDetailsList.length + index + 1,
        title: titleText,
      }))

      this.setState(prevState => ({
        todoDetailsList: [...prevState.todoDetailsList, ...newTodos],
        text: '',
      }))
    } else {
      const newTodo = {
        id: todoDetailsList.length + 1,
        title: trimmedText,
      }

      this.setState(prevState => ({
        todoDetailsList: [...prevState.todoDetailsList, newTodo],
        text: '',
      }))
    }
  }

  onClickSave = (id, updatedText) => {
    const {todoDetailsList} = this.state

    const updatedList = todoDetailsList.map(each =>
      each.id === id ? {...each, title: updatedText} : each,
    )

    this.setState({todoDetailsList: updatedList})
  }

  deleteTitle = id => {
    const {todoDetailsList} = this.state
    const filteredList = todoDetailsList.filter(each => each.id !== id)
    this.setState({todoDetailsList: filteredList})
  }

  render() {
    const {todoDetailsList, text} = this.state

    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Simple Todos</h1>

          <div className="add-container">
            <input
              type="text"
              value={text}
              onChange={this.onChangeInput}
              placeholder="Type task here"
            />
            <button type="button" onClick={this.onClickAddBtn}>
              Add
            </button>
          </div>

          <ul className="list-container">
            {todoDetailsList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetials={eachTodo}
                onDeleteTodo={this.deleteTitle}
                onSaveTodo={this.onClickSave}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
