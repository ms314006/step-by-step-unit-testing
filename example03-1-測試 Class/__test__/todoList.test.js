const TodoList = require('../todoList');

test('如果沒有給 TodoList 待辦事項，getTodoList 會是空的', () => {
  const todoList = new TodoList();

  expect(todoList.getTodoList()).toEqual([]);
});

test('如果一開始 new 的時後有給 TodoList 預設的清單，用 getTodoList 就會出現', () => {
    const expected = ['first todo', 'second todo'];
    const todoList = new TodoList(expected);

    expect(todoList.getTodoList()).toEqual(expected);
});

test('可以在 TodoList 的 getTodoList 中找到用 addTodo 加入的事項', () => {
  const todoList = new TodoList();
  const expected = ['new Todo'];

  todoList.addTodo('new Todo');

  expect(todoList.getTodoList()).toEqual(expected);
});
