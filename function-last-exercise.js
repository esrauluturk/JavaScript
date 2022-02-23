//Functions Last Exercise

let counter = 0;
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
    console.log(this.id) //increase  OR decrease
    this.id == "increase" ? counter += 1 : counter -= 1
    counterDOM.innerHTML = counter
}