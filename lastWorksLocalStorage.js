//Counter bilgisini localStorage icinde tutalim ve Storage icinden bu bilgiyi alalim.
//Additions to Function Last Exercise
//1
//let counter = localStorage.getItem('counter')//*//011111... //LocalStorage dan bilgiyi silip sayfayi yenileyince hicbir sey gelmez.
//2
// let counter = localStorage.getItem('counter') ? localStorage.getItem('counter') : 0 //LocalStorage dan bilgiyi silip sayfayi yenileyince 0 dan baslar
// let counterDOM = document.querySelector('#counter')
// let increaseDOM = document.querySelector('#increase')
// let decreaseDOM = document.querySelector('#decrease')

// counterDOM.innerHTML = counter

// //1. YOL
// // increaseDOM.addEventListener("click",function(){
// //     console.log(this.id) //increase
// // })

// //2. YOL
// increaseDOM.addEventListener("click", clickEvent)
// decreaseDOM.addEventListener("click", clickEvent)

// function clickEvent() {
//     //getItem ile aldiktan sonra bilginin type'ına bakalim
//     console.log(typeof(counter)) //string
//     console.log(this.id) //increase  OR decrease
//     this.id == "increase" ? counter += 1 : counter -= 1
//     localStorage.setItem('counter', counter) //*
//     counterDOM.innerHTML = counter
// }

//3
let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0 
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

counterDOM.innerHTML = counter

//1. YOL
// increaseDOM.addEventListener("click",function(){
//     console.log(this.id) //increase
// })

//2. YOL
increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent() {
    
    this.id == "increase" ? counter += 1 : counter -= 1
    localStorage.setItem('counter', counter) //*
    counterDOM.innerHTML = counter
}