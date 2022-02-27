// Array forEach Methodu
//Array lerde for yerine forEach kullanimi daha mantiklidir.
//Arrow func. Kullanimi
const PRODUCTS = ["Laptop", "Phone", "Speaker", "Desktop PC", 'Server', "Mouse", "Keyboard"]
//forEach dongusu, en fazla 3(item, index, array) parametre alabiliyor.
//1
PRODUCTS.forEach(product => console.log(product)) //Hepsini alt alta yazar
//2
PRODUCTS.forEach((product, index) => console.log(product, index)) //Index i ile birlikte hepsini yazar.
//3
PRODUCTS.forEach((product, index, array) => console.log(product, index, array))
PRODUCTS.forEach((product, index, array) => console.log(array[index])) // Tum dizi elemanlarini alt alta yazar.
PRODUCTS.forEach((product, index, array) => console.log(array[index] = product + " 111"))
//PRODUCTS.forEach((product, index, array) => array[index] = product + " 111")
/**CTRL + F2
 * Output
 Laptop 111
 Phone 111
 Speaker 111
 Desktop PC 111
 Server 111
 Mouse 111
 Keyboard 111
 */
console.log(PRODUCTS)
/**
 * Output
 * (7) ['Laptop 111', 'Phone 111', 'Speaker 111', 'Desktop PC 111', 'Server 111', 'Mouse 111', 'Keyboard 111']
 */
//Herbiri buyuk harfle yazilsin.
PRODUCTS.forEach((product, index, array) => array[index] = `${product.toUpperCase()}`)
console.log(PRODUCTS) //(7) ['LAPTOP 111', 'PHONE 111', 'SPEAKER 111', 'DESKTOP PC 111', 'SERVER 111', 'MOUSE 111', 'KEYBOARD 111']

//************DOM 
// const userListDOM = document.querySelector('#userList')
// for (index = 0; index < users.length; index++) {
//     const liDOM = document.createElement('li')
//     liDOM.innerHTML = users[index];  
//     userListDOM.appendChild(liDOM) 
// }
const productListDOM = document.querySelector('#productList')

PRODUCTS.forEach(item => {
    const liDOM = document.createElement('li')
    liDOM.innerHTML = item;
    productListDOM.appendChild(liDOM)

})
/**
 * OUTPUT
LAPTOP 111
PHONE 111
SPEAKER 111
DESKTOP PC 111
SERVER 111
MOUSE 111
KEYBOARD 111
 */

/**
 * Extra Information
 * forEach Kullanimi:
 * arr.forEach(function(value, index, array) {
  // index ve array kullanmak opsiyoneldir
  }
 */

//Examples - 1
const animals = ["cat", "dog", "bird", "horse"];

animals.forEach((value, index, array) => {
    console.log('value: ', value);
    console.log('value parametresinin aldığı index :', index);
    console.log('array:', array);
});
/**
 * OUTPUT
value:  cat
value parametresinin aldığı index : 0
array: (4) ['cat', 'dog', 'bird', 'horse']
value:  dog
value parametresinin aldığı index : 1
array: (4) ['cat', 'dog', 'bird', 'horse']
value:  bird
value parametresinin aldığı index : 2
array: (4) ['cat', 'dog', 'bird', 'horse']
value:  horse
value parametresinin aldığı index : 3
array: (4) ['cat', 'dog', 'bird', 'horse']
 */

//Arrow function gosterimi(ES6)

animals.forEach(animal => console.log(animal));

//Examples - 2
const numbers = [4, 11, 9];
const newArray = [];

numbers.forEach(function (numbers) {
    newArray.push(numbers * 3);
});
console.log(newArray);

// output = [12, 33, 27]

//Examples - 3
//Numbers array'ini kullanarak her elemanının iki fazlasına sahip olan başka bir array oluşturunuz.

const nums = [12, 24, 36];
const newArr = [];
nums.forEach((number) => {
    newArr.push(number + 2)
})
console.log(newArr) //[14, 26, 38]