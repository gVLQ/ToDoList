var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoList = require('TodoList');
var Todo =require('Todo');

describe('TodoList', () => {
  it('should exist', ()=> {
    expect(TodoList).toExist();
  });

  it('should render 1 comp for each item', () => {
    var todos = [{
      id:1,
      text: 'something'
    },{
      id:2,
      text: 'something else'
    }];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });
});
