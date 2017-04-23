// TODO: get the element with id "parent", assign to var p
var p = document.getElementById("parent");

// TODO: Log the children and first child of p to the console
console.log(p.children);
console.log(p.children[0]);

// TODO: Log the parent and nextSibling of children[0]
console.log("Parent", p.children[0].parentElement);
console.log("Next sibling", p.children[0].nextElementSibling); 

// TODO: Change the innerText of second child
p.children[1].innerText = "Best child"

// TODO: Change innerText of all children
var pArr = Array.from(p.children);
pArr.forEach(function(item) {
	item.innerText = "Web dev";
}, this);

// TODO: Change innerHTML of the whole list p
// Comment out before moving on
var newMarkup = `
	<li> One! </li>
	<li> Two! </li>
	<li> Three! </li>
`;
p.innerHTML = newMarkup;

// TODO: add class .active to each of the children
pArr.forEach(function(item, index) {
	item.classList.add("active");
	item.id = `list-item-${index}`;
}, this);

// TODO: add id's to each of the children