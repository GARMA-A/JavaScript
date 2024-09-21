# Master JavaScript Functional Programming Book Reference

## What we Get from Functional Programming (FP) Application

### • In FP, the goal is to write separate independent functions that are joined together to produce
### the final results.
<hr/>

### • Programs that are written in a functional style usually tend to be cleaner, shorter, and easier
### to understand.
<hr/>

### • Functions can be tested on their own, and FP code has advantages in achieving this.
<hr/>

### • You can reuse functions in other programs because they stand on their own, not depending on
### the rest of the system. Most functional programs share common functions, several of which
### we’ll be considering in this book.
<hr/>

### • Functional code is free from side effects, which means you can understand the objective of a
### function by studying it without having to consider the rest of the program.

```JavaScript

// closure.js
function newCounter() {
let count = 0;
return function () {
count++;
return count;
};
}
const nc = newCounter();
console.log(nc()); // 1
console.log(nc()); // 2
console.log(nc()); // 3

```

















