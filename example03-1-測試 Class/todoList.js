class TodoList {
  constructor(todoList = []) {
    this.todoList = todoList;
  }

  getTodoList() {
    return this.todoList;
  }

  addTodo(newTodo) {
    this.todoList.push(newTodo);
  }
}

module.exports = TodoList;
