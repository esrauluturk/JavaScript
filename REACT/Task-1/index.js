import getData from './moduleGetData.js'

// 1 - 2
// getData(1)

// Promise
getData(1)
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error));