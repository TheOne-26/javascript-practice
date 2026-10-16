
const todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];

    const html = `
    <div>${todo.name} </div>
    <div>${todo.dueDate}</div>
    <button 
    class="delete-todo-button js-delete-todo-button">Delete</button>
    `;

    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button').
  forEach((deleteButton, i) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(i, 1);
      renderTodoList();
    });
  });
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
})

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date');
  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate
  });

  inputElement.value = '';
  renderTodoList();
}