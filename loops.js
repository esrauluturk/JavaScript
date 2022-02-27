//Loops
//1. For
let users = ["Lorem", "Ipsum", "Dolor"]

//1. Yazim Sekli
// for (let index = 0; index < 10; index++) {
//     console.log(index)
// }

//2. Yazim Sekli
// let index = 0
// for (; index < 10; index++) {
//     console.log(index)  
// }
//DOM a ulasmak
// const userListDOM = document.querySelector('#userList')
// for (index = 0; index < users.length; index++) {
//     const liDOM = document.createElement('li')
//     liDOM.innerHTML = users[index];  
//     userListDOM.appendChild(liDOM) 
// }


//2. Continue(Devam Et) - Break(Islemi Durdur)
const LOREM_LIST = [
    'lorem', 'ipsum', 'dolor', 'amet', 'consetetur', 'adipisicing', 'elit'
]
//BREAK
let counter = 0;
// for(; counter < 10; counter++){
//     //if(counter === '5') {break}
//     //console.log(counter) //0 - 1 - 2 - 3 - 4 -5
//     if(counter === 5) {break}
//     console.log(counter)//0 - 1 - 2 - 3 - 4
// }

//CONTINUE
for (; counter < 10; counter++) {

    if (counter === 5) { continue }
    console.log(counter)//sadece 5 i atlar. // 0 1 2 3 4 6 7 8 9 
}

// DOM ile bilgileri kullanmak
//1. Break Example
const UL_DOM = document.querySelector('#userListDOM')

let j = 0
// for (; j < LOREM_LIST.length; j++) {
//    if (LOREM_LIST[j] == "dolor"){break}
//    let LI_DOM = document.createElement('li')
//    LI_DOM.innerHTML = LOREM_LIST[j]
//    UL_DOM.append(LI_DOM)

// }// lorem ipsum
//2. Continue Example
for (; j < LOREM_LIST.length; j++) {
    if (LOREM_LIST[j] == "dolor") { continue }
    let LI_DOM = document.createElement('li')
    LI_DOM.innerHTML = LOREM_LIST[j]
    UL_DOM.append(LI_DOM)

}
/**dolor haric hepsi gelir
 * OUTPUT
 * lorem
 * ipsum
 * amet
 * consetetur
 * adipisicing
 * elit
 */
/**
 * Extra Information
 * "break" ifadesinin sadece kendine en yakın yani içinde bulunduğu döngü içerisinde geçerli oluşudur.
 * Etiketli Break: Etiketli break ifadeleri ise başına konulduğu döngü sistemini sonlandırır.
 * "continue" ifadesinin sadece kendine en yakın yani içerisinde bulunduğu döngü içinde geçerli oluşudur.
 * Etiketli Continue: Etiketli continue ifadeleri ise başına konulduğu döngü sistemini etkiler.
 */
//Nested Loop Example
//iç döngü de 3 değerinde break ifadesi çalışır ve o anda iç döngüden çıkılır yani
//iç döngü sonlanır.Fakat dış döngünün işleyişi aynen devam eder.
for (var i = 0; i <= 10; i++) {
    console.log("dış döngü: " + i);
    for (k = 0; k <= 5; k++) {
        if (k == 3) {
            break;
        }
        console.log("iç döngü" + k);
    }
}
/**
 * OUTPUT
 *  dış döngü: 0
     iç döngü0
     iç döngü1
     iç döngü2
     ...
     dış döngü: 10
     iç döngü0
     iç döngü1
     iç döngü2
 */

//Etiketli Break Örneği
//etiketli break ifadesi her ne kadar iç döngü içerisinde olsa dahi
//etiketin başına konulduğu döngü için etki eder.
//Böylece daha geniş çaplı bir döngüden çıkılmış oldu!!!!
cikis_etiketi: for (var i = 0; i <= 5; i++) {
    for (j = 0; j <= 50; j++) {
        if (j == 9) {
            break cikis_etiketi; //Dis ve ic donguyu beraber sonlandirdi.
        }
        console.log("iç döngüden j :" + j);
    }
}
/**
 * OUTPUT
 *   iç döngüden j :0
     iç döngüden j :1
     iç döngüden j :2
     ...
     iç döngüden j :8   
 */

//Etiketli Continue Örneği

gec_etiketi: for (var i = 0; i <= 5; i++) {
    for (j = 0; j <= 4; j++) {
        if (j == 2) {
            continue gec_etiketi; //bu icteki dongude break gibi hareket etti.Devam etme noktasında dis donguyu devem ettirdi.
        }
        console.log("iç döngüden j :" + j);
    }
}
/**
 * OUTPUT
 *  iç döngüden j :0
    iç döngüden j :1
    iç döngüden j :0
    iç döngüden j :1
    ...
    (12 Tane - 6 defa aynı pattern devam eder.)
 */


//*******WHILE LOOPS*******

let counter = 0
while (counter < 10) { //0 1 ...9
    console.log(counter)
    counter++
}

//Kullanicinin ismini alana bu islem devam etsin.
let userName;

// while (userName == "") {
//     console.log(userName); 
// }

// Sonsuz Dongu
// while (userName != "") {
//     console.log(userName); //undefined
// }
//Sonsuz Dongu
// while (!userName) {
//     userName = prompt("Kullanıcı Adını Giriniz : ")
//     console.log(userName); //undefined
// }

//Normal calisir
let userN = "";
while (userN == "") { //(!userN)
    userN = prompt("Kullanıcı Adını Giriniz : ")
    console.log(userN);
}