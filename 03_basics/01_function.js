// console.log("D");
// console.log("A");
// console.log("R");
// console.log("S");
// console.log("H");
// console.log("I");
// console.log("T");

function sayMyName(){
    console.log("D");
console.log("A");
console.log("R");
console.log("S");
console.log("H");
console.log("I");
console.log("T");
}

sayMyName    //fucntion refrence
sayMyName()  // fucntion execution
function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam" ){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
// if we do not pass parameter than it is taken undefined , in js if else undefined is taken as false
// console.log(loginUserMessage())
// console.log(loginUserMessage("darshit"))

// ... -> rest operator
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))
// here val1=200 val2=400 num1=[500,2000]

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// directly passing object in fucntion -->
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));