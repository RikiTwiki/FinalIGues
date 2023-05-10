const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");

const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const podpiskaButton = document.getElementById("podpiskaButton");




function validateName(name) {
    const re = /^[^\s]/;
    return re.test(name);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

podpiskaButton.addEventListener("click", (event) => {
    event.preventDefault();



    if (validateName(nameInput.value)) {
        nameInput.classList.remove("is-invalid");
        nameError.style.display = "none"
        console.log("name nice");
    } else {
        nameInput.classList.add("is-invalid");
        nameError.style.display = "block";
    }

    if (validateEmail(emailInput.value)) {
        emailInput.classList.remove("is-invalid");
        emailError.style.display = "none";
        // Здесь можно добавить код для отправки формы, например, через AJAX
        console.log("Подписка успешна");
    } else {
        emailInput.classList.add("is-invalid");
        emailError.style.display = "emailError";
    }
});