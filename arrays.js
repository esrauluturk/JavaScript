//Diziler de object(nesne) tipindedir.
//Bir array'in içine yazabileceğimiz elemanların veri tipi (data type) önemli değildir. 

//Create
let domain = "kodluyoruz"
let isActive = false
let items = [1, 2, 3, isActive, domain]
console.log(items) //(5) [1, 2, 3, false, 'kodluyoruz']

//1
items = [1, 2, 3]
console.log(items) //(3) [1, 2, 3]

//2
items += ["merhaba", 6]
console.log(items) //1,2,3merhaba,6 //Tam istedigimiz sonuc olmadi, birlestirme islemi yapti.

//3 - Bos Liste
let emptyArray = [];

//4 - Liste Eleman Sayisi
items = [15, 25, 35, isActive, domain]
// Console a yazdirir
console.log(items.length)
//HTML e yazdirir
document.querySelector('#arrayInform').innerHTML = items.length; //5

//5 - Array Ilk Ogeye Ulasmak
console.log(items[0]) //15

//6 - Array Son Elemana Ulasmak
console.log(items[items.length - 1]) //kodluyoruz

//7 - Degisken icindeki bilginin Array Olup Olmadiginin Kontrol Edilmesi
console.log(typeof (items)) //object
console.log(Array.isArray(items)) //true

//8 - Array Icinde Ortadaki Elemana Ulasmak
console.log("Ortadaki : ", items[Math.floor(items.length / 2)]) //35

//Hangileri isArray -> True verir ?
console.log("[] : ", Array.isArray([]))//[] :  true
console.log("1 : ", Array.isArray(1)) //1 :  false
console.log("true : ", Array.isArray(true)) //true :  false

//Farkli ornekler
//let arr = [1,2,"bir string ifade",false,{title:"kodluyoruz"}];
/**
 * Dongu ile elemanlara erisim
 * let arr = [1,2,3,"dört","beş"];
   for (let i = 0; i < arr.length; i++) {
       console.log(arr[i]);
   }
 */

let arr = [1, 2, 3, ["dört", "beş", "altı"], 7, 8];
console.log(arr[2][0]); //undefined
console.log(arr[3][0]); //dört
console.log(arr[4]); //7
//Dizi elemanlarina erisim
arr = [1, 2, 3, "dört", "beş"];
arr.forEach((item, index) => {
    console.log(item, index);
});
/**
 * OUTPUT
 * 1 0
   2 1
   3 2
   dört 3
   beş 4
 */

/**
 * ******Array'in Let Veya Const İle Deklare Edilmesi Arasındaki Farklar******
   Array'leri tanımladığımız değişkenin let veya const ile deklare edilmesi arasında fark bulunmaktadır. 
   Let ile deklare ettiğimiz bir array daha sonra yeniden tanımlanabilir.
   let gunler = ['pazartesi','sali','carsamba'] 
   gunler = ['cuma','cumartesi','pazar'] 
   console.log(gunler); // ['cuma' , 'cumartesi' , 'pazar'] çıktısını alacağız. 
   Çünkü let kullanarak oluşturduğumuz bir array yeniden tanımlanabilir.
   ******Const******
   const gunler = ['pazartesi','sali','carsamba'] 
   gunler = ['cuma','cumartesi','pazar'] // 'TypeError: Assignment to constant variable' hatasını alırız. 
   Const ile deklare ettiğimiz bir array'i yeniden tayin edemeyeceğimizi belirtmektedir.

   Note : const ile deklare ettiğimiz bir array yeniden tayin edilemese de içerisindeki elemanlara erişme ve değiştirme noktasında let ile aynıdır.
 */