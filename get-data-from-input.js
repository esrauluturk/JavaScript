//Form Submit Devamı:
//INPUT icerisindeki degeri(value) almak
let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)


function formSubmit(event) {
    event.preventDefault()
    console.log("İşlem Gerçekleşti");
    //get input
    let scoreInputDOM = document.querySelector('#score')
    console.log(scoreInputDOM.value) //get value
    //bilgiyi localStorage ekleyelim.
    localStorage.setItem('score', scoreInputDOM.value)
}
//!!!input un name bilgisinin mutlaka olmasi gerekir.

// INPUT OLUSTURMA
//Dinamik olarak input olusturalim
var myInput = document.createElement("input");
//Ozellik eklemeleri yapalim.
myInput.setAttribute("id", "inputumuz");
myInput.setAttribute("type", "text");
myInput.setAttribute("value", "merhaba");
//HTML icine bu inputu yerlestirelim.
//Body icinde bir div olusturalim.
var myDiv = document.createElement("div");
//appendChild fonksiyonu ile input'u bu div'e ekleyelim.
myDiv.appendChild(myInput);

//INPUT DEGERI ALMA
var inputDeger = document.getElementById("inputumuz").value;
//Değeri alert olarak ekranda göstermek için;
window.alert(inputDeger)  // Değerimiz burada yazacak

//Alıştırmalar
//1. Bir input oluşturup yanına ekleyeceğimiz buton ile butona tıkladığımızda değerimiz alt satırda alalım.
function myFunction() {
    var x = document.getElementById("myInput").value;
    document.getElementById("myP").innerHTML = ("Değerimiz:" + " " + x);
}
//2.Bir validation form oluşturup e-mail, yaş ve isim bilgilerini standartlara uygun şekilde alalım.
function sampleFunction() {
    var at = document.getElementById("email").value.indexOf("@");
    var age = document.getElementById("age").value;
    var fname = document.getElementById("fname").value;
    submitOK = "true";

    if (fname.length > 10) {
        alert("The name may have no more than 10 characters");
        submitOK = "false";
    }

    if (isNaN(age) || age < 1 || age > 100) {
        alert("The age must be a number between 1 and 100");
        submitOK = "false";
    }

    if (at == -1) {
        alert("Not a valid e-mail!");
        submitOK = "false";
    }

    if (submitOK == "false") {
        return false;
    }
}