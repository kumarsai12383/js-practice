let arr = ["apple", "banana", "cherry", "date", "elderberry"];
let [first, second, third, ...rest] = arr;

let obj ={
    name: "John",
    age: 30,
    city: "New York"
}
let {name: personName, age} = obj;
// Using destructuring assignment to extract values from the array
console.log(first);  // Output: apple
console.log(second); // Output: banana
console.log(third);   // Output: cherry
console.log(rest);    // Output: ["date", "elderberry"]
// Using destructuring assignment to extract values from the object
console.log(personName);  // Output: John
console.log(age);   // Output: 30
// Output: New York