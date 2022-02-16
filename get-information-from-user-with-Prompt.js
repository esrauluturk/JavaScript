//***prompt ile Kullanıcıdan Bilgi Almak***
/**
 * 1
 * Prompt() kullanıcıya soru sorup klavyeden girilen bilgiyle işlem yapan, o bilgiyi döndüren bir window metodudur. 
 * alert() gibi Html üzerinde, HTML sayfasından bağımsız çalışır ve karşımıza diyalog penceresi şeklinde çıkar.
 * 2
 * prompt() yapısını bir değişken içine atmadığımız için istenilen girdiyi girip Tamam tuşuna bassak bile bize bir işlem dönmeyecektir 
 * ya da hafızasında girilen bilgiyi tutmayacaktır. 
 * Eğer prompt() metodumuzu bir değişken içine atarsak, vereceğimiz cevap o değişkenin bir değeri haline gelir.
 * 3
 * Kullanıcı Tamam düğmesini tıkladığında, giriş alanına girilen metin döndürülür. 
 * Kullanıcı herhangi bir metin girmeden Tamam'ı tıklarsa, boş bir dize döndürülür. Kullanıcı İptal düğmesini tıklarsa, bu işlev boş döndürür.
 */

//let fullName = "" //Bilgi atamak

//1
//let fullName = prompt()
//console.log(fullName)

//2
let fName = prompt("Lütfen Adınızı Giriniz: ")
console.log(fName) 

//HTML ciktisi olarak vermek
let greeting = document.querySelector("#greeting")
greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fName}</small>`


//Examples
function request()
{
  var word=prompt("Bir değer giriniz","lütfen sadece kelime giriniz..") //2-Placeholder
  document.write(word) //HTML output
}
request()

