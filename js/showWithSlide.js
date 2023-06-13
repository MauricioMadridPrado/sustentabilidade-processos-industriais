export default function showWithSlide(array){
    array.forEach(element =>{
        element.addEventListener('click', () =>{
            element.nextElementSibling.classList.toggle('hide');
            element.classList.toggle('center');
            element.classList.toggle('slide');
        })
    })
}