import showContentQuestionMark from "./showContentQuestionMark.js";
import showNextElementSibling from "./showNextElementSibling.js";
import showWithSlide from "./showWithSlide.js";
const certificacoes = document.querySelectorAll('[data-certificacao="titulo"]');
showContentQuestionMark(certificacoes);
const questions = document.querySelectorAll('[data-questions="answer"]');
showNextElementSibling(questions)

const info5s = document.querySelectorAll('[data-info="info5s"]');

showWithSlide(info5s)

