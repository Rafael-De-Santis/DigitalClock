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


/*hoollisss*/
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


https://images.unsplash.com/photo-1490682143684-14369e18dce8?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80