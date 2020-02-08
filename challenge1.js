/*
Your task is to make a function that can take any non-negative 
integer as a argument and return it 
with its digits in descending order. Essentially, 
rearrange the digits to create the highest possible number.

Examples:
Input: 21445 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321

*/

let number = prompt();
function descendingOrder(d){
if(d > 0){ 
  let nArray = d.split(""); // Put the input of the user into array
  let arrangeSort = nArray.sort(); // Sort the array from min to max
  let fullArrange = arrangeSort.reverse(); // Reverse the array
  return fullArrange.join(""); // Delete commas to return a clean value
}
else{
	alert("Please enter positive number");
}}

alert(descendingOrder(number)); // Execute our function

