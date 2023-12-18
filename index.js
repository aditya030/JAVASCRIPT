// console.log("i like pizza!");
// console.log("its really good");


// window.alert("I REALLY LOVE PIZZA")

// //THIS IS  A COMMENT

// /*

// THIS IS A 
// MULTI 
// LINE COMMEN

// T

// */
// let firstname = "aditya";
// let age = 21;
// let student = true;

// age = age+1;
// console.log("hello",firstname);
// console.log("you are",age,"old");
// console.log(student);

// document.getElementById("p1").innerHTML="hello"+firstname;
// document.getElementById("p2").innerHTML="you are"+age+"years old";
// document.getElementById("p3").innerHTML="enrolled"+student;

// let student =20;
// // student = student+1;
// // student = student-1;
// // student = studet*2+1;
// // student+=1
// student/=2;

// let result = 1+2 *(3+4);

// let extra = student % 3;
// console.log(student);


// // let username = window.prompt("whats ur name?");
// // console.log(username);

// document.getElementById("mybutton").onclick = function(){
//     let username = document.getElementById("my").value;
//     console.log(username);
// }

// let age = window.prompt("how old are you?");
// age = Number(age);
// console.log(typeof age);
// age+= 1;

// console.log("happy birthday! you are",age,"years old");
// let x;
// let y;
// let z;
// x=Number("3.14");
// y = String("3.14");
// z= Boolean("");

// console.log(x,typeof x);
// console.log(y,typeof y);
// console.log(z,typeof z);


// const -> a variable that cant be changed


// const PI = 3.14159;
// let radius;
// let circle;

// radius = window.prompt("enter the radius of the circle");
// radius = Number(radius);

// circle = 2*pi*radius;

// console.log("the circumference is:",circle);


// let x = 3.14;
// let y =6;

// x = Math.round(x);
// // x=Math.floor(x) down
// // x=Math.ceil(x) up

// // Math.pow(x,2) for power
// console.log(x);

// let maximum
// let minimum

// maximum = Math.max(x,y)

// let a;
// let b;
// let c;

// a = window.prompt("enter side a ");
// a = Number(a);
// b = window.prompt("enter side b");
// b = Number(b);
// // c = window.prompt("enter side c");
// // c = Number(c);

// c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));

// let count =0;
// document.getElementById("decrease").onclick = function(){
//     count-=1;
//     document.getElementById('countlabel').innerHTML = count;
// }

// document.getElementById("reset").onclick = function(){
//     count=0;
//     document.getElementById('countlabel').innerHTML = count;
// }

// document.getElementById("increase").onclick = function(){
//     count+=1;
//     document.getElementById('countlabel').innerHTML = count;
// }


// let username ="bro code";
// let phonenumber = " 123 241241"
// console.log(username.length);
// console.log(username.charAt(0));
// console.log(username.indexOf("b"));
// username = username.trim();
// username = username.toUpperCase();

// let fullname ="aditya sinha";
// let firstname;
// let lastname;


// lastname = fullname.slice(fullname.indexOf(" ")+1);

// console.log(lastname);
// firstname = fullname.slice(0,fullname.indexOf(" "));
// console.log(firstname);

// // method chaining = calling one method after another in one continous line of code;

// // let username = "aditya";
// let letter = username.charAt(0).toUpperCase().trim();
// console.log(letter);

// let age = 21;

// if(age>=18){
//    console.log("u aree adult");
// }else{
//     console.log("u are not");
// }

// document.getElementById("mybutton").onclick = function(){

//     if(document.getElementById("mycheckbox").checked){
//         console.log("you are subscribed");

//     }else{
//         console.log("you are not subscribed");
//     }
// }

// switch(grade){
//     case "A":
//         console.log('grea6');
//         break;
// }

// let temp =15;

// if(temp>0 && temp<30){
//     console.log("good");
// }else{
//     console.log("bad");
// }

// for(let counter =1;counter<=10;counter++){
//     console.log(counter);
// }


// let rows = window.prompt("enter # of r");
// let columns = window.prompt("enter # of cols");

// happybirthday();
// function happybirthday(){
//     console.log("happy birthday");
// }


// let area;
// let width;
// let height;

// width = window.prompt("enter width");
// height = window.prompt("enter height");
// area = getarea(width,height)

// console.log("the area is: ",area)

// function getarea(width,area){
//     let result = width*height;
//     return result;
// }

// let adult = checkage(21);
// console.log(adult);
// function checkage(age){
    // if(age>=18){
    //     return true;
    // }else{
    //     return false;
    // }

//     return age>= 18 ? true:false;

//     checkwinner(false);

//     function checkwinner(win){
//         win ? console.log("u win"):console.log("u lose");
//     }
// }


// let username ="bro";
// let items = 3;
// let total = 75;
// console.log("hello",username);
// console.log("you have",items);
// consosle.log("u",total);
// console.log('hello ${username}');
// console.log("you have",items);
// consosle.log("u",total);



// let mynum = 12345.6789;
// mynum = mynum.toLocaleString("en-US");
// mynum = mynum.toLocaleString("hi-IN");//HINDI
// console.log(mynum);


// const answer = Math.floor(Math.random()*10+1);
// let guesses =0;


// document.getElementById("sbutton").onclick = function(){
//      let guess = document.getElementById("guessfield").value
//      guesses++;

//      if(guess == answer){
//          alert(answer,"it took u",guesses);

//      }else if(guess<answer){
//          alert("too small");

//      }else{
//          alert("too large");
//      }
// }

document.getElementById("submitbutton").onclick = function(){
                   
    let temp = 32;
  if(document.getElementById("cbutton").checked){
      temp =document.getElementById("mytext").value;
      temp = Number(temp);
      temp = tocelsius(temp);
      document.getElementById("templabel").innerHTML = temp+"c";
  }else if(document.getElementById("fbutton").checked){
    temp =document.getElementById("mytext").value;
    temp = Number(temp);
    temp = tofarhen(temp);
    document.getElementById("templabel").innerHTML = temp+"f";

  }


}





function tocelsius(temp){
    return (temp-32) *(5/9);
}

function tofarhen(temp){
      return temp * 9/5 + 32;
}


//

let fruits = ["apple", "banmnan"];
console.log(fruits[0]);

let prices = [5,10,15,20];


for(let i =0;i<prices.length();i++){
    console.log(prices[i]);
}

for(let i of prices){
    console.log(i);
}

//

let fruits =["banna","apple","orange"];

fruits = fruits.sort();
fruits = fruits.sort().reverse;

for(let fruit of fruits){
    console.log(fruit);
}

//

// 2-d array

let fruits =["apple","oranges","bannna"];
let vege = ["carrots","onions","potatos"];
let meat = ["egges","chicken","fish"];


let frocerrylist =[fruits,vege,meat];

for(let list of frocerrylist){
    for(let food of list)
    console.log(food);
}

//

// spread operator = allows an iterate such as an array or string to be expanded in places where zero or more arguments are expected

// unpacks the element

let numbers = [1,2,3,4,5,6,7,8,9];
let maxi =Math.max(...numbers)
console.log(numbers)

// rest parameters = represent an indefinite number of parameters
// packs argument into an array

let a = 1;
let b =2;
let c =3;
let d = 4;
let e =5;

console.log(sum(a,b));

function sum(...numbers){
    let total =0;
    for(let number of numbers){
        total += number;
    }
    return total;
}
// 

// callback -> a function passed as an argument to another function


let total = sum(2,3);


function sum(a,b){
    return a+b;

}

function display(output){
    console.log(output);
}


//

// array.foreach() = executes a provided callback function once for each array element

let students = ["spongebob","patrick","sqi"];
students.forEach(capital);
students.forEach(print);

function capital(element,index,array){
    array[index] = element[0].toUpperCase()+element.substr(1);

}
function print(element){
    console.log(element)
}
console.log(students[0]);

// array.map

let numbers = [1,2,3,4,5];
let srrs = numbers.map(sqr);

srrs.forEach(print);

function sqr(element){
    return Math.pow(element,2);
}
function print(element){
    console.log(element);
}

// array filter -> creates a new array with all elements that pass the test provided by a function


let ages = [18,16,21,17,19,90];
let adults = ages.filter(checkage);

adults.foreach(print);


function checkage(element){
    return element>=18;
}

function print(element){
    console.log(element);
}

// array.reduce()-> reduces an array to a single value

let prices = [5,10,15,20,25];
let total = prices.reduce(checkout);
console.log(total);

function checkout(total,element){
    return total+ element;
}

// sort array of numbers


let grade =[100,50,90,60,80,70];

grade = grade.sort(descendingsort);


grade.forEach(print);

function descendingsort(x,y){
    return y-x;
}

function print(element){
    console.log(element);
}

// function expression -> function withouth a name (anonymous function) write it forget it

sayhello();
function sayhello(){
    console.log("hello");
}

const greeting = function(){
    console.log("hello");
}
greeting();

//

// arrow function -> compact alternative tot a traditional function

// shuffle array

let cards =["a","2","3","4","5","6","7","j"];
shuffle(cards);

function shuffle(array){
    let current = array.length;

    while(curr!=0){
        let random = Math.random()*array.length
        current--;

        let temp = array[current];
        array[current] = array[random];
        array[random]=temp;
    }
    return array;
}


// nested function -> a function indie function

let username ="aditya";
let userinbox = 0;

login();

function login(){
      display();
      username();
      function display(){
        console.log("welcome",username);
     }

     function username(){
        console.log("u have",userinbox,"messages");
  }
  
}

// map ->object that holds key value pair

const stores = new Map([["t-shirt",20],["jeans",30])

stores.forEach(print(value,key));

// object -> a group of properties and methods 
// properties = what an object has
// use . to acces properties/methods

const car1 = {
    model:"mustang",
    color:"red",
    year:"2023",


    drive : function(){
        console.log("uuuuu",this.model);
    },
    brake: function(){
        console.log("uuuuuuuuu");
    }
}

const car2 = {
    model:"must",
    color:"rd",
    year:"203",


    drive : function(){
        console.log("uuuuu",this.model);
    },
    brake: function(){
        console.log("uuuuuuuuu");
    }
}


console.log(car2.model);
console.log(car2.color);


car2.drive();
car2.brake();


// this -> reference to a particular object the object depends on the immediate context
this.name = "aaa";
console.log(this.name);

// class -> a blueprint for creating a objects define what properties and methods they have use a constructor for unique properties

class player{
    score = 0;

    pause(){
        console.log("u paused the game");
    }


}

const player1 = new player();

console.log(player1.score);
player1.score+=1;


// constructor -> a special method of a class accepts arguments and assign properties

class student{
  constructor(name,age,gpa){
      this.name = name;
      this.age = age;
      this.gpa = gpa;

  }

  study(){
      console.log(this.name);
  }
}


const std1 = new student("ass",30,1.2);

console.log(std1.name);
console.log(std1.age);
console.log(std1.gpa);

//static -> belongs to the class , not the objects 
// properties: useful for caches , fixed-cofiguration,
// methods : usefull for utility functions


// inheritance -> child can inherit from another class

class animal{
    alive = true

}
class rabbit extends animal{
    
    name ="rabbit";

    eat(){
        console.log(this.name);
    }
    sleep(){
        console.log(this.name);
    }

    run(){
            console.log(this.name);
        }
    }


class fish extends animal {
    
    name ="fish";

    eat(){
        console.log(this.name);
    }
    sleep(){
        console.log(this.name);
    }
    swim(){
        console.log(this.name);
    }
}

class hawk extends animal{
   
    name ="hawk";

    eat(){
        console.log(this.name);
    }
    sleep(){
        console.log(this.name);
    }
    swim(){
        console.log(this.name);
    }
}

const rabbit = new rabbit();


// super -> keyword is basically used for parent class 

// commonly used to invoke cosntructor of a parent class

// get -> binds an object property to a function when that property is accesed 

class car{
    constructor(power){
        this._gas = 25;
        this._power = power;
    }
    get power(){
        return "hp",this._power;
    }
    get gas(){
        return "hp",this._gas/50*100;
    }
    set gas(value){
        if(value>50){
            value = 0;
        }
        this._gas=value 
       }
}

let car = new car(400);
car.power =100000000;
console.log(car.power);
console.log(car.gas);

car.gas = 100000000000;

display();
function display(car){
    console.log(car.model);
}


const cars = [car1,car2];
console.log(car[0].model);

function startrace(cars){
    for(const car of cars){
            car.drive();
    }
}


// anonymous objects-> objects withouth a name 
// not directy reffernced
// less syntax no need for unique names

class card{
    constructor(value,suit){
        this.value = value;
        this.suit = suit ;


    }
}

 new card("A","hearts");

 new card("wd","ss");

new card("33","hearts");

let cards =[new card["A","hearts"],new card['B','K'],new card['c','z']];

// error handling -> object with a description
// of something went wrog

// cant open a file
// lose connection
// use types incorrect option

// typerror

try{
     let x = window.prompt("enter a #");
     x =Number(x);
    if(x=="") throw "that was empty";
     if(isNaN(x)) throw "that wasnt a number";
}
catch(error){
    console.log(error);
}
finally{
    console.log("this executes")
}

// settimeout -> invokes a function after a number of millisecond
// asynchronous function (dosent pause execution)

let item ="crypto";



let timer1 = setTimeout(firstmessage,3000)
let timer2 = setTimeout(secondmessage,9000)
function firstmessage(){
    alert('buy this');
}

function secondmessage(){
    alert('this is not paid');
}

function thirdmessage(){
    alert('enjoy');
}

document.getElementById("mybuuton").onclick = function(){
     clearTimeout(timer1);
}


// set interval -> invokes a functio repeatedly 
//after a  number of millisecond
// asychronous-.dosent pause execution


let count =0;
let max = window.prompt("count up to what #?");
max = Number(max);


const time =setInterval(countup,1000);

function countup(){
    count+=1;
    console.log(count);
    if(count>=max){
        clearInterval(time)
    }
}

// the date objects is used to work with dates and times


let date = new date();

date = date.tolocalstring();



console.log(date);


function formatdate(date){
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
}


//synchronous code -> in an ordered sequence 
// step-by step linear instruction
//(start now,finsish now)


// asynchronous code -> out of sequence
// ex -> access a database
// fetch a file
// tasks that take time
// settimeout()->ex
// (start now finsish sometime later)




// cosnole.time()= starts a timer you can 

// use to track how long an operation takes
// give each timer a unique name


console.time("response time");


//alert("click the ok button");
setTimeout(()=> console.log("hello"),3000);

console.timeEnd("response time");

//promises -> object that encapsulates the result
// of an asynchronous operation 

// they ley asynchronous methods to return value like synchrous


// they have state pending,fulfilled,rejected
// the result is what that can be returned
// 2 parts producing and consuming

async function loadfile(){
    let fileloaded = true;

    if(fileloaded){
        return ("file laoded");
    }else{
        throw ("file not loaded")
    }
}
const promise = new Promise((resolve,reject)=>{
    let fileloaded = true;

    if(fileloaded){
        resolve("file laoded");
    }else{
        reject("file not loaded")
    }
});

loadfile.then((value)=>{console.log(value)}).catch(error=> crossOriginIsolated.log(erre));


const wait = time => new Promise( resolve => {
    setTimeout(resolve,5000)
});
wait(3000).then(()=> console.log("thanks"));

// async => makes a function return a promise
// AWAIT => makes an async function wait for a promise

async function loadfile(){
    let fileloaded = true;

    if(fileloaded){
        return ("file laoded");
    }else{
        throw ("file not loaded")
    }
}
async function start(){
    try{

    
    let msg =await loadfile();
    }
    catch(error){
        console.log(error);
    }
console.log(msg);
}
start();

//The idea behind a module is that its file of reusable
// we can import sections of pre written code
// great for function
// helps to make code more resuable and maintanable
// think of modules as chapters of book

import {pi,getc,getarea} from "./math.js";

console.log(pi);

let cir = getc(10);
console.log(cir);

//DOM -> DOCUMENT OBJECT MODEL(API)
// AN INTERFACE FOR CHANGING THE CONTENT OF A PAGE
console.log(document);
console.dir(document);


document.title;
document.URL;

document.title ="dasasd";
document.location="http://google.com";

document.body.style.backgroundColor="skyblue";
document.getElementById("mydiv").innerHTML="hello";


//

let fruits =document.getElementsByName("fruits");
console.log(fruits);
fruits.foreach(fruit=>{
    if(fruit.checked()){
        console.log(fruit.value);
    }
})

let vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor="lightgreen";


let desserts = document.getElementsByClassName("desserts");
desserts[0].style.backgroundColor="lightgreen";


let element = document.querySelector("#mytitle")
element.style.backgroundColor="lightgreen";

//  parent body -> first child ul1
let element = document.querySelector("#vegetables");
let child = element.firstElementChild;
vos
child.backgroundColor="lightgreen"

// add change html elements
//.innerhtml (vulnerable to xss attack)
//.textcontent (more secure)
const name = document.createElement("h1")
name.textContent=window.prompt("enter ur name");
document.body.append(name);

const mylist = document.querySelector("#fruit");
const listitem = document.createElement("li");
lisitem.textContent="mango";
mylist.append(listitem);


// add change css properties of some elements 

const title = document.getElementById("mytitle");
title.style.backgroundColor ="#222222";
title.style.color ="rgb(50,200,250)";
title.style.fontFamily="cosnsolos";

// events 


const element = document.getElementById("mybutton");
const elements = document.body;
elements.onload = dosomething;
element.onclick =dosomething;
element.onchange=dosomething;
function dosomething(){
    alert("u did it!!!!!!!!!!!!!");

}

// onmuseover
//onmouseout

// for changing colour

//

//.addeventlistner(event,function,usercapture)
//you can add many events handlers to one lement
// even the same event taht invokes different functions 


const innerdiv = document.getElementsById("innerdiv");
const innerdiv = document.getElementsById("outerdiv");
innerdiv.addeventlistner("mouseover",changered);
innerdiv.addeventlistner("mouseout",changegreen);



function changered(){
    innerdiv.style.backgroundColor="red";
}

///hide 

const mybutton = document.querySelector("#mybutton");
const mybutton = document.querySelector("#myimg");
mybutton.addEventListener("click",()=>{
    if(myimg.style.dispaly =="none"){
        myimg.style.dispaly ="block";
    }else{
        myimg.style.dispaly="none";
    }
})


// detect key press
const mydiv = document.getElementById("mydiv");
window.addEventListener("keydown",move);
let x =0;
let y=0;
function move(event){
    switch(event.key){
        case "arrowdown":
            y+=5;
            mydiv.style.top=y+"px";
            break;

            case "arrowup":
            y-=5;
            mydiv.style.top=y+"px";
            break;
    }
}

//animations using js

const mybutton = document.getElementById("mybutton");
const myani = document.getElementById("mydiv");

mybutton.addEventListener("click",begin);

function begin(){
    let timerid =null;
    let degress =0;
    let x =0;
    let y=0;

    timerid.setInterval(frame,5);

    function frame(){
        if(x>= 200){
            clearInterval(timerid);
        }else{
            x+=1;
            myani.style.left =x+"px"
        }
        if(degree>=360){
            clearInterval(timerid);
        }else{
            degree+=1;
            myani.style.transform="rotatex"
        }
    }
}


// canvas api->a means for drawing graphics
// used for animations ,games,data visiulization




let canvas = document.getElementById("mycanvas");
let context = canvas.getcontext("2d");
context.lineWidth =10;
context.strokeStyle ="pruple";
context.beginPath();
context.moveTo(0,0);
context.lineTo(500,500);
context.lineTo(250,500);
context.lineTo(500,0);
context.lineTo(250,250);
context.stroke();

// draw trainge
context.lineWidth =10;
context.strokestyle ="purple";
context.beginPath();
context.moveTo(250,0);
context.lineTo(0,250);
context.lineTo(500,250);
context/lineTo(250,0);
context.stroke();
context.fill();

//draw rectangle
context.fillRect(0,0,250,250);
context.strokestyle ="black";
context.strokeRect(0,0,250,250);

context.fillRect(0,250,250,250);
context.strokestyle ="red";
context.strokeRect(0,0,250,250);


// draw circle
context.fillstyle ="lightblue";
context.linewidth =10;

context.beginPath();
context.arc(250,250,200,0,2*Math.PI)
context.STROKE();
context.fill();

// draw text
context.font ="50px MV Boli";
context.fillstyle="grey";
context.textAlign ="centre";
context.fillText("u win",canvas.width/2,canvas.height/2);


//window -> interface used tot alk to the web browser 
// the DOM is a property of the window 

console.dir(window);
window.innerWidth;
window.innerHeight;
window.scrollX;
window.screenY;
window.location.href="http://google.com";
window.open();
window.close();
window.print();
window.alert("hello")
window.confirm("");
window.prompt()

//cookie -> a small text file stored on your computer
// use dto remember information about the user
// saved in a name = pairs value 


console.log(navigator.cookieEnabled);
document.cookie ="firstname=spongebob;expires=sun,1 january 2030 12:00:00 UTC;PATH=?"

setcookie("email","sponge@gmail.com",365);
console.log(document.cookie);

function setcookie(name,value,daystolive){
    const date = new Date();
    date.setTime(date.getTime()+daystolive *24*60*60*1000)
    let exprs = "expires"+date.toUTCString();
    document.cookie=${name}=${value}
}

function deletecookie(name){
    setcookie(name,null,null);
}