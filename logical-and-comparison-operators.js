//*** Karşılaştırma ve Mantıksal Operatörler ***

let price = "100";
let user = "guest";

//*** Comparison Operators ***

// == Eşitse

console.log(price == 1) //false
console.log("== :", price == 100) //true !!!!!!

// === Hem değeri hemde türü eşitse

console.log(price === 1) //false
console.log("=== :", price === 100) //false

// != Eşit değilse

console.log(price != 100) //false
console.log(price !== 100) //true
console.log(price != 1) //true
console.log(user != "guest") //false

// < Küçükse

console.log("price < 100 : ", price < 100) //false

// <= Küçük veya eşitse

console.log("price <= 100 : ", price <= 100)//true

// > Büyükse

console.log("price > 200 : ", price > 200)//false

// >= Büyük veya eşitse

console.log("price >= 100 : ", price >= 100)//true

//*** Logical Operators ***

// && ve

console.log(price && user != "anyone") //true
price = 0;
console.log(price && user != "anyone") //0
console.log(price > 0 && user != "anyone") //false

// || veya

console.log(price > 0 || user != "anyone") //true

// ! degil (tersi)

console.log(!user) //false
console.log(price > 0 && !user == "anyone") //false
console.log(price > 0 || !user == "anyone") //false
console.log(!user == "anyone") //false
console.log(!user == "guest") //false

user = "anyone"
price = 1
console.log(price > 0 && !user == "anyone") // false
console.log(price > 0 && user == "anyone") //true
console.log(price < 0 || !user == "anyone")//false || !(true) = false || false = false
console.log(!(price > 0 && user == "anyone"))//false

console.log(!!2) //true