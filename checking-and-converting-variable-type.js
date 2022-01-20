//checking
//typeof()

let salary = 111
let stringPrice = "111"
let hasPassword = true

console.log(
    "salary: ",
    typeof (salary)      //number
)

console.log(
    "stringPrice: ",
    typeof (stringPrice)  //string
)

console.log(
    "hasPassword: ",
    typeof (hasPassword)  //boolean
)

//Examples

console.log(typeof ("11"))             //string
console.log(typeof ("11") === "string") //true

//--------converting string(textual) information to int and float--------

//1) parseInt()


//parseInt(11)
let number1 = "11"
number1 = parseInt(number1)
console.log("number1: ", number1, "type: ", typeof (number1)) //number1:  11 type:  number
//console.log("number1: ", parseInt(number1), "type: ", typeof(number1) )

//parseInt(11px)
let number2 = "11px"
number2 = parseInt(number2)
console.log("number2: ", number2, "type: ", typeof (number2)) //number2:  11 type:  number //!!!

//If we write "px" in the header--NaN--could not fully convert inside
let number3 = "px11px"
number3 = parseInt(number3)
console.log("number3: ", number3, "type: ", typeof (number3)) //number3:  NaN type:  number

//2) Number() usage


//Number(11px)
let number4 = "11px"
number4 = Number(number4)
console.log("number4: ", number4, "type: ", typeof (number4)) //number4:  NaN type:  number //cannot be number

//without "px"-- Number(int)
let number5 = "11"
number5 = Number(number5)
console.log("number5: ", number5, "type: ", typeof (number5)) //number5:  11 type:  number

/*
*Summary : parseInt vs. Number : If parseInt starts with a numeric value, it takes the numeric values in it.
*Number must really be a number and not contain any other characters.
*/

//Number(float)
let number6 = "11.1"
number6 = Number(number6)
console.log("number6: ", number6, "type: ", typeof (number6)) //number6:  11.1 type:  number

//3) parseFloat()


//parseFloat(11.4px)
let number7 = "11.4px"
number7 = parseFloat(number7)
console.log("number7: ", number7, "type: ", typeof (number7)) //number7:  11.4 type:  number

//Number(11.4px)
let number8 = "11.4px"
number8 = Number(number8)
console.log("number8: ", number8, "type: ", typeof (number8)) //number8:  NaN type:  number

//--------converting from number data type to string--------

//watch out for the error
let number9 = 55
number9.toString()
console.log(number9, typeof (number9)) //55 number

//required assignment
let number10 = 55
number10 = number10.toString()
console.log(number10, typeof (number10)) //55 string

//--------Other Possibilities--------
//checking
//syntax
console.log(typeof 42);           //number
console.log(typeof 'kodluyoruz'); //string
console.log(typeof true);         //boolean
console.log(typeof Variable);     //undefined

//isInteger(), isFinite(), isNaN(); true ya da false dönerler.

//isInteger() yöntemi, sayıların TAM SAYI olup olmadığını belirler.
Number.isInteger(123) //true
Number.isInteger(-123) //true
Number.isInteger(0.5) //false

//isFinite () yöntemi, bir değerin SONLU bir sayı olup olmadığını belirler.
Number.isFinite(0) //true
Number.isFinite('123') //false
Number.isFinite('Hello') //false
Number.isFinite(-Infinity) //false
Number.isFinite(0 / 0) //false

// Number.isNaN () yöntemi, bir değerin NaN (Not-A-Number) olup olmadığını belirler.
Number.isNaN(123) //false
Number.isNaN(0) //false
console.log(Number.isNaN('123')) //false
Number.isNaN('Hello') //false
Number.isNaN('') //false
Number.isNaN(true) //false
Number.isNaN(undefined) //false
Number.isNaN('NaN') //false
Number.isNaN(NaN) //true


//converting
//Type Coercion : explicit and implicit
//Explicit için metotlarla yapılan dönüşüm denilebilir. 
//Implicit için ise operatörlerle veya JavaScriptin kendi yaptığı dönüşümler diyebiliriz

//Explicit
String(123) // “123”
parseInt("123") //123

//Implicit
if (3 < 5) // true
    console.log(' ' + 123)// " 123" --type: string
console.log(12 / "6") // 2

//Converting to String
//Eğer bir değeri açık bir şekilde String’e dönüştürmek istiyorsak String(), fonksiyonunu kullanırız. Binary (ikili) + operatörü bir string ifadeye uygulandığında implicit coercion tetiklenir.
String(123) // “123” explicit
123 + '' // “123”    implicit

//her primitif değer stringe dönüştürülebilir.
String(123) // “123”
String(-12.3) // “-12.3”
String(null) // “null”
String(undefined) // “undefined”
String(true) // “true”
String(false) // “false”

//Symbol’de durum biraz farklıdır, çünkü dönüşüm sadece explicit bir şekilde yapılabilir, implicit bir şekilde yapılamaz.
String(Symbol('my symbol')) // 'Symbol(my symbol)'
//'' + Symbol('my symbol') // TypeError is thrown


//Converting to Boolean
/**
 * Eğer bir değeri açık bir şekilde (explicit) boolean'a dönüştürmek istiyorsak Boolean() fonksiyonu kullanılır. 
 * Implicit coercion ise mantıksal operatörlerinin kullanıldığı, mantıksal işlemlerin yapıldığı alanlarda tetiklenir. (|| && !)
 */
console.log(Boolean(2)) //true // explicit
var a = !!2 //explicit
console.log(a) //true
//if (2) { ... } // implicit due to logical context
!!2 // implicit due to logical operator
2 || 'hello' // implicit due to logical operator


/*
*Boolean tiplerle uğraşırken truthy, falsy değerler işin içine girerler. 
*Kısaca açıklayacak olursak javascriptin kendi doğası gereği true veya false dönen değerler mevcuttur. 
*/
Boolean('') // false
Boolean(0) // false 
Boolean(-0) // false
Boolean(NaN) // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(false) // false

/**
 * Yukarıdaki listede olmayan herhangi bir değer, true'ya dönüştürülür. 
 * Fonksiyon, Dizi (Array),Tarih (Date), kullanıcı tanımlı tip (user-defined-type) vb Symboller gerçek değerlidir (truthy value). 
 * Hatta boş nesneler (objectler) ve diziler (arrayler) gerçek değerlidir (truthy value).
 */
Boolean({}) // true
Boolean([]) // true
Boolean(Symbol()) // true
!!Symbol() // true
Boolean(function () { }) // true


/**
 * Mantıksal operatörlerden || ve &&, dönüşüm işlemini internally (dahili olarak) yapar. 
 * Ama gerçekte ifadenin operand değerini döndürür, değer boolean tipinde olmasa bile.
 */
// veya “||” operatörü ilk bulduğu true değeri döner
var a = 2 || s || 4 || 5; // 2
// eğer true dönecek değer bulamazsa en son buluğu false değeri döndürür
var b = 0 || "" || false || -0 || 0 // 0
var c = 0 || "" || " 123 " || 4; // ”123” dolu string true dönecektir
// ve ”&&” operatörü ilk bulduğu false değeri döner.
var d = 2 && 3 && 0 && 5 && 7; // 0
// eğer false dönecek değer bulamazsa en son buluğu true değeri döndürür
var e = 2 && 3 && 5 && 7 // 7


//Nesneler (Objects) için Type Coercion (Tip Zorlama)
/**
 * JavaScript'te nesneler referans tipler olduğundan üzerinde işlem yapabilmek zordur. 
 * İşlem yapabilmek için elimizde primitif değerler olması gerekir. Bu durumda referans tipler primitif tiplere zorlanır. Nesneler için en kolay tip dönüşümü boolean'dır. 
 * Primitif olmayan herhangi bir değer örneğin içi dolu veya boş bir nesne (object), dizi (array) fark etmez her zaman true olarak zorlanır. (coerced)
 */
console.log(Boolean({})) // true
console.log(Boolean([])) // true
console.log(Boolean([1, 2, 3])) // true
console.log(Boolean({ 13: 234 })) //true

/**
 * Nesnelerde de matematiksel veya mantıksal işlemler yapmak mümkündür. 
 * Bu işlemi ancak primitif bir değere dönüştürerek yapabiliriz. 
 * Bu dönüşüm için, giriş nesnesinin (input object) valueOf ve toString metotlarından faydalanılır.
 * Bu iki metot Object.prototype da tanımlanmıştır. Bu sayede türetilmiş tüm tiplerde kullanılır.
 * Örneğin Tarih (Date), Dizi (Array) gibi. İlk olarak nesneler toString() e girer ve çıkan değer primitifse o değeri döner. 
 * Primitif değilse valueOf() içine girer. valueOf()'tan çıkan sonuç primitifse o değeri döner değilse error fırlatır.
 */

//console.log([1] + [1, 2, 3])

//İşlem yapabilmek için [ 1 ] ve [ 1,2,3 ] öncelikli olarak primitif türe zorlanır
var a = [1].toString(); // sonuç "1" verir
console.log(a)
var b = [1, 2, 3].toString() // sonuç "1,2,3" verir. Bu durumda iki string ifadenin toplanmasından çıkan sonuç "1" + "1,2,3" --> "11,2,3" olacaktır.
console.log(a + b)

/**
 * NOTES
 * Genel olarak algoritma aşağıdaki gibidir:

Primitif tipler için:

Eğer değer(input) primitif ise herhangi bir işlem yapma, dön.
input.toString() metodunu çağır(Call). Eğer sonuç primitif ise dön.
input.valueOf() metodunu çağır(Call). Eğer sonuç primitif ise dön.
Ne input.toString() ne de input.valueOf() primitif sonuç vermiyorsa; TypeError fırlat.
Referans tipler için:

input.toString() metodunu çağır(Call). Eğer sonuç primitif ise dön.
input.valueOf()metodunu çağır(Call). Eğer sonuç primitif ise dön.
Ne input.toString() ne deinput.valueOf() primitif sonuç vermiyorsa; TypeError fırlat.
 */

/**
 * EXAMPLES
 * 
 * console.log(true+false)
 * 
"+" operatörü numeric işlem yapar bu durumlardan boolean ifadeler numaric coercion'a uğrar.
Number(true) + Number(false) dönüşen ifade
1+ 0 şeklini alır Sonuç = 1
*
*console.log(12 / "6")
*
"/" operatörü numeric işlem yapacağından
Başlangıçta number olduğu için "6" ifadesi
numaric coercion'a uğrar Number("6") ve 6 değerini döner
12 / 6 bu şekli alır Sonuç= 2
*
*console.log([1,2,3]>null)
*
">" karşılaştırma operatörü olduğundan numaric coercion yapacaktır.
[1,2,3] bir array olup refarans tip tutuğundan primitif değere dönüştürülerek işleme alınır
[1,2,3].toString() kullanıldığında içeri ”1,2,3” değerini döndürür
”1,2,3”> null şeklini alır
">" karşılaştırma ifadesi olduğundan tekrar numaric coercion tetiklenir
String ifade numbera zorlanır Number(“1,2,3”)
Number("1,2,3") ifadesinin sonucu NaN olacağından
NaN>null şeklini alır
ve NaN kendine dahil hiç kimseye eşit olmadığından!! Sonuç= false
*
*console.log("number" + 15 + 3) 
*
örneğimizin başında string bir ifade bulunduğundan diğer ögeler için de string coercion tetiklenir
"number+ "15" + "3" şeklini alır Sonuç= "number153"
*
*console.log(['x','y'] == 'x,y')
*
== operatörü array için numeric coercion yapacaktır
['x','y'] dizisinin numeric coercion yapabilmesi için primitif tipe dönüştürmek gerekir.
['x','y'].toString() metoduyla "x,y" döner
Son eşitlik "x,y"=="x,y" halini alır
Sonuç= true
 */

//PRACTİCES
//1
console.log("foo" + +"bar")//fooNaN
// +"bar" => Number("bar") => NaN //"foo"+NaN //"foo" +"NaN" //Sonuç= "fooNaN"
//2
console.log('true' == true)//false
//Number('true')=>NaN //NaN == true //NaN == 1 //Sonuç= false
//3
console.log(null == "")//false
// null sadece kendine ve undefined'a eşit olduğundan //Sonuç= false
//4
console.log(0 || " 0" && {})//{}
//(0 || "0") %% {} //(false || true) && {} => dolu string true döndüğünden //(true) && {} => || operatörü ilk bulduğu true değeri, && operatörü ilk bulduğu false değeri döner

//true && {} => && operatörü false değer bulamazsa son bulduğu değeri döndürür. //Sonuç={}
//5
console.log(["a"] > null) //false
//"a" > null => array toStirng metodunun içine girer //NaN > null => Numeric dönüştürmeye girer //NaN > 0 //Sonuç= false