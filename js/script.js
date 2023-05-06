function nightbut(){
    document.getElementById('body').style.backgroundColor=''
    document.getElementById('body').style.color=''
    document.getElementById('nighton').style.display='none'
    document.getElementById('dayton').style.display='block'
    document.getElementById('head').style.color=''
    document.getElementById('navi').style.color=''
    document.getElementById('about').style.color=''
    document.getElementById('clock').style.backgroundColor=''
    document.getElementById('clock').style.color=''
}
function daybut(){
    document.getElementById('body').style.backgroundColor='white'
    document.getElementById('body').style.color='black'
    document.getElementById('nighton').style.display='block'
    document.getElementById('dayton').style.display='none'
    document.getElementById('head').style.color='white'
    document.getElementById('navi').style.color='black'
    document.getElementById('about').style.color='black'
    document.getElementById('clock').style.backgroundColor='white'
    document.getElementById('clock').style.color='black'
}
setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
  
    if (hour > 12) {
        hour -= 12;
        am_pm = " PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = " AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" 
            + min + ":" + sec + am_pm;
  
    document.getElementById("clock")
            .innerHTML = currentTime;
}
showTime();