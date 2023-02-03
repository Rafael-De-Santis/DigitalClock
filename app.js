const hourEle = document.getElementById("hour")
const minuteEle = document.getElementById("minutes")
const secondEle = document.getElementById("seconds")
const ampmEle = document.getElementById("ampm")

var timeZone = new Date().getTimezoneOffset();
  

function clock (){

    date = new Date(); //createds date object
    timeNow = date.getTime(); // converts time object into "miliseconds"
    // sum our current time in miliseconds + the value of the getimezoneoffset converted in "milisecond" WHY?
    //*because the return of gettimezoneoffset is in minutes
    utc = timeNow+(date.getTimezoneOffset()*60000);
    
    //transform hours (timeZone) to miliseconds
    time = new Date(utc+(3600000*timeZone));

    let h = time.getHours() ;
    let m = time.getMinutes(); 
    let s = time.getSeconds();
 
   
   let ampm = "AM";

    if (h > 12){
        h = h - 12;
        ampm = "PM";
    }
    h = h == 0 ? 12 : h;

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    
    hourEle.innerText = h;
    minuteEle.innerText = m;
    secondEle.innerText = s;
    ampmEle.innerText = ampm;


    setTimeout(() => {
        clock()
    }, 1000)

    return [h, m, s, ampm];
}

clock()

let clockArray = clock();



function backgroundChange(clockArray){

    let intHour = parseInt(clockArray[0])
    let dayNight = clockArray[3]
    let rgb = "black"
    let element = Array.from(document.getElementsByClassName("colorChange"));
    //*console.log(element)

        

       /* element.forEach(colorChange(rgb) => {
            element.style.color = rgb;
        })*/

        function colorChange(rgb){
            for (ind = 0; ind <= element.length; ind++) {
                element[ind].style.color = rgb
            }
        }

    /*colorChange()*/

    switch(true){
            //*SUNRISE
        case intHour >= 6 && dayNight === "AM" && intHour < 12:
            document.body.style.backgroundImage = "url(images/sunrise.jpg)";
            console.log("coronao");
            break;
            //**Noon
        case intHour >= 12 && dayNight === "PM" && intHour < 2:
            document.body.style.backgroundImage = "url(images/noon.jpg)";
            console.log("NOON");
            break;
            //*Afternoon
        case intHour >= 2 && dayNight === "PM" && intHour < 5:
            document.body.style.backgroundImage = "url(images/afternoon.jpg)";
            console.log("Afternoon");
            break;
            //*DAWN
        case intHour >= 5 && dayNight === "PM" && intHour < 7:
            document.body.style.backgroundImage = "url(images/standarddawn.jpg)";
            console.log("Afternoon");
            break;
            //*7pm
        case intHour >= 7 && dayNight === "PM" && intHour < 9:
            document.body.style.backgroundImage = "url(images/7pm.jpg)";
            console.log("7pm");
            break;
            //*NIGHT
        case intHour >= 9 /*&& dayNight === "PM"*/ || (intHour < 3 && dayNight === "AM"):
            document.body.style.backgroundImage = "url(images/night.jpg)";
            rgb = "white"
            /*element.style.color = "white";*/
            console.log("NIGHT");
            break;
            //*DARKNIGHT
        case intHour >= 3 && dayNight === "AM" && intHour < 6:
            document.body.style.backgroundImage = "url(images/darknight.jpg)";
            console.log("DARKNIGHT");
    }
    
//*console.log(colorChange(rgb))

}

backgroundChange(clockArray)


var buttons = document.querySelector('.buttons')
var dropdown = document.querySelector("#countries")


const Countries2 = {   
    venezuela: ["Venezuela","-4","Arepa","Bandera"],
    hungria: ["Hungria","1","Gyulas","Bandera"],
    china: ["China", "8", "Aloz", "Bandera"],
    chile: ["Chile", "-3", "Sopaipilla", "Bandera"],
    usaeast:["USEast", "-5", "TortaCubana", "Bandera"],
    usawest:["USWest", "-8", "Tacos", "Bandera"],
    guatemala:["Guatemala", "-6", "Rafael", "Bandera"],
    spain:["Spain", "4", "Paella", "Bandera"],
    canadaeast:["CanadaEast", "-4", "Poutine", "Bandera"],
    canadawest:["CanadaWest", "-8", "JapaDog", "Bandera"],
    mexico:["Mexico", "-6", "Chilaquiles", "Bandera"]
}


buttons.addEventListener('click', (e) => {
    for (const [key, country] of Object.entries(Countries2)) {
        if (e.target.id == country) {
            alert(country[2]);
            break;
        }
    }
})

dropdown.addEventListener('change', (e) => {
    //alert(e.target.value)
    let choice = e.target.value;
    let selected = Countries2[choice];
    console.log(selected)
    // let timeChanged = calcTimeZone(selected[0], selected[1]);
    // //let nh = cutime.getHours();
    // let newHour = time.getHours()
    // let newMinutes = time.getMinutes()
    // let newSeconds = time.getSeconds()
    
    
    // alert(newHour + ":" + newMinutes + ":" + newSeconds)
    //console.log(timeChanged)
    //calcTimeZone(selected[1]);
    timeZone = selected[1];
    clock();
    clockArray = clock();
    backgroundChange(clockArray)
})

function load(){
var bttons = ""
var options =  "<option value=\"\">England</option>"

for (const [key, country] of Object.entries(Countries2)) {
    options += "<option value="+key+">"+country[0]+"</option>";
    bttons += "<button id="+country+">"+country[0]+"</button>";
}
buttons.innerHTML = bttons
dropdown.innerHTML= options
}

load()

function calcTimeZone(timeZone){
    
    date = new Date(); //createds date object
    timeNow = date.getTime(); // converts time object into "miliseconds"
    // sum our current time in miliseconds + the value of the getimezoneoffset converted in "milisecond" WHY?
    //*because the return of gettimezoneoffset is in minutes
    utc = timeNow+(date.getTimezoneOffset()*60000);
    
    //transform hours (timeZone) to miliseconds
    time = new Date(utc+(3600000*timeZone));
    //*transform the last amount of miliseonds into a normal time string
    //return time.toLocaleString()
    h = time.getHours();
    m = time.getMinutes();
    s = time.getSeconds();
    hourEle.innerText = h;
    minuteEle.innerText = m;
    secondEle.innerText = s;
    ampmEle.innerText = ampm;
    //clock();
}