'use strict';
 //🔴
 //// VARIABLES (1) ///////////////////////// 

// let x= 'hello';   //variable you can change and 
// x=10;             // it's block scope.

/* (2) */

// const x='hello'; //variable you can not change 
 //x=10; ⛔ ERROR  // it's  block scope.


/* (3) */

// var x='hello';  //variable you can change 
// x=10;           //it's value and its function scope.


//🔴
//// if statement  /////////////////////////  


// nothing change  from c & c++ & java & ... (:

//if ( condition)
//{
//
//}
// else if(condition)
//{
//
//}
//else
//{
//
//}

//🔴
////Switch statement   /////////////////////////

// switch(variable){
//   case condition that has relation with variable :
//     console.log(any thing);
//     break;
//     case two :
//     console.log(x);
//     break;
//  default :
//   console.log(x);

// }



//🔴
//// special condition  ///////////////////////// 

// const age = 19;

// age>= 18 ? console.log('you are 19 years old') :
// console.log("you are not 19 years old ");




//🔴
//// Number & String  method ///////////////////////// 

// const str = '2004';
// const num = 2004;
// console.log(str);
// console.log(Number(str));// -> convert str to num.
//console.log(num);
// console.log(String(num)); // -> convert num to str.


//🔴
//// JS With sum str & num /////////////////////////

//let n = '1' + 1; // -> 11 
//  if there string in the sum operation js 
//will convert every thing to string .

/* (2) */
  
//let a= '10'-'4'-'3'-'2' +5;  // 15 

//  if there string in the sub operation js 
//will convert every thing to num .

// so  10 - 4 = 6 -> (1)
// 6 - 3 = 3   ->(2)
// 3 - 2 = 1  ->(3)
// 1 + '5' = 15  -> the final answer.

/* (3) */

// let x= '5' * 10; // 50 
// x = '5' / 10 ;  // 0.5  
// x= '5'/'10'; // 0.5
// x=  '5'*'10';
// console.log(x); //50




//🔴
//// functions ///////////////////////// 

//  const x =function logger(parameters)
// {
//     console.log("welcome to js");
//    return value;  // return to const x
// }


/* Arrow function (2) */
// let h=4, l=6, n=5;
// const x = (a,b,c) =>(a+b+c) / 3;

// console.log(x(h,l,n));





//🔴
//// Arrays methods ///////////////////////// 
//
// const friends = [' gorge ', 'josef', 'ali'];
//
//
// friends.push('garma'); 
// ['gorge' , 'josef' , 'ali' , 'garma']   //like vectors in c++ -> vector<int> x ; x.push-back(10);
//
// friends.length;  // = 4 now //🍏 

// friends.unshift('john');//🍏 
// ['john','gorge','josef','ali']

// friends.pop(); // delete last element//🍏 

// friends.shift(); // delete first element //🍏 

//friends.indexOf('ali'); // 2//🍏 

//friends.indexOf('bob'); // -1 not there

//friends.includes('ali') 
// true//🍏 
//friends.includes('steven') 
// false


//friends.slice(2)
 // remove first two elements
//and store it in a new variable//🍏



//friends.splice(2)
// remove first two elements
// from the main array delete it . //🍏




//friends.reverse(); // ['ali','josef','george']
//reverse all array //🍏


//const friends2 =  [ ' kero ' , 'hana' , 'fahd'];
//friends.concat(friends2);
// [' gorge ' , 'josef' , 'ali' ,
//'fahd' , ' hana', 'kero',];//🍏



//friends2.join('-');//🍏
// kero-hana-fahd-




// const arr = ['100','-125','50','12'];

// console.log(arr.includes(150)); 
// // includes method is when you looking for//🍏 
// // only one value  and if it there return true


// console.log(arr.some(mov => mov > 0 )); 
// here you can set move variable and it is value
// is over than 0 if there any number over than 
// 0 in the array it will return true//🍏


// console.log(arr.every(mov => mov > 0 )); 
// if every element in the array > 0//🍏
// return true else return false



// const arr2= [[1,2,3],[4,5,6],7,8];
// console.log(arr2.flat());
// it will remove any nested arrays and //🍏
// flat all the array 


//try this 

// const arr3 = [1,[2,[3,4]],5];
// console.log(arr3.flat());
// output : [ 1, 2, [ 3, 4 ], 5 ]
// because this method remove only one //🍏
// nested array .
 




//🔴
//// Objects  ///////////////////////// 

// const Jonas =
// {

// firstName: 'girgis',
// lastName : 'Elghattas',
// birthYear: 2004 ,

// calcAge : function(birthYear)
// {
//     return 2023 - birthYear;
// }

// }




//🔴
//// Loops ///////////////////////// 

// for(let rep =1 ; rep <=10 ; rep++)
// {
//     console.log("you can do it !");
// }

// let x=1
// while(x<=10)
// {
//     console.log("you can do it !");
//     x++;
// } 




// 🔴
// // Random number  ///////////////////////// 

// let dice = Math.trunc(Math.random()*6)+1;
// Mah.trunk give a integer digit no fractions

// math.random() give any number between 0.000 to 1.000.

//math.random() * 6 give number between  0.000 to 5.000

//(math.random() * 6 ) + 1 give number between
// 1.00000 to 6.000000



//🔴
//// MAP(FLAT MAP) | FILTER | REDUCE  ///////////////////////// 


/*   MAP  */
// map returns a new array containing 
// the results of applying a n operation 
// on all original array elements

/* flatMap */
// it flat the answer after map it for
// more information about flat go to 
// array methods



/*  FILTER  */ 
// filter return a new array containing 
// the array elements that passed 
// a specific test condition .


/* REDUCE*/
//reduce boils all array elements down to one 
//single value (adding elements together )
//------------------------------------

const movements =[200,450 ,-400 ,3000,-650 ,-100];
// const eruTousd =2;
// const movementsusd = movements.map(function(mov)
// {
//  return mov * eruTousd; // OR//🍏
// return 23;
// });
//OR
// const  movementsusd = movements.map(mov => mov*eruTousd);
// console.log(movements);//🍏
// console.log(movementsusd);
 
// ANOTHER SOLUTION 

// const movementsusdfor = [];
// for(const mov of movements)movementsusdfor.
// push(mov * eruTousd);//🍏
// console.log(movementsusdfor);

/* FILTER  */

// const deposits = movements.filter(mov=> mov > 0);
// console.log(deposits);//🍏

//----ANOTHER SOLUTION 
// const depositsfor = [];//🍏
// for(const mov of movements) if(mov>0)depositsfor.
// push(mov);
// console.log(depositsfor);


/* REDUCE */

const balance = movements.reduce(function 
    (acc,cur,i,arr)
    {
        console.log('Iteration'+i+': '+acc);
       return acc+cur;//🍏
    },0 );
    
    console.log(balance);


// ANOTHER SOLUTION---------//

// let balance2 = 0;
// for (const mov of movements ) balance2+= mov;
// console.log(balance2);//🍏





//🔴
//// Sort the array ///////////////////////// 

const num = [ 5 , 4 , 6 , 3 , 1 ,2];

//----------------------------
// i want from the smallest numbers //🍏
//to be in first's place and the biggest
//numbers be in the last's place so we do that
//-----------------------------


// num.sort( (a,b) =>
// {
// if (a>b) return -1;
// else if (b>a) return 1;
// });
// console.log(num);

// in sorting  we loop over the  array
// with any to parameters in order that will
// be A & B === index [0] & [1] or [2] [3]
// whatever

/* 🔥  And we have rule that said  🔥 */


// if we return any number smaller tha 0
// it will sort ===  A then B
// and if  we return any number
// is bigger than 0 it will sort === B then A


/* So what do you think the
 output will be of this code */

// num.sort( (a,b) => //🍏
// {
// if (a>b) return -3;  // any neg num
// else if (b>a) return 12;  //  any pos num
// });
// console.log(num);






//🔴
//// checking num | math  /////////////////////////

/* checking if the value is number */
//🍏
// console.log( Number.isFinite('20')); // false
// console.log( Number.isFinite(15)); // true
// console.log( Number.isFinite(1/0));// false


/* checking if the value is integer */

//🍏
// console.log( Number.isInteger('20')); // false
// console.log( Number.isInteger(15)); // true
// console.log( Number.isInteger(5.00)); // true
// console.log( Number.isInteger(1/0));// false



/* Maths methods */    //NAN-> not a number

//🍏

// console.log(Math.sqrt(25)); // 5

// console.log(Math.max(5,10,45,2));// 45

// console.log(Math.min(5,10,45,2));// 2


// console.log(Math.min(5,'23px',45,2));// NAN


//  console.log(Math.PI * Number.
//parseFloat('10px') **2);
//  use math pi to get the area of the circle
//  here R = 10 px;


// console.log(Math.trunc(Math.random() * 6)+1);
//🍏
/* How it works */
//math.trunc is to give a integer number
// and we use then math.random to give a
// random number from 0 to 1
// then use * 6 to become the max value
// can be  from 0 to 6 but random will stop in 5
// because random can not be the max value
// that you set
// then + 1 to be from 1 to 6 amd
// that what dice game did .

//🍏
// console.log(Math.round(23.3));
// // if the fraction part is from 0.0 to 0.4
// // it give the lower number 23.3 become 23
// console.log(Math.round(23.5));
// // if the fraction part is from 0.5 to 0.9
// // it give the higher number 23.5 become 24





//🍏
// console.log((2.758).toFixed(1)); // 2.8
// console.log((2.758).toFixed(2)); // 2.76
// console.log((2.758).toFixed(3)); // 2.758



//🔴
//// For EACH  /////////////////////////

// const array = ['el1', 'el2', 'el3', 'el4','el5'];

// array.forEach(function(element, index, array) {
//   console.log(`Element: ${element}, Index: ${index}`);
// });//🍏



//forEach() that allows
// you to iterate over the elements of an array
// and perform a specified action for each element
//The forEach() method takes a callback function
// as an argument and executes that function
//  once for each element in the array.The callback
//  function can take up to three arguments:
// the current element being processed,the index
// of the current element, and the array itself.

// const array2 =[1,2,3,4,5];
// array2.forEach((x) => x += 10);
// console.log(array2);
// 11 12 13 14 15 //🍏





//🔴
//// Date & Time  /////////////////////////


// const timeNow = new Date();
// console.log(timeNow);//🍏



// const now = new Date();
// console.log(now);
// const day = now.getDate();
// console.log(day);
// const month= now.getMonth();
// console.log(month);//🍏
// const year = now.getFullYear();
// console.log(year);
// const hour = now.getHours();
// console.log(hour);
// const min = now.getMinutes();
// console.log(min);


// const future = new Date();
// future.setFullYear(2040);
// console.log(future);//🍏


// const future = new Date(2037 , 10 , 19, 15 ,23);
// console.log(future);//🍏

//🔴🔴🔴🔴
//labelDate.textContent = new Intl.DateTimeFormat('en-GB').format(now);


// you can also include to it the hours and minutes
 // by using new Intl.DateTimeFormat('en-GB' , option) that and pass to the function the obj you want like that
 
  //  const option = {
  //  hour:"numeric",
  //  minute:"numeric",
  //  day:"numeric",
  //  month:"numeric"
//  };
  

// you can add more to get the full date as you want and

// you can call it like that
 
//Intl.DateTimeFormat(locale , option)
 
//const locale = navigator.language;
//4/14/2024, 7:32 PM will be like that


// and there is also number format 

//🔴🔴🔴                                          to know more about en-GB check (iso language code table ) or go to 🔥🔥 www.lingoes.net🔥🔥
//🔴🔴🔴

/*  DO A SPECIFIC CODE IN SPECIFIC TIME   */

// setTimeout( () => console.log('your pizza has arrived 🍕')

// , 5000); // after 5 second will work
// console.log('waiting...');












//🔴🔴🔴🔴🔴 very important (DOM)document 
//                               object model

//// HOW to selecting creating /////////////////////// 
//// and deleting elements     /////////////////////// 


// document.querySelector('.header'); // class
// document.querySelector('#header--1'); // id
// document.querySelector('h3'); // tag

// these methods select the first 
// element with the class or the tag name 
// in all html file 
// but also we know that we can't 
// but two same name to different id's
// there is only one id with that name 
//-----------------------------

// document.querySelectorAll('.section');
// document.querySelectorAll('div');
// this will select all classes = 'section' 
// or tag in the hole html file 
//-------------------------------


// document.getElementById('section--1');
//document.getElementsByTagName('h1');
// take the element with specific id or tag name.
//-----------------------------------


/* Style */

// //rgb(255,255,255)
// const randomInt = (min,max)=>
//  Math.floor(Math.random()*(max-min+1)+min);
 
//  const randomColor  = ( )=> 
//  `rgb(${randomInt(0, 255)},${randomInt(0,255)}
//  ,${randomInt(0,255)})`;
// console.log(randomColor(0, 255));

// document.querySelector('.nav__link')
// .addEventListener('click', function(e)
// {
// this.style.backgroundColor= randomColor(); 
// });  
// document.querySelector('.nav__links')
// .addEventListener('click', function(e)
// {
// this.style.backgroundColor= randomColor(); 
// // // // // });  
// document.querySelector('.nav')
// .addEventListener('click', function(e)
// {
// this.style.backgroundColor= randomColor(); 
// });  

// });

// CREATE ELEMENT

// const message =document.querySelector('div');
// message.classList.add('cookie-message');

//🔴🔴🔴🔴🔴 smooth section transition

// document.querySelectorAll('.nav__link').forEach
// (function(el)
// {
// el.addEventListener('click',function(e)
// {
//   e.preventDefault();
//  const id = this.getAttribute('href');
//  document.querySelector(id).scrollIntoView({


// behavior:'smooth' 

 
//  });

/*OR THE BEST SOLUTION */


// document.querySelector('.nav__links').addEventListener(
//     'click',function()
//     {
//         if(e.target.classList.contains('nav__link'))
//         {

       
//       const id =this.getAttribute('href');
//       console.log(id);
//       document.querySelector(id).scrollIntoView({
//         behavior:'smooth'
//       });

//     }






//     }
// );




//🔴🔴🔴🔴🔴 GET into parent
//element and chose the child and more...


// console.log(h1.parentNode);
// console.log(h1.childNode);
// it give you all information about 
// parents and childs and how to get into them.

/*--------------------------------- */
// h1.queryselectorAll('.h2');
//you get into h1 and chose all h2 
// into it 

/*--------------------------------- */
// h1.firstElementChild.style.color = 'white'
// h1.lastElementChild.style.color = 'white'

//select the only first child of 
//an h1 parent element . or last child
// and change it,s color to white

/*--------------------------------- */

// h1.closest('.header').style.background = 'blue';

//it,s will select the nearest parent element
//that have child call h1.


/*--------------------------------- */



// console.log(h1.previousElementSibling);
// //// any previous element after h1 element in the 
// //same scope(parent) like h2 or div;
// console.log(h1.nextSibling);
// // any next txt  after h1 element in the 
// //same scope(parent);
// console.log(h1.previousSibling);
// // any previous txt or div after h1 element in the 
// //same scope(parent);
// console.log(h1.nextElementSibling);



/*--------------------------------- */









//🔴🔴🔴🔴🔴 
//🔴🔴🔴🔴🔴 
//🔴🔴🔴🔴🔴
// A great effect with js you will use very much

// nav.addeventlistener('mouseover',function(e){

// if(e.target.classList.contains('nav__link'))
// {
//     const clicked = e.target;
//     const siblings = link.closest('.nav').querySelectorAll
// ('.nav__link');
// const logo = link.closest('.nav').querySelector('img');
// siblings.forEach(el => {
//     if(el!==link)
//     {
//         el.style.opacity=0.5;
//     }
//     logo.style.opacity = 0.5;
// });
// }

// });



// });



// nav.addEventListener('mouseout',function(e)
// {
//     if(e.target.classList.contains('nav__link'))
//     {
//         const clicked = e.target;
//         const siblings = link.closest('.nav').querySelectorAll
//     ('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');
//     siblings.forEach(el => {
//         if(el!==link)
//         {
//             el.style.opacity=1;
//         }
//         logo.style.opacity = 1;
//     });
//     }
// });


//-----------------------------------
//🔴🔴🔴🔴🔴  THE OOP IN JS
//-----------------------------------

// 'use strict';


// const person = function(firstName , birthYear)
// {
//  //Instance properties
//  this.name = firstName;
//  this.born = birthYear;

//  //This is bad practice because of bad performance
//  //  this.calcAge = function ()
//  //  {
//  //     console.log(2023 - this.birthYear);
//  //  }

// };




//-------------------------------------
//1. New {} is created
//2. Function is called , this = {}
//3.{} Linked to prototype
//4. function automatically return {}
//-------------------------------------

// const girgis = new person('Girgis',2004);
// // console.log(girgis);
// // const ali = new person('Ali',2003);
// // console.log(ali);
// // console.log(girgis instanceof person);

// //-----------------------------------------

// console.log(person.prototype); //constructor

// person.prototype.calcAge= function()
// {
//     console.log(2023 - this.birthYear);
// };

// girgis.calcAge();

//---------------------------------------
// //Class expression
// const personCl =  class 
// {

// }
//---------------------------------------


//Class declaration

// class personCl 
// {

//  constructor(firstName,birthYear)
//  {
//    this.firstName = firstName;
//    this.birthYear = birthYear;
//  }
//   calcAge()
//   {
//     console.log(2023 - this.birthYear);
//   }

// }
// const jessica = new personCl('jessica',2001);

// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.__proto__ === personCl.prototype);

// personCl.prototype.greet = function()
// {

//  console.log(`Hey ! ${this.firstName}`);

// }


//  jessica.greet();

//--------------------------------------------

 // 1. Classes are not hoisted
 // hoisted mean we can use them before declare
 // them in our code.

 // 2. Class are first-class citizen 
 // we can pass them into function and call
 // back them from function 



 // 3. Class are executed in strict mode always.

//--------------------------------------------


// const account = {
//  owner : 'girgis',
//  movements : [200,530,120,300],

//  get latest()
//  {
//     return this.movements.slice(-1).pop();
//  },

//  set latest(mov)
//  {
//     this.movements.push(mov);
//  }



// }
// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);




//  class car { constructor(make,speed)
//  {

//   this.make=make;
//   this.speed = speed;
//  }
// accelerate()
// {
//  this.speed +=10;
//  console.log(`${this.make} is going at ${this.speed} km/h`);
// }
// brake()
// {
//     this.speed -=5;
//     console.log(`${this.make} is going at ${this.speed}km/h`);
// }
// get speedus()
// {
//     return this.speed/1.6;
// }
// set speedus(speed)
// {
//     this.speed = speed*1.6;
// }
// }
// const ford= new car('ford',120);
// console.log(ford.speedus);
// ford.accelerate();
// ford.accelerate();
// ford.brake();

// ford.speedus = 50;
// console.log(ford);

//-----------------------------------
//🔴🔴🔴🔴🔴  advancedDom 
//-----------------------------------

// if you want to add style to all css page 
// you will need to select document.docimentElement


// add element at first child of header(prepend) or at last element(apend)
//header.prepend(string)
//header.apend(string)

//but you can add only once if you want to add it multiple times 
// will need to clone node first .colneNode(string)

//header.after(string) add before header
//header.before(String) add after header



//getComputedStyle() is what in the css sheet and you can not get 
// the style from the normal style.color for example


// data is a special attribute come with class and it 
// set like that (data-lablablaaa  = value) to set it 



// e.target() the item that event happen on it (realy the element)
// e.currentTarget() the element where the event is atatch to 
// not always be the realy element clicked may be the parent 
// or what ever the event atatch to and is === this key word

// stop event propagation mean that stop when i clicked the child
// element the parent element effect  USE
// e.stopPropagation();

// if tou have event on child and parent and click on child 
// the parent also will active the event on it 



//-----------------------------------
//🔴🔴🔴🔴🔴  eventDelegation
//-----------------------------------


/*   🔴  addEventListener (True)(false)🔴  ThirdParameter

if you set the third parameter on add event listener to 
true (capturing phase) will start from the DOM->child element
the event will happen on the parent first then the child
if you set to false(defult) (bubbling phase) the event 
will start listen from child->DOM mean that the event will
happen on the child first then the parent 
*/


// 🔴🔴very very important domTraversing 🔴🔴

/* 
 ////🔴 select children🔴 ////
  h1.children;👇
  return only child tags inside the parent h1 in array
  h1.firstElementChild;
  h1.lastElementChild;

  ////🔴 select parents🔴 ////

  h1.parentElement
  the direct parent element tag!!

  h1.closest(className);👇🔥
  will search for the closest parent element that have 
  this className and select it  the (reverse of queryselector)

 ////🔴 select sibling🔴 //// 
 h1.previousElementSibling 
 h1.nextElementSibling 


*/



 ////🔴🔴 localStorage🔴🔴 ////

/*
  🔴 Set Item🔴
localStorage.setItem('key', string);👇🔥
this will store string in the url so if you get out the page
and return the data will still there
----------------------------------🔥
if you have object the localStorage only take string
so you need to convert obj->str by using
JSON.stringify(the obj);
----------------------------------🔥
if you set localStorage multiple times to the same key
it will make array of strings(objects) by the order
you enter them

🔴Get Item🔴

localStorage.getItem('key');👇🔥
will return the string you stored on it but if you stored
obj and want to return the obj  str->obj
use JSON.parse(the string)
----------------------------------🔥
Dont use for big data because its blocking API slow down
your application
----------------------------------🔥
🔴remove Item🔴

localStorage.removeItem('key');
remove the item from the local storage if you dont
want to remove but set it to empty you can use
lacalStorage.setItem('the same key' , "");
will not delete it but make it empty
*/

////🔴🔴 AsyncJs🔴🔴 ////

/*
🔴call Api data by name 🔴
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/egypt');
request.send();
request.addEventListener('load', ()=> console.log(this.responseText););


🔴 Promise 🔴

fetch build a promise for us but what is promise

a promise is a container for data that will be send
in the future like respond will come from APi
we do not need to use events to handle asynchronous
function

there is two steps during make  promises
pending and settled
pending mean it wait for be use or to recive data
settled is after promise been used will return two
state fulfilled mean that succefully get the data
rejected mean that there is error happen when promis
try to get the data


fetch('API endpoint link').then(function(response))
(.then) is  a function that get function
the function that then get can recive the data that
the api send to us we always call it the respond
from the api and with this data we can do any thing
so the respond itself is obj have the data but you
need to convert it to json like that response.json()
and return it to be another promise to handele by
then and use the data

dont ask me why we create two promises that the way
javascript creator do it 🤷

fetch(Api).then(function(reponse){return respnse.json()})
.then(function(data){console.log(data)});

 note that .then take another function to catch the errors
 fetch((respond)=> respond ).then(()=> , (erorr)=>return erorr);
  but there is a beter way to do that by
  use catch method on the end of all then program




  🔴 async key word 🔴
async you can but it before the function and it will
convert the function to async function and will return
promise after this function end
inside async function we can have one or more
await   and what await do is basicaly wait for
the fetch or any thing to finsh before send the
promise back


await Promise.all([promise , promise , promise])
can take multiple promises and store it in array
of obj

you have await Promise.race([Api url or promise , promise , promise ])
that will return one promise the fastest one respond

Promise.allSettled([p , p , p ])
will return all the promise the only change between
the all and allSettled if any promise in the all
reject it will not return it but in allSttled will
return the rejected promises

 🔴 use async await instead of fetch().then() 🔴
 ------------------------------------------------
     const getAdvice = async function () {
       const res = await fetch("API");
       const data = await res.json();
     };
 -------------------------------------------------
     fetch(Api).then(function(reponse){return respnse.json()})
.then(function(data){console.log(data)});
 -------------------------------------------------

*/
/*
🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
👇👇😄REACT😄👇👇
*/
// npx create-react-app@5 projectName
// @5 mean version five and that not nesseary

/* 

 the is components and props in react
  components like this 👇
 function Pizza(props)
{
       return (<>
              
              <img src={props.src}></img>
              <h1>{props.name}</h1>
       
       </>)
}
  every thing in react is component actualy
  now you can pass (props) like that or like that 👇
 function Pizza({name1 , name2 , ...etc})
 and use these names instead of props.theName


 🔥props are just an object 🔥
  has string or any thing 
  const obj = { value:'welcome'}; like this

  🔴controll eleement be like that 🔴
  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>

🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
🔴select one item when reander list to useState on it 🔴

 pass the key on the elements list to the handleFunction
 that is setThe state and set actualy the state to 
 equal that unique key now  go to the list and change the
 content in the component based on the value of 
 that state that have an id ;

  🔥Example of display content 🔥

  const [selectedId , setSelectedId] = useState(0);

  return<>
  {list.map((item)=> 
  <div key={item.id}>
  {selectedId===item.id &&<p>content</p>}
  </div> )}
  </>
  so here i show the content only if the id was selected 
  and you can setselectedId with handle function
  you can do actualy any thing when the selected
  id === item.id this part after that  is your selected
  element of the hole list now 😉



🔥Example of select element without the key  🔥


now this aprouch is done by make two components 
so that the parent component render big list of
other component (child one) and you want just to 
do something with one child 
Note that faqs is array of objects;

export default function App()
{
  return (
   <Accordion/>
  );
}


function Accordion()
{
  return (
    
    <div className="accordion">
     
      {faqs.map((item,i) =>
      {
        return <Item title={item.title} text={item.text} index={i}   />

      })};
        

  </div>)

}

function Item({ title , text , index  })
{
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(() => !isActive);
  }
  console.log(title);
  return (
    <div className={isActive?"item open":"item"} onClick={()=>handleClick()}>
      <p className="number">{index<9?`0${index+1}`:index+1 }</p>
      <p className="text">{title}</p>
      <p className="icon">{ isActive?'-':'+'}</p>
      {isActive &&<div className="content-box">{text}</div>}

    </div>
  );
}

the main idea behind this Technique is the fact 
that each child(Item) component in the parent(Accordion)
component is render in separated way so that if you do 
change with useState on one child the rest not efected at all
and when you click it or hover it the only useState
that will be active is the useState of this child
component only
🔴🔴🔴🔴
i will show the beter verson now passing state up down
and play with it now 😇




function Accordion()
{

   const [curOpen, setCurOpen] = useState(null);
  return (
    
    <div className="accordion">
     
      {faqs.map((item,i) =>
      {
        return <Item title={item.title} text={item.text} index={i} key={i}  curOpen={curOpen} setCurOpen={setCurOpen}  />

      })};
        

  </div>)

}

function Item({ title , text , index  , curOpen , setCurOpen})
{
  const isActive = curOpen === index;
  function handleActive()
  {
    setCurOpen(isActive?null:index);
  }
  return (
    <div className={isActive?"item open":"item"} onClick={handleActive}>
      <p className="number">{index<9?`0${index+1}`:index+1 }</p>
      <p className="text">{title}</p>
      <p className="icon">{ isActive?'-':'+'}</p>
      {isActive &&<div className="content-box">{text}</div>}

    </div>
  );
}




🔴🔴🔴🔴useEfect firstTime

  useEffect(function(){
    
    async function fetchMovies() {
        try {
        setIsLoading(true);
        const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);
        if (!res.ok) throw new Error("🔴Somthing went wrong🔴");
        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie Not Found");
          
          setMovies(data?.Search);
          
        } catch (err) {
          setError(err.message);
      }finally
      {
           setIsLoading(false);
      }
     
    }
    fetchMovies();
  }, []);


  🔴🔴🔴🔴get state out of the component  🔴🔴🔴🔴

   you can make prop called onRating and when ever you set 
   the rating enternal the compnent also 
   make onRating(EnternalComponenetCurrentRatingValue)
   with taht way when ever the rating change the prop 
   onRating will take the new Value now
   you can use that EnternalComponent and make your state out that component and 
   call onRating in the EnternalComponent and pass the value 
   like that 
   
   const [myExternalRating , setMyExternalRating] = useState(0);

   <InternalComponent  onRating={(InternalCurrentRating)=>setMyExternalRating(InternalCurrentRating)}/>


   inside the enternal component will be like that

   function InternalComponent({onRating})
   {
      const [enternalComponentRating , setEnternalComponentRating] = useState(0);

      function handleRating(InternalCurrentRating)
      {
          setCompEnternalRating(InternalCurrentRating);
          onRating(InternalCurrentRating);
      }
   }
   
   with that you can take the state value out of the component 
   when ever change 
  🔴🔴🔴🔴  🔴🔴🔴🔴  🔴🔴🔴🔴  🔴🔴🔴🔴
    🔴🔴🔴🔴  🔴🔴🔴🔴  🔴🔴🔴🔴  🔴🔴🔴🔴
  🔴🔴🔴🔴  🔴🔴🔴🔴  🔴🔴🔴🔴  🔴🔴🔴🔴  
   if you dont underStand so you can watch again the 
   jonas react course in the G drive part10 video num 15 
   and the usage of it  part12 video num 13 
   9:30 in the vedio


   clean up function 
   a clean up function on useEffect hook is run before the 
   (main function Effect)  and the purpose of it to clean the 
   previous function  SideEffect of Effects now you must know that 
   it is run in jast two cases first case is : the component disappear from the current ui
   second case : the rerender to the useEffect happen 
   
   const KEY = '439136c4';
🔴🔴🔴🔴  🔴🔴🔴🔴stopRequest 🔴🔴🔴🔴  🔴🔴🔴🔴  

when you use effect and want to stop the request 
when ever other request run before the past request
complete to not cause the race condition 
use that 
 🔴🔴🔴🔴 
const controller = new AbortController();
const res = await fetch   // fetch take two paraneters Api & Abort Controller
(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
,{signal:controller.signal});
return ()=> controller.abort(); // cleanUp function
 🔴🔴🔴🔴 
we know that the clean up function run before the 
new fetch happen and after the ui is paint to screen
now when we use controller.abort() we cancle the request
and when we use cleanUp function on it it will cancel
the request when ever another one(another Effect run) before
the first one has complete 
and that is very important so it don't take so many
unusefull request and slowing your app and take so much
memoy and cause race condition will cause lag in your app
all that cancel now 





🔴🔴🔴🔴 useReducer
 read this implementation when ever you forget how 
  useReducer work and if not remember
  so you can watch part 16 of react course

 const [{ status,index, answer , points,highScore , seconds}, dispatch] =
  useReducer(reducer,
    {
      questions: hardCodedQuestions,
      status: 'ready', index: 0, answer: null
      ,points:0 ,highScore:0,seconds:180
    });




    function reducer ( state , action)
{
  switch (action.type)
  {
    case "restart":
    return {...state , status:"ready" , index:0,answer:null ,points:0}
    case 'start':
    return { ...state, status: "active" };
    case 'newAnswer':
    const curQuestion = state.questions.at(state.index);
    return {
    ...state, answer: action.payload,
    points: action.payload ===
    curQuestion.correctOption ?
    state.points + curQuestion.points : state.points
    };
    case "goToNextQuestion":
    return { ...state, index: state.index + 1 , answer:null}
    case "finish":
      return { ...state, index: 0, status: "finish" ,seconds:300 }
    case 'newRecord':
      return { ...state, highScore: state.points > state.highScore ? state.points : state.highScore }
    case 'decreaseSeconds':
    return{...state,seconds:state.seconds - 1}
    
    default: throw new  Error("unknown Action");
  }
🔴🔴🔴🔴 install eslint vite app

npm crate vite@latest or @4

npm install 
eslint
vite-plugin-eslint 
eslint-config-react-app --save-dev
new file named (.eslintrc.json) and put on it {"extends":"react-app"}
go to vite.config.js file and put 
import eslint from "vite-plugin-eslint"
put in the plugin => eslint()

npm run dev for run the server and open the website 


 
🔴🔴🔴🔴 reactRouter Api
npm i react-router-dom  =>latest version
npm i react-router-dom@6 =>  version 6

import { BrowserRouter, Routes,Route } from "react-router-dom";
 <BrowserRouter> <Routes>
      <Route path="product" element= {<Product/>}/>
      <Route path="Main" element={<Main/>}/>
      <Route path="*" element={<PageNotfound/>}/>
    </Routes> </BrowserRouter>

    and you will navigate between them by

import { Link } from "react-router-dom";
export default function HomePage()
{
       return (<>
              <h1>Home Page</h1>
              <Link to={"/product"}>product</Link>    
       </>);

}

:global(.makeThisGlobalCalss)
{
       
}


you can use nested routes 

<Route path="/app" element={<component/>}>

<Route path="cities"  element={<cities/>}/>

</Route>

now here we have a special component provided
by react router called <Outlet/>
and this component you place it in the page 
that have nested routes in side it and you 
use navigation bar for this specific page 
and but <Link to="cities"/> now when ever 
you click on cities link react router 
will look for this path inside the parent
component and if he find it will display 



now how to pass data between pages 
 <Route path='cityItem/:id' >
 and you can use <Link to=`${id}?lan=${lan}&lat=${lat}`>
  and useParams() will store that id  and lan and lat 

🔴🔴🔴🔴useContext

use context is a spicial hook that is make 
a component you can name it and have unique property
called provider that is will provide all the objs that
have in value prop to his children to use it 

code example 

const PostContextComponnent = createContext();
🔴create out side the App component ar or any
🔴componrnt (global)


return (
<PostContextComponnent.provider  value={
{NameOfstate1: value, // like the props excatlly
 OnsetResults : setResults,
 onAddPost : handleAddPost,

} 
}

<Main>
<Header/>
<Result/>
<Footer/>
<Main/>
</PostContextComponnent.provider>
);

now in side the Main or Header or any children component
of the Context component you can useContext();

the use use Context will return the value of the 
value={} prop that you pass it to the 
<PostContextComponnent.provider>

and from here you can instead of prop Drilling 
to just useContext() on each children like that


function Header()
{
 const {onAddPost} = useContext(PostContextComponnent);

  return (
  
   <button onClick={()=>onAddPost()} > click me </button>
  
  );
}



*/
