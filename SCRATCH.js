hourEl.innerText = new Date().getHours();
   minuteEl.innerText = new Date().getMinutes(); 
   secondEl.innerText = new Date().getSeconds();
   ampmEl = "AM"
    if (hourEl > 12){
        hourEl = hourEl - 12;
        ampmEl = "PM"
    } 





    let h = new Date().getHours();
    let m = new Date().getMinutes(); 
    let s = new Date().getSeconds();
    let ampm = "AM"
 
     if (h > 12){
         h = h - 12;
         ampmEl = "PM"
     }
     
     hourEl.innerText = h;
     minuteEl.innerText = m;





     
buttons.forEach(function(button){button.addEventListener('click', (e) => {
    const btn = e.target.childElement;

    alert(btn.childNode(btn))
})}.addEventListener('click', (e) => {
    //idve = button.getElementById('venezuela')
    console.log(e.target);
    if ((e.target) == (id='venezuela')){
        alert('venezuela');
    }
    if ((e.target) == (id='spain')) {
        alert('spain');
    }
    alert("pesque");
})




if (e.target.id == "venezuela"){
    alert('venezuela');
}
else if (e.target.id == "spain"){
    alert('spain');
}
else if (e.target.id == "china"){
    alert('china');
}
else if (e.target.id == "hungary"){
    alert('hungary');
}



console.log(`${key}: ${country}`);


   /* Object.values(Countries).forEach(country => {
        if (e.target.id == country) {
            alert(country);
        }
        console.log(country);
        
    })*/


    <div class="buttons"></div>
    <button id="venezuela">Venezuela</button>
    <button id="spain">Spain</button>
    <button id="china">China</button>
    <button id="hungary">Hungary</button>

    </div>
    

    <div class="buttons">
     
    </div>
