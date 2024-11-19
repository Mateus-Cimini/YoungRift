// BOTAO DE PESQUISA
const pesquisa = document.querySelector(".pesquisa");
const botao = document.querySelector(".botao");
const pergunta = document.querySelector(".pergunta");

botao.addEventListener("click", () => {
    pesquisa.classList.toggle("active");
    pergunta.focus();
});



