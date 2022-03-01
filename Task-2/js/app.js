/**
 * PROJE 
*Listeye boş karakter eklenemiyor. Bununla birlikte hiçbir şey yazılmadığında da aynı hatayı veriyor.
*Yazacağınız JavaScript kodu içerisinde element eklemeyi sağlayan bir fonksiyon, element silmeyi sağlayan bir fonksiyon, yapıldı 
işaretlenmesini sağlayan bir fonksiyon olması gerekiyor.
*Element eklendiğinde ve hata verirken sağ üstte uyarı verdiğini fark etmişsinizdir. Bunu sağlayan Bootstrap Toast bildirimdir. 
Sayfaya gidip toast nedir nasıl yapılır bunu araştırın ve kodunuza ekleyin.
*Önce ana fonksiyonlar için uğraşın. Yapıldı, toast bildirim bunlar biraz daha için artistliği. Öncelikli amacını sağlıyor olması lazım.
*Yazdığınız js dosyasını projenize eklemeyi unutmayın.
*Bonus
*Yaptığınız yapıya Local Storage'ı da ekleyip verilerin kaybolmamasını sağlayın.
 */


const list = document.querySelector('#list')
const addButton = document.querySelector('#liveToastBtn')
let tostBody = document.querySelector('.toast-body')
let logo;

addButton.addEventListener("click", newElement)


function newElement(event) {
    event.preventDefault()
    const textbox = document.querySelector('#task')

    if (textbox.value && textbox.value.match(/\S/)) {
        addItem(textbox.value)
        tostBody.innerHTML = "Listeye eklendi."
        localStorage.setItem('input', textbox.value)
    } else {
        tostBody.innerHTML = "Listeye boş ekleme yapamazsınız!"
    }
    $('#liveToast').toast('show')
    textbox.value = ""
}

const addItem = (textbox) => {
    logo = document.createElement("i");
    logo.classList.add("bi", "bi-x-lg", "close")
    let li = document.createElement('li')
    li.innerHTML = `
        ${textbox}    
    `
    list.append(li)
    li.append(logo)
    li.addEventListener("click", taskDone)
    logo.addEventListener('click', removeItem)

}

function removeItem(e) {
    e.target.parentNode.remove();
}

function taskDone() {
    this.classList.toggle("bg-success")
    this.style.textDecoration = (this.style.textDecoration == "line-through") ? "none" : "line-through"
}