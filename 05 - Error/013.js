let json = `{ "name": "John", "age": 30 }`

// The "pseudocode" for the built-in Error class defined by JavaScript itself
class Error {
    constructor(message) {
      this.message = message
      this.name = "Error" // (different names for different built-in error classes)
      //this.stack = <call stack/> // non-standard, but most environments support it
    }
}

class MyError extends Error {
    constructor(message) {
       super(message);
       this.name = this.constructor.name;
    }
}

class ValidationError extends MyError { }

class PropertyRequiredError extends ValidationError {
    constructor(property) {
      super("No property: " + property);
      this.property = property;
    }
}
  
console.log( new PropertyRequiredError("field").name )

function test() {
    throw new ValidationError("Whoops!")
}
  
try {
    test()
}
catch(err) {
    console.log(err.message) // Whoops!
    console.log(err.name) // ValidationError
    console.log(err.stack) // a list of nested calls with line numbers for each
    console.log('------>>>>', err)
}


// Usage
function readUser(json) {
    let user = JSON.parse(json);
  
    if (!user.age) {
      //throw new ValidationError("No field: age"); // 1
      throw new PropertyRequiredError("age");  // 2
    }
    if (!user.name) {
      //throw new ValidationError("No field: name");  // 1
      throw new PropertyRequiredError("name"); // 2
    }
  
    return user;
}
  
// Working example with try..catch
  
try {
    readUser()  // the potential error source
}
catch (err) {
    if (err instanceof ValidationError) {
      // handle validation errors
    }
    else if (err instanceof SyntaxError) { // (*)
      // handle syntax errors
    }
    else {
        throw err; // unknown error, rethrow it
    }
}
