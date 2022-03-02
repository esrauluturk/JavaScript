// Object Key - Value

// let laptop1 = [] //Array
// let laptop1 = {} //Object

//[key1:1, key2:2, key3:3, ]
//Dogru Anahtar Bilgisi Olusturmak
let laptop1 = {
    brand: "Apple",
    model: "MackBook Pro",
    "2kg": 2,
    modelName: "Mackbook Pro"
}

console.log(laptop1) // {brand: 'Apple', model: 'MackBook Pro', 2kg: 2}
// Elemana erisim
console.log(laptop1.brand) // Apple
console.log(laptop1.model)
console.log(laptop1["2kg"]) // 2
console.log(typeof (laptop1["2kg"])) // number


// Bilgilere ekleme yapmak
// Property lere iki sekilde de ulasilabilir.
console.log(laptop1.brand, laptop1["brand"]) // Apple Apple
console.log(laptop1.model, laptop1["model"])

// Anahtar bilgisine yeni deger eklemek
laptop1.brand = "Mac"
console.log(laptop1) // {brand: 'Mac', model: 'MackBook Pro', 2kg: 2, modelName: 'Mackbook Pro'}
laptop1["brand"] = "Mac1"
console.log(laptop1) // {brand: 'Mac1', model: 'MackBook Pro', 2kg: 2, modelName: 'Mackbook Pro'}

// Yeni bilgi eklemek
laptop1.version = "10.15.7"
console.log(laptop1) // {brand: 'Mac1', model: 'MackBook Pro', 2kg: 2, modelName: 'Mackbook Pro', version: '10.15.7'}

// Anahtar bilgilerine ulasmak (keys) -> Object.keys(item)
keys = Object.keys(laptop1)
console.log(keys) // ['brand', 'model', '2kg', 'modelName', 'version']
console.log(Object.keys(laptop1)) //  ['brand', 'model', '2kg', 'modelName', 'version']

keys.forEach(key => {
    console.log(key)//key
    console.log(laptop1[key]) //value
});

// Value bilgilerine ulasmak (values) -> Object.values(item)
console.log(
    Object.values(laptop1) // ['Mac1', 'MackBook Pro', 2, 'Mackbook Pro', '10.15.7']
)

let values = Object.values(laptop1)

values.forEach(value => {
    console.log("value : ", value)
})

// Bilgileri tek bir yerde tutup daha sonra kullanilabilir hale getirebiliriz.
let setting = {
    password: 1234,
    userName: 'user1'
}

/**
 * Extra Information
 * Property bir "anahtar(key): değer(value)" çiftidir ve burada key("property name" de denir) bir string(yazı tipinde), value herhangi bir veri tipi olabilir.
 */

//Bir property’i kaldırmak için silme(delete) operatörünü kullanabiliriz:
let car = {
    brand: "BMW",
    year: 2020,
    "is manual": true,
};
delete car.year;
console.log(car) //{brand: 'BMW', is manual: true}

// *****Square brackets kullanımı
let person = {};                     // set (oluştur)
person["likes sea"] = true;          // get (getir)
console.log(person["likes sea"]);    // true (doğru)
delete person["likes sea"];          // delete (sil)

// Köşeli parantezli yazım aynı zamanda property name getirmede kullanılabilir:
let animal = {};           // set
let key = "flies";         // key atama
animal[key] = true;        // value atama

// Burada, değişken(variable) key runtime(çalışma zamanında) hesaplanabilir veya kullanıcı girdisine bağlı olabilir.
// Sonrasında property’ye erişmek için kullanabiliyoruz. Bu bize kullanımda esneklik sağlıyor.
let persons = {
    name: "Jack",
    age: 20,
};
let keyss = prompt("Kişinin hangi özelliğini öğrenmek isterdiniz?", "name");
// değişken ile erişim
alert(persons[keyss]);      // Jack (prompt’a “name” yazarsak erişeceğimiz değer)

// *****Computed property kullanımı
/*Bir obje oluştururken, key'ler için köşeli parantezler yardımıyla dinamik değerler(variable) kullanabiliriz. 
Buna hesaplanmış özellikler(computed properties) denir.
Computed properties, objedeki hangi property'nin güncelleneceğini dinamik olarak seçmemize olanak tanır.*/

function objectify(key, value) {
    return {
        [key]: value
    }
}
console.log(objectify("name", "Anna"));   //  {name: "Anna"} atanmış yeni değer
//Key, square brackets [ ] içine alındığı sürece herhangi bir ifade olabilir.

/**
 *****Kompleks Objeler Kullanımı
Objelerin asıl amaçlarından biride yazılan uygulamaların state'lerini yönetmektir. 
Bu nedenle kompleks uygulamalarda da kompleks objeler kullanılmaktadır.  
 */
let state = {
    users: [
        { name: "Brock", age: 25, favoriteColor: "red" },
        { name: "Jessie", age: 17, favoriteColor: "yellow" },
        { name: "James", age: 41, favoriteColor: "blue" },
        { name: "Winnie", age: 18, favoriteColor: "purple" }
    ],
    settings: {
        version: "1.0.5",
        DNS: "105.xx.xx.xx",
        website: "https://www.example.com/"
    },
    banList: ["Ash", "Angelica", "Tom", "Jerry"]
}
/**
 * Yukarıda gördüğünüz gibi obje içinde her türlü veri türünü saklayabiliyoruz. 
 * Örnekteki "users" property'si içinde obje tutan bir array'e denk gelmekte. 
 * "settings" property'sinde ise obje içinde obje tutulmakta. 
 * "banList" property'sinde ise basit bir array tutulmakta.
 */
//"banList" propertysinde 3. elemana ulaşmak istersek şu şekilde ulaşabiliriz.
alert(state.banList[2])

//"settings"lerdeki "website" değerine ulaşmak istersek şu şekilde ulaşabiliriz.
alert(state.settings.website)

//"user"larda James'in en sevdiği rengi öğrenmek istersek, o veriye şu şekilde ulaşabiliriz.
alert(state.users[2].favoriteColor)

/**
 ****** JSON Veri Tipini Obje Olarak Kullanmak
Değişmeyen ve statik olarak kullanmanız gereken verileri ".json "dosya eklentisi ile bir dizinde kaydedip uygulamanızda 
bu değişmeyen verilerden yararlanmak isteyebilirsiniz. 
Projenizde JSON dosyalarıyla çalışabilmeniz için önce onu dosyada import etmeniz ve obje şekline çevirmeniz gerekmektedir. 
Bu işlem çok basit bir şekilde yapılabilir.

const veri = require("./dosyanizin/dizini/veri.json") // Bu işlemde require fonksiyonu ile dosyanızı import etmektesiniz

Bu işlemden sonra veri bileşenini obje şeklinde kullanabilirsiniz. 
 */

/**
 * Summary
* Objeler, birkaç özel niteliğe sahip ilişkilendirilebilir array(dizi)'lerdir.
* Key / value şeklinde property'leri saklar.
* Key ifadesi string veya sembol olmalıdır.
* Value ifadesi herhangi bir değer alabilir.
* Belli bir property'e erişmek için kullanabileceklerimiz: 
  * Dot notation: obj.property 
  * Square brackets notation obj[“property”]. Bu özellik key'in obj[varWithKey] gibi bir değişkenden alınmasına izin verir.

Bu zamana kadar bahsettiğimiz objeler “plain object” olarak isimlendirilir. 

 */

// *****Obje Metodları
/* Plain objects için aşağıdaki metotlar(method) kullanılabilir:

Object.keys(obj)      // Key’lerden oluşan bir array döner(return).
Object.values(obj)    // Value’lardan oluşan bir array döner.
Object.entries(obj)   // [key, value] çiftlerinden oluşan bir array döner. 
*/
// Tüm bu Object.* metotları array veri tipinde değer döner.
let p = {
    name: "Jack",
    age: 20
};

console.log(Object.keys(p)) // ["name", "age"]
Object.values(p) // ["Jack", 20]
Object.entries(p) // [["name", "Jack"], ["age", 20]]

// *****JSON Metodları
// Objenizi String veri türüne çevirip, projenizde objelerinizi direk sayfaya basmak isterseniz, onun içinde bir metot bulunmakta.

let per = {
    name: "Jack",
    age: 20
};

document.getElementById("demo").innerHTML = JSON.stringify(per); // Bu objenizi bir stringe çevirip demo idsine basacaktır.// {"name":"Jack","age":20}

let stringObject = JSON.stringify(per);
//document.getElementById("jsondemo").innerHTML = stringObject //{"name":"Jack","age":20}
let newPerson = JSON.parse(stringObject);
document.getElementById("jsondemo").innerHTML = newPerson // [object Object]
// parse methodu da stringtify methodunun tersi olarak çalışır ve stringi objeye çevirir 


//Example
let show = {
    showName: "How I Met Your Mother",
    characters: [
        {

            name: "Ted",
            age: 35,
            job: ["Architect"]
        },
        {
            name: "Robin",
            age: 32,
            job: ["News Anchor", "Pop-Star"]
        }
    ]
};
alert(show.characters[1].job[1]) // Pop-Star