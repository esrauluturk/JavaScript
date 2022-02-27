//*****************Array Filter Kullanimi******************

//Problem : 5 karakterden daha fazla olan product'ları bulup yeni listeye ekleyelim.
const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

//Solve
const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)
console.log(NEW_PRODUCTS) //'Speaker', 'Desktop PC', 'Server', 'Keyboard'

// Aktif kullanicilari bulup yeni listeye ekleyelim.
const USERS = [
    { fullName: "Ayse Sumer", isActive: false },
    { fullName: "Ahmet Urgan", isActive: true },
    { fullName: "Asya Basar", isActive: true },
    { fullName: "Aksel Durmaz", isActive: false },
]
// const ACTIVE_USERS = USERS.filter(user => user.isActive === true)
// console.log(ACTIVE_USERS)
/** OUTPUT
(2) [{…}, {…}]
0: {fullName: 'Ahmet Urgan', isActive: true}
1: {fullName: 'Asya Basar', isActive: true}
length: 2
[[Prototype]]: Array(0)
 */
const ACTIVE_USERS = USERS.filter(user => user.isActive) //Zaten default olarak 'true' olanlara bakilir.Yukaridaki ile ayni ciktiyi verir.
console.log(ACTIVE_USERS)

// Aktif olmayan kullanicilar
// const ACTIVE_USERS = USERS.filter(user => user.isActive === false)
// console.log(ACTIVE_USERS)

//EXAMPLES
const persons = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
},
{
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
}
];
// Soru 1: Yukarıdaki diziyi kullanarak filter() metodu ile yaşı 30'dan büyük olan kişiyi getirin.
const person = persons.filter(item => item.age > 30)
console.log(person)// 0: {name: 'Oğuz', age: 33, languages: Array(2)}
//2.Yol
const p = persons.filter(function first(person) {
    return person.age > 30;
})
console.log(p)
// Soru 2: Yukarıdaki diziyi kullanarak filter() metodu ile JavaScript bilen kişiyi getirin.
const personLanguage = persons.filter(function (person) {
    return person.languages.includes("JavaScript");
})
console.log(personLanguage)
/*
0: {name: 'Adem', age: 25, languages: Array(2)}
length: 1
[[Prototype]]: Array(0)
*/
//2.Yol
const pL = persons.filter(js => js.languages.includes("JavaScript"))
console.log(pL)

//*********************ARRAY MAP KULLANIMI***********************
//forEach de listenin icindeki elemanlari tek tek dondurdukten sonra yeni Liste elde edemiyoruz. Map ile yeni bir liste/yapi olusturabiliriz.
const USERSS = ["AYSE", "MehMet", "TugCE", "AkSEL"]
//tum harfleri kucuk olsun
const NEW_USERS = USERSS.map(user => user.toLowerCase())
console.log(NEW_USERS) //['ayse', 'mehmet', 'tugce', 'aksel']

//***********OBJECT***********
// userName icinde orjinal isim kalsin, 
// shortName icinde ilk harf buyuk . (A.)
// newName icinde ilk harf buyuk olsun
// {userName: "AYSE", shortName: "A.", newName: "Ayse"}

//SOLVE
// const USERS_OBJ = USERSS.map(item =>
// {

//     return {userName: item.toUpperCase(), shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`} //Bu parantezler object oldugunu belirtir.
// }
// )
// console.log(USERS_OBJ)

/**
 * OUTPUT
0: {userName: 'AYSE', shortName: 'A.', newName: 'Ayse'}
1: {userName: 'MEHMET', shortName: 'M.', newName: 'Mehmet'}
2: {userName: 'TUGCE', shortName: 'T.', newName: 'Tugce'}
3: {userName: 'AKSEL', shortName: 'A.', newName: 'Aksel'}
 */

//Yukaridaki yazimi return olmadan su sekilde ifade edebiliriz :
const USERS_OBJ = USERSS.map(item => (

    { userName: item.toUpperCase(), shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}` }
)
)
console.log(USERS_OBJ)

/**
 * Extra Information
 * Array Map
Array Map metodu, parametre ile kendisine gönderilen dizinin her bir elemanı için ayrı ayrı çalışır ve belirlenen işleme tabi tutup, yeni bir dizi meydana getirir.
Örneğin; elimizdeki dizinin tüm elemanlarının iki katını almak istediğimiz zaman kullanabiliriz. 
Array Map metodu, kendisine parametre olarak gönderilen diziye herhangi bir müdahalede bulunmaz. 
Mevcuttaki dizinin her elemanını belli bir işleme tabi tutarak yeni bir dizi oluşturur. Bu kısım önemlidir.

Öncelikle Array Map metodunun kullanımına bir göz atalım.

array.map( function(value, index, array), this)
Gönderilen parametreleri inceleyelim;

array : Üzerinde işlem yapılacak olan diziyi belirtir. Bu dizinin her bir elemanı map metotunun içinde belirleyeceğimiz işleme tabi tutulacaktır.
value : Üzerinde işlem yapılan dizi değerini belirtir.
index : Üzerinde işlem yapılan diziye erişimi sağlar
this : Kullanımı zorunlu değildir(opsiyoneldir). this değişkenine iletilecek olan değeri belirtir.
 */

//EXAMPLES
//Örnek 1: Bir dizinin tüm elemanlarını 2 ile çarpan fonksiyon;
const sayilar = [2, 3, 4, 5, 10]
const yeniArray = sayilar.map(deger => {
    return deger * 2
})

console.log(sayilar);
//[2, 3, 4, 5, 10]
console.log(yeniArray);
//[4, 6, 8, 10, 20]

//Örnek 2: Maaş zam hesaplama; İşçilerin aldıkları maaşlara ait bir dizi olsun. 
//Maaşı 3000 TL'nin üzerinde olanlarınkine %15, altında olanlarınkine de %25 zam yapan bir array map oluşturalım.
const maaslar = [1100, 13000, 2500, 4500, 1500, 25000, 2000];
const yeniMaaslar = maaslar.map((e) => {
    if (e > 3000)
        return e * 1.15;
    else
        return e * 1.25;
});

console.log(yeniMaaslar);
//[1375, 14949.999999999998, 3125, 5175, 1875, 28749.999999999996, 2500]