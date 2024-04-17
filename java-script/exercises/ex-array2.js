// removing spcifiying elements from right

function remove_from_right(arr, n = -1){
  return arr.slice(n); 
}

console.log(remove_from_right([1, 2, 3]));
console.log(remove_from_right([1, 2, 3], -1));
console.log(remove_from_right([1, 2, 3], -2));
console.log(remove_from_right([1, 2, 3], -4));