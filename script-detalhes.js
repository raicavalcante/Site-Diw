URL = "https://api.rawg.io/api/games?key=7c1ca29f7d5f46918d0831cc3b6ab4cf"

fetch(URL)
    .then(res => res.json())
    .then(details => {
        let detalhes = "";
        for(let i = 0 ; i < 1 ; i++){
            detalhes +=
            `<h1>${details.results[i].name}</h1>
            <img class="banner" src="${details.results[i].background_image}">
            <p>Detalhes</p>
            <div class="info">
                <p>Lançamento: ${details.results[i].released}</p>
                <p>Avaliação: ${details.results[i].rating}</p>
                <p>Quantidade de notas: ${details.results[i].ratings_count}</p>
                <p>Atualizado: ${details.results[i].updated}
                <p>Tags: ${details.results[i].tags[i].name}, ${details.results[i].tags[i+1].name}, ${details.results[i].tags[i+2].name}</p>
            </div>`;
            document.getElementById("detalhes").innerHTML = detalhes;
        }


    })
