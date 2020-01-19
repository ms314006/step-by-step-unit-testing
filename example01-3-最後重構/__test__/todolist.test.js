const initialTestCase = () => {
  jest.resetModules();
  document.body.innerHTML = `
    <input id="newTodoInput" />
    <button id="addTodoBtn">Add todo</button>
    <ol id="todoList"></ol>
  `;
  require('../todolist.js');
}

test('Check addTodo able add todo to todoList', () => {
  initialTestCase();

  const newTodoInput = document.getElementById('newTodoInput');
  const addTodoBtn = document.getElementById('addTodoBtn');
  const todolist = document.getElementById('todoList');

  newTodoInput.value = 'New todolist!';
  addTodoBtn.click();

  expect(todolist.innerHTML).toBe('<li>New todolist!</li>');
});

test('Clean value of input when after addTodo', () => {
  initialTestCase();

  const newTodoInput = document.getElementById('newTodoInput');
  const addTodoBtn = document.getElementById('addTodoBtn');

  newTodoInput.value = 'First todolist!';
  addTodoBtn.click();

  expect(newTodoInput.value).toBe('');
});