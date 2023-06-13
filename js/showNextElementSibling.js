export default function showNextElementSibling(array) {
    array.forEach((element) => {
    element.addEventListener("click", () => {
      element.nextElementSibling.classList.remove("hide");
    });
  });
}