//Welcome 

let isName = prompt("Lütfen isminizi giriniz : ")
let myName = document.querySelector("#myName").innerHTML = `${isName ? isName : prompt("Boş Bırakılamaz. Lütfen Adınızı Giriniz:") }` //Bir kere çalışır 

// 1.YOL
//function showTime(){
//    var date = new Date();
//    document.querySelector('#myClock').innerHTML = `${date}`;
//}

//setInterval(function(){showTime()});
//setInterval(function(){showTime();},1000); //Her bir saniyede fonksiyonu yeniden çalıştırır.

// 2.YOL

function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var d = date.getDay();
    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    //Day

    let day;
    switch (d) {
        case 1:
            day = "Pazartesi"
            break;

        case 2:
            day = "Salı"
            break;

        case 3:
            day = "Çarşamba"
            break;

        case 4:
            day = "Perşembe"
            break;

        case 5:
            day = "Cuma"
            break;

        case 6:
            day = "Cumartesi"
            break;
        case 0:
            day = "Pazar"
            break;
        default:
            day = ""
            break;
    }

    var time = `${h} : ${m} : ${s} ${session} - ${day}`
    document.querySelector("#myClock").innerHTML = time;

    setTimeout(showTime, 1000);

}

showTime()
