URL = "https://api.rawg.io/api/games?&key=7c1ca29f7d5f46918d0831cc3b6ab4cf"

fetch(URL)
    .then(res => res.json())
    .then(destaques => {
        let Destaques = "";
        for(let i = 0 ; i < 1 ; i++){
            Destaques +=
               `<div class="slides">
                   <input class="off" type="radio" name="radio" id="radio1" checked>
                   <input class="off" type="radio" name="radio" id="radio2">
                   <input class="off" type="radio" name="radio" id="radio3">
                   <input class="off" type="radio" name="radio" id="radio4">
                   <input class="off" type="radio" name="radio" id="radio5">

                   <div class="slide s1">
                       <h1 class="legend">${destaques.results[i].name}</h1>
                       <img src="${destaques.results[i].background_image}" alt="Game1" class="img-carousel">
                   </div>

                   <div class="slide">
                       <h1 class="legend">${destaques.results[i+1].name}</h1>
                       <img src="${destaques.results[i+1].background_image}" alt="Game2" class="img-carousel">
                   </div>

                   <div class="slide">
                       <h1 class="legend">${destaques.results[i+2].name}</h1>
                       <img src="${destaques.results[i+2].background_image}" alt="Game3" class="img-carousel">
                   </div>

                   <div class="slide">
                       <h1 class="legend">${destaques.results[i+3].name}</h1>
                       <img src="${destaques.results[i+3].background_image}" alt="Game4" class="img-carousel">
                   </div>

                   <div class="slide">
                       <h1 class="legend">${destaques.results[i+4].name}</h1>
                       <img src="${destaques.results[i+4].background_image}" alt="Game5" class="img-carousel">
                   </div>
                    
                   <div class="nav">
                       <label class="bar" for="radio1"></label>
                       <label class="bar" for="radio2"></label>
                       <label class="bar" for="radio3"></label>
                       <label class="bar" for="radio4"></label>
                       <label class="bar" for="radio5"></label>
                   </div>
               </div>`
            document.getElementById("destaques").innerHTML = Destaques;
        }
    })
