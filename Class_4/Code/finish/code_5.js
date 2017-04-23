var todoList = document.querySelector('#todo-list');
var inputDiv = document.querySelector('#new-todo');
var newTodoInput = document.querySelector('#new-todo > input');

function itemTemplate(text) {
  return `
    <div class="item">
      <input type="checkbox">
      <p>${text}</p>
    </div>
  `;
}

function submitTodo(text) {
  var template = itemTemplate(text);
  todoList.innerHTML = todoList.innerHTML + template;
  newTodoInput.value = '';
}

newTodoInput.addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    console.log(this);
    submitTodo(this.value);
  }
})
