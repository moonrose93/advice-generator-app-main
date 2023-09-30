const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");


btnEl.addEventListener("click", async function(){
    try {
        btnEl.disabled = true;
        btnEl.innerText = "Loading..."
        animeImgEl.src = "spinner.svg";
        animeNameEl.innerText = "Upadating..."
        const response = await fetch("https://api.catboys.com/img")
        const data = await response.json()
        animeContainerEl.style.display = "block";
        btnEl.innerText = "Get Anime"
        animeNameEl.innerText = "Anime Name"
        btnEl.disabled = false;
        animeImgEl.src = data.url
        animeNameEl.innerText = data.artist
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
})