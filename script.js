
let element = document.getElementById('time')
// Synchronous functions

setInterval(() => {
   //code will run after the 'interval' 
    let date = new Date()
    // let hours = date.getHours()
    // let min = date.getMinutes()
    // let sec = date.getSeconds()

    let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    element.innerHTML = time
}, 1000);