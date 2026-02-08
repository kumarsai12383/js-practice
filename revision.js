let senctence = "I love JS in 2024";
let count = 0;
for (const character of senctence) {
    if (character === " ") {
        count++;
    }
}
console.log(count + 1);
