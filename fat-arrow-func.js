// Arrow Function () Usage "=>"

function hello(firstName) {
    console.log(`Hello ${firstName}`)
}

hello("JavaScript") //Hello JavaScript

//let's convert the above into arrow function
const helloFuncV1 = (firstName) => { console.log(`Hello ${firstName}`) }
helloFuncV1("helloFuncV1") //Hello helloFuncV1

//Tek parametre ve icinde bir islem olacak ise parantez icine almaya gerek yok
const helloFuncV2 = firstName => console.log(`Hello ${firstName}`)
helloFuncV2("helloFuncV2") //Hello helloFuncV2

//Birden Fazla Parametre (require brackets)
const helloFuncV3 = (firstName, lastName) => console.log(
    `Hello ${firstName} ${lastName}`
)
helloFuncV3("helloFuncV3", "Last Name Info") //Hello helloFuncV3 Last Name Info

//Hem console yazdır hem return et. Birden fazla islem olacagi icin süslü parantez kullanilir.
const helloFuncV4 = (firstName, lastName) => {
    let inform = `Hello ${firstName} ${lastName}`
    console.log(inform)
    return inform
}
helloFuncV4("helloFuncV4", "Other Info")

//=====1. YOL : function keyword'ünü kullanmak =====

// Function declaration
function greet(who) {
    return `Hello, ${who}!`;
}
greet("John") // output : Hello, John!

// Function expression
const greet1 = function (who) {  //function keyword
    return `Hello, ${who}!`;
}
greet1("John") // output : Hello, John!

//=====2. YOL : Arrow Fonksiyon ======
/**
 * İkincisi ES6 ile kullanılmaya başlanan Arrow Fonksiyon gösterimi. 
 * Aynı zamanda Fat Arrow Fonksiyon da deniliyor. Bunlar daha az kod satırı ile fonksiyonu yazmamıza olanak sağlıyor. 
 */

const greet2 = (who) => `Hello, ${who}!`;

//Example-1 : 
// ES5
var toplam = function (x, y) {
    return x + y;
};

// ES6
let toplam1 = (x, y) => x + y;

//Example-2 :
// ES5
var sayi = function (x) {
    return x * x
};

// ES6
let sayi1 = x => x * x;

//Example-3 :
// ES5
var multiplier = function (item, multi) {
    return item * multi
};
multiplier(5, 2); // output : 10

// ES6
const multiplier1 = (item, multi) => item * multi;
multiplier1(5, 2); // output : 10

//Example-4 :
//ES5
var myList = function (param1, param2) {
    return param1.concat(param2);
};
myList([1, 2], [3, 4, 5]); // output : [ 1, 2, 3, 4, 5 ]

//ES6
const myList1 = (param1, param2) => param1.concat(param2);
myList1([1, 2], [3, 4, 5]); // output : [ 1, 2, 3, 4, 5 ]

/**
 * **** Arrow fonksiyon kullanırken dikkat etmemiz gereken bazı durumlar vardır ****
 */
// 1 - return keyword
/*Statement'lar süslü{ } parantez kullanılarak yazılırlar. 
Eğer fonksiyon içerisinde bu parantezlerden varsa return keyword'ü kullanmamız gerekir. Bir if Statement'i kullanılan bir arrow fonksiyonu yazalım.*/

var feedTheCat = (cat) => {
    if (cat === 'hungry') {
        return 'Feed the cat';
    } else {
        return 'Do not feed the cat';
    }
}
// 2 - this keyword
/**
 * this'in arrow fonksiyonlardaki davranışı, regular fonksiyonlardaki davranışından farklıdır. 
 * Nasıl ve nerede oluşturulursa oluşturulsun this'in arrow fonksiyonu içerisindeki değeri her zaman parent fonksiyonuna eşittir. 
 * Diğer bir deyişle arrow fonksiyonu kendi execution context'ini oluşturmaz. Yani kendisini referans göstermez, her zaman parent'ına bakar.
 */

let movie = {

    name: "La la land",

    thisInArrow: () => {
        console.log("Movie name is " + this.name); // 'this' window'u referans gösterir. Bu yüzden name'yi bulamaz.
    },

    thisInRegular() {
        console.log("Movie name is " + this.name); // 'this' kendisini referans gösterir ve çalışır.
    }

};
movie.thisInArrow(); // output : Movie name is
movie.thisInRegular(); // output : Movie name is La la land

// Exercise
//1 -  Bir dizi veya film listesi parametre alan bir arrow fonksiyonumuz olsun, bunların herbirini 1'den başlayarak alt alta yazalım.

const seriesList = list => {

    list.forEach((series, index) => {
        console.log(`${index + 1}. ${series}`)
    });
};

seriesList(["Firefly", "The Mandalorian", "Breaking Bad"]);
/* output:
1. Firefly
2. The Mandalorian
3. Breaking Bad
*/

//2 - [1,2,3,4,5] array'ini parametre alan bir arrow fonksiyonumuz olsun. Bu array'in sonucu bize yeni bir array döndürsün.
// Oluşan yeni array'deki çift sayılar 2, tek sayılar ise 3 ile çarpılmış olsun. 
//[1,2,3,4,5] => [1x3, 2x2, 3x3, 4x2, 5x3] =>Sonuç çıktımız **[3,4,9,8,15]** olacak.
const newArray = (nums) => {

    const newNums = nums.map(e => {
        if (e % 2 == 0) {
            return e * 2
        } else if (e % 2 == 1) {
            return e * 3
        }
    });
    return newNums
}

console.log(newArray([1, 2, 3, 4, 5]));  // output: [3,4,9,8,15]