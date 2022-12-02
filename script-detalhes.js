
const param = new URLSearchParams(window.location.search);
let ident = param.get('id');

URL = `https://api.rawg.io/api/games/${ident}?key=7c1ca29f7d5f46918d0831cc3b6ab4cf`;

fetch(URL)
    .then(res => res.json())
    .then(details => {
        console.log(details)
        let detalhes = "";
            detalhes +=
            `<h1>${details.name}</h1>
            <img class="banner" src="${details.background_image}">
            <p>Detalhes</p>
            <div class="info">
                <p>Lançamento: ${details.released}</p>
                <p>Avaliação: ${details.rating}</p>
                <p>Quantidade de notas: ${details.ratings_count}</p>
                <p>Atualizado: ${details.updated}</p>
                <p>Tags: ${details.tags[0].name}</p>
            </div>`;
            document.getElementById("detalhes").innerHTML = detalhes;
    })
