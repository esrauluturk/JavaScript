let isActive = false //0
isActive = true      //1
console.log(isActive)//true

let userName;
let hasUserName = Boolean(userName)
console.log(hasUserName) //false
userName = "user"
console.log("User Name: ", Boolean(userName)) //true

//İçinde değer barındıran tüm ifadeler true'dur.

const b1 = Boolean(100);
const b2 = Boolean(3.14);
const b3 = Boolean(-15);
const b4 = Boolean("Hello");
const b5 = Boolean('false');
const b6 = Boolean(1 + 7 + 3.14);

//Browser

Boolean("11")   //true
Boolean(-0.1)   //true
Boolean(0 === 0)//true


//İçinde değer barındırmayan tüm ifadeler false 'dur.

const c1 = Boolean(undefined);
const c2 = Boolean(null);
const c3 = Boolean("");
const c4 = Boolean(false);
const c5 = Boolean(NaN);
const c6 = Boolean(0);
const c6 = Boolean(-0);

//true dönen örnekler

console.log(Boolean(1n));
console.log(Boolean(-1n));
console.log(Boolean(Infinity));
console.log(Boolean({}));
console.log(Boolean(Symbol()));

//Karar yapılarına ithafen

Boolean(userName.length > 0)//true  ||  if(userName.length >0)
Boolean(10 > 9); //true

//Üç örnek arasındaki fark

var y = 0;
console.log(Boolean(y)); //false
var z = "0";
console.log(Boolean(z)); //true
console.log(Boolean(0 === 0));//true

//Genel Örnekler

var x = 10 / 'a'; console.log(Boolean(x))                 //false
var y = "" || -2 || 'Javascript'; console.log(Boolean(y)) //true
var z = { 2: 'js' }; console.log(Boolean(z))              //true
var t = "" && -2 && 'JavaScript'; console.log(Boolean(t));//false
var w = false || 0; console.log(Boolean(w))               //false
var a = true; console.log(Boolean(a));                    //true
