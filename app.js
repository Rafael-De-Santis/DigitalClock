const hourEle = document.getElementById("hour")
const minuteEle = document.getElementById("minutes")
const secondEle = document.getElementById("seconds")
const ampmEle = document.getElementById("ampm")


function clock (){
 
   let h = new Date().getHours();
   let m = new Date().getMinutes(); 
   let s = new Date().getSeconds();
   let ampm = "AM";

    if (h > 12){
        h = h - 12;
        ampm = "PM";
    }
    
    hourEle.innerText = h;
    minuteEle.innerText = m;
    secondEle.innerText = s;
    ampmEle.innerText = ampm;
    setTimeout(() => {
        clock()
    }, 1000)

}

clock()

var buttons = document.querySelector('.buttons')
var dropdown = document.querySelector("#countries")

const Countries = {
    Venezuela: "venezuela",
    Spain: "spain",
    China: "china",
    Hungary: "hungary",
    Italy: "italy"
}

buttons.addEventListener('click', (e) => {
    for (const [key, country] of Object.entries(Countries)) {
        if (e.target.id == country) {
            alert(key);
            break;
        }
    }
})

dropdown.addEventListener('change', (e) => {
    alert(e.target.value)
})

function load(){
var bttons = ""
var options =  "<option value=\"\"></option>"

for (const [key, country] of Object.entries(Countries)) {
    options += "<option value="+key+">"+key+"</option>";
    bttons += "<button id="+country+">"+key+"</button>";
}
buttons.innerHTML = bttons
dropdown.innerHTML= options
}

load()

//<option value="volvo">Volvo</option>