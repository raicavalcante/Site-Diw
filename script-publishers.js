URL = "https://api.rawg.io/api/publishers?key=7c1ca29f7d5f46918d0831cc3b6ab4cf"

fetch(URL)
    .then(res => res.json())
    .then(publishers => {
        let publi = "";
        for(let i = 0 ; i < 3 ; i++){
            publi +=
            `<div class="ex-pp">
                <h2>${publishers.results[i+3].name}</h2>
                <img src="${publishers.results[i+3].image_background}" class="img-pp">
                <div class="card-pp">
                    <h3>Principais Jogos</h3>
                    <p> ${publishers.results[i].games[i].name} </p>
                    <p> ${publishers.results[i].games[i+1].name} </p>
                    <p> ${publishers.results[i].games[i+2].name} </p>
                </div>
                <div class="card-footer text-right" style="margin-top: 15px;">
                    <a class="card-text" href="detalhes.html">Mais detalhes</a>
                </div>
            </div>`;

            document.getElementById("publishers").innerHTML = publi;
        }


    })
