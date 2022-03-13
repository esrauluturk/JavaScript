console.log("Hello Node")
// Calistirmak icin:
// 1
// cmd : node index.js/index
// 2
/* package.json
//"test": "echo \"Error: no test specified\" && exit 1"
"scripts": {
    "start": "node index"
  },
*/
// Bu ayarlamadan sonra cmd de; "npm start" yazmak yeterli olur.
// ======================================================
// BAGIMLILIKLAR
// Disaridan bir bagimlilik ekleyebiliriz."npmjs.com". e.g. 'slugify' kütüphanesi
/**
 * "dependencies": {
    "slugify": "^1.6.5"
  }
 * Bu bagimliligi ekledikten sonra bu olmadan calismayacagi anlamina gelir.
 */

/**
 * Not
 * node_modules silinirse, cmd ekraninda "npm install" dedikten sonra ayni dosyaya ulasim saglariz.
 */
// ======================================================
// INDIRILEN MODULU KULLANMA
// Import
// var slugify = require('slugify')
// const title = slugify('some string lorem ipsum')
// const valuable = slugify('some string lorem ipsum','*')
// console.log(title) // some-string-lorem-ipsum
// console.log(valuable) // some*string*lorem*ipsum
// npm start

// ========================================================
// ES6 Modul Sistemi
/**
 * Modulu yukaridaki gibi require ile import etmek yerine yeni gelen ozelliklerle nasil
 * daha kolay bir import islemi gelistirebiliriz ona bakalim:
 * package.json
 * "type": "module",
 * ================
 * "require" bu sekilde hata verecektir.
 */

import slugify from "slugify";
const title = slugify('some string lorem ipsum')
console.log(title) // some-string-lorem-ipsum
// npm start

//==========================================================
// Kendi yazdigimiz modulu sayfaya dahil etmek
// import Topla from './my-module.js'
// console.log(Topla(2, 4)); // 6

//==========================================================
// Iki modulu sayfaya dahil etmek
// import { hello, topla } from './my-module.js'
// console.log(topla(2, 4)); // 6
// hello(); // hello

// ========================================================
// Parametreli fonksiyon cagrilmasi
// import { hello, topla, cikar } from './my-module.js'
// console.log(topla(2, 4)); // 6
// hello('Lorem Ipsum'); // hello Lorem Ipsum
// console.log(cikar(4, 2)); // 2

//=========================================================
// Export edilme sekline bagli olarak default olan acik, digerleri {} icinde import edilir.
import merhaba, { topla, cikar, text, user, users } from './my-module.js'
console.log(topla(2, 4)); // 6
merhaba('Lorem Ipsum'); // hello Lorem Ipsum
console.log(cikar(4, 2)); // 2
console.log(text) // Duz bir string import etmek // Text
console.log(user) // Object // { name: 'Lorem', surname: 'Dolor' }
console.log(users) // Array
/**
 * Output
[
  { name: 'Lorem', surname: 'Dolor' },
  { name: 'Ipsum', surname: 'Dolor' }
]
 */
// Default export edilen burada import edilirken farkli bir isimde kullanilabilir. hello-->merhaba gibi.
// Default olmayanlar export edildikleri adiyla alinmak zorundadir.