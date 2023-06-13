export default function showContentQuestionMark(array){
    array.forEach(item=>{
        item.addEventListener('click', () =>{
        item.nextElementSibling.classList.toggle('ativo');
        item.nextElementSibling.nextElementSibling.classList.toggle('hide');
    })
})
}