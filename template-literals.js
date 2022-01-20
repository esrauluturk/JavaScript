// string concatenation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
let username = "User"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN
console.log("Merhaba", username, "sitemize hoşgeldin", "mail adresin:", email)

//Template Literals
//backtick. bactick ile birden fazla satır yazılabilir.
let information = `

Merhaba ${username} sitemize hoşgeldin.. 
mail adresin: ${email}
mail adresinin uzunlugu: ${email.length}
borcunuz: ${(2 + 3) * 10} ₺                   
gunun saat bilgisi : ${new Date().getHours()} 
kisa isminiz: ${username[0]}.

`
console.log(information)

//Fonksiyon kullanımı
//İşlem yaptırma
//Değişken ismi yazma
//if kullanımı

/**
 * Template Literals (önceki adıyla Template Strings), 
 * kod okunabilirliği ve yazım kolaylığı sağlayan ES6 ile gelmiş bir string yazma şeklidir.
 */

//Çok Satırlı Dize Yazımı:
//Eski kullanım:
let eskiString = "En sevdiğim yemekler:\nYemek1\nYemek2"

//Yeni kullanım:
let yeniString = `En sevdiğim yemekler:
Yemek1
Yemek2
`
//İnterpolasyon:
//İnterpolasyon, metin içerisinde değişken kullanmak anlamına gelir. Normal dizeler içerisine ifadeler gömmek için kullanılır.

let ad = `Name`;
let soyad = `Surname`;

//Eski kullanım
console.log("Benim adım " + ad + " " + soyad);

//Yeni kullanım
console.log(`Benim adım ${ad} ${soyad}`);

//example
let xy = 99;
let yz = 999;

console.log(`${xy} çarpı ${yz} eşittir ${xy * yz}`);

//Çıktı: 
//99 çarpı 999 eşittir 98901

//Çok satırlı dizeleri kolaylıkla kullanmak ve dizelerimize içerik eklemek için de Template Literal’den faydalanabiliriz.

//Değişkenlerimizi tanımlayalım
const myName = `Name`
const surname = `Surname`
const eyeColor = `Blue`
const age = 21

//Eski kullanım, Template Literals kullanmadan:
const persons = "<p>" + myName + "</p>" +
    "<p>" + surname + "</p>" +
    "<p>" + eyeColor + "</p>" +
    "<p>" + age + "</p>"

document.body.innerHTML = persons;

//Yeni kullanım, Template Literals kullanarak:
const person = `
<p>${myName}</>
<p>${surname}</>
<p>${eyeColor}</>
<p>${age}</>
`;

document.body.innerHTML = person;


/**
 * Template Literals;

*Kod okunabilirliğini kolaylaştırır,
*Stringler içerisinde değişken yazma kolaylığını sağlar,
*Şablon etiketlerini daha az karmaşık hale getirir.
 */

//Practices
//Eski Kullanım
/*const kitap = {
    ad: "Fırtına",
    yazar: "Shakespeare",
    tarih: 1610
}
const kitapTablosu =
    "<table border>" +
    "<tbody>" +
    "<tr>" +
    "<td>" + "Kitap" + "</td>" +
    "<td>" + kitap.ad + "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>" + "Yazar" + "</td>" +
    "<td>" + kitap.yazar + "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>" + "Tarih" + "</td>" +
    "<td>" + kitap.tarih + "</td>" +
    "</tr>" +
    " </tbody>" +
    "</table>"
document.body.innerHTML = kitapTablosu*/

//Yeni Kullanım
const book = {
    name: `Bir Yaz Gecesi Rüyası`,
    author: "Shakespeare",
    date: 1610
}
const bookTable =
`<table border>
    <tbody>
        <tr>
            <td> Kitap</td>
            <td>${book.name}</td>
        </tr>
        <tr>
            <td>Yazar</td>
            <td>${book.author}</td>
        </tr>
        <tr>
            <td>Tarih</td>
            <td>${book.date}</td>
        </tr>
   </tbody>
</table>
`
document.body.innerHTML = bookTable