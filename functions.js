//*** Functions 

function greeting() {
    console.log("Hi! There :)")
    helloWorld()
}

function helloWorld() {
    console.log("Hello World!!!")
}

greeting()

//Parametre alan fonksiyonları kullandığımız zaman o parametrelere kendimiz bir değer atarız. Atanan bu değere argüman adı verilir.

/****Anonymous Functions : Bir adı yoktur ve bir değişkene atanarak yeri geldiğinde kullanılırlar.
Değişken adı kullanılarak çağrıldıkları için birden çok anonim fonksiyonu aynı dizide kullanabilirsiniz.
Dahası bir değişkene atandıklarından bu değişkeni başka bir fonksiyonun parametresine koyarak callback (geri arama) yapabilirsiniz.
*/

var add = function (num1, num2) {
    console.log(num1 + num2);
}

/**
 * **** Fonksiyon Kapsamı ****
JavaScript'de fonksiyon içinde tanımlamış olduğunuz değişkene fonksiyon dışındaki herhangi bir yerden erişemezsiniz. 
Çünkü o değişken tanımlandığı fonksiyonun kapsamındadır. Bu sebeple değişkenimiz o fonksiyon içinde kullanılan bir lokal değişkendir. 
Fakat tanımlanan fonksiyon tanımlandığı kapsamdaki diğer değişkenlere erişebilir.
Yani fonksiyon kendi dışında tanımlanan fakat aynı kapsamda bulunduğu global değişkenlere de erişebilir.
 */

var number1 = 5; // GLOBAL VARIABLE
var number2 = 2; // GLOBAL VARIABLE  
function addition() {
    var number3 = 3; // LOCAL VARIABLE
    return number1 + number2 + number3;
}

function multiplication() {
    return number1 * number3; //HATA alırız. number3 baska scope icinde tanimli.
}

/**
 * **** Callback Fonksiyonlar ve Asenkron Çalışma ****
 * Senkron,  kodumuz yukarıdan aşağı doğru sırayla işlenir ve bir satırdaki işlem bitmeden bir sonraki satıra geçilmez. 
 * Asenkron yapıda ise fonksiyonların birbirlerini beklemelerine gerek yoktur. Uzun zaman alan veya farklı görevleri olan fonksiyonlar aynı anda çalışabilir.
 * JavaScript asenkron yapıdaki bir programlama dilidir. 
 */

function printScreen1() {
    console.log("İlk ekran çıktısı");
}

function printScreen2() {
    setTimeout(function () {
        console.log("İkinci ekran çıktısı")
    }, 3000);
}

function printScreen3() {
    console.log("Üçüncü ekran çıktısı");
}
printScreen1();
printScreen2();
printScreen3();

/**
 * setTimeout(parameter1, parameter2) fonksiyonunu kullanacağız. Bu fonksiyon iki parametre ile kullanılacak: 
 * ilk parametre çalışması istenen fonksiyonu, ikinci parametre ise ne kadar süre sonra çalışması istendiğini ifade ediyor.
 * Örneğin 1000 yazılarak 1000 milisaniye yani 1 saniye gecikme sağlanıyor.
 * Output:
 * İlk ekran çıktısı
   Üçüncü ekran çıktısı
   İkinci ekran çıktısı
 * Explain:
   Bunun sebebi asenkron çalışma yapısıdır. 
   printScreen1 fonksiyonu çalıştıktan sonra printScreen2 fonksiyonun çalışması için beklemeden printScreen3 fonksiyonumuz çalışır.
 */

/**
 * **** Callback ****
 * Bu durumdan kurtulmak için callback kullanıyoruz denebilir. Callback fonksiyonlar başka bir fonksiyonu parametre olarak alan fonksiyonlardır. 
 * Yani aslında asenkron yapıda bile fonksiyonlar için bir çalışma sırası belirlememize yardımcı olur.
 * Örneğin yukarıda verilen kodumuzun sırasıyla birinci, ikinci ve üçüncü çıktıları vermesini istiyoruz.
 */
function printScreen4() {
    console.log("İlk ekran çıktısı");
}

function printScreen5(callback1, callback2) {
    setTimeout(function () {
        callback1();
        console.log("İkinci ekran çıktısı")
        callback2();
    }, 3000);
}

function printScreen6() {
    console.log("Üçüncü ekran çıktısı");
}

printScreen5(printScreen4, printScreen6);

/**
 * Output
 * İlk ekran çıktısı
   İkinci ekran çıktısı
   Üçüncü ekran çıktısı
 */

/**
* Extra Information
* Kodun birçok yerinde aynı işi yapacak alt programlara (subprograms) ihtiyaç duyarız. 
Mesela, ziyaretçi siteye giriş yaptığında veya çıkış yaptığında bir mesaj göstermek isteriz.
Fonksiyonlar, programın ana bloklarıdır ve fonksiyonlar sayesinde kodu tekrar tekrar yazmadan, istediğimiz kadar çağırabiliriz.
JavaScript'te built-in(dilin kendi içerisinde mevcut) fonksiyonlar olduğu gibi(mesela alert(parametre) ve prompt(parametre) built-in fonksiyonları) 
biz de kendi fonksiyonlarımızı oluşturabiliriz.
Fonksiyonların ana amacı kodu tekrar yazmayı engellemektir.
*/

function getMessage(name, surname) {
    alert(`Merhaba ${name} ${surname}`);
}

//!!!ÇALIŞIYOR
getMessage("Virginia", "Woolf", "Mrs."); //Merhaba Virginia Woolf 
getMessage("Franz")  //Merhaba Franz undefined
getMessage()         //Merhaba undefined undefined


//Return yazmak - yazmamak

function sum(number4, number5) {
    return number4 + number5;
};

var conclusion = sum(10, 20); // return 30 

function multip(num4, num5) {
    num4 * num5; // no return
};

var result = multip(10, 20); // undefined 

console.log(conclusion)
console.log(result)


//IMPORTANT TRICK

var ekle = function topla(sayi1, sayi2) {
    return sayi1 + sayi2;
};

var sonuc1 = ekle(10, 20); // 30
//var sonuc2 = topla(10, 20); // HATA VERİR!!!

console.log(sonuc1)
//console.log(sonuc2)

/**
 * ***Fonksiyon İfadeleri (Function Expressions) ****
 * JavaScript bir değişkene fonksiyon atanmasına ve daha sonra bu değişkenin fonksiyon olarak kullanılmasına izin verir. Buna fonksiyon ifadeleri denir.
 */

/* **** Arrow Functions ****
Fonksiyon yaratmanın bir diğer yolu ise ES6 ile birlikte hayatımıza giren, daha okunabilir daha basit bir syntax yapısına sahip olan arrow functions yapısıdır.

**let func = (param1, param2, param3) => expression;

Yukarıdaki kod bloğu basitçe, bir param1,param2,param3 parametrelerini alan ve sağ taraftaki ifadeyi değerlendirip sonucunu döndüren bir fonksiyon oluşturur.

let func = function (param1, param2, param3) {
  return expression;
};
*/

// Example:
// 2 Parameter
const carpim = (num7, num8) => num7 * num8;
console.log(carpim(3, 5));

// 1 Parameter
const karesiniAl = (sayi) => sayi * sayi;

// No Parameter
const hiWorld = () => console.log('Hello World');

//Bir koşula göre iki farklı fonksiyon çalıştırmanız gerektiğini düşünün. Dinamik olarak fonksiyon tanımlamayı aşağıdaki şekilde yapabiliriz.
let experience = prompt('Kaç yıllık geliştirici tecrübeniz var ?', 4);

const developer =
    experience < 5
        ? () => alert('Bir cok konuyu biliyorum')
        : () => alert('Hicbir sey bilmiyorum:)');

developer();

//Bir satıra sığabilecek basitlikte olmayan fonksiyonlarımız için çok satırlı arrow function'ı şu şekilde yazabiliriz.
let toplam = (a, b) => {
    let result1 = a + b;
    return result1;
};
console.log(toplam()) //NaN
typeof (toplam) //function
console.log(toplam) /**
                    Output:
                    (a, b) => {
                        let result1 = a + b;
                        return result1;
                    }
                    */

//*** Recursion ***
//Bir fonksiyon kendisini tekrar çağırıyor ise biz buna recursion diyoruz.

//Example
//Bir fonksiyon yazalım bu fonksiyon sayının kuvvetini alsın.
// pow(2,2) = 4
// pow(2,3) = 8

// 1. YOL (No Recursion)
function pow(x, n) {
    let rst = 1;

    for (let i = 0; i < n; i++) {
        rst *= x;
    }

    return rst;
}

alert(pow(2, 3)); // 8


// 2. YOL (with Recursion)
function powR(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * powR(x, n - 1);
    }
}

alert(powR(2, 3)); // 8

// 3. YOL
//Recursion, arrow function ve if else clause kullanarak yeniden nasıl yazarız
function powRaie(x, n) {
    return n == 1 ? x : x * powRaie(x, n - 1);
}

/**
 * *** Variable Scope, Closure ***
 Bir fonksiyonu istediğiniz bir an yaratabilir, başka bir fonksiyona parametre olarak girebilir ve
 yazdığımız programın çok farklı bir yerinde biz tekrar bu fonksiyonu çalıştırabiliriz. 
 JavaScript function-oriented bir dil olduğundan bize bir çok özgürlük sağlar.
 Bir fonksiyonun dışında tanımlanan değişkenlere erişebildiğiniz biliyoruz. 
 Peki bir fonksiyonu biz yarattık ve global tanımlanan var x = 5 bu fonksiyon içerisinde eriştik ve kullandık diyelim.
 Peki bu değişkenin değeri daha sonra değişirse fonksiyon güncel olanı alacak mı veya 
 biz bu fonksiyonu başka bir fonksiyona parametre olarak girdiğimiz zaman hala sağlıklı bir şekilde x e ulaşabilecek mi?

 Not: JavaScript de biz bir değişken atarken 3 farklı yol kullanabiliyoruz. var ve modern olanlar(let,const). Bu bölümde modern olanlardan konuşacağız.
 */

// **** Code Blocks ****
//Eğer bir değişkeni bir code bloğu içerisinde tanımlarsak {...}, o değişken sadece bu code block arasında ulaşılabilir olur.
var message = "Hi"
{
    let message = 'Merhaba';
    console.log(message);
}
console.log(message); // En üstte tanımlamazsak HATA alırız

{
    let message = 'Merhaba';
    console.log(message);
}

{
    let message = 'Hello';
    console.log(message);
}
/**
 * Output:
 * Merhaba
 * Hi
 * Merhaba
 * Hello
 */
//DİKKAT! Sadece scopelarla iş yaptım hata vermedi.

//If, for, while gibi döngüler de değişkenleri code block'larında tanımlar ve sadece orada ulaşılabilirler.
if (true) {
    let msg = 'Merhaba';
    console.log(msg);
}
// console.log(msg); //HATA -- Because msg is in the scope.

//Bir fonksiyon yazdığımızı düşünelim ve bu fonksiyon dışardan aldığı bir string parametresini içerisinde 2 ye ayırsın ve bir koşula göre bize çıktı versin.
function stringFormat(str) {
    {
        let part1 = str.slice(0, 3);
        let part2 = str.slice(3);
        str = part1.toUpperCase() + part2;
    }
    //part1 ve part2 kullanılamaz.Scope içinde
    //bir kosula baglı return edelim. 
    if (str) {
        return str;
    }
    return str.slice(4);
}
var input = prompt("Lütfen bir cümle yazınız : ", "Hey Jude ! Don't be afraid.")
console.log(stringFormat(input))
//console.log(stringFormat("Hey Jude ! Don't be afraid."));

/**
 * Extra Explain
 * Neden bir fonksiyon içerisinde bir scope daha açma ihtiyacı duyabiliriz? part1 ve part2 sadece alınan parametrenin değiştirilmesi ile alakalı iki tane değer. 
 * str parametresini değiştirdikten sonra bizim artık part1 ve part2 ye ihtiyacımız yok. Bu kısmı ayrı bir scope içerisine alarak ilerde oluşabilecek bir bug ı önlemiş olabiliriz. 
 * Mesela, Scope içerisinde olmasa idi hala fonksiyon bodysinde istediğimiz yerde kullanabilir ve daha sonra gelip orayı değiştireceğimiz zaman hali hazırdaki kodu bozabilirdik gibi.
 */

//*** Nested Functions ***
//Nested Functions ( İç içe fonksiyonlar ) JavaScript'te yaygın olarak kullandığımız bir yapı. 
//Bir Fonksiyon içerisinde başka bir fonksiyonu tanımladığımız zaman buna nested functions yapısı diyoruz aslında.

function programDetayi(bootcamp, organizasyon) {
    // nested yardımcı fonk
    const tumProgram = () => bootcamp + ' ' + organizasyon;

    console.log('Basladi, ' + tumProgram());
    console.log('Bitti, ' + tumProgram());
}//tumProgram fonksiyonu dış değişkene ulaşabilir ve gerekli bilgileri return eder. 

programDetayi("JavaScript101", "Kodluyoruz")

//Daha ilginç olarak da bir fonksiyon nested fonksiyonu da return edebilir. Bir sayaç üzerinde bunu anlayabiliriz.
function sayacartir() {
    let sayac = 0;

    return function () { // Fonksiyonu return eder
        return sayac++;
    };
}

// Aşağıdaki gibi çıktı vermiyor !
console.log(sayacartir()); // 0
console.log(sayacartir()); // 1
console.log(sayacartir()); // 2

//Output
/**
 * ƒ () { 
        return sayac++;
    }
 */