import showContentQuestionMark from "./showContentQuestionMark.js";
const certificacoes = document.querySelectorAll('[data-certificacao="titulo"]');
showContentQuestionMark(certificacoes)

const questions = document.querySelectorAll('[data-questions="answer"]');
questions.forEach(question =>{
    question.addEventListener('click', ()=>{
        question.nextElementSibling.classList.toggle('hide')
    })
})