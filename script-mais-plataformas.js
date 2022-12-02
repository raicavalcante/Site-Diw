URL = "https://api.rawg.io/api/platforms?key=7c1ca29f7d5f46918d0831cc3b6ab4cf"

fetch(URL)
    .then(res => res.json())
    .then(mPlatforms => {
        let maisPlataformas = "";
        for(let i = 0 ; i < 6 ; i++){
            maisPlataformas +=
            `<div class="ex-pp">
                <h2>${mPlatforms.results[i].name}</h2>
                <img src="${mPlatforms.results[i].image_background}" class="img-pp">
                <div class="card-pp">
                    <h3>Principais Jogos</h3>
                    <p> ${mPlatforms.results[i].games[i].name}</p>
                    <p> ${mPlatforms.results[i].games[i+1].name}</p>
                    <p> ${mPlatforms.results[i].games[i+2].name}</p>
                </div>
                <div class="card-footer text-right" style="margin-top: 15px;">
                    <a class="card-text" href="detalhes.html">Mais detalhes</a>
                </div>
            </div>`;

            document.getElementById("mais-plataformas").innerHTML = maisPlataformas;
        }


    })
