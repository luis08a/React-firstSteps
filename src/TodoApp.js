import React from 'react'
import { TodoList } from './TodoList'

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: '',
      priority: 0,
      dueDate: null
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    console.log(this.state.items);
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
            onChange={this.handleChange}
            value={this.state.text}
          />
          <label htmlFor="new-priority">
            How much needs to be done?
            </label>
          <input
            id="new-priority"
            type="number"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <label htmlFor="new-dueDate">
            When needs to be done?
            </label>
          <input
            id="new-dueDate"
            type="date"
            // onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  // handleChange(e) {
  //   this.setState({
  //      text: document.getElementById('new-text').value, 
  //      priority: document.getElementById('new-priority').value, 
  //      dueDate: document.getElementById('new-dueDate').value 
  //   });
  // }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length || this.state.dueDate ==null) {
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
      dueDate: null,
      id: new Date()
    }));
  }
}