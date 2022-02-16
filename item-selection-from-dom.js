//DOM üzerinden JavaScript kullanarak eleman seçmek için gereken methodlar

//index2.html ile calisilmistir.

//1--getElementsByTagName()

let title = document.getElementsByTagName('h2')
console.log(title); //HTML Collection doner
console.log(title.title);//id ile birlikte yazdik //<h2 id="title">Hello World!!</h2>


//2
let h2 = document.getElementsByTagName('h2')
console.log(h2.title.innerHTML); //Hello World!!
//2.1--Tum etiketleri getirmek
document.getElementsByTagName('*')


//3--getElementById()

let title2 = document.getElementById('title')
console.log(title2); //<h2 id="title">Hello World!!</h2>
console.log(title2.innerHTML); //Hello World!!
//3.1
console.log(title2.innerHTML = "Deneme"); //Deneme
//3.1.1 --Daha iyi bir kullanim
title2.innerHTML = "Degisen Bilgi"
console.log(title2.innerHTML) //Degisen Bilgi 
//Kullanicinin adres bilgisini guncellemek icin kullanilabilir.
//Eslesmezse null doner.


//*************querySelector() daha kullanisli***********
//4--querySelector()--Bir tane secer

let link = document.querySelector("ul#list>li>a")
//4.1--id sildikten sonra id ile ulasmaya calissak null ciktisi aliriz.
console.log(link) //<a href = "#">Link Bilgisi</a>   OR  null
console.log(link.innerHTML) //Link Bilgisi
//4.1.1
link.innerHTML = "Link Bilgisi Degisti"; //console.log ile yazdirmaya gerek yok. HTML de değişiyor.
//4.1.2
link.innerHTML += " Changed"; //Link Bilgisi Degisti Changed
//4.2--id ile erismek
let link2 = document.querySelector("#kodluyoruzLink")
link2.innerHTML += " Degisti"; //Link Bilgisi Degisti

//Link Style Degistirme
link.style.color = "red";

//class ekleme
link.classList.add('btn') //  <a href="#" class="btn" style="color: red;">Link Bilgisi</a>


//5--getElementsByName()

const emails = document.getElementsByName('e-posta');
console.log(emails) // Çıktı: NodeList [input]
//name değeri id'de olduğu gibi biricik bir değer taşımaz birden fazla eleman aynı name değerini taşıyabilir. Eğer biricik (uniq) bir değer vermeniz gerekirse id'yi kullanın.


//6--getElementsByClassName()

const kuslar = document.getElementsByClassName('kusu');
console.log(kuslar)
// Çıktı: HTMLCollection(3) [div.baykuş.kusu, div.güvercin.kusu, div.kartal.kusu]

//6.1--daha detaylı bir seçim
console.log(document.getElementsByClassName('kartal kusu'));
// Çıktı: HTMLCollection [div.kartal.kusu]


//7--querySelector()
/**
 * QuerySelector () yöntemi, CSS seçicilere dayalı olarak DOM'dan html elemanlarını seçmenize izin veren iki modern JavaScript yönteminden biridir. 
 * Bu yöntem ile hem css class'larını hem de id'lerini kullanabilirsiniz. 
 * Bunu yaparken class için ön ek olarak nokta ".", id'ler için kare "#" kullanmanız gerekir. Sayfada eşleşen ilk elemanı size döndürecektir. 
 * Belirtilen elemanın eşleşememesi durumunda geriye null dönecektir.
 */
const email = document.querySelector('#signup input[name="email"]');
console.log(email) //<input type="text" name="email"> //input collection


//8--querySelectorAll()

//querySelectorAll() metodu, QuerySelector () metodu ile aynı mantık ile çalışır 
//tek farkı eşleşen ilk elamanı döndürmek yerine eşleşen tüm elemanları bir NodeList objesi olarak döndürmesidir.
const elems = document.querySelectorAll('.bird, .animal');
console.log(elems.length); // 4


//Examples:

//signup id'li elemanın içindeki tüm input elemanlarını seçmek istersek;
const inputs = document.getElementById('signup').getElementsByTagName('input');
//OR
const inputs2 = document.querySelector('#signup').querySelectorAll('input');
console.log(inputs)  //HtmlCollection
console.log(inputs2) //NodeList

