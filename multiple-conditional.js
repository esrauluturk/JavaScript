//*** Çoklu Koşularla Çalışmak ***

let userName = prompt("Kullanıcı Adınız :")
let age = prompt("Yaşınız :")

// 1. YOL
/*
if (userName && age >= 18) {
    console.log("Ehliyet Alabilirsiniz")
} else if (!userName) {
    console.log("Kullanıcı Adınız Yok")
} else if (!(age >= 18)) {
    console.log("Yaş Bilginiz Yok veya 18 Yaşından Küçüksünüz!")
}
*/

// 2. YOL
let info = document.querySelector("#info")

if (userName && age >= 18) {
    info.innerHTML = "Ehliyet Alabilirsiniz"
} else if (!userName) {
    info.innerHTML = "Kullanıcı Adınız Yok"
} else if (!(age >= 18)) {
    info.innerHTML = "Yaş Bilginiz Yok veya 18 Yaşından Küçüksünüz!"
}

//Switch - Case

let hava = "Gunesli";
switch (hava) {
    case "Yagmurlu":
        console.log("Semsiyeni yanina almayi unutma");
        break;
    case "Gunesli":
        console.log("Hafif giyin"); //No break
    case "Bulutlu":
        console.log("Disari cik");
        break;
    case "Karlı":
        console.log("Kalin giyin");
        break;
    case "Firtinali":
        console.log("Bir süre disari cikma");
        break;
    default:
        console.log("Bilinmeyen hava durumu:", hava);
}
//Output : Hafif giyin
//         Disari cik
//break konulmadığına dikkat! 


//Example--return

let islem = function (a, b, operator) {
    switch (operator) {
        case 'topla':
            return a + b;
            break;
        case 'cikar':
            return a - b;
            break;
        case 'carp':
            return a * b;
            break;
        case 'bol':
            return a / b;
            break;
        default:
            return 'Tanimlanmamis islem';
            break;
    }
};
console.log(islem(23, 14, 'topla'));  // 37
console.log(islem(10, 3, 'mod'));     // Tanimlanmamis islem
