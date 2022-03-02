// NESNELER
// Key - Value
// Array Object veri tipinden türetilir.
// Array icine object yapilari aktarilabilir.
/**
 * Objeler, içerisinde birden fazla değeri depolayan yapılardır. 
 * Property olarak bilinen bu değerler primitive(String,number, boolean vb.) 
 * veya başka objeler olabilirler ve her bir değer string veya sembol ile isimlendirilebilir.
 */
let arrayObj = [1, 2, 3]
let object1 = { obj: 1 }

console.log("arrayObj : ", typeof (arrayObj))
console.log("object1 : ", typeof (object1))

let item1 = new Object()
let item2 = {}
console.log("item1 : ", typeof (item1))
console.log("item2 : ", typeof (item2))

/***
 * OUTPUT
 *  arrayObj :  object
    object1 :  object
    item1 :  object
    item2 :  object
 */

//Object Definition
let item3 = {}
let item4 = new Object()

console.log("object1 : ", object1) //object1 :  {obj: 1}

//Examples
let artist = {                //artist isimli objemiz
    name: "Zoé",              //name isimli, "Zoé" primitive değerine sahip property
    album: {                  //album isimli, içerisinde başka bir objeye yer veren property
        title: "Reptilectric",
        year: 2008
    },
};

/**
 * Objeler değiştirilebilen veri tiplerindendir. 
 * İçerdiği propertyler, objenin kendisi const keyword ile atanmış olsa bile değiştirilebilirler. 
 * Fakat primitive değerlerden farklı olarak objeler, referans yoluyla değiştirilirler ve değişen obje, yeni bir hafıza adresine sahip olur. 
 * Çünkü primitive değerlerin aksine objeler, JavaScript istemcisinin belleğinde, sahip oldukları değerlerle değil, 
 * sistemin atadığı hafıza adresleriyle kayıtlıdırlar. 
 * Bunun ayrımını aşağıdaki örnekte şöyle görebiliriz.
 */
//aynı değerlere sahip 2 primitive veri tipi
let mesaj = "merhaba";
let baskaBirMesaj = "merhaba";
console.log(mesaj == baskaBirMesaj);       //true

//aynı değerlere, farklı memory adresslere sahip 2 obje
let obje = {
    mesaj: "merhaba"
}
let baskaBirObje = {
    mesaj: "merhaba"
}
console.log(obje == baskaBirObje);         //false
//Bu iki obje, arka planda göremediğimiz iki ayrı hafıza adresiyle tanınıyorlar, bu yüzden içerikleri aynı olsa da farklı kabul ediliyorlar.

/**
 * OBJE OLUSTURMAK
Objeler üç şekilde oluşturulabilir. Object literal, new Object keyword’ü ve Object.create() fonksiyonuyla. 
Object literal ve new Object yöntemleri, normal bir objeyi oluştururken kullanılan yöntemlerdir. 
Object.create() yöntemi ise, mevcut bir objeden kalıtım yoluyla bazı bilgiler alarak yeni bir obje oluşturmaya yarar.
 */

// 1 - Object Literals
let countriesTalkSpanish = {
    continent: "south america",
    language: "spanish"
};
//countriesTalkSpanish isimli obje, continet ve language adında iki propertye sahip. Bu property'ler de iki primitive değeri barındırıyor.

/**
 * 2 - New Keyword ile Obje Oluşturmak
New keyword'ü yeni bir obje oluşturup başlatır. 
Oluşturulurken belli başlı bazı constructor invocation’lardan(kurucu çağrılarından) birini(Object, Array, Date vb.) yazmak 
ve sonuna mutlaka fonksiyon çağrısı olduğunu belirten parantezleri () eklemek gerekir. 
Fonksiyon çağrısı, objenin başlatılması için olmazsa olmazdır. Aşağıdaki örnekte standart object invocation kullanarak, 
Fransızca konuşulan Afrika ülkeleri objesini oluşturalım ve tıpkı bir önceki örnekte olduğu gibi, language ve continent property'leri verelim.
 */
let countriesTalkFrench = new Object();
countriesTalkFrench.continent = "africa";
countriesTalkFrench.language = "french"; 
/**
 * Object Prototype
Son yöntem olan Object.create() yöntemine geçmeden önce, prototype hakkında bilgi sahibi olmak, son yöntemi anlamak için önemli.
Javascript’te hemen her objenin bağlantılı olduğu ikinci bir obje vardır ve bu ikinci objelere prototype denir. 
Mevcut obje, ikinci objeden yani prototype’ından kalıtım(inheritence) alır. 
Object literal yöntemiyle oluşturulan her objenin prototipi aynıdır: object.prototype. 
New keyword'ü kullanılarak oluşturulan objelerin ise nereden kalıtım alacakları, function invocation’larına göre değişiklik gösterebilir. 
Örneğin new Date() objesi, hem object.prototype’ın kalıtımını alırken hem de date.prototype’dan kalıtım alır.
 */

/**
 * 3 - Object.create
Obje oluşturmadaki son yöntem olan object.create() yöntemi, yeni bir obje oluştururken nereden kalıtım alacağına karar vermemizi sağlayan bir yöntemdir
 */
let noInheritence = Object.create(null);   //herhangi bir kalıtım(inheritence) almaz
let standartObject = Object.create(Object.prototype) //standart obje kalıtımı alır.

//StandartObject isimli obje örneği, object literal ve new object keyword ile oluşturulan objelerin prototiplerini parametre olarak aldığı için, onlar gibi çalışır.
let argentina = Object.create(countriesTalkSpanish)
/**
 * argentina isimli obje örneği ise daha önce oluşturduğumuz countriesTalkSpanish isimli object literal’dan 
 * kalıtım alacağı için onunla aynı property'lere sahip olur. 
 * Yani argentina objesi, Güney Amerika kıtasında bulunduğunu ve 
 * İspanyolca konuşulduğunu, kalıtım yoluyla sahip olduğu property'lerden belli eder.
 */

 argentina.capital = "buenos aires";//objeye, ülkenin başkentini belirten yeni bir property atadık.
 console.log(argentina)