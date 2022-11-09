function showTime(){
    let d = new Date()
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()
    let txt = h + ':' + m + ':' + s
    return txt 
}

//let timer = setInterval(showTime, 1000) funciona so com html junto


console.log(showTime());