
// export an array
let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// export a constant
const MODULES_BECAME_STANDARD_YEAR = 2015;

// export a class
class User {
  constructor(name) {
    this.name = name;
  }
}

function sayHi(user) {
    console.log(`Hello, ${user}!`);
}

  
function sayBye(user) {
    alert(`Bye, ${user}!`);
}

export {months, MODULES_BECAME_STANDARD_YEAR, User, sayHi, sayBye}






