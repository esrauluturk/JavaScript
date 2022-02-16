//*************String Data Type Operations*****************
let email = "nowan@gmail.com"
let firstName = "name"
let lastName = "SURNAME"


//String karakter sayisi : ***length methodu***
console.log(email.length) //15

//Ilk karakterini bulmak : ***[0] ve charAt() methodu***
console.log(firstName[0])  //n
console.log(firstName.charAt(0)) //n

//Tamamını buyuk harf / kucuk harf yapmak : ***toUpperCase() and toLowerCase()***
firstName = firstName.toUpperCase()
console.log(firstName) //NAME

firstName = firstName.toLowerCase()
console.log(firstName) //name

//String icinde istedigimiz bilgiyi aramak ve yerini bulmak : ***search()*** --Regular Expressions
console.log(email.search("@")) //5
console.log(email[5]) //@
// Olmayan bilginin geri donusu = -1
console.log(email.search("olmayan")) //-1

//Belli bir yere kadar almak : ***slice()***
console.log(email.slice(1, 10)) //owan@gmai
console.log(email.slice(5))    //@gmail.com 
//DOMAIN
let DOMAIN = email.slice(email.search("@") + 1)
console.log(DOMAIN) //gmail.com
DOMAIN.indexOf('.') //5
DOMAIN.slice(0, DOMAIN.indexOf('.')) //gmail

//Bilgiyi Degistirmek : ***Replace()***
//Hata
email.replace('gmail.com', 'kodluyoruz.org')
console.log(email) //nowan@gmail.com
//Doğrusu
email = email.replace('gmail.com', 'kodluyoruz.org')
console.log(email) //nowan@kodluyoruz.org


//Istedigim bilginin var olup olmadigini kontrol etmek :  ***includes()***
email.includes('@') //true
email.includes('dhfgsd') //false

//Istedigim bilgiyle basladi mi/ bitti mi kontrol etmek : ***startsWith(), endsWith()***
email.endsWith('@') //false
email.endsWith('org') //true
email.endsWith('kodluyoruz.org') //true

//Ilk harflerini buyuk yapmak
//Ismin ilk harfini buyuk gerisini kucuk yapmak
firstName = "FIRST"
lastName = "LAsT"
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`
console.log(fullName) //Name Surname //Boşluk dikkat //First Last

//Ornekler
//Metin icinde arama yapmak : ***indexOf()***
var isim = "Nowan Noone";
console.log(isim.indexOf('Wa'))  //-1 (yok)
console.log(isim.indexOf('wa'))  //2
console.log(isim.indexOf('one')) //8

//lastIndexOf()
console.log(isim.lastIndexOf('on')) //8
console.log(isim.lastIndexOf('Wa')) //-1(yok)

//Metin birlestime : ***Concat()***
var a = "Hello ";
var b = "World";
console.log(a.concat('  ', b)); //Hello   World
console.log(a.concat(b)) //Hello World

//Index Numarasina Gore Karakterin Unicode Degerini Bulma : ***charCodeAt()***
console.log(isim.charAt(1)) //o
console.log(isim.charCodeAt(1)) //111

//Metni Diziye Cevirme : ***split()***
var isimler = isim.split(' '); //Bosluga gore split et
console.log(isimler) //['Nowan', 'Noone']

//Soru1
//Language değişkenin değerini JavaScript olarak değiştirin ve konsola yazdırın.
let url = "www.kodluyoruz.org";
let language = "Java";
language = language.replace('Java', 'JavaScript')
console.log(language)

//Soru2
//Url değişkenini kullanarak "www" olmadan domain (kodluyoruz.org) adında yeni bir değişken oluşturun ve konsola yazdırın.
console.log(url.indexOf('.')) //3
domain = url.slice(3 + 1)
console.log(domain) //kodluyoruz.org

