//***Liste icerisindeki son elemana ulasmak veya eleman eklemek***
//index.html ile calisildi.

//Son/Ilk elemana ulasmak

let item = document.querySelector("ul#list>li:last-child")
console.log(item) //<li>Aspernatur!</li>

console.log(document.querySelector("ul#list>li:first-child")) //<li>Lorem.</li>
console.log(document.querySelector("ul#list>li:first-child").innerHTML) //Lorem.
console.log(document.querySelector("ul#list>li:first-child").innerHTML = "changed!!!") //changed!!!

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "Changed Last Item"

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "Changed First Item"

//Sona Yeni oge eklemek

let ulDOM = document.querySelector("ul#list")//Listeye ulastik
let liDOM = document.createElement('li')
liDOM.innerHTML = "Kendi Olusturdugumuz Oge"
ulDOM.append(liDOM) //en sona ekler
console.log(ulDOM.lastChild)//like collection

//Basa eklemek

ulDOM.prepend(liDOM)

//Examples
var one = document.getElementById("walterwhite"); //<li id="walterwhite">Walter White</li>
var two = document.getElementsByClassName("alternate"); //HTMLCollection
//two değişkeninin  "alternate" sınıfına sahip tüm elementleri kırmızı renk yapılır.
for (var i = 0; i < two.length; i++) {
    two[i].style.color = "red";
}

//3
//!!! Ilk eslesen ul etiketini getirir.
var liste = document.querySelector("ul");

var urun = document.querySelector("#veri");
var ekle = document.querySelector("#ekle");
ekle.addEventListener("click", function () {
    // createElement ile yeni bir listItem (li) oluşturuyoruz
    var li = document.createElement("li");

    // Input ile gelen veriyi "li" içerisine metin olarak giriyoruz.
    li.textContent = veri.value;

    // appendChild ile oluşturduğumuz elementi "liste" isimli değişkenimizin içerisine ekliyoruz.
    liste.appendChild(li);

    // Veri inputu içerisindeki metni siliyoruz.
    veri.value = "";
});
/** append() vs. appendChild()
 * Append ile birden fazla ekleme yapabilirsiniz ama appendChild ile sadece bir item ekleyebirsiniz.
 * Append hiç bir değer dönmez ancak appenChild Node Objesi döner.
 * Append ile Node Objesi ve DOMString'i eklenebilir. appendChild ile sadece Node Objesi eklenebilir.
 */

