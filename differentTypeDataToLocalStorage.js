//Local Storage Process
//Application > Storage > Local Storage > http://....

//1
let user = { userName: "namesurname", isActive: true }
console.log(user) //{userName: 'namesurname', isActive: true} (icerik gorunur)
console.log(user.isActive) //true
console.log(user.userName) //namesurname

// 2
localStorage.setItem('userInfo', user) //Key: userInfo | Value: [object Object] (Sorun: icerik gorunmuyor)
let userInfo = localStorage.getItem('userInfo')
console.log(userInfo) //[object Object]

//3
//Object olarak degil string olarak yazmali
localStorage.setItem('userInfo', JSON.stringify(user))
userInfo = localStorage.getItem('userInfo')
console.log(userInfo) //{"userName":"namesurname","isActive":true} (Sorun : Bilgiler tirnak icinde geldi)
//Bu yuzden "userInfo.isActive" kullanilmiyor. //undefined
//Solve
userInfo = JSON.parse(userInfo)
console.log(userInfo) //{userName: 'namesurname', isActive: true}
console.log(userInfo.isActive) //true


//Examples
localStorage.setItem('number', 11)
console.log(localStorage.getItem('number')) // "11"

//Amac: icinde kompleks yapilar tutabildigimiz bir yapi  
/**KOMPLEKSYAPİ-- JSON
 * Kompleks yapida once string e cevirmemiz lazim--> JSON.stringify(etc) kullanilir.
 * String e cevrilen yapiyi JSON.Parse() ile JSON yapip geri alabiliriz.
 */

//List Examples
let items = [1, 2, 3, user]
console.log(items)
/** OUTPUT
 * (4) [1, 2, 3, {…}]
0: 1
1: 2
2: 3
3: {userName: 'namesurname', isActive: true}
length: 4
 */
localStorage.setItem('newItem', items) //Value : 1,2,3,[object Object]
//Solve
localStorage.setItem('newItem',JSON.stringify(items)) //Guncelleme
console.log(localStorage.getItem('newItem')) // [1,2,3,{"userName":"namesurname","isActive":true}]
console.log(JSON.parse(localStorage.getItem('newItem'))) //(4) [1, 2, 3, {…}]

//Last Example : Summary : Complex Structures
let userStatus = {userName: 'kodluyoruz', isActive: true} //Object--complex structure
localStorage.setItem('user', JSON.stringify(userStatus))
console.log(JSON.parse(localStorage.getItem('user'))) //{userName: 'kodluyoruz', isActive: true}

/**
 * 1.Local Storage string veri tipinde data tutar.
 * 2.Local Storage alanina kaydedilen tum verileri "localStorage.clear()" ile sileriz.
 */