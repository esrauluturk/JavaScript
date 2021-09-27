//Örnek - 1

let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log(
    "Fiyat: ", price,
    "KDV Orani: ", tax,
    "KDV Tutari: ", priceTax,
    "Fiyat: ", total
);

//Artırma - Azaltma 

let counter = 320
counter += 1
counter++;
counter -= 1
counter--;
counter -= 10
counter *= 10
counter /= 2
console.log(counter)

//İşlem Önceliği

console.log(2 + 3 * 10)    //32
console.log((2 + 3) * 10) //50


//Mod % (kalan) Alma

console.log(3 % 2)   //Tek
console.log(15 % 2)  //Tek
console.log(14 % 2)  //Çift

//Üs Alma ** :

console.log(3 ** 5)  //243

//Math functions

console.log("Aşağı Yuvarlama: ", Math.floor(1.9)) //1
console.log("Yukarı Yuvarlama: ", Math.ceil(1.9)) //2
console.log("Yakina yuvarlama: ", Math.round(1.5))//2
console.log("Yakına yuvarlama: ", Math.round(1.4))//1

//String veriyi Number türüne dönüştürmek -- Number() Constructor

let stringNumber = "11"
console.log(stringNumber) //string
let newNumber = Number(stringNumber)
console.log(newNumber)    //number
console.log("Number Constructor içine bilgi gönderildi: ", Number("111"))

//Prefix Form

let miktar = 1;
let x = ++miktar;
alert(x); // 2
console.log(miktar);//2

//Postfix Form

let miktar = 1;
let x = miktar++;
alert(x); // 1 
console.log(miktar);//2
