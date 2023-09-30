const adviceIdNumber = document.getElementById("advice-id");
const adviceQuote = document.getElementById("quote-advice");
const btnEl = document.getElementById("btn");




//This function is asyncronious and thatmeans we wait for a response from the url and we convert the data from the url to a json format.(so that we could see the data) when clicked on the button


btnEl.addEventListener("click", async ()=>{
    

    //First we fetch the data from the url and thats stored in a response variable 
    const response = await fetch("https://api.adviceslip.com/advice");
    //Then the fetched data is converted in json format and that conversion is stored in a data variable, 
    const data = await response.json();
    console.log(data);
    //We fetch from the data and replace the elements we set the data variable name.(because here is stored the object ) slip.id until we get to the element we want to be displayed, replaced in this case
    //We set it like this because the id keyvalue is nested inside slip ;)
    adviceIdNumber.innerHTML = data.slip.id;
    
    adviceQuote.innerHTML = data.slip.advice;
})