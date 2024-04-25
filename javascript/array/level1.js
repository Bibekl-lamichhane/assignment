const arr = [3,5,2]
//Q1 calculate length of array and console log
//expected output is 3
console.log(arr.length)



//Q2 reverse the array and console log
//expected output [2,5,3]
const arrRev =arr.reverse()
console.log(arrRev)

///Q3 join the array and console log
// expected output 2,5,3
console.log(arr.join())

//Q4 Remove the last element from the array and log the modified array to the console

const color = ['blue', 'Purple', 'red', 'black', 'white'];

console.log(color.pop());
// ans = white
console.log(color);
// ans= [ 'blue', 'Purple', 'red', 'black' ]



// Q5 Check if all elements in the num  are even. Log "All even" or "Not all even" accordingly.
const num = [6,4,4,8,10,12]

if (num/2){
  console.log('All Even');
}else{
  console.log('Not all even');
}
//ans = not all even

//Q6 Find the index of a specific element in the array. Log the index to the console. 
const paint = ['blue', 'Purple', 'red', 'black', 'white'];

console.log(paint.indexOf('Purple'));
//and =1