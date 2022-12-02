URL = "https://api.rawg.io/api/games?key=7c1ca29f7d5f46918d0831cc3b6ab4cf";

fetch(URL)
    .then(res => res.json())
    .then(mLanca => {
        let mlancamentos = "";
        for(let i = 0 ; i < 18 ; i++){
            mlancamentos +=
            `<div class="card">
                <p class="legenda">${mLanca.results[i].name}</p>
                <img src="${mLanca.results[i].background_image}">
                <div class="card-body" style="margin-top: 15px;">
                    <a href="detalhes.html?id=${mLanca.results[i].id}" class="card-text">Mais detalhes</a>
                </div>
            </div>`;

            document.getElementById("mais-lançamentos").innerHTML = mlancamentos;
        }


    })
