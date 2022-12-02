URL = "https://api.rawg.io/api/games?key=7c1ca29f7d5f46918d0831cc3b6ab4cf"

fetch(URL)
    .then(res => res.json())
    .then(games => {
        let lancamentos = "";
        for(let i = 0 ; i < 6 ; i++){
            lancamentos +=
            `<div class="card">
                <p class="legenda">${games.results[i+5].name}</p>
                <img src="${games.results[i+5].background_image}">
                <div class="card-body" style="margin-top: 15px;">
                    <p class="line">Tags: ${games.results[i+5].tags[i+5].name}, ${games.results[i+5].tags[i+6].name}, ${games.results[i+5].tags[i+7].name}</p>
                    <p class="line">Rating: ${games.results[i+5].rating}</p>
                    <p class="line">Lançamento: ${games.results[i+5].released}</p>
                    <a href="detalhes.html?id=${games.results[i+5].id}" class="card-text">Mais detalhes</a>
                </div>
            </div>`;

            document.getElementById("lancamentos").innerHTML = lancamentos;
        }

        
    })
