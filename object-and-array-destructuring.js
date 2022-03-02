// Object Destructuring
// Destructuring bir obje veya bir array içinden her bir elemanın alınıp bir değişken içine kaydedilmesi.

let settings = {
    userName: "loremIpsum",
    password: "BadPassword",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "kodluyoruz.org"
}

// *****Object icindeki bilgilerin tek seferde cikarilmasi
// Object icinden degil direkt erisim nasil yapilir?
// 1
// let userName = settings.userName
// console.log(userName)

// 2 - Rename && Destructuring (degiskenle ifadesini sagladik)
let { userName: user, password, isActive, ip: serverIP, serverName } = settings
console.log(user, password, isActive, serverIP, serverName) // oremIpsum BadPassword false 127.0.0.1 kodluyoruz.org
console.log(settings) // {userName: 'loremIpsum', password: 'BadPassword', isActive: false, ip: '127.0.0.1', serverName: 'kodluyoruz.org'}
//Bilgilere artik tek tek ulasabiliriz :
console.log(user) // loremIpsum
console.log(serverIP) // 127.0.0.1

// *****Obje icindeki bazi bilgilerin cikarilmasi
let { userName: userN, password: pass, isActive: isAct, ...newSettings } = settings // Kalanini newSettings object icine at
console.log(newSettings) // {ip: '127.0.0.1', serverName: 'kodluyoruz.org'}
console.log(userN, pass, isAct, newSettings)// loremIpsum BadPassword false {ip: '127.0.0.1', serverName: 'kodluyoruz.org'}

//*****Object in Destructuring ile Kopyalanmasi
// Hatalı !!!
// let settings2 = settings
// settings2.userName = "Degisen Bilgi"
// Kopyalama tam gerceklesmedi,orjinal bilgi de degisti.
// console.log("settings : ", settings) // settings :  {userName: 'Degisen Bilgi', password: 'BadPassword', isActive: false, ip: '127.0.0.1', serverName: 'kodluyoruz.org'}
// console.log("settings2 : ", settings2) // settings2 :  {userName: 'Degisen Bilgi', password: 'BadPassword', isActive: false, ip: '127.0.0.1', serverName: 'kodluyoruz.org'}

//Dogru Kopyalama
let settings2 = { ...settings }
settings2.userName = "Degisen Bilgi"
console.log("settings : ", settings) // settings :  {userName: 'loremIpsum', password: 'BadPassword', isActive: false, ip: '127.0.0.1', serverName: 'kodluyoruz.org'}
console.log("settings2 : ", settings2) // settings2 :  {userName: 'Degisen Bilgi', password: 'BadPassword', isActive: false, ip: '127.0.0.1', serverName: 'kodluyoruz.org'}

// *****Array Destructuring
let score = [100, 200, 300, 400]
let [score1, score2, ...otherScore] = score
console.log(score1, score2, otherScore) // 100 200 (2) [300, 400]

// Kopyalama
let copyScore = [...score]
console.log(copyScore)
// !!!
copyScore[0] = 1
console.log(score) // [100, 200, 300, 400]

// Ornekler
// 1
// const foo = { a: 123, b: true }
// const a = foo.a;
// const b = foo.b;
// 2 - Destructuring
const foo = { a: 123, b: true }
const { a, b } = foo;

/**
 * En önemlisi destructuring bir fonksiyonun bir objeyi parametre olarak alması sırasında çok kullanışlıdır.
 * Yani fonksiyona parametre girerken de destructuring yapabiliriz;
 */
const cikarma = ({ sayi1, sayi2 }) => { // {Parametre} destructuring islemini temsil eder. Objeyi temsil etmez.
    // Bu satira dikkat
    return sayi1 - sayi2;
}
const sayilar = {
    sayi2: 3,
    sayi1: 5
}
cikarma(sayilar); // 2
//Cıkarma fonksiyonuna gelen sayılar objesinin içinde sayi1 ve sayi2 property'leri bulunup parçalanıp fonksiyon içinde kullanılabilir hale gelecektir. 

// Destructuring işlemi sırasında sıralama önemsizdir, yani fonksiyonu su şekilde yazmış olsaydık da bir şey değişmeyecekti.

const cikarma2 = ({ sayi2, sayi1 }) => {
    // Siralama farkli
    return sayi1 - sayi2;
}
// artık fonksiyon içinde obje propertyl'eri kullanılabilir.

// *****Destructuring Yapan Fonksiyona Gönderilen Obje Eksik Property İçeriyor İse Ne Olacak?
// Çıkarma işlemi için problem değil ama bölme işlemi için bu bir problem. Örneğin;

const bolme = ({ sayi1, sayi2 }) => {
    return sayi1 / sayi2;
}
const numbers = {
    sayi1: 8
    // dikkat sayi1 gonderdik ama sayi2 unuttuk
}
console.log(bolme(numbers));
// NaN yani 'Not a Number' yani NaN donecektir.
/**
 * Bölme işleminde sıralama önemli 
 * ama ayni zamanda ikinci sayı 0 veya hiçbir şey içermeyen null veya undefined olursa bölme işlemi tanımsız olur. 
 * Bu durumda da fonksiyon NaN döner.
 */

// Onlem
/*Fonksiyonu çağıran geliştiricinin böyle bir hata yapmasının önüne geçmek için fonksiyon içinde olmazsa olmaz,
 mutlaka değer içermesi gereken değişkenlere default yani varsayılan bir değer atayabiliriz.
*/
const bolme2 = ({ sayi1, sayi2 = 1 }) => {
    // default deger atadik
    return sayi1 / sayi2;
}
const figures = {
    sayi1: 8
    // yine ikinci sayiyi unuttuk
}
console.log(bolme2(figures));
// ama bu sefer sonuc 8, NaN degil

// *****Fazladan Gönderdiğimiz Bu Değerlere Ne Oluyor?
/* Destructuring sırasında açıkça belirmediğimiz değer fonksiyon içinde erişilemez. 
Örneğin burada fonksiyon parametresinde sayi2'ye varsayılan değer atamayı geç komple destructure yapmayı unuttuk.
*/
const bolme3 = ({ sayi1 }) => {
    // dikkat sayi2 unutuldu
    //return sayi1 / sayi2;
}
const figure = {
    sayi1: 8,
    sayi2: 4
    // ama sayi2 gonderdik
}
bolme3(figure);
// ReferenceError: sayi2 is not defined
/*Bu durumda ReferenceError: sayi2 is not defined yani sayı iki tanımlanmamış diye bir hata alırız, 
çünkü fonksiyona sayi2 göndersek bile fonksiyon içinde sayi2 ye olan erişimimizi tamamen kaybettik.
Bu durum bu örnekteki gibi iki tane değer içeren objelerde problem değil
ama eğer obje birçok değer içeriyor ise bu hata çok kez yapılan bir hata.Bu noktada spreading operator imdadımıza yetişiyor.
*/
// ***** Rest Operator
/*Örneğin fonksiyonumuz ikiden fazla değer alması gerekiyor ise ne olacak? 
Örneğin bir toplama fonksiyonumuz var bu fonksiyon 5 sayıyı toplayacak.*/

const toplama = ({ sayi1, sayi2 }) => {
    // dikkat sadece 2 sayi
    //return sayi1 + sayi2 + sayi3 + sayi4 + sayi5;
}
const sayilarr = {
    sayi1: 8,
    sayi2: 4,
    sayi3: 7,
    sayi4: 9,
    sayi5: 11
}
toplama(sayilarr);
//ReferenceError: sayi3 is not defined
/*Örneğin fonksiyona gönderdiğimiz obje 5 tane sayı içeriyor ama biz sadece ilk ikisini destructure yaptık.
Bu durumda sayi3 için bu şekilde hata alırız.ReferenceError: sayi3 is not defined
*/

/*
Ama Rest Operator ile diyebiliriz ki sayi1 ve sayi2'yi destructure yap.
Bu sefer de diğer sayıları kaybederiz. 
Bu durumda spreading operator ile diyebiliriz ki tamam destructuring yap ama geri kalan diğer sayıları da bana ver.
*/
const toplama2 = ({ sayi1, sayi2, ...args }) => {
    let sonuc = sayi1 + sayi2;
    for (let sayi in args) { // sayi -> key
        sonuc += args[sayi];
    }
    return sonuc;
}
const ssayilar = {
    sayi1: 8,
    sayi2: 4,
    sayi3: 7,
    sayi4: 9,
    sayi5: 11
}
console.log(toplama2(ssayilar)); // 39 doner
// args bir object
// for...in yerine map() veya reduce() fonksiyonları kullanarak bu örnek daha da iyi hale getirilebilir.

// Ornekler
//1
let [, pronoun, , namee] = ["Merhaba", "benim", "adım", "Mehmet"];
console.log(pronoun) // benim
console.log(namee) // Mehmet

//2
let person = { name: "Selin", city: "Ankara", favoriteColor: "aqua blue" };
let { name: fooo } = person;
console.log(fooo) // Selin