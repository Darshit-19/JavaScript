const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    // Inside the constructor function, properties are defined using "this"
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // Other methods can also be defined in the constructor function
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // The "return this" statement at the end is unnecessary in this case
    // Constructors implicitly return the created object
}

// Creating a new instance of the User object
const user1 = new User("JohnDoe", 5, true);

// Accessing properties and calling methods of the user1 object
console.log(user1.username); // Outputs: "JohnDoe"
user1.greeting(); // Outputs: "Welcome JohnDoe"


const userOne = new User("darshit", 12, true)
const userTwo = new User("harshit", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);


// In JavaScript, the new keyword is used to create instances of objects from constructor functions. Here's how it works:

// When you define a constructor function, like function User(username, loginCount, isLoggedIn){}, you're essentially defining a blueprint for creating objects.
// To create a new object based on this blueprint, you use the new keyword followed by the constructor function name and any required arguments in parentheses. For example: var user1 = new User("JohnDoe", 5, true);
// When you use new, JavaScript does a few things:
// It creates a new empty object.
// It sets the this keyword inside the constructor function to refer to this new object.
// It calls the constructor function, executing the code inside it. Within this code, properties and methods can be assigned to the object using this.
// It returns the newly created object. If the constructor function explicitly returns an object, that object is returned instead. If the constructor function doesn't have a return statement, JavaScript implicitly returns the object created in step 1.
// Without the new keyword, the constructor function would just be a regular function. Using new is what turns it into a constructor for creating objects.