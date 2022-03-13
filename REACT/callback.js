// Native Func.
// 1
/** setTimeout()
 *  Verilen parametredeki sure tamamlandiktan sonra 1 kere calisiyor olmasidir.
 */
setTimeout(() => {
    console.log("Merhaba");
}, 5000)

// 2 - setInterval()
// setInterval(() =>{
//     console.log("Merhaba ben her saniye çalışacağım:)")
// }, 1000)

// 3
// const sayHi = () =>{
//     console.log("Merhaba");
// };
// sayHi();

// 3.1
// Parametre olarak bir fonksiyon verseydik:
// const sayHi = (cb) =>{
//     cb();
// };
// sayHi(() => {
//     console.log("Hello");
// });

// 4 - Fetch - fake api
// Kurulum : npm i node-fetch
import fetch from "node-fetch";
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(data => 
//     // console.log(data)
//     console.log(data.json()) // Promise { <pending> }
//     );
// 4.1
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json()) // Json Parse
//     .then((user) => console.log(user));

// ISLEMLERI SIRAYA KOYMAK
// 4.2 - Yeni endpoint
// Burada once users sonra post getirir.
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json()) // Json Parse
//     .then((users) => {
//         console.log("Users Yuklendi!", users)
//         fetch('https://jsonplaceholder.typicode.com/posts/1') // Sadece 1.post getirir.
//         .then(data => data.json())
//         .then(post => console.log("Post Yuklendi!", post))

//     });

// 4.3 - Iki islemi ayri ayri yapsaydik bazen once post gelir bazen users gelirdi. Asenkron yapi.
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json()) // Json Parse
//     .then((users) => {
//         console.log("Users Yuklendi!", users)
//     });
// fetch('https://jsonplaceholder.typicode.com/posts/1') // Sadece 1.post getirir.
//     .then(data => data.json())
//     .then(post => console.log("Post Yuklendi!", post));

// 4.4 - Daha complex bir yapi
// Islemler sirali olarak gerceklesir. (Once users, sonra post1 sonra post2 gelir.)
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json()) // Json Parse
//     .then((users) => {
//         console.log("Users Yuklendi!", users);
//         fetch('https://jsonplaceholder.typicode.com/posts/1') // Sadece 1.post getirir.
//         .then((data) => data.json())
//         .then((post) => {
//             console.log("Post 1 Yuklendi!", post)
//             fetch('https://jsonplaceholder.typicode.com/posts/2')
//             .then((data) => data.json())
//             .then((data) => console.log("Post 2 Yuklendi", data));
//         });

//     });

// 5 - ASYNC - AWAIT
// Yukaridaki kodun daha temiz bir sekilde yazilmasi ve islemlerin sirali olarak gerceklesmesi.
// async -- asenkron olarak tanimlamak anlamina gelir.
// Once users calissin.
// async function getData() {
//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json(); // kodu bekletmek icin await kullaniriz.
//     // await yazmazsak kod beklemez bir sonraki satira gecer
//     // Post 1
//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
//     // Post 2
//     const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();
//     console.log("users", users); // json a parse etmezsek stringfy log aliriz.
//     console.log("post 1", post1);
//     console.log("post 2", post2);

// }
// getData()

// 5.1 - Anonymous Function 
// Yukaridaki kodu baska sekilde ifade edelim
//Ex : Anonim func.
// (() => {
//     console.log("Selam!");
// })();

(async () => {
    const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();
    console.log("users", users);
    console.log("post 1", post1);
    console.log("post 2", post2);

})();