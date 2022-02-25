//index3.html ile calisildi

/**
 * Genel Plan:
Form seçimi
Input Bilgisini UL içerisine ekle
Form içindeki bilgiyi sıfırla
Eğer forma bilgi girilmez ise kullanıcıyı uyar
*/

//1. Form Secimi
let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit', formHandler) //addEventListener fonksiyonu ile "submit" olayı gerçekleştiğinde bu html elementinde ne olması gerektiği ifade edilmiştir. 
const alertDOM = document.querySelector('#alert')

//Eğer forma bilgi girilmez ise kullanıcıyı uyar
const alertFunction = (title, message, className = "warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
function formHandler(event) {
    event.preventDefault() //fonksiyonu ile submit anında sayfanın yenilenmesini engellemiş oluyoruz. 
    //Bilgileri almak
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")
    //Bos gondermeyi engellemek
    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value) // html dosyasından username ve score id'lerini querySelector ile çağırıp bunların değerlerini listeye eklemek için addItem adlı fonksiyona yolluyoruz.
        //Form icindeki bilgiyi sifirlamak
        USER_NAME.value = "" //Bilgiyi gonderdikten sonra sifirladik
        SCORE.value = ""

    } else {
        alertDOM.innerHTML = alertFunction("Başlık Bilgisi","Eksik Bilgi Girdiniz...","danger")
    }
}
/**
 * <li class="list-group-item d-flex justify-content-between align-items-center">
        A list item
        
    </li>
 */
let userListDOM = document.querySelector('#userList')
//Ekleme
const addItem = (userName, score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `
        ${userName}
        <span class="badge bg-primary rounded-pill">${score}</span>
    `
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM)
}