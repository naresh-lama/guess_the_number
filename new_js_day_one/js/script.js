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

const b = [10, 11, 12, 13, 14];
const retunrBox = b.map(function(boxMap, index){
  return boxMap + index;
});
  
console.log(retunrBox);
console.log(returnArray);  /// console.log always take under the return

/// filter ---> manipulating an array --> alwasy retrun an array

const population = [
    {name: "saula karki", age: 29, married: false, city: "nepal"},
    {name: "Naresh lama", age: 36, married: true, city: "japan"},
    {name: "Shushma lama", age: 35, married: true, city: "japan"},
    {name: "Sunima lama", age: 21, married: false, city: "canada"},
    {name: "pushpa Karki", age: 21, married: true, city: "asutrailia"},
];

const marrieddataStore = population.filter((elements) => {
    return elements.married === true;
});

const unmarrieddataStore = population.filter((elements) => {
    return elements.married === false;
});

const ageData = population.filter((elements) => {
  return elements.age >= 30;
});

const underAage = population.filter((elements) => {
  return elements.age < 30;
});

const cityFilter = population.filter((cityArea) => {
  return cityArea.city == "japan";
});


console.log(marrieddataStore);
console.log(unmarrieddataStore);
console.log(ageData);
console.log(underAage);
console.log(cityFilter);

/// reduce ---> manipulating an array ---> single value matra return
// a = [1, 2, 3, 4, 5, 6, 7, 8];
const singleValue = a.reduce((accumalte, data) => { //accumalte bhaneko euta initial number ho jun call back function ko last ma rakhinchha
 return accumalte + data; /// data equal sto 1,2,3...8
}, 0); /// 0 value is for accomalate

/// 0 + 1 = 1 accumulate + data last ma value nai next ma gayera add hudai janchha
/// 1 + 2 = 3
/// 3 + 3 = 6
/// 6 + 4 = 10
/// 10 + 5 = 15
/// 15 + 6 = 21
/// 21 + 7 = 28
/// 28 + 8 = 66 return value is 36


const singleWithindex = a.reduce((accumalte, data, index) => {
 const total = accumalte + data + index;
  return total;
}, 2);

console.log(singleValue);
console.log(singleWithindex);

const x = [1, 2, 3, 4, 5, 6];

const singleNo = x.reduce((accumalte, reduceNumber) => {
  const totalReduce = accumalte + reduceNumber;
  return totalReduce;
}, 3);

console.log(`this is total of reduce manimulating ${singleNo}`);
/// forech ---> manipulating array --> doesent retrun an array --> instead retruns single value for each of the elements
/// array nai linchha but data store chahi array ma gardaina



// Synchronous and Asynchronous =>
// Synchronous....>jun way ma javascript palai palo run hunchh teslai synchronous bhaninchha
// palai palo run huda bich ma time set bhako chha bhane tyo exp 9 sec ko hold gare sakie pachhi tala ko run hunchh
// jun 9 sec hold bhaye pachhi matrai tala ko run garne lai nai synchronous bhaninchha

// *backend ko data heavy or network problem le garda page load huda
// java script ko engine bhitra chahi hold bhai rakhchha but tala ko sabai run hune kam hunchha bhane Asynchronous

// sychronous ...>>> hold garaune
// asynchronous..>>> hold hune chahi bhairakhchha but run hune content chahi run bhairakhchha

// api...>> data include by API 
// sabai api spead hune hudaina but promise handling garera run garchha
// promises handling

async() => {
  await fetch("facebook.com");
}

console.log("this is already printed");

/// sychronous >> nature ... this code will for everyline to be executed
/// harek line lai wait garchha kati time lagchha bhanere tyo time nasake samma 
console.log("Naresh"); /// 0.1sec
console.log("lama"); /// 5sec


/// asynchronous ..>>> harek line line run wait gardaina if kunai lai run huna time lagchha 
/// tyo chahi bhitra nai run bhairakchha tyo bicha tala ko line chahi run bhayera retrun hunchha
/// this code doesn`t waits everyline to be executed

/// synchronous nature
console.log("start");


/// asynchronous code
/// handling promieses  holding gare ni bhitra nai run gara,... pratek lai promises use garnu parchha so yo bhanda ta await wait mostly use hunchha
/// .then()
/// .async await >.... async function await nature use garne //// await bhane ko wait garna lai use garne


// console.log("Start");

// function wait1(time) {
//   const start = Date.now();

//   let now = start;

//   while (now - start < time) {
//     now = Date.now();
//   }

//   return now;
// }

// wait1(20000); // holds for 2 sec

// console.log("End");

// asynchronous code
// handling promises
// 1. .then()
// 2. .async await

// .then
console.log("Start");

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

wait(5000).then(function () {
  console.log("This is Loading");
});

console.log("End");

// async await

console.log("Start");

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

async function Japan() {
  await wait(6000);
  console.log("This is Loading");
}

Japan();

console.log("End");




