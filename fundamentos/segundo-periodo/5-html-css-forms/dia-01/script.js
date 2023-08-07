const button = document.querySelector("#buttomSubmit");
let inputNameUser = document.querySelector("#inputNameUser");
const nameUser = document.querySelector("#nameUser");

function getUserValue(event) {
    event.preventDefaul();
    console.log(inputNameUser.value);
    nameUser.innerHTML = inputNameUser.value;
}
button.addEventListener('click', getUserValue);