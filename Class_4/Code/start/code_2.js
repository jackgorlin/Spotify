// TODO: get the element with id "parent", assign to var p
var p = document.getElementById("parent");

console.log("Parent", p);

// TODO: Log the children and first child of p to the console
console.log("Children", p.children);
console.log("First child", p.children[0]);
var firstChild = p.children[0];

// TODO: Log the parent and nextSibling of children[0]
console.log("Its parent", firstChild.parentElement);
console.log("Its sibling", firstChild.nextElementSibling); 

// TODO: Change the innerText of second child
var secondChild = p.children[1];
console.log(secondChild.innerText);
secondChild.innerText = "WOOHOO";

// TODO: Change innerText of all children
var childrenArr = Array.from(p.children);
childrenArr.forEach(function (child) {
	child.innerText = "Loops";
})

// // TODO: Change innerHTML of the whole list p to have 3 li's with new content
// // Comment out before moving on
// p.innerHTML = `
// 	<li> Milk </li>
// 	<li> Butter </li>
// 	<li> Broccoli </li>
// 	<li> Granola bars </li>
// `;

// TODO: add class .active to each of the children
/* YOUR CODE HERE*/
// childrenArr.forEach(function (child) {
// 	child.classList.add("active");
// });

// TODO: add id's to each of the children
childrenArr.forEach(function (child, index) {
	child.classList.add("active");
	child.id = `child-number-${index}`; /* can do this using back tic */ 
	// child.id = "child-number-" + index;
});