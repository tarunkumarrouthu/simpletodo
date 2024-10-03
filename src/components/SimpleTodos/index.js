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
    todolist: initialTodosList,
  }

  deletetodo = id => {
    const {todolist} = this.state
    const updatedtodoslist = todolist.filter(eachtodo => eachtodo.id !== id)
    this.setState({todolist: updatedtodoslist})
  }

  render() {
    const {todolist} = this.state

    return (
      <div className="bg-container">
        <div className="todo-container">
          <h1 className="main-heading">Simple Todos</h1>

          <ul className="list-todo">
            {todolist.map(eachtodo => (
              <TodoItem
                tododetails={eachtodo}
                key={eachtodo.id}
                deletetodo={this.deletetodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
