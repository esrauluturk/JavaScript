// FETCH API

/* ***Notes About json file :
String Key Belirtmemiz Gerekir.
Bir Object Tanimlamasi yapalim.
JavaScript Object Notation da  en son elemandan sonra virgul koyamiyoruz.
Icerisine yorum satiri yazamiyoruz.
*/

// 1
// Bir veri sunucudan geldikten sonra islem yapabilmek
// data > settings.json
// fetch("data/settings.json").then(
//     response => {
//         console.log(response) 
//     }
// )
/**
 * OUTPUT - 1
Response {type: 'basic', url: 'http://127.0.0.1:5500/data/settings.json', redirected: false, status: 200, ok: true, …}
body: (...)
bodyUsed: false
headers: Headers {}
ok: true
redirected: false
status: 200
statusText: "OK"
type: "basic"
url: "http://127.0.0.1:5500/data/settings.json"
[[Prototype]]: Response
 */
// 2
// JSON dosyadan veri cekmek
fetch("data/settings.json").then(
    response => response.json() // Data yi al
).then(responseJson => {        // Data yi yazdir
    console.log(responseJson);  // {userName: 'fakeUser', password: 1234, serverIP: '127.0.0.1', serverName: 'kodluyoruz.org', isAuth: true, …}
    console.log(responseJson.userName) // fakeUser
})

// 3
// API uzerinden veri cekmek
// fake json folder
// get all posts
// Response -> json donustur.
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
).then(responseJson => {
    console.log(responseJson)
    console.log(responseJson[0])
    responseJson.forEach(item => console.log(item));
})

// 4
// Listeye eklemek
let userListDOM = document.querySelector("#userList")
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
).then(responseJson => {
    responseJson.forEach(item => {
        let liDOM = document.createElement('li')
        liDOM.innerHTML = item.title
        userListDOM.appendChild(liDOM)
    })
})

/**
 * Fetch API İle Çalışmak
Fetch API, kaynakları (ağ genelinde dahil) getirilmesine yönelik basit bir arayüzdür.
Ajax yerine alternatif olarak asenkron veri alıp ve veri göndermemizi sağlar. 
Promise tabanlı olduğu için async bir yapıdır. 
Promise ES6 ile gelen bir özelliktir. 
Callback fonksiyonlarının yerine kullanabiliyoruz. 
Fetch API'da promise yapısını kullanarak bizim Ajax'ın yerine kullanabileceğimiz bir yapı sunuyor. 
Ayrıca Fetch API window objesi ile birlikte geliyor. 
Eğer window objesini konsolda yazdırırsak bu window objesinin altında fetch metodunu görebilirsiniz.

Fetch API ile yapabildiğimiz şey bir veri sunucudan geldikten sonra işlem yapabilmektir.
Peki bu ne demektir? Diyelim ki bir yere gittiniz ve sipariş veriyorsunuz. 
Kasadaki kişi siparişi aldıktan sonra kasada beklersek bir sonraki kişinin siparişinin vermesini engelleriz.
Belki de bir sonraki kişinin siparişi çok daha hızlı hazırlanabilirdi. 
Bu durumda şunu da unutmamak lazım biz ne zaman sipariş ettiğimiz ürünleri gidip almak isteriz? 
Tabii ki siparişimiz hazırlandıktan sonra. Burada aslında yeni gelen kavramlardan bir tanesi olan Promise'i kullanırız.
 */

/**
 * Fetch Interfaces
*fetch(), bu yöntem bir kaynak almak için kullanılır.

*Headers, response/request başlıklarını temsil ederek bunları sorgulamanıza ve sonuçlara bağlı olarak farklı eylemler gerçekleştirmenize olanak tanır.

*Request , bir kaynak talebini temsil eder.

*Response, bir isteğe verilen yanıtı temsil eder.
 */

/**
 * Temel Fetch Kullanımı
Fetch API’ yi kullanmak için fetch metoduna istek yapacağımız url’ i parametre olarak vermek gerekiyor.

fetch(url);
fetch() metodundan sonra, metodun sonuna then() promise metodunu ekleriz:

.then(function() {
})
 */
// Örneğin “https://jsonplaceholder.typicode.com/todos” adresine get isteğinde bulunalım:
// GET İsteği
fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json()) //parse json data
    .then(function (todos) {
        todos.forEach((todo) => {
            console.log(todo.title); //Başlıkları console' a yazdırma
        });
    });

// POST Istegi
let payload = {
    title: "Blog Title",
    body: "lorem ipsum",
    userId: 1
}
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-type": "application/json; charset=UTF-8" }
})
    .then(response => response.json()) // json a donustur
    .then(json => console.log(json))
    .catch(err => console.log(err)); // catch() metoduyla herhangi bir aşamada hata oluşursa, bu hatayı parametre olarak alıp console’a yazdırıyoruz.

/**
 * fetch().then().then().catch() yapısı:
 * fetch() -> response -> then ->  json -> then -> console.log(json) ----->all failure */

// Uygulama 1
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>response.json())
.then((json)=>console.log(json)) // (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
.catch((err)=>console.log(err));

// Uygulama 2
fetch("https://jsonplaceholder.typicode.com/comments")
.then((response) => response.json())
.then((json) => {
    json.forEach(item => console.log(item.email))
})
.catch((err) => console.log(err))