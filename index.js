
setInterval(() => {
    d=new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hrotation=30*htime+mtime/2;
    mrotation=6*mtime;
    srotation=6*stime;
    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;
    displaytime.innerHTML = htime+":"+mtime;
    // htime =15;
    if(htime<=12){
        timing.innerHTML = "have a good day";
    }
    else if(htime>12 && htime<=16 ){
        timing.innerHTML = "good afternoon! have you had your lunch? ";
    }
    else if(htime>16 && htime<18 ){
        timing.innerHTML = "good evening! have a cup of tea ";
    }
    else{
        timing.innerHTML = "good evening! hope ur day went well ";
    }
let dayNumber = d.getDay();
// dayNumber =2;
if (dayNumber === 0) {
    displayday.innerHTML = "Sunday" + ": happy weekend"; 
} else if (dayNumber === 1) {
    displayday.innerHTML = "MONDAY " + ": happy week ahead"; 
} else if (dayNumber === 2) {
    displayday.innerHTML = "HAPPY TUESDAY" ; 
} else if (dayNumber === 3) {
    displayday.innerHTML = "WEDNESDAY" ; 
} else if (dayNumber === 4) {
    displayday.innerHTML = "THURSDAY" ; 
} else if (dayNumber === 5) {
    displayday.innerHTML = "FRIDAY" ;
} else if (dayNumber === 6) {
    displayday.innerHTML = "SATURDAY" + ": happy weekend "; 
}
}, 1000);