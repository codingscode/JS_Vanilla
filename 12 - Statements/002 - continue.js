/*
The continue statement breaks one iteration (in the loop) if a specified condition occurs, and continues with the next 
iteration in the loop.

The difference between continue and the break statement, is instead of "jumping out" of a loop, the continue statement 
"jumps over" one iteration in the loop.

However, when the continue statement is executed, it behaves differently for different types of loops:

In a while loop, the condition is tested, and if it is true, the loop is executed again
In a for loop, the increment expression (e.g. i++) is first evaluated, and then the condition is tested to find out if 
another iteration should be done
The continue statement can also be used with an optional label reference.

Note: The continue statement (with or without a label reference) can only be used inside a loop.

*/

var numero = []

for (var i=0; i < 12; i++) {
   if (i==5 || i==8) {
      continue    // pula
   }
   numero.push(i)
}

console.log(numero)
