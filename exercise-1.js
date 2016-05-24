/**
 * For each of the following Array methods,

 * 1. use them in an example
 * 2. use console.log() to make the code run in the console!

 **/

// .sort()
var sports = ["basketball","football","baseball"];

sports.sort();

=> [ 'baseball', 'basketball', 'football' ]

.sort is to organise arrays but not just into alphabetical or numerical order,
but into any arrangement we can express conditional logic.

// .concat()
var hello = 'Hello, ';
console.log(hello.concat('Justin', ' have a nice day.'));

Hello, Justin have a nice day.

The concat() function combines the text from one or more strings and returns a new string.

// .indexOf()
var array = [2, 3, 4];
array.indexOf(2);

=> 0

The indexOf() method searches the array for the specified item, and returns its position.

// .split()
var helloWorld = 'My homework'
console.log (helloWorld.split('h'));

[ 'My ', 'omework' ]

The split() method is used to split a string into an array of substrings, and returns the new array.

 // .join()
a = new Array(1, 2, 3, "testing");
s = a.join("+");

=> '1+2+3+testing'

This joins all the elements of an array into a string

// .pop()
a = new Array(1, 2, 3, "testing");
s = a.pop("+");

=> 'testing'

This removes the last element in an array

// .push()
a = new Array(1, 2, 3, "testing");
s = a.push("+");

=> 5

This adds new items to the end of an array.
The push method relies on a length property to determine where to start inserting the given values.

// .slice()
var c = 'The Three Musketeers';
c.slice(4, 9);

=> 'Three'

This selects a portion of an array and returns it as a new array.
Slice does not alter. It returns a copy of elements from the original array.

// .splice()
var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.splice(2, 2);

=> [ 'Apple', 'Mango' ]

Returns a new array comprised of elements that were added or removed from a given array.
Here the splice starts at Apple since its the second fruit bc since we start off counting at zero
and two fruits will be took out since its two.

// .shift()
var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.shift(2, 2);


=> 'Banana'

This removes the first element from an array and returns that element,
resulting in a change in length

// .unshift()
var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.unshift("1");

=> 6

Returns a new array with a new length by the addition of one or more element.


// .filter()
var numbers = [1, 2, 3, 4];

var newNumbers = numbers.map(function(number){
    return number * 2;
}).map(function(number){
    return number + 1;
});

console.log("The doubled and incremented numbers are", newNumbers);

Native Browser JavaScript

The doubled and incremented numbers are [ 3, 5, 7, 9 ]


A new array with all of the elements of a current array that test true by the given function.

// .map()
var numbers = [1, 2, 3, 4];

var newNumbers = numbers.map(function(number){
    return number * 2;
});

console.log("The doubled numbers are", newNumbers);

Native Browser JavaScript
The doubled numbers are [ 2, 4, 6, 8 ]


A new Array with the result of a provided function on every element in the array.
