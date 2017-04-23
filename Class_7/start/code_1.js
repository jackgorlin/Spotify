var todoList = document.querySelector('#todo-list');
var inputDiv = document.querySelector('#new-todo');
var newTodoInput = document.querySelector('#new-todo > input');

// TODO: Create an array to hold the items
var items = getItemsFromStorage() || []; // if first is undefined will assign second thing to it


function saveItemstoStorage(items){
  localStorage.setItem('todoItems', JSON.stringify(items));
}

function getItemsFromStorage() {
  return JSON.parse(localStorage.getItem('todoItems'));
}

function itemTemplate(itemObj, index) {
  return `
    <div class="item">
      <input data-index=${index} type="checkbox" ${itemObj.done ? "checked" : ""}>
      <p>${itemObj.name}</p>
    </div>
  `;
}

// TODO: Write a render function that displays a given *array* of items
// inside some div
function render(displayDiv, itemsArr) {
  displayDiv.innerHTML = itemsArr.map(function(item, index) { //map applies function to all items in array
    return itemTemplate(item, index);
  }).join('');
}

function submitTodo(text) {
  var template = itemTemplate(text);
  var itemObj = {
    name: text,
    done: false
  };
  // TODO: Store the new item inside our array
  items.push(itemObj);
  // TODO: Store the updated array of items inside localStorage
  saveItemstoStorage(items);
  render(todoList, items);
}

newTodoInput.addEventListener('keydown', function(e) {
  if (e.keyCode === 13 && this.value !== '') {
    submitTodo(this.value);
    this.value = '';
  }
})

render(todoList, items);

todoList.addEventListener('click', function(e) {
  console.log(e)
  if (e.target.matches('input')) {
    items[e.target.dataset.index].done = !items[e.target.dataset.index].done;
    saveItemstoStorage(items);
  }
});

// TODO: Store the state of the to-do items in addtion to their names,
// and test to see if it renders correctly

// TODO: Attach an event listener to register the click on checkboxes
// (Naive method?)

// TODO: Write a function that, when a checkbox is clicked, the "done"
// attribute of the corresponding item in the items array is toggled
// (Hint: store the item index in the HTML markup using the data-index
// attribute)