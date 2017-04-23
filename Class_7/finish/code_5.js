var todoList = document.querySelector('#todo-list');
var inputDiv = document.querySelector('#new-todo');
var newTodoInput = document.querySelector('#new-todo > input');

// TODO: Create an array to hold the items
var items = JSON.parse(localStorage.getItem('items')) || [];

function itemTemplate(item, index) {
  return `
    <div class='item'>
      <input type='checkbox' data-index=${index} ${item.done ? 'checked' : ''}>
      <p>${item.name}</p>
    </div>
  `;
}

function render(displayDiv, itemsArr) {
  var template = itemsArr.map(function(item, index) {
    return itemTemplate(item, index);
  }).join('');
  displayDiv.innerHTML = template;
}

function submitTodo(text) {
  var itemObj = {
    name: text,
    done: false
  };
  // TODO: Store the new item inside our array
  items.push(itemObj);
  // TODO: Store the updated array of items inside localStorage
  localStorage.setItem('items', JSON.stringify(items));

  render(todoList, items);
  newTodoInput.value = '';
}

newTodoInput.addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    submitTodo(this.value);
  }
})

render(todoList, items);

todoList.addEventListener('click', function(e) {
  if (!e.target.matches('input')) return;
  var index = e.target.dataset.index;
  items[index].done = ! items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
})

// TODO: On initial page load, get data from localStorage

// TODO: Write a render function that displays a given array of items
// inside some div

// TODO: Store the state of the to-do items in addtion to their names,
// and test to see if it renders correctly

// TODO: Attach an event listener to register the click on checkboxes
// (Naive method?)

// TODO: Write a function that, when a checkbox is clicked, the "done"
// attribute of the corresponding item in the items array is toggled
// (Hint: store the item index in the HTML markup using the data-index
// attribute)