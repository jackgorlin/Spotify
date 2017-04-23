// TODO: store references to the todo list and the text input
var todoList = document.querySelector("#todo-list");
var newTodoInput = document.querySelector("#new-todo > input");

// TODO: Write a function that, given a text, returns an HTML
// todo-item markup of that text
function itemTemplate(text) {
  return `
<div class="item">
      <input type="checkbox">
      <p> ${text} </p>
    </div>
  `;
}

// TODO: Write a function that, given a text, append a todo item made of that text
// to the todo list
function submitTodo(text) {
  var template = itemTemplate(text);
  todoList.innerHTML = todoList.innerHTML + template;}

// TODO: Write a function that, when typing in the text input, pressing Enter
// will submit the text as a todo item and reset the text input to empty
newTodoInput.addEventListener('keydown', function(e) {
  if (e.keyCode !== 13) return;

  var text = newTodoInput.value;
  submitTodo(text);
  newTodoInput.value = "";
});
