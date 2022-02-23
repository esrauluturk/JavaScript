// Events

//***MOUSE EVENT

//Dinlemek istedigim seylerin bir listesi var.(Or : click)
let helloworld = document.querySelector("#helloworld") // Access to DOM
helloworld.addEventListener("click", function () {
    console.log("Tıklandı!")
})

// 2. YOL
let text = document.querySelector("#text")
//text.addEventListener("click", domClick)
text.addEventListener("mouseover", changeColor)

function domClick() {
    console.log("Tıklandı :)")
    console.log(this) //<h1 id="text">Lorem Ipsum</h1>
    console.log(this.innerHTML) //Lorem Ipsum
    console.log(this.innerHTML = "Tıklandığı için Bilgi Değişti :>") //Tıklandığı için Bilgi Değişti :>
    console.log(this.style.color = "red") //console a red yazar. HTML'de "Tıklandığı için Bilgi Değişti :>" rengi degisir.
    this.style.color = "green" // metnin sadece rengi degisir 
    this.style.color == "green" ? this.style.color = "black" : this.style.color = "green"
    document.getElementById("message").innerHTML = "NEW FORM";

}

function changeColor() {
    console.log("Etkinlik Çalışıyor")

    this.style.color == "red" ? this.style.color = "green" : this.style.color = "red"
}

//***Keyboard Event

//id=fname olan nesne çağrılarak keyboard değişkenine atandı
const keyboard = document.querySelector('#fname');
//keyboard isimli değişkene "cut" etkinliği atandı ve fonksiyon ismi parametre olarak atandı
keyboard.addEventListener("cut", cuttingFunction);
//cuttingFunction isimli fonksiyon ile form inputuna yazılan girdileri klavye ctrl+c ile kesildiğinde etkinlik çalışmaktadır
function cuttingFunction(event) {
    console.log("etkinlik tipi: ", event.type)
}

//console ekranı : etkinlik tipi: cut

//***Form Etkinlikleri

//id=select olan nesne çağrılarak color değişkenine atandı
const color = document.querySelector("#select");
//color değişkenine change etkinliği etkinliği atandı ve fonksiyon ismi parametre olarak atandı
color.addEventListener('change', selectBox);

//selectBox isimli fonksiyon ile selectbox her seçildiğinde etkinlik tipi =change ve değeri consola yazılmaktadır 
function selectBox(event) {
    console.log("Etkinlik tipi : " + event.type);
    console.log("deger : " + event.target.value);
}
// Selectbox içinde "blue" değerini seçtiğimiz takdirde;
// ekran çıktısı: Etkinlik tipi : change, deger : blue



//***1.Kabarcıklanma Etkinliği(Event Bubbling)
/**
 * İç içe elementlerde ,örneğin üzerine tıklanan bir eleman kendisini kapsayan elemanı da yazar. 
 * Buna event bubbling denir. İçten dışa bir aktarım söz konusudur.
 * 
 * Kullanım şekli :
 * element.addEventListener(event, function);
 */

// iç içe elementler çağrıldı  
const selectBox1 = document.querySelector('#selectColor');
const button = document.querySelector('#button');
const form = document.querySelector('.inputText');
const cerceve = document.querySelector('.container');
selectBox1.addEventListener('click', function () {
    console.log("selectBox");
})
form.addEventListener('click', function () {
    console.log("form");
})
cerceve.addEventListener('click', function () {
    console.log('cerceve');
})
/**
 * Burada class=container olan div elementi içerisinde 3 farklı "id" numarası olan elementler bulunmaktadır. 
 * Container kapsayan küme, diğer elementler ise bu küme içerisindeki ayrık kümelerdir. 
 * Dolayısıyla diğer üç elemente tıklandığında class=container olan div elementini tutan çerçeve değişkeni, tıklanan elementi tutan değişken ile ekrana yazılacaktır. 
 * Örneğin form elementine tıklandığında; ekran çıktısı: form çerçeve seklinde olacaktır.
 */



//***2.Yakalama Etkinliği(Event Capturing)
/**
 * İç içe elementlerde, Örneğin üzerine tıklanan bir eleman kendisinin içindeki elemanı da yazar. Kabarcıklanma etkinliğinin tam tersi şeklinde çalışır. 
 * Hedef dıştan içe doğrudur. Bir önceki örnekteki çıktının tam tersi olarak ; ekran çıktısı çerçeve form seklindedir.
 * Kullanım şekli :
   element.addEventListener(event, function, useCapture);
   useCapture parametresi "True" ve "False" değerleri almaktadır. Diğer tüm kullanımı kabarcıklanma etkinliği ile aynıdır.
   
    ***event.stopPropagation()
    Bir etkinliğin özelliğini durdurmak için kullanılır. Bir fonksiyon parametresi olarak girilen "event" e bu etkinlik atanarak kullanılır.
    Kullanımı:
    event.stopPropagation();

    ***event.preventDefault()
    Bir HTML elementinin varsayılan eylemini tamamen engellemek için bu eylem kullanılır. Bir fonksiyon parametresi olarak girilen "event" e bu etkinlik atanarak kullanılır.
    Kullanımı:
    event.preventDefault();
 */