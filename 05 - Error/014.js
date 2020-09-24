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

class ReadError extends Error {
    constructor(message, cause) {
       super(message);
       this.cause = cause;
       this.name = 'ReadError';
    }
}

class ValidationError extends MyError { }

class PropertyRequiredError extends ValidationError {
    //
}
  
console.log( new PropertyRequiredError("field").name )

function validateUser(user) {
    if (!user.age) {
      throw new PropertyRequiredError("age");
    }
  
    if (!user.name) {
      throw new PropertyRequiredError("name");
    }
}

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
    console.log('------>>>', err)
}


// Usage
function readUser(json) {
    let user
  
    try {
        user = JSON.parse(json);
    }
    catch (err) {
        if (err instanceof SyntaxError) {
            throw new ReadError("Syntax Error", err);
        }
        else {
            throw err;
        }
    }

    try {
        validateUser(user);
    }
    catch (err) {
        if (err instanceof ValidationError) {
            throw new ReadError("Validation Error", err);
        }
        else {
            throw err;
        }
    }

    try {
        readUser('{bad json}');
    }
    catch (e) {
        if (e instanceof ReadError) {
          console.log(e);
          // Original error: SyntaxError: Unexpected token b in JSON at position 1
          console.log("Original error: " + e.cause);
        }
        else {
          throw e;
        }
    }

}
