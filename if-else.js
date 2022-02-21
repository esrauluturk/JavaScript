//*** Karar Yapıları ***

//Kullanıcı bilgisi varsa ekrana ismini yazdır

let username = prompt("Kullanıcı Adınızı Giriniz : ")

if (username) {
    console.log(`Kullanıcı Bilginiz : ${username}`)
} else {
    console.log("Bilgi Girilmedi")
}
/*Length, Boolean yapısı ile beraber gelir.
"if (username.length > 0)" yazmak yerine "if (username.length)" yazabiliriz.
if (username.length) yerine if (username)
*/

//Examples:
//1-İki sayıdan büyük olanı bulalım
var x = 5;
var y = 7;

if (x > y) {
    console.log(x + " sayisi" + y + " sayısından büyüktür.");
}

else {
    console.log(y + " sayisi" + " " + x + " sayısından büyüktür.");
}

/**
 * 2.Örnek: Vize ve final notları belli olan bir öğrencinin yıl sonunda dersten geçip geçmediğini hesaplayalım:

Şartlar:

Öğrencinin vize notunun %30'unu final notunun %70'ini alalım.
Vize ve final notunun toplamından doğan not ortalaması eğer 0-30 aralığındaysa KALDINIZ (FF) yazdıralım.
31-49 aralığındaysa DC - KOŞULLU yazdıralım.
50- 84 aralığındaysa CC - GEÇTİNİZ! yazdıralım.
85-100 aralığındaysa Notunuz AA yazdıralım.
 */

var vizeNot = prompt("Lütfen vize notunuzu giriniz : ")
var finalNot = prompt("Lütfen final notunuzu giriniz : ")

var average = (vizeNot * 0.3) + (finalNot * 0.7)

if (average >= 0 && average <= 30) {
    console.log(`Not ortalamanız : ${average} KALDINIZ (FF)`)
} else if (average >= 31 && average <= 49) {
    console.log("Not ortalamanız: " + average + " DC - KOŞULLU ")
} else if (average >= 50 && average <= 84) {
    console.log(`Not ortalamanız : ${average} CC GEÇTİNİZ`)
} else if (average >= 85 && average <= 100) {
    console.log("Not ortalamnız: " + average + " AA - GEÇTİNİZ ");
}

/**
 * 3.Örnek Tahmin Oyunu: Bilgisayar tarafından 10 'a kadar tutulmuş olan rastgele sayıyı bulalım:
 */
var randomNum = Math.floor(Math.random() * 10);
//var guess = document.getElementById("txtNumber")
var guess = prompt("Bir sayı gir ve rastgele sayıyı bulmaya çalış!");
if (guess === randomNum && guess != null) alert("Bildin!!!");
else if (guess == "") alert("Boş giriş yaptınız!");
else if (guess == null) alert("Giriş yapmaktan vazgeçtiniz!");
else {
    alert("Bir daha denee :(, Random sayi: " + randomNum);
}

/**
 * 4.Örnek Verilen formüle göre vücut kitle indeksi hesaplayan ve hesapladığı değere göre yazı yazan bir program yazalım. Programda yazılmış kısımları okuyup eksik kısımları tamamlayın.

Fonksiyon parametreleri prompt ile kullanıcıdan alınmalı.

Formül: vki = kg/(m * m)

İstenilenler:

Prompt ile kullanıcıdan bilgi almak
Verilen formülü uygun yere yazmak
Formülde metre cinsinden istendiği için diyalog kutucuğuna metre cinsinden örnek 1.66 yazarak kullanıcıya rehberlik etmek
 */
function vkiHesapla(weight, height) {
    var vki = weight / (height * height)
    if (vki < 18.5) return alert(`Vücut kitle indeksiniz: ${vki}, değerleriniz düşüktür`);
    if (vki >= 18.5 && vki <= 24.9) return alert(`Vücut kitle indeksiniz: ${vki}, normal değerdesiniz`);
    if (vki >= 25.0 && vki <= 29.9) return alert(`Vücut kitle indeksiniz: ${vki}, kilolusunuz`);
    if (vki >= 30) return alert(`Vücut kitle indeksiniz: ${vki}, aşırı kilolusunuz`);
    return alert("Girdiğiniz değerleri kontrol ediniz");
};

var weight = prompt("Kilonuzu Giriniz : ")
var height = prompt("Boyunuzu giriniz", "Örnek : 1.66")

vkiHesapla(weight, height);
