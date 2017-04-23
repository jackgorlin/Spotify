/*
var academic_history = {
	name : "Jason",
	class_year: 2017,
	major : "Computer Science"
}

console.log(academic_history.name);
console.log(academic_history.class_year);
console.log(academic_history.major);




academic_history.name = "Duong";
academic_history.class_year = 2018;
academic_history.major = "Art";


for (key in academic_history) {
	console.log(academic_history[key])
}

var x = academic_history;
x.name = "Vanessa";

console.log(x.name)
console.log(academic_history.name);


var n = 1;

function plus_one (n) {
	return n + 1;
}

console.log(plus_one(n));



var arithmetic = {
	plus: function(a,b) {return a + b; },
	minus: function(a,b) {return a-b; }
}

console.log(arithmetic.plus(2,3))


/*



function x () {
	var a = 4;
	return a * a;
}


var a = 4;
function y () {
	return a * a;
}

*/


// var counter = 0;
// function add() {
// 	counter += 1;
// }

// add();
// add();
// add();

// console.log(counter)



// function add() {
// 	var counter = 0;
// 	counter += 1;
// }

// add();
// add();
// add();

// console.log(counter)


// function add() {
// 	var counter = 0;
// 	function plus_one() {
// 		counter += 1;
// 	}
// 	plus_one();
// 	return counter;
// }

// add();
// add();
// add();

// var add = (function () {
// 	var counter = 0;
// 	return function () {return counter += 1; };
// })()


// var a = [19,3,4, "jason"];


// a.push(5);
// console.log(a);


// var fruits = ["mango", "apple", "banana"]


// console.log(fruits.sort());

// var s = [19,234,123,8];

// console.log(s.sort(function(a,b) {return b-a; }));

// console.log(fruits.toString());

// console.log(fruits.join("-"));

// fruits.push("orange");
// console.log(fruits.toString());

// fruits.pop();
// console.log(fruits.toString());

// fruits.shift();
// console.log(fruits.toString());

// fruits.unshift("avocado");
// console.log(fruits.toString());

// s.splice(2,1);
// console.log(s);



var x = [0,1,2,3];

console.log(x.map(function(a) { return a + 2;} ))
console.log(x.reduce(function(a,b) { return a + b; }))
console.log(x.filter(function(a) { return a >= 2; }))



var earnings = {
	John: 20;
	Jeff: 25;
	Jim: 14;
}
