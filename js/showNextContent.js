export default function showNextContent(array){
    array.forEach(item=>{
        item.addEventListener('click', () =>{
        item.nextElementSibling.classList.toggle('ativo');
        item.nextElementSibling.nextElementSibling.classList.toggle('hide');
    })
})
}