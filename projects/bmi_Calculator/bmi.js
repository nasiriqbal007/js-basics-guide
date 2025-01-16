const form = document.querySelector('form');
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const height=parseInt(document.querySelector("#height").value)
    const weight=parseInt(document.querySelector("#weight").value)
    const result=document.querySelector("#result")
    if (height===""|| height<=0 || isNaN(height)) {
        result.innerHTML= "Please enter valid height "
        
    } else if(weight==="" || weight<=0 || isNaN(weight)) {
        result.innerHTML= "Plz enter valid weight"  
    }
    else{
        const bmi = weight / ((height / 100) * (height / 100));
        result.innerHTML = `${bmi.toFixed(2)}`;
       if (bmi < 18.5) {

            const uw= document.querySelector("#under");
            uw.innerHTML = `${bmi.toFixed(2)}`;
            uw.style.color="yellow";

        } else if (bmi >= 18.5 && bmi <= 24.9) {
           const normal = document.querySelector("#normal")
           normal.innerHTML = `${bmi.toFixed(2)}`;
           normal.style.color="green";
        } else if (bmi > 24.9) {
           const  over=document.querySelector("#over") 
           over.innerHTML = `${bmi.toFixed(2)}`;
           over.style.color="red"
        }
    }
    
})