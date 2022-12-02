
const plat = document.querySelector('.mais-pl');
const publi = document.querySelector('.mais-pu');
const lanca = document.querySelector('.mais-la');

plat.addEventListener('click', function() {
    window.location.href = "mais-plataformas.html";
});

publi.addEventListener('click', function() {
    window.location.href = "mais-publishers.html";
});

lanca.addEventListener('click', function() {
    window.location.href = "mais-lançamentos.html";
});