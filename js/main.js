import showContentQuestionMark from "./showContentQuestionMark.js";
import showNextElementSibling from "./showNextElementSibling.js";
const certificacoes = document.querySelectorAll('[data-certificacao="titulo"]');
showContentQuestionMark(certificacoes);
const questions = document.querySelectorAll('[data-questions="answer"]');
showNextElementSibling(questions)

