let items = [10, 20, 30, 40,]
console.log("items - ilk hali : ", items) //items - ilk hali :  (4) [10, 20, 30, 40]

//Array : Sona Eleman Eklemek ->push()
items.push(50)
console.log("50 : ", items) //50 :  (5) [10, 20, 30, 40, 50]

//Array : Basa Eleman Eklemek ->unshift()
items.unshift(5)
console.log("5 : ", items) //5 :  (6) [5, 10, 20, 30, 40, 50]

//Array : Sondaki Elemani Cikarmak ->pop()
items.pop()
console.log("50 silindi : ", items) //pop :  (5) [5, 10, 20, 30, 40]
//Cikarilan eleman hakkinda bilgi sahibi olmak icin bir degiskene atamak
let lastItem = items.pop()
console.log("lastItem : ", lastItem) //40
console.log("Dizinin son hali : ", items) //(4) [5, 10, 20, 30]

//Array : Bastaki Elemani Cikarmak ->shift()
let firstItem = items.shift()
console.log("firstItem : ", firstItem, ",items : ", items) //firstItem :  5 ,items :  (3) [10, 20, 30]

//Array : Icindeki Bir Ogenin Bilgisinin Degistirilmesi

//ilk elemanin degistirilmesi
items[0] = 5;
console.log(items) //(3) [5, 20, 30]

//son elemanin degistirilmesi
items[items.length - 1] = 1000;
console.log(items) //(3) [5, 20, 1000]

//Array : Olmayan bir index e veri atamaya calismak
items[10000] = 10000
console.log(items) //(10001) [5, 20, 1000, empty × 9997, 10000]

/**
 * ******splice() metot
   splice() metot diziye hem eleman eklemek için hem de eleman silmek için kullanılır. 
   Metodun ilk parametresi işlemin yapılacağı index numarasını, ikinci parametre ise kaç elemanın silineceğini belirtir.
   */
//1 - Ekleme
var sports = ['basketball', 'football', 'tennis'];
console.log(sports); // basketball, football, tennis
sports.splice(1, 0, 'baseball');
console.log(sports); // basketball, baseball, football, tennis
//2 - Silme
sports.splice(1, 2);
console.log(sports); // (2) ['basketball', 'tennis']

//Dizilerden pop(), shift() ve splice() metotlarıyla eleman silebiliriz.