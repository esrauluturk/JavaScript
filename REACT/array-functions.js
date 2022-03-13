const users = ["Mehmet", "Ahmet", "Murat"];

/**
 * push
 * map
 * find
 * filter
 * some
 * every
 * includes
 */
// ======push : Array sonuna yeni eleman eklemek
users.push('Ayşe');
users.push("Fatma");
console.log(users); // [ 'Mehmet', 'Ahmet', 'Murat', 'Ayşe', 'Fatma' ]

// =====map
// for kullanmaya gerek yok. map array icinde doner.
// icine bir callback func. yazariz.
users.map((item) => {
    console.log(item);
});
/**
 * Output
Mehmet
Ahmet
Murat
Ayşe
Fatma
 */

// ==============Objelerden olusan bir array olsaydi
const userss = [
    {
        name: "Mehmet",
    },
    {
        name: "Murat",
    },
    {
        name: "Sevilay"
    },
];
userss.map((item) => {
    console.log(item);
});
/**
 * Output
{ name: 'Mehmet' }
{ name: 'Murat' }
{ name: 'Sevilay' }
 */
userss.map((item) => {
    console.log(item.name);
});
/**
 * Output
Mehmet
Murat
Sevilay
 */

// =====find
// Array icinde verilen kosularla bir arama yapar.
const result = userss.find((item) => item.name === 'Mehmet');
console.log(result); // { name: 'Mehmet' }
// Kosullara uymayan birsey getirmesini isteseydik "undefined" donerdi
const Users = [
    {
        name: "Mehmet",
        age: 18,
    },
    {
        name: "Mehmet",
        age: 29,
    },
    {
        name: "Mehmet",
        age: 30,
    },
    {
        name: "Sevilay",
        age: 40,
    },
];
const results = Users.find((item) => item.name === "Mehmet" && item.age > 20);
console.log(results); // { name: 'Mehmet', age: 29 }
// Not : Buldugu ilk kaydi getirir.

// =====filter
const filtered = Users.filter((item) => item.name === 'Mehmet');
console.log(filtered);
/**
 * Output:
[
  { name: 'Mehmet', age: 18 },
  { name: 'Mehmet', age: 29 },
  { name: 'Mehmet', age: 30 }
]
 */
const filteredd = Users.filter((item) => item.name === 'Mehmet' && item.age < 20);
console.log(filteredd);// [ { name: 'Mehmet', age: 18 } ]
// Ayni kodun farkli bicimde yazilmasi
const filtereddd = Users.filter(({ name, age }) => name === 'Mehmet' && age < 20);
console.log(filtereddd); // [ { name: 'Mehmet', age: 18 } ]

// =====some
// Array in icindeki herhangi bir elman sarta uyuyorsa "true" doner
const some = Users.some(item => item.age === 18);
console.log(some); // true

// =====every
// Array icindeki tum elemanlarin sarta uymasini bekliyor
const every = Users.every((item) => item.age > 5);
console.log(every); // true
const everys = Users.every((item) => item.name === 'Mehmet');
console.log(everys); // false

// =====includes
// Array icinde gecip gecmedigini kontrol etmemizi saglar.
const meyveler = ['elma', 'armut', 'muz']
const isIncluded = meyveler.includes('muz');
console.log(isIncluded); // true
