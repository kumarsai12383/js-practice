function list(list){
  let result = [];
  for(let item of list){
    if(typeof item === 'number' && !isNaN(item)){
      result.push(item * item);
    }
  }
  return result;
}
console.log(list([1, 2, 3, 'a', 'b', 4]));