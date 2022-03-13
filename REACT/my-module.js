// Kendi modulumuzu yazmak
// Fonksiyon tanimi
// 1
// function topla(a, b) {
//     return a + b;
// }

// 2
// const topla = function topla(a, b) {
//     return a + b;
// }

// 3 - Arrow Function
// const topla =  (a, b) => {
//     return a + b;
// }

// 4 - Daha Ozellestirelim
// const hello = () => { // void
//     console.log("hello");
// }
// const topla =  (a, b) => a + b; // return

// Bu yazdigimiz fonksiyonu disari aktarmak icin :
// export default topla;

// ================================================
// Diger bir disari aktarma sekli
// export const hello = () => { // void
//     console.log("hello");
// }
// export const topla = (a, b) => a + b;

// ================================================
// Diger bir disari aktarma sekli
// const hello = () => { // void
//     console.log("hello");
// }
// const topla = (a, b) => a + b; // return

// export { hello, topla };

// ==================================================
// Parametre alan void fonksiyon kullanimi
// const hello = name => { // void
//     // console.log("hello " + name);
//     // ES6
//     console.log(`hello ${name}`)
// }
// const topla = (a, b) => a + b;
// const cikar = (a, b) => a - b;
// export { hello, topla, cikar };

// ==================================================
// Disa aktarmada denemeler

// const hello = name => {
//     console.log(`hello ${name}`)
// }
/*export*/ const topla = (a, b) => a + b;
/*export*/ const cikar = (a, b) => a - b;
// export default hello;  
/**
 * Cagirdigimiz index.js de default olarak tanimlanmayan fonksiyonlari {} arasinda alabiliyoruz.
 * Default tanimlilar "import hello, {topla,cikar} from ...." seklinde alinmasi gerekir.
 */
// =======================================================
// Duz bir string disa aktarmak
/*export*/ const text = 'Text';
// Object disa aktarmak
/*export*/ const user = {
    name: 'Lorem',
    surname: 'Dolor',
}
// Array
/*export*/ const users = [{
    name: "Lorem",
    surname: "Dolor"
}, {
    name: "Ipsum",
    surname: "Dolor"
},
];

// Daha temiz bir yazim icin
// Export lari silip tek bir export yapisinin icinde toplama.
export{
    topla,
    cikar,
    text,
    user,
    users,
}
// Default export baska bir sekilde nasil yazilabilir
export default (name) => {
    console.log(`hello ${name}`)
}