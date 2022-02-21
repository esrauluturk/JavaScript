//*** Ternary Operator ***
//Eger kullanıcı adın varsa yazdır yoksa kullanıcı bilginiz bulunamadı yaz.

let userName = prompt("Kullanıcı Adınızı Yazınız :")
let info = document.querySelector("#info")

// Ternary Kullanımı:
// Koşul ? Doğruysa : Yanlışsa

info.innerHTML = `${userName ? userName : "Kullanıcı Bilgisi Bulunamadı! :("}` //userName.length > 0

//false dönecek diğer ifadeler şunlardır: null, NaN, 0, ""(boş string) ve undefined.

//Ternary Operatorleri Zincirleme (Chaining) !!!
var money; //Atama yapmazsak--Output : Para miktarını girmen gerekmektedir..
var canBuy =
    (money < 17) ? "Satın alamazsın.." :
        (money > 30) ? "Satın alabilirsin.." :
            "Para miktarını girmen gerekmektedir..";

console.log(canBuy) // "Satın alabilirsin.."

//Example

let boolean;

const isBooleanTrue = boolean ? true : false;
console.log(isBooleanTrue) //false
console.log(boolean) //undefined