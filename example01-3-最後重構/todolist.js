class TodoList {
  constructor(todoList = []) {
    this.todoList = todoList;
  }

  getList() {
    return this.todoList;
  }

  addTodo(newTodo) {
    this.todoList.push(newTodo);
  }
}

(() => {
  const todo = new TodoList();
  const todoList = document.getElementById('todoList');
  const newTodoInput = document.getElementById('newTodoInput');
  const addTodoBtn = document.getElementById('addTodoBtn');

  addTodoBtn.addEventListener('click', () => {
    todo.addTodo(newTodoInput.value);

    let todoHtmlStr = '';
    todo.getList().forEach((todo) => {
      todoHtmlStr += `<li>${todo}</li>`;
    });
    todoList.innerHTML = todoHtmlStr;

    newTodoInput.value = '';
  });
})();