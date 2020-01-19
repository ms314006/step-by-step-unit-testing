const addTodo = () => {
  const newTodoInput = document.getElementById('newTodoInput');

  let currentTodoList = document.getElementById('todoList');
  currentTodoList.innerHTML += `<li>${newTodoInput.value}</li>`;

  newTodoInput.value = '';
}

document.getElementById('addTodoBtn').addEventListener('click', addTodo);