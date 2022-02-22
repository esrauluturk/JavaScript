//*** Parameter and Return ***
/**
 * Basic Principles
 * 1: Bir Fonksiyon Bir veye Birden Fazla Parametre alabilir veya Hiç Almayabilir.
 * 2: Bir Fonksiyon Dışarı Bilgi Gönderebilir(return) veya Göndermeyebilir
 * 3: Mümkünse Fonksiyonun Bağımlılıklarını Azaltmak Gerekir (parameter ile bağımlılığını azaltmış oluruz)
 */
//Notes:
//En son yazilan Fonksiyon calisiyor
//Fonksiyonu yukarida cagirmam farketmedi

let firstName = "Lorem"

// 1 - Disari bagimliligi var (firstName)
function greetings() {
    console.log(`Merhaba HoşGeldiniz ${firstName}`)
}
//greetings()-->Merhaba HoşGeldiniz Lorem (global degiskeni kullanir)

//2 - Bir parametre vererek disari bagimliligini azaltmis oluruz
function greetings(firstName) {
    console.log(`Merhaba ${firstName ? firstName : "Stranger"}`)//ternary operator
    console.log(`Merhaba ${firstName}`)
}


//Ikiside 18. satiri calistirir.Ilk fonksiyonu hic calistirmiyor.
greetings(firstName) //Merhaba Lorem *2
greetings() //Merhaba Stranger
//Merhaba undefined

//3 - Fonksiyon parametresine deger atamak
function greetings(firstName = "") { //Get default parameter
    console.log(`Merhaba ${firstName}`)
}
/**
 * Ouput:
 * greetings(firstName)-->Merhaba Lorem
 * greetings()-->Merhaba
 */
greetings("Apple") //Merhaba Apple
greetings(3) //Merhaba 3


//Alinan bilgiyi degiskende saklama
//Function void oldugu icin geriye birsey donmez
let info = greetings("Parameter")
console.log(info) //undefined

//4 - Birden Fazla Parametre Vermek
function greetings(firstName = "", lastName = "") {
    console.log(`Merhaba ${firstName} ${lastName}`)
}

//4.1 - Default parametre vermezsek "undefined" diye gosterir.
//lastName degiskenine default parametre vermezsek:
/*
Output:
Merhaba Lorem undefined
Merhaba  undefined
Merhaba Apple undefined
Merhaba 3 undefined
Merhaba Parameter undefined
*/
//4.2 - lastName = ""
//Yukaridaki ciktinin "undefined" kisimlari "" ile yer degistirir.

//=====================================================================================
//RETURN

function greetings2(firstName, lastName) {
    let inf = `Merhaba ${firstName} ${lastName}`
    return inf
}

greetings2("Ad", "Soyad") // cikti yok. Console'a direkt yapistirrinca cikti var.
//Fonksiyonun icindeki degisken adiyla disarida kullandigim ayni hata vermedi!!!
let inf = greetings2("Ad", "Soyad")
console.log(inf) //Merhaba Ad Soyad



// DOM icindeki id yapısına ulasmak
//---Task : index.html de id= identifying olan elementi bul ve icine istediklerimi yazdir.---

function domIdWriteInfo(id, info) {

    let domObject = document.querySelector(`#${id}`) //:))))
    domObject.innerHTML = info
}

let htmlInfo = `<span style="color:red">Color REDDDDDD</span>`
domIdWriteInfo('identifying', 'Let it be!') // HTML--> Let it be!
domIdWriteInfo('identifying', greetings2("Ad", "Soyad")) //Usttekini ezer.--->Merhaba Ad Soyad
domIdWriteInfo('identifying', htmlInfo) //Color REDDDDDD

//Example
//Daire alani
function circleArea(r, PI = 3.14) {
    return PI * r * r;
}
var rst = circleArea(3, 5, 6); //45 ciktisi verdi!!!!!!!!!! 3 parametre hata vermedi
console.log(rst);

/**
 * Extra Information About Return 
 * Fonksiyonu sonlandirir
 * Return komutundan sonra işlem, değişken veya sabit yazılabilir.
 * e.g.
 * return false;
   return 95;
   return cikar(x,y)/7.0 
 * Return ifadesinden sonra döndürülecek değer atlanırsa, undefined döndürülür.
   e.g.
   return [[değer]];
 * Return komutu ASI'a dahil olduğundan dolayı return ve değeri aynı satırda olmalıdır. Yoksa aşağıdaki senaryo gerçekleşir.
   return
   a*b;
 * ASI tarafından aşağıdaki gibi değiştirilir.
   return;
   a*b;
 * Ve return komutundan sonra ulaşılamayan kod hatasını almamız kaçınılmazdır.
 */

//Example - 2
function Question(hobby) {
    switch (hobby) {
        case "car":
            return function (name) {
                console.log(name + " do you have a car ?");
            };
            break;

        case "book":
            return function (name) {
                console.log(name + " what is your favorite author?");
            };
            break;

        case "software":
            return function (name, type) {
                console.log(name + " are you interested in " + type + "?");
            };
            break;

        default:
            return function (name) {
                console.log(name + "  how are you ?");
            };
            break;
    }
}

var softwareQuestion = Question("software");
softwareQuestion("Cemre", "nodejs");


//Hackerrank - Factorial
function factorial(n) {
    return (n == 1) ? n : n * factorial(n - 1);
}
