//index4.html kullanildi
/*
Formu doldurup submit butonuna her bastığımızda ise, girdiğimiz bilgiler formun altında oluşacak kısımda bize gösterilecektir.
Formda herhangi bir alanı boş bıraktığımızda veya "Age" kısmına 18'den küçük bir sayı girdiğimizde ise web tarayıcımız bize uyarı verecektir.
*/

let userForm = document.querySelector('#userForm')
const userName = document.querySelector('#userName')
const userSurname = document.querySelector('#userSurname') 
const userAge = document.querySelector('#userAge');
const subContainer = document.querySelector(".sub-container")


const submitHandler = (e) => {
    e.preventDefault();
    if(userName.value && userSurname.value && userAge.value >= 18){
        showInfos(userName.value,userSurname.value,userAge.value);
        userName.value = ""
        userSurname.value = ""
        userAge.value = null;
    }else{
        alert("Invalid input, please try again!")
    }
}

const showInfos = (userName,userSurname,userAge) => {
    const liDOM = document.createElement('li');
    liDOM.innerHTML = `Your information: ${userName} ${userSurname} ${userAge}`;
    liDOM.classList.add("user-info");
    subContainer.append(liDOM);
    if(subContainer.firstChild){
        subContainer.style.display = "flex";
    }
}

userForm.addEventListener('submit',submitHandler)