const adviceIdNumber = document.getElementById("advice-id");
const adviceQuote = document.getElementById("quote-advice");
const btnEl = document.getElementById("btn");







btnEl.addEventListener("click", async ()=>{
    

    const response = await fetch("https://api.adviceslip.com/advice");
   
    const data = await response.json();
    console.log(data);
   
    adviceIdNumber.innerHTML = data.slip.id;

    
    adviceQuote.innerHTML = data.slip.advice;
});
