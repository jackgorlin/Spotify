var budgetSheet = document.querySelector('#budget-sheet');
var addItemNameInput = document.querySelector('#new-budget > input[type="text"]');
var addItemNumInput = document.querySelector('#new-budget > input[type="number"]');
var addItemBtn = document.querySelector('#new-budget > button');

// Each budget item is an object with 2 properties: name, and remaining money
// Already implemented: get the items saved in storage if there's any, 
// otherwise assign an empty array (by default)
var budgetItems = getItemsFromStorage() || [];
//var budgetItems = []

// TODO: getItemsFromStorage will return whatever stored with the key
// 'budgetItems' in localStorage
function getItemsFromStorage() {
	return JSON.parse(localStorage.getItem('budgetItems'));
}

// TODO: getItemsFromStorage will save the argument items under the key
// 'budgetItems' in localStorage
function saveItemsToStorage(items) {
	localStorage.setItem('budgetItems', JSON.stringify(items));
}


function itemTemplate(itemObj, index) {
  return `
  			<li class="budget-item clearfix">
					<div class="details pull-left">
						<strong class="name">${itemObj.name}: </strong>
						<span class="money">$${itemObj.money}</span>
					</div>
					<form class="form-inline pull-right">
						<input class="form-control"
								type="number" 
								placeholder="Amount">
						<button class="btn btn-default" 
								data-index=${index}>
							Deduct
						</button>
					</form>
				</li>

   `;
}

// TODO: render will map each item in the *input items array* to a markup string
// and use that to display the items inside the *input displayDiv*
//
// Hint 1: The markup format is already given as a sample in the HTML. Use that,
// and substitute any information as necessary. The 'data-index' field in the button
// needs a numeric value. What would be beneficial to have here?
//
// Hint 2: To test this, set the initial budgetItems array to contain one or two
// items, then uncomment the last line in this file to try displaying them




function render(displayDiv, items) {
	displayDiv.innerHTML = items.map(function(item, index) { 
    return itemTemplate(item, index);
  }).join('');
}


// TODO: given a name and initial amount of money, construct a Javascript
// object with two properties of, well, name and money. This is how all items
// will be represented under the hood.


function generateItemObject(name, money) {
	// var template = itemTemplate(text);
  	var itemObj = {
    name: name,
    money: money
  };
  // TODO: Store the new item inside our array
  budgetItems.push(itemObj);
  saveItemsToStorage(budgetItems);
}



// TODO: given a name and initial amount of money, construct a budget item and
// save that to our budgetItems array, then reflect changes as necessary
function addItem(name, money) {
	generateItemObject(name, money)
	//saveItemstoStorage(budgetItems);
	render(budgetSheet, budgetItems);
}

// TODO: given an index and an amount to deduct, take away that amount from
// the item with that index inside our main budgetItems array, them reflect changes
// as necessary
function deduct(index, amount) {
	index.money -= amount;
	saveItemsToStorage(budgetItems);
	render(budgetSheet, budgetItems);
	//console.log(index)
	//console.log(amount)
}

// TODO: When addItemBtn is clicked, if the name and money fields for new item
// are not blank, add a new budget item and reset the fields
addItemBtn.addEventListener('click', function(e) {
	e.preventDefault();
	if (addItemNameInput.value !== '' &&  addItemNumInput.value!== '') { 
		addItem(addItemNameInput.value, addItemNumInput.value);
		addItemNameInput.value = '';
		addItemNumInput.value = '';
	}

})

// TODO: Using the technique of event delegation, when one presses the Deduct
// button of any budget item, take away the amount specified in the number
// input from that particular item using the deduct function you wrote earlier,
// and reset the number input
budgetSheet.addEventListener('click', function(e) {
	e.preventDefault();
	if (e.target.matches('button')) {
		deduct(budgetItems[e.target.dataset.index], e.target.form[0].value)
}
})

// TODO: Uncomment this when you're done writing the render function
render(budgetSheet, budgetItems);