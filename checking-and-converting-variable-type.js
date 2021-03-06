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

//isInteger(), isFinite(), isNaN(); true ya da false d??nerler.

//isInteger() y??ntemi, say??lar??n TAM SAYI olup olmad??????n?? belirler.
Number.isInteger(123) //true
Number.isInteger(-123) //true
Number.isInteger(0.5) //false

//isFinite () y??ntemi, bir de??erin SONLU bir say?? olup olmad??????n?? belirler.
Number.isFinite(0) //true
Number.isFinite('123') //false
Number.isFinite('Hello') //false
Number.isFinite(-Infinity) //false
Number.isFinite(0 / 0) //false

// Number.isNaN () y??ntemi, bir de??erin NaN (Not-A-Number) olup olmad??????n?? belirler.
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
//Explicit i??in metotlarla yap??lan d??n??????m denilebilir. 
//Implicit i??in ise operat??rlerle veya JavaScriptin kendi yapt?????? d??n??????mler diyebiliriz

//Explicit
String(123) // ???123???
parseInt("123") //123

//Implicit
if (3 < 5) // true
    console.log(' ' + 123)// " 123" --type: string
console.log(12 / "6") // 2

//Converting to String
//E??er bir de??eri a????k bir ??ekilde String???e d??n????t??rmek istiyorsak String(), fonksiyonunu kullan??r??z. Binary (ikili) + operat??r?? bir string ifadeye uyguland??????nda implicit coercion tetiklenir.
String(123) // ???123??? explicit
123 + '' // ???123???    implicit

//her primitif de??er stringe d??n????t??r??lebilir.
String(123) // ???123???
String(-12.3) // ???-12.3???
String(null) // ???null???
String(undefined) // ???undefined???
String(true) // ???true???
String(false) // ???false???

//Symbol???de durum biraz farkl??d??r, ????nk?? d??n??????m sadece explicit bir ??ekilde yap??labilir, implicit bir ??ekilde yap??lamaz.
String(Symbol('my symbol')) // 'Symbol(my symbol)'
//'' + Symbol('my symbol') // TypeError is thrown


//Converting to Boolean
/**
 * E??er bir de??eri a????k bir ??ekilde (explicit) boolean'a d??n????t??rmek istiyorsak Boolean() fonksiyonu kullan??l??r. 
 * Implicit coercion ise mant??ksal operat??rlerinin kullan??ld??????, mant??ksal i??lemlerin yap??ld?????? alanlarda tetiklenir. (|| && !)
 */
console.log(Boolean(2)) //true // explicit
var a = !!2 //explicit
console.log(a) //true
//if (2) { ... } // implicit due to logical context
!!2 // implicit due to logical operator
2 || 'hello' // implicit due to logical operator


/*
*Boolean tiplerle u??ra????rken truthy, falsy de??erler i??in i??ine girerler. 
*K??saca a????klayacak olursak javascriptin kendi do??as?? gere??i true veya false d??nen de??erler mevcuttur. 
*/
Boolean('') // false
Boolean(0) // false 
Boolean(-0) // false
Boolean(NaN) // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(false) // false

/**
 * Yukar??daki listede olmayan herhangi bir de??er, true'ya d??n????t??r??l??r. 
 * Fonksiyon, Dizi (Array),Tarih (Date), kullan??c?? tan??ml?? tip (user-defined-type) vb Symboller ger??ek de??erlidir (truthy value). 
 * Hatta bo?? nesneler (objectler) ve diziler (arrayler) ger??ek de??erlidir (truthy value).
 */
Boolean({}) // true
Boolean([]) // true
Boolean(Symbol()) // true
!!Symbol() // true
Boolean(function () { }) // true


/**
 * Mant??ksal operat??rlerden || ve &&, d??n??????m i??lemini internally (dahili olarak) yapar. 
 * Ama ger??ekte ifadenin operand de??erini d??nd??r??r, de??er boolean tipinde olmasa bile.
 */
// veya ???||??? operat??r?? ilk buldu??u true de??eri d??ner
var a = 2 || s || 4 || 5; // 2
// e??er true d??necek de??er bulamazsa en son bulu??u false de??eri d??nd??r??r
var b = 0 || "" || false || -0 || 0 // 0
var c = 0 || "" || " 123 " || 4; // ???123??? dolu string true d??necektir
// ve ???&&??? operat??r?? ilk buldu??u false de??eri d??ner.
var d = 2 && 3 && 0 && 5 && 7; // 0
// e??er false d??necek de??er bulamazsa en son bulu??u true de??eri d??nd??r??r
var e = 2 && 3 && 5 && 7 // 7


//Nesneler (Objects) i??in Type Coercion (Tip Zorlama)
/**
 * JavaScript'te nesneler referans tipler oldu??undan ??zerinde i??lem yapabilmek zordur. 
 * ????lem yapabilmek i??in elimizde primitif de??erler olmas?? gerekir. Bu durumda referans tipler primitif tiplere zorlan??r. Nesneler i??in en kolay tip d??n??????m?? boolean'd??r. 
 * Primitif olmayan herhangi bir de??er ??rne??in i??i dolu veya bo?? bir nesne (object), dizi (array) fark etmez her zaman true olarak zorlan??r. (coerced)
 */
console.log(Boolean({})) // true
console.log(Boolean([])) // true
console.log(Boolean([1, 2, 3])) // true
console.log(Boolean({ 13: 234 })) //true

/**
 * Nesnelerde de matematiksel veya mant??ksal i??lemler yapmak m??mk??nd??r. 
 * Bu i??lemi ancak primitif bir de??ere d??n????t??rerek yapabiliriz. 
 * Bu d??n??????m i??in, giri?? nesnesinin (input object) valueOf ve toString metotlar??ndan faydalan??l??r.
 * Bu iki metot Object.prototype da tan??mlanm????t??r. Bu sayede t??retilmi?? t??m tiplerde kullan??l??r.
 * ??rne??in Tarih (Date), Dizi (Array) gibi. ??lk olarak nesneler toString() e girer ve ????kan de??er primitifse o de??eri d??ner. 
 * Primitif de??ilse valueOf() i??ine girer. valueOf()'tan ????kan sonu?? primitifse o de??eri d??ner de??ilse error f??rlat??r.
 */

//console.log([1] + [1, 2, 3])

//????lem yapabilmek i??in [ 1 ] ve [ 1,2,3 ] ??ncelikli olarak primitif t??re zorlan??r
var a = [1].toString(); // sonu?? "1" verir
console.log(a)
var b = [1, 2, 3].toString() // sonu?? "1,2,3" verir. Bu durumda iki string ifadenin toplanmas??ndan ????kan sonu?? "1" + "1,2,3" --> "11,2,3" olacakt??r.
console.log(a + b)

/**
 * NOTES
 * Genel olarak algoritma a??a????daki gibidir:

Primitif tipler i??in:

E??er de??er(input) primitif ise herhangi bir i??lem yapma, d??n.
input.toString() metodunu ??a????r(Call). E??er sonu?? primitif ise d??n.
input.valueOf() metodunu ??a????r(Call). E??er sonu?? primitif ise d??n.
Ne input.toString() ne de input.valueOf() primitif sonu?? vermiyorsa; TypeError f??rlat.
Referans tipler i??in:

input.toString() metodunu ??a????r(Call). E??er sonu?? primitif ise d??n.
input.valueOf()metodunu ??a????r(Call). E??er sonu?? primitif ise d??n.
Ne input.toString() ne deinput.valueOf() primitif sonu?? vermiyorsa; TypeError f??rlat.
 */

/**
 * EXAMPLES
 * 
 * console.log(true+false)
 * 
"+" operat??r?? numeric i??lem yapar bu durumlardan boolean ifadeler numaric coercion'a u??rar.
Number(true) + Number(false) d??n????en ifade
1+ 0 ??eklini al??r Sonu?? = 1
*
*console.log(12 / "6")
*
"/" operat??r?? numeric i??lem yapaca????ndan
Ba??lang????ta number oldu??u i??in "6" ifadesi
numaric coercion'a u??rar Number("6") ve 6 de??erini d??ner
12 / 6 bu ??ekli al??r Sonu??= 2
*
*console.log([1,2,3]>null)
*
">" kar????la??t??rma operat??r?? oldu??undan numaric coercion yapacakt??r.
[1,2,3] bir array olup refarans tip tutu??undan primitif de??ere d??n????t??r??lerek i??leme al??n??r
[1,2,3].toString() kullan??ld??????nda i??eri ???1,2,3??? de??erini d??nd??r??r
???1,2,3???> null ??eklini al??r
">" kar????la??t??rma ifadesi oldu??undan tekrar numaric coercion tetiklenir
String ifade numbera zorlan??r Number(???1,2,3???)
Number("1,2,3") ifadesinin sonucu NaN olaca????ndan
NaN>null ??eklini al??r
ve NaN kendine dahil hi?? kimseye e??it olmad??????ndan!! Sonu??= false
*
*console.log("number" + 15 + 3) 
*
??rne??imizin ba????nda string bir ifade bulundu??undan di??er ??geler i??in de string coercion tetiklenir
"number+ "15" + "3" ??eklini al??r Sonu??= "number153"
*
*console.log(['x','y'] == 'x,y')
*
== operat??r?? array i??in numeric coercion yapacakt??r
['x','y'] dizisinin numeric coercion yapabilmesi i??in primitif tipe d??n????t??rmek gerekir.
['x','y'].toString() metoduyla "x,y" d??ner
Son e??itlik "x,y"=="x,y" halini al??r
Sonu??= true
 */

//PRACT??CES
//1
console.log("foo" + +"bar")//fooNaN
// +"bar" => Number("bar") => NaN //"foo"+NaN //"foo" +"NaN" //Sonu??= "fooNaN"
//2
console.log('true' == true)//false
//Number('true')=>NaN //NaN == true //NaN == 1 //Sonu??= false
//3
console.log(null == "")//false
// null sadece kendine ve undefined'a e??it oldu??undan //Sonu??= false
//4
console.log(0 || " 0" && {})//{}
//(0 || "0") %% {} //(false || true) && {} => dolu string true d??nd??????nden //(true) && {} => || operat??r?? ilk buldu??u true de??eri, && operat??r?? ilk buldu??u false de??eri d??ner

//true && {} => && operat??r?? false de??er bulamazsa son buldu??u de??eri d??nd??r??r. //Sonu??={}
//5
console.log(["a"] > null) //false
//"a" > null => array toStirng metodunun i??ine girer //NaN > null => Numeric d??n????t??rmeye girer //NaN > 0 //Sonu??= false