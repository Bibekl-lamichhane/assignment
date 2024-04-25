const arr =  [3,5,2]
//console.log the maximum number of an array
//expectedd output 5

console.log(Math.max(3, 5, 2));
//ans 5

//Q2 Remove a specific element 2 from the array. Log the modified array to the console.
// expected output: [3,5]


arr.splice(2,2);
console.log(arr)
//ans= [ 3, 5 ]


//Q3 Multiply each element of the array by a constant value 5 and log the modified array to the console.
//expected output [15,25]


const multiply = arr.map(function(arr) {
	return arr*5;
});
console.log(multiply);
//ans =[ 15, 25 ]

//find intersection (common elements) of arr and arr2
//expected output: [5]
const arr2 = [5,21,32]