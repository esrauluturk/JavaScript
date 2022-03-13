// 1
// const getComments = () => {
//     // promise return etmeliyiz.
//     return new Promise(() => {
//         console.log("comments")
//     })
// }
// getComments().then(() => console.log("Finished!"));
// Output : comments (ama Finished! yazmadi)



// 2 - resolve - reject
/**
 * Promise iki parametresi var:
 * resolve: Islem basari ile gerceklesti. Data hazir 
 * reject : kod calisirken bir problem olustu bunu reddettim.
 * Bir promise resolve oldugunda "then" calistirir.
 * reject oldugunda da catch e duser.
 */
// const getComments = () => {
//     return new Promise((resolve,reject) => {
//         console.log("comments");
//         resolve();
//     })
// };
// getComments().then(() => console.log("Finished!"))
// .catch((e) => console.log(e));
// Output : comments Finished!

// 3 - resolve - then iliskisi
// resolve icindeki parametre then icinde kullanilir.
// const getComments = () => {
//     return new Promise((resolve,reject) => {
//         // resolve("Comments");
//         resolve({ text: "Selam"}) // Obje donulebilir. // { text: 'Selam' }
//     })
// };
// getComments().then((data) => console.log(data)) // Comments
// .catch((e) => console.log(e)); 

// 4 - parametre - if kontrol
// 1 : resolve , 2 : reject
// const getComments = (number) => {
//     return new Promise((resolve,reject) => {
//         if (number == 1) {
//             resolve({ text: "Selam"});
//         }
//         reject("Bir problem olustu!"); 
//     })
// };
// getComments(2)
// .then((data) => console.log(data)) 
// .catch((e) => console.log(e)); 

// 5 - await - async - axios
// await mutlaka async bir fonksiyonun icinde olmali.
// Kendi fonksiyonlarimiz uzerinden ilgili datayi donmek
// Islem sirasi yok. Asenkron. Sirali olarak gelmez. Fonksiyonlar birbirlerine bagimli degiller.
import axios from "axios";
// Users
// const getUsers = () => {
//     return new Promise(async (resolve, reject) => {
//         const { data } = await axios("https://jsonplaceholder.typicode.com/users");
//         resolve(data);
//     })
// };
// // Posts
// const getPost = (post_id) => {
//     return new Promise(async (resolve, reject) => {
//         const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);
//         resolve(data);
//     })
// };
// // Users
// getUsers()
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e));
// // Posts
// getPost(1)
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e));

// 6 - Ayni kodu islem sirasi belli olacak sekilde anonim fonk. kullanimiyla yazmak.
// Users
const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/users");
        resolve(data);
        // reject('Bir sorun olustu!')
    })
};
// Posts
const getPost = (post_id) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);
        resolve(data);
        // reject('Bir sorun daha olustu!')
    })
};

// 6.1 - Yazdirma
// anonymous func.
// Once users sonra post gelir
// (async () => {
//     await getUsers()
//         .then((data) => console.log(data))
//         .catch((e) => console.log(e));
//     await getPost(1)
//         .then((data) => console.log(data))
//         .catch((e) => console.log(e));
// })();
// 6.2 - Yazdirma
// then ve catch olmadan sadelestirerek yazmak
// (async () => {
//     try {
//         const users = await getUsers();
//         const post = await getPost(1);

//         console.log(users);
//         console.log(post);

//     } catch (e) {
//         console.log(e)
//     }

// })();
// Sonuclar :
// Reject oldugunda catch bloguna duser.
// Iki reject oldugunda ilki calisir sadece.
// Ustteki resolve alttaki reject oldugunda; sadece alttaki reject calisir.

// =====================
// Promise All --> Butun promise leri calistirip sonucu bekleyebiliriz.
// Elimizde birden fazla calistirmak istedigimiz Promise dizisi varsa kullanilabilecek yontemlerden biridir.
Promise.all([getUsers(), getPost(1)])
    .then(console.log)
    .catch(console.log)
// Output : Bir sorun daha olustu!
// Ilk reject ikinci resolve oldugunda:
// Output: Bir sorun olustu!
// Iki resolve acik olursa ulasilmasi gereken cikti elde edilir.