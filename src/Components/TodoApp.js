import React from 'react'
import { TodoList } from './TodoList'

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: '',
      priority: 0,
      dueDate: undefined
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-text">
            What needs to be done?
          </label>
          <input
            id="new-text"
            name="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <label htmlFor="new-priority">
            How much needs to be done?
          </label>
          <input
            id="new-priority"
            type="number"
            name="priority"
            onChange={this.handleChange}
            value={this.state.priority}
          />
          <label htmlFor="new-dueDate">
            When needs to be done?
          </label>
          <input
            id="new-dueDate"
            type="date"
            name="dueDate"
            onChange={this.handleChange}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length || this.state.dueDate == null || this.state.dueDate < 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      priority: this.state.priority,
      dueDate: this.state.dueDate
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: '',
      priority: 0,
      dueDate: undefined,
      id: new Date()
    }));
  }
}