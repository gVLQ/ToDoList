var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(()=> {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid Todos array', () => {
      var todos = [{
        id: 23,
        text: 'test',
        completed: false
      }];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid Todos Array', () => {
      var badTodos: {a: 'b'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should retrn todos if valid array in local storage', () => {
      var todos = [{
        id: 23,
        text: 'test',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });

  describe('filterTodos', () => {
    var todos = [{
      id: 1,
      text: 'test 1',
      completed: true
    },
    {
      id: 2,
      text: 'test 2',
      completed: false
    },
    {
      id: 3,
      text: 'test 3',
      completed: true
    }];

    it('should return all items if showCompleted is true', () => {
      var filterTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filterTodos.length).toBe(3);
    });

    it('should return none if showCompleted is false', () => {
      var filterTodos = TodoAPI.filterTodos(todos, false, '');

      expect(filterTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter todos by searchText', () => {
      var filterTodos = TodoAPI.filterTodos(todos, true, '2');

      expect(filterTodos.length).toBe(1);
    });

    it('should return all todos in searchText empty', () => {
      var filterTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filterTodos.length).toBe(3);
    });
  });
});
