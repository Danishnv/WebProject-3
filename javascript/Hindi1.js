// // let myYoutubename = "hiteshchoudharydotcom"
// // let anothername = myYoutubename
// // anothername = "chaiaurcode"

// // console.log(myYoutubename);
// // console.log(anothername);

// // let userONe = {
// //     email: "user@google.com"
// //     // UpiId: "user@ybl"
// // }

// // let userTwo = userONe

// // userTwo.email = "hitesh@google.com"

// // console.log(userONe.email);
// // console.log(userTwo.email);

// const name = "hitesh"
// const repoCount = 50

// // console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// const gameName = new String('hitshhc')

// console.log(gameName[0]);

// console.log(gameName.__proto__);
// console.log(gameName.length)
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));

// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);


// const newStringOne = "    hiteshhr    "
// console.log(newStringOne);
// console.log(newStringOne.trim())

// const url = "https://hitesh.com/hitesh%20choudhary"
// console.log(url.replace('%20' , '-'))

// const score = 400
// // console.log(score);

// // const balance = new Number(100)
// // // console.log(balance);
// // console.log(balance.toString().length);

// // console.log(balance.toFixed(1));

// // const otherNumber = 123.8966

// // console.log(otherNumber.toPrecision(4));

// // console.log(Math);
// // console.log(Math.abs(-4));
// // console.log(Math.round(4.6));
// // console.log(Math.ceil(3.2));
// // console.log(Math.floor(4.9));

// // console.log(Math.random());
// // console.log((Math.random()*10)+1);
// // console.log(Math.floor(Math.random()*10)+1);

// // const min = 10
// // const max = 20

// // console.log(Math.floor(Math.random()*(max-min+1)) + min)

// let newDate = new Date ()
// // console.log(myDate.toString());
// // console.log(myDate.toDateString());
// // console.log(myDate.toLocaleDateString());
// // console.log(typeof myDate);

// let newDAte = new Date (2023,0,23)
// // let newDate = new Date(2023, 0, 23,5,3)
// // let newDate = new Date("2023-01-12")
// // let Date = new Date("01-14-2023")
// console.log(Date.toLocaleDateString());


// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
