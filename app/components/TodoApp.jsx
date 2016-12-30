var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'walk the dog'
        },
        {
          id: 2,
          text: 'eat food'
        },
        {
          id: 3,
          text: 'Iubita Iubita'
        },
        {
          id: 4,
          text: 'Play WOW'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert('new todo : ' + text);
  },
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
