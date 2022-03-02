// Object icinde Method Ekleme

let user1 = {
    firstName: "Anna",
    lastName: "Karenina",
    score: [1, 2, 3, 4],
    isActive: true,
    shortName: function () { return `${this.firstName[0].toUpperCase()}. ${this.lastName}` } // this ->user1
};
console.log(user1.score) // [1, 2, 3, 4]
console.log(user1.shortName()) // A. Karenina

/**
 * Object
 * Referans Veri Tipi
 * Key - Value Mantıgı
 * Property tanımlama
 * Degerler farklı veri tiplerinde olabilecegi gibi bir fonksiyonu da isaret edebilir.
 */
/*Bir nesneye metot 2 şekilde eklenebilir. 
Bunlardan biri nesneye property olarak eklemek, 
bir diğeri ise prototype (prototip) fonksiyonu üzerinden eklemektir.*/

// *****Metotu Özellik Olarak Eklemek
// Metot, bir nesnenin oluşturulduğu sırada özellik olarak eklenip tanımlanabileceği gibi, önceden tanımlanmış bir nesneye sonradan da eklenebilir.
var person = {
    name: 'Albert',
    surname: 'Camus',
    age: 23,
    country: 'Fransa',
    introduce: function () {
        console.log(`My name is ${this.name} ${this.surname}, I'm ${this.age} yo.`);
    },
};
console.log(person.introduce()) // My name is Albert Camus, I'm 23 yo.
/**
 * metot tanımlanırken function() anahtar kelimesi kullanılarak yapılabileceği gibi 
 * EcmaScript6'nın arrow function yönteminin söz diziminden yararlanarak yapmak da mümkündür. 
 * Fakat burada dikkat edilmesi gereken noktalardan biri arrow functionlar this erişimine sahip değildir.
 * Arrow function this ile kullanilirsa undefined olarak gorunecektir.
 */

//ARROW FUNCTION
var per = {
    name: 'Albert',
    surname: 'Camus',
    age: 23,
    introduce: () => {
        return `My name is ${per.name} ${per.surname}, I'm ${per.age} yo.`;
    },
};
console.log(per.introduce())

//*****Onceden olusturulmus nesneye method eklemek
// Arrow yapısı da kullanilabilir.
per.myCity = function () {
    console.log(`I live in ${this.city}`);
};
per.myCity(); // I live in undefined

/**
 * *****Prototype Konusu ve Prototype Yöntemi
 * JavaScript'te çoğu tanım bir objedir.
 *  Bu obje tabanlı yapısı sayesinde fonksiyonları, başka fonksiyonlara parametre olarak verebilir ayrıca bir fonksiyon da döndürebiliriz.
 * Fonksiyonlar JavaScript dilinde, Function sınıfının birer objeleridir.
 * Bu sınıfın bir kurucusu(constructor) ve diğer bütün objeler gibi inherit ettiği bir prototype var. 
 * Bu prototype yardımıyla fonksiyonun adına bile ulaşabiliriz. 
 * Örnek :
 */
const fonksiyonAdi = () => { console.log("Merhaba Kodluyoruz") }
console.log(fonksiyonAdi.name); // "fonksiyonAdi"
//!!!fonksiyonu execute etmedik. Yalnızca bu objenin bir özelliğine eriştik.

/*Js'de fonksiyonlarda birer obje olduguna gore js fonksiyonlarina da yeni bir ozellik ekleyebiliriz.
nesneye yönelik programlama konseptlerinde objelerin ve sınıfların çok daha detaylı kullanım alanları mevcuttur. 
Bu noktada da objeye fonksiyon ekleme konusunda karşımıza özel bir kullanım geliyor.
Obje oluşturmanın yeni bir yöntemi:
*/
// Yapının adı : JavaScript Object Constructor.
function Insan(isim, yas) {
    this.isim = isim;
    this.yas = yas;
}
/**
 * Daha önce bir değişken yardımıyla obje tanimlandi.
 * Class keyword'ünü kullanarak da bir sınıf tanımlanırdı.
 * Yukarıdaki yapı ise fonksiyon kullanarak bir sınıf tanımlamamıza imkan sağlayan yapılardır. 
 * Bu şekilde bir obje mutable(mutasyona uğrayabilir yani özellikleri değiştirilebilir) bir Sınıf tanımlamış oluyoruz.
 * Burada bir obje şablonu oluşturduğumuzu söyleyebiliriz. 
 * Artık "new" anahtar kelimesi ile bu şablonda bir obje oluşturabiliriz:
 */
const ali = new Insan("ali", 21);
console.log(ali.yas); // 21

/**
 * Fonksiyon kurucu yardımıyla hazırladığımız bir sınıf var ve
 * Bu Sınıfı kullanarak "new" anahtar kelimesiyle bir obje oluşturduk. 
 * Bu sınıfta kullanmak üzere fazladan bir fonksiyon tanımlamak istiyoruz. 
 * Objelere özellik ekleyebiliriz çünkü bunun mutable olduğunu biliyoruz .
 */
ali.yeniOzellik = "Sonradan eklenmiş bir özellik";
console.log(ali.yeniOzellik); // "Sonradan eklenmiş bir özellik"

/**
 * Fonksiyon ekleme
 * Prototype, bütün objeler tarafından miras alınan bir özelliktir.Bu özelliği de "proto" key'i ile ekler.
 * Bu prototype alanı içinde hem o objeyi kurduğumuz Sınıfın kurucu fonksiyonuna hem de proto objesine erişebiliriz.
 * Bu prototype özelliğini kullanarak hem sınıfa hem objeye ihtiyacımız olan fonksiyonu ekleyebiliriz. 
 */

//Sınıfa Prototype yardımıyla fonksiyon eklemek :

Insan.prototype.yeniFonksiyon = () => { console.log("Merhaba Kodluyoruz") }
const ayse = new Insan("ayşe", 22);
ayse.yeniFonksiyon(); // Output : "Merhaba Kodluyoruz"

//Objeye prototype yardımıyla fonksiyon eklemek :
ayse.__proto__.enYeniFonksiyon = () => { console.log("Tekrar Merhaba Kodluyoruz!") }
ayse.enYeniFonksiyon(); // Output : "Tekrar Merhaba Kodluyoruz!"

// Prototype özelliğini kullanarak da objelere ve sınıflara sonradan fonksiyonlar hatta farklı özellikler ekleyebiliriz.

// Ornekler
// 1
var birey = {
    isim: 'Ali',
    soyisim: 'Veli',
    dogumYili: 1989,
    merhabaDe: (age) => `Merhaba, ben ${birey.isim} ${birey.soyisim}, ${age} yaşındayım`,
};
birey.yasHesapla = function () {
    return 2021 - this.dogumYili;
};
console.log(birey.merhabaDe(birey.yasHesapla())); // Merhaba, ben Ali Veli, 32 yaşındayım

// 2 - fonksiyonun adina nasil erisebiliriz ? 
function yaz(){console.log("Merhaba Kodluyoruz")}
console.log(yaz["name"]) //yaz