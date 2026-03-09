1 no ans:
In JavaScript, var, let, and const are used to declare variables, but they have some important differences.

var:

It is the old way of declaring variables in JavaScript.

A variable declared with var can be re-declared and reassigned.

It follows function scope.

let:

It was introduced in ES6 (2015).

A variable declared with let cannot be re-declared, but it can be reassigned.

It follows block scope.

const:

It was also introduced in ES6 (2015).

A variable declared with const cannot be re-declared or reassigned.

It also follows block scope.

2 no ans:
 A spread operator is a method introduced in ES6.
it is very powerful method which used in array or object. 
Commonly use it to clone or copy an array or object.
Naturally if we try to copy an array to another variable it will not be copied.
Because it is pointing in same reference in memory. So if we want to copy we can use spread operator like this,
const arr1 = [1, 2, 3, 4]
const arr2 = [...arr1] 
it will work.It is like spreading the items from a bag to another or 
flooring in a plate.

3 no ans:
In JavaScript, map(), filter(), and forEach() are array methods used to work with array elements, but they have different purposes.

map():

The map() method is used to create a new array by applying a function to every element of the original array.

It returns a new array with the transformed values.

filter():

The filter() method is used to create a new array containing only the elements that meet a specific condition.

It returns a new array with the filtered elements.

forEach():

The forEach() method is used to execute a function for each element of an array.

It does not return a new array and is mainly used for performing actions on each element

4 no ans:
 An arrow function is a modern way of writing a function.
It is shorter than a regular function. Naturally if we want use 
a function we can declare it by function keyword.
But an arrow function can be declare with this => syntax.
most array method use arrow function .Also callback function 
can be arrow function. Also a regular function is hoisted but not arrow function.
We can't use it before initialization.

5 no ans:
 Template literals is a string method. It is introduced in ES6.
Instead of using single quote '' or double quote "" 
we use backticks `` to write it. We can add dynamic value 
using JS in a template literals. Before this we had to use + syntax to add JS variables.
Using backticks we write multiline string with ease.
We can use JS variables inside template literals using this ${} syntax.