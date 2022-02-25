//Cok Kullanilan Array Methodlari ve Array Icinde Array  
let items = [1, 2, 3, 4, 5]

//****Array Icınde Array****
let femaleUsers = ["Virgina", "Sylvia", "Jane"]
let maleUsers = ["Franz", "Nietzsche", "Camus"]

//Basa eleman eklemek
items.unshift(femaleUsers)
console.log(items) //(6) [Array(3), 1, 2, 3, 4, 5]

//Sona eleman eklemek
items.push(maleUsers)
console.log(items)//(7) [Array(3), 1, 2, 3, 4, 5, Array(3)]

//Eleman sayisinda Array(3), 1 eleman olarak sayilir.
console.log(items.length) //7

//Ilk elemana ulasmak
console.log(items[0]) //(3) ['Virgina', 'Sylvia', 'Jane']
console.log(items[0][0]) //Virgina
//Farkli Kullanim
console.log(items[0]["length"])//3
console.log(items[0].length) //3

//*Array Icerisinden Eleman Ayirmak -> splice(pos,item?)
let newItems = items.splice(1, 5)//1.indexten basla 5 eleman al
console.log("New Items : ", newItems) //New Items :  (4) [1, 2, 3, 4, 5]
console.log("items : ", items) //items :  (2) [Array(3), Array(3)]

//*Array Icerisindeki Elemanin Index Bilgisini Bulmak -> indexOf('value')
//Ekleme
items.unshift("Lorem")
items.push("ipsum")
//Index
console.log(items.indexOf("ipsum")) //3
console.log(items[items.indexOf("ipsum")]) //ipsum

//*Array Kopyalamak -> slice, [...ES6]
let copyItems = items
console.log(items) //(4) ['Lorem', Array(3), Array(3), 'ipsum']
copyItems.pop() // copyItems'dan bilgiyi cikarttim peki items'a yansidi mi
console.log("copyItems : ", copyItems) //copyItems : (3) ['Lorem', Array(3), Array(3)]
console.log("items : ", items) //items : (3) ['Lorem', Array(3), Array(3)] !!!!!!!!!!!!!!!!!!! //YANSIDI

let cikan1 = copyItems.pop()
console.log(cikan1) //(3) ['Franz', 'Nietzsche', 'Camus']
let cikan2 = copyItems.pop() //(3) ['Virgina', 'Sylvia', 'Jane']
console.log(cikan2)
console.log(copyItems) //['Lorem']
console.log(items) //['Lorem']

//Summary : Aslinda kopyasini olusturmuyormus.
//KOPYALAMAK NASIL OLUYOR?
items.unshift(femaleUsers) //(2) [Array(3), 'Lorem']
copyItems = items.slice() //SLICE -> KOPYALAMA YAPAR
copyItems.pop()
console.log("copyItems : ", copyItems) //copyItems :  [Array(3)]
console.log("items : ", items) //items :  (2) [Array(3), 'Lorem'] //YANSIMADI

//ES6 ve Sonrasinda Gelen Yeni Nesil Kopyalama
let es6Items = [...items]
console.log(es6Items) //(2) [Array(3), 'Lorem']

//*Iki Array Bilgisini Birlestirmek
//ES6 ile Birden Fazla Array i de Birleştirebiliriz.
let allUsers = [...femaleUsers, ...maleUsers]
console.log(allUsers) //(6) ['Virgina', 'Sylvia', 'Jane', 'Franz', 'Nietzsche', 'Camus']

//*Array icerisindeki bilgiyi String ' e Cevirmek -> toString, join
console.log(allUsers.toString()) //Virgina,Sylvia,Jane,Franz,Nietzsche,Camus
console.log(allUsers.join("---")) //Virgina---Sylvia---Jane---Franz---Nietzsche---Camus

//* Istedigimiz Index Bilgisine Eleman Eklemek -> splice(index,0,value)
allUsers.splice(allUsers.length, 0, "Anna")
console.log(allUsers) //(7) ['Virgina', 'Sylvia', 'Jane', 'Franz', 'Nietzsche', 'Camus', 'Anna']
allUsers.splice(allUsers.length - 1, 0, "Bovari")
console.log(allUsers) //(8) ['Virgina', 'Sylvia', 'Jane', 'Franz', 'Nietzsche', 'Camus', 'Bovari', 'Anna']
allUsers.splice(Math.floor(allUsers.length / 2), 0, "Lotte") //Ortasina eklemek
console.log(allUsers) //['Virgina', 'Sylvia', 'Jane', 'Franz', 'Lotte', 'Nietzsche', 'Camus', 'Bovari', 'Anna']

//***includes()
//Includes metodu bir elemanın dizi içerisinde bulunup bulunmadığını kontrol eder. Boolean (true/false) olarak çıktı alınır.
const alisverisListem = ["elma", "ekmek", "süt"];

const elmaVar = alisverisListem.includes("elma");
console.log(elmaVar); //true

const armutVar = alisverisListem.includes("armut");
console.log(armutVar); //false

const elmaVarMı = alisverisListem.includes("Elma");
console.log(elmaVarMı); //false

/**
 * ***slice()
Slice (dilimleme) metodu bir dizinin bir kısmının kopyasıyla yeni bir dizi oluşturmamıza olanak sağlıyor.
Parantez içerisine ise kopyalamak istediğimiz elemanların aralığını başlangıç ve bitiş indeksleri olacak şekilde iki parametre olarak giriyoruz.
Bitiş indeksindeki değerin aralığa dahil olmadığını unutmayalım.
Bu metot uygulandığı dizinin orijinal halini değiştirmiyor bu yüzden yeni oluşacak diziyi farklı bir değişkende saklıyoruz.
 */
const yeniAlisverisListem = alisverisListem.slice(0, 2);
console.log(yeniAlisverisListem); //(2) ['elma', 'ekmek']

/**
 * ***join()
   Bazen Dizi içerisinde topladığınız verileri, string (sözdizimi) olarak yazdırmak isteyebilirsiniz. Join metodu bu konuda yardıma yetişiyor.
   Parantez içerisine dizi elemanları arasına koymak istediğimiz string'i parametre olarak girebiliriz. Eğer bir parametre vermezsek virgül bastırır.
 */
const stringAlisverisListem = alisverisListem.join();
console.log(stringAlisverisListem); //elma,ekmek,süt
const stringAlisverisListem2 = alisverisListem.join(" kiraz ");
console.log(stringAlisverisListem2); //elma kiraz ekmek kiraz süt

//***concat()
//Bu metot farklı dizileri birleştirip tek bir diziye çevirmemizi sağlıyor.
const yiyecekler = ["pasta", "baklava", "puding"];
const icecekler = ["su", "kahve"];

const menu = yiyecekler.concat(icecekler);
console.log(menu) //(5) ['pasta', 'baklava', 'puding', 'su', 'kahve']

//***.forEach()
// Malzemeler dizisindeki her bir malzemeyi ve onun indeksini konsola yazdıran bir kod yazalım:

const malzemeler = ["yumurta", "un", "süt"];

malzemeler.forEach(function (malzeme, malzemeIndeksi) {
    console.log(malzeme, malzemeIndeksi);
});
/**
 * OUTPUT
 * yumurta 0
   un 1
   süt 2
 */

/**
 * ***map()
Map metodu da forEach gibi kendisine verilen fonksiyonu dizinin her elemanı için uygular fakat forEach'ten farklı olarak sonucu yeni bir dizide tutar. 
Orijinal dizi olduğu gibi kalır.
*/
// Bir dizideki sayıların 5 katından oluşan başka bir dizi oluşturalım:

const sayilar = [1, 2, 3];

let sayilarin5kati = sayilar.map(function (sayi) {
    return sayi * 5;
});

console.log(sayilarin5kati); //(3) [5, 10, 15]
console.log(sayilar); //(3) [1, 2, 3]

//***some()
const numbers = [4, 5, 6];

// sonucu gorebilmek ciktiyi sonuc adli degiskende tutalim:
const sonuc1 = numbers.some(function (sayi) {
    return sayi > 5;
});

console.log(sonuc1); //true
// Dizi içerisinde 5'ten büyük bir eleman bulunduğu için çıktıda "true" görmeyi bekleriz.

const sonuc2 = numbers.some(function (sayi) {
    return sayi < 3;
});

console.log(sonuc2); //false

/**
 * ***.every()
every metodu belirtilen bir koşulun dizideki tüm elemanlara uyup uymadığını kontrol ederiz.
some metodunda olduğu gibi, Boolean yani true veya false olarak döner.
True dönebilmesi için dizideki tüm elemanların fonksiyondaki koşula uyması gerekir.
 */
const nmbs = [4, 5, 6];

const result1 = nmbs.every(function (sayi) {
    return sayi > 3;
});

console.log(result1);//true
// Dizideki tüm sayılar 3'ten büyük olduğu için bu sonucun true dönmesini bekleriz.


const result2 = nmbs.every(function (sayi) {
    return sayi > 5;
});

console.log(result2); //false
// Dizideki tüm sayılar 5'ten büyük olmadığı için sonucun false dönmesini bekleriz.


const result3 = nmbs.every(function (sayi) {
    return sayi > 7;
});

console.log(result3);//false
// Dizideki hiçbir sayı 7'den büyük olmadığı için sonucun false dömmesini bekleriz.

/**
 * ***filter()
filter metodu bir dizi içerisindeki belirli bir koşulu sağlayan elemanlar ile yeni bir dizi oluşturmamıza dolayısıyla dizi elemanlarını filtrelememize yarıyor.
Yeni oluşacak diziyi bir değişkende saklıyoruz.
Orijinal dizi bozulmuyor.
 */
const nmbrs = [1, 2, 3, 4, 5];

const filtrelenmisSayilar = nmbrs.filter(function (sayi) {
    return sayi > 3;
});

console.log(filtrelenmisSayilar); //(2) [4, 5]
// Orijinal diziyi 3'ten büyük olan sayılar için filtrelediğimizde yeni oluşacak dizi [4,5] olacaktır.

console.log(nmbrs);//(5) [1, 2, 3, 4, 5]
// Orijinal dizi bozulmayacağından çıktıda [1,2,3,4,5] olarak görürüz.

/**
 * ***find()
Bu metot belirtilen koşula uyum sağlayan dizi elemanını bulmamızı sağlar.
Diğer metotların aksine find metodu elemanın kendisini döner.
Koşulu sağlayan birden fazla eleman varsa, bulduğu ilk elemanı döner.
Koşulu sağlayan bir eleman bulamazsa undefined döner.
 */
const figures = [4, 5, 6, 7];

const bulunacakEleman1 = figures.find(function (sayi) {
    return sayi === 5;
});
console.log(bulunacakEleman1); //5
// Dizi içerisinde 5 eleman olarak bulunduğu için çıktıda elemanın kendisini yani 5 görmeyi bekleriz.


const bulunacakEleman2 = figures.find(function (sayi) {
    return sayi > 5;
});
console.log(bulunacakEleman2);//6
// Dizi içerisinde 5'ten büyük birden fazla eleman olduğu için koşula uyan ilk elemanı yani 6'yı görmeyi bekleriz.


const bulunacakEleman3 = figures.find(function (sayi) {
    return sayi < 3;
});
console.log(bulunacakEleman3);//undefined
// Dizi içerisinde 3'ten küçük bir eleman olmadığı için çıktıda undefined görmeyi bekleriz.

/**
 * ***sort()
Bu metot, dizi içerisindeki elemanları sıralamaya yarar.
Orijinal dizi sıralanmış şekilde döner. (Yani dizi mutate eder.)
Eğer parametre olarak bir fonksiyon verilmezse dizi elemanları string'e çevrilir ve UTF-16 değerlerine göre sıralanır.
Artan veya azalan olarak sıralamak için farklı bir yol izlenmelidir.
 */

//Varsayılan haliyle (parametre vermeden) sıralamak yapmak istediğimizde:
const fgrs = [3, 5, 2, 10, 4];

fgrs.sort();
console.log(fgrs); //(5) [10, 2, 3, 4, 5]
// Çıktı olarak [10, 2, 3, 4, 5] alırız. 
//(Sayıların string halleri UTF-16 değerlerine göre sıralandıkları için)

//Parametreli :
fgrs.sort(function (a, b) {
    return b - a;
});
console.log(fgrs); //(5) [10, 5, 4, 3, 2]

/**
 * ***reduce()
Bu metot dizimizi yalnızca bir değere indirger.
Parantez içerisine parametre olarak bir fonksiyon ve accumulator'ün (toplayıcının) başlangıç değeri girilir.
Bu metot orijinal diziyi değiştirmez. (Mutate etmez.)
Tam olarak ne yaptığını anlamak için örnekleri inceleyelim.
 */
const fs = [10, 20, 30];

// Dizi içindeki sayıları toplayarak indirgeyecek bir fonksiyon yazalım:
function indirgeyici(akumulator, sayi) {
    return akumulator + sayi;
}

// Bu fonksiyonu ve toplamaya 0'dan başlayacağımızı belirten 0 sayısını metodumuza parametre olarak girelim ve sonucu bir değişkende tutalım:
const sc1 = fs.reduce(indirgeyici, 0);

console.log(sc1); //60
//0 + 10 + 20 + 30 = 60 olacağından çıktı olarak 60 bekleriz.


// Eğer akümülatorümüzü 0 yerine 5'den başlatsaydık çıkabilecek sonucu görelim:

const sc2 = fs.reduce(indirgeyici, 5);

console.log(sc2); //65
// 5 + 10 + 20 + 30 = 65 olacağından çıktı olarak 65 bekleriz.

//*** Dizi İçerisinde Dizi Oluşturma***
const piknikSepetim = [
    ["elma", 3],
    ["muz", 5],
    ["ekmek", 2]
];
//Burada piknik sepetindeki bir elemanlara ulaşmak istersek:
const ilkEleman = piknikSepetim[0];  // ["elma",3]
const ikinciEleman = piknikSepetim[1] // ["muz",5]
const ucuncuEleman = piknikSepetim[2] // ["ekmek", 2]

const kacElma = piknikSepetim[0][1]; // 3
const kacMuz = piknikSepetim[1][1]; // 5
const kac = piknikSepetim[1][0]; // 'muz'


//Examples :
let kalemlik = new Array();

// Aynı metotla kalemlik dizisi içerisinde yeni diziler oluşturabiliriz:

kalemlik[0] = new Array("Silgi", 2, "mavi");
kalemlik[1] = new Array("Kalem", 3, "kırmızı");
kalemlik[2] = new Array("Cetvel", 1, "siyah");

console.log(kalemlik);
// Çıktı olarak [["Silgi", 2, "mavi"], ["kalem", 3, "kırmızı"], ["Cetvel", 1, "siyah"]] şeklinde 3 elemanlı bir dizi döner.

//Bu dizi içerisindeki silgiyi görüntülemek istersek:
console.log(kalemlik[0][0]); //Silgi
// Kalemlik dizisinin ilk elemanının birinci elemanı döner yani "silgi" dönmesini bekleriz.


// Kalemlik içerisindeki silgilerin rengini görüntülemek istersek:
console.log(kalemlik[0][2]); //mavi
// renk kalemlik dizisinin ilk elemanının üçüncü elemanı olduğundan "mavi" döner.

//Sorular
/*1. Uygun dizi metotlarını kullanarak  yukarıda verilen dizinin elemanları içinde 10'dan büyük olan elemanların 
5'er katından oluşan yeni bir dizi oluşturun. (sonuç [55, 75, 85] olmalı.)
*/
let dizi = [2, 5, 8, 11, 15, 17];
const filtreDizi = dizi.filter(function (sayi) {
    return sayi > 10;
});
let beskati = filtreDizi.map(function (sayi) {
    return sayi * 5;
})
console.log(beskati) //[55, 75, 85]

/**
 * 2.Soru
 * Uygun dizi metotlarını kullanarak, dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.
 * Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.
 */
let ars = [3, 6, 9, 14, 16];
const s1 = ars.some(function (sayi) {
    return sayi > 5;
});
console.log(s1 ? "Beşten büyük bir eleman mevcut." : "5'ten büyük eleman mevcut değil.");

/**
 * 3. Soru :
 * Uygun dizi metodunu kullanarak verilen dizinin elemanlarının çarpımının sonucunu (24) veren bir fonksiyon yazınız.
 */
let ar = [2, 3, 4];
function multiplication(mult, number) {
    return mult * number
}
const conc = ar.reduce(multiplication, 1)
console.log(conc) //24

//Hackerrank
//1
function getSecondLargest(nums) {
    // Complete the function
    nums.sort(function (a, b) {
        return b - a;
    })
    const findNumber = nums.find(function (num) {
        return num < nums[0] //Returns the first larger number it finds
    })
    return findNumber

    /*2.YOL
    const max = Math.max(...nums)
    return Math.max(...nums.filter(x=>x!===max))
    3. Daha Kısa Yazım
    return Math.max(...nums.filter(x=>x !=== Math.max(...nums)))
    */
    
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);

    console.log(getSecondLargest(nums));
}