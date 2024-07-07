// Before React and Node js

// js advance topics

// Functions => Definition, Declaration, Arrow
// Array => objects =>
// Template Literals =>
// REST, SPREAD operators =>
// Synchronous and Asynchronous =>
// callback functions =>
// fetch
// Promises => handling Promises => .then(), async and await
// Error Handling in JavaScript => try Catch
// JSON format in JS=>  // key alaways in string but value will diff like string,number any more
// Higher Order Functions => Map, forEach, filter, reduce

// Object in javaScript
// Key value pair
// json object chahi .json ma use garinchha


/// REST, SPREAD operators
/// ...argument jati nai bhayeni sabai print out garchha if rest spread chhaina bhane
/// 1 bhanda badi argument bhaye 
// REST operator

// REST operator --> ...
function sum(a, b, c, d) {
    return [a, b, c, d];
    //console.log([a, b, c, d])
  }

  //sum(1,2,3);>retrun ko thauma console.log([a, b, c, d])ko bela call back garnu parchha
  
  console.log("without rest operator", sum(1, 2, 3));
  console.log("without rest operator", sum(2, 3, 4, 5));
  console.log("without rest operator", sum(1));
  
  function sum2(...args) {
    let a = [];
    args.map((arg) => {
      a.push(arg + 1);
    });
    console.log(a);
  }
  
  // console.log("with rest operator", sum2(1, 2, 3));
  // console.log("with rest operator", sum2(2, 3, 4, 5));
  
  sum2(2, 3, 4, 5);
  sum2(1);


// spread operator
// spreading elements in array
// spreading elemnts in function call
// spreading elemnts in objects

// SPREAD operator --> ...
// 1.spreading elements in array
const arr20 = [2, 3, 4];
const arr21 = [5, 6, 7];

const arr22 = [arr20[0], arr20[1], arr20[2], arr21[0], arr21[1], arr21[2]];
console.log(arr22);

const arr23 = [...arr20, ...arr21];
console.log(arr23);

const arr24 = [arr20, arr21];
console.log(arr24);

// 2.spreading elements in function call
sum2(2, 3, 4, 5, 6, 7);

const arr56 = [2, 3, 4, 5, 6, 7];

sum2(...arr56);


// spreding elements in object
const objA = {
    firstName: "Naresh",
    lastName: "Lama",
    age: "24",
};

const objB = {
    ...objA,
    married: false,
    city: "Nepal",
};

const objC = {
    ...objB,
    firstName: "Kshyasang",
    lastName: "Tamang",
    Country: "Japan",
    age: 30,

}

console.log("spread elements in object", objC);


// call back functions
///> function that is passed to another fucntion as an arguments and called at some point of that function
function abc(a, b, callback) {
    console.log(callback()); /// function call back chahi [callback] garne
}

function xyz() {
    return("value of xyz as an callback");
}

abc("a", "b", xyz);

////click event
let bigbang = document.getElementsByClassName(".wrap__ttl");

// bigbang.addEventListener("click", function(){
//     ///bigbang.textContent = "change the text";  aja check garne
// });


function greet(cb, name) {
    return `${cb()} ${name}`; /// cb ma welcome call back garera welcome! back garchh
    /// cb()call back function ho tala welcome ma raheko welcome! valume post hunchh
    /// name ma chahi console ko "name" include hunchha
}

function welcome() { /// welcome chahi call back function ho
    return "welcome!";
}

console.log(greet(welcome, "Naresh"));
console.log(welcome());


/// js inbuilt function > settimeout
// setTimeout(function(){/// function chahi call back function ho jun chahi 5000 bhayesi timeout ko text show gara bhaneko chha
//     console.log("timeout time");
// }, 5000);



// higher order function > forEach, map, filter, reduce
/// high order function.... the function that takes another function as an argument is knwon as high order function

function tip(cbFunc, tipP, total) {
    let tip;
    tip = cbFunc(tipP, total);
    return tip;
    // OR return `the tip given by the customer is ${tip}`;
    // OR return cbFunc(tipP, total);
  }
  
  function tipCalc(per, billAmt) {
    return (billAmt * per) / 100; //--> 100*5==500/100=5
  }
  
  console.log(tip(tipCalc, 5, 100)); // 正しい出力
  
  // callback function-->
  // Higher Order function-->
  // HOF --> Higher Order Functions
// The function that takes another function as an argument is known as Higher Order function
// The fucntion that is passed to another function as an arguments  is callback function
  
  // Js inbuilt higher Order Functions --> map, filter, reduce, forEach

  /// mostly usefull high order function
  /// Map ---> manipulating an array ----> alawys return an array

const a = [1, 2, 3, 4, 5, 6, 7, 8];
const returnArray = a.map(function(elements, index){
    return elements + index;
    // elemts = 1, index= 0 total is 1+0=1
    // returnArry chahi value store garne 
    /// retrunArry = [1, 2,3 ,4 5, 6, 7, 8]
});
  
console.log(returnArray);  /// console.log always take under the return

/// filter ---> manipulating an array --> alwasy retrun an array

const population = [
    {name: "saula karki", age: 21, married: false},
    {name: "Naresh lama", age: 26, married: true},
    {name: "Shushma lama", age: 22, married: true},
    {name: "Sunima lama", age: 21, married: false},
    {name: "pushpa Karki", age: 21, married: true},
];

const marrieddataStore = population.filter((elements) => {
    return elements.married === true;
});

const unmarrieddataStore = population.filter((elements) => {
    return elements.married === false;
});

console.log(marrieddataStore);
console.log(unmarrieddataStore);


