const inputs = document.querySelectorAll("input[type='password'], input[type='text']")
const emailLabel = document.querySelector(".email-label")
const submitBtn = document.querySelector("button")

submitBtn.addEventListener("click", function() {
    inputs.forEach(input => {
        if (input.value.length === 0) {
            if (!input.parentElement.classList.contains("error")) {
                addError(input.parentElement, "error")
            }
        } else {
            removeError(input.parentElement)
        }   
    })

    const checkEmail = isEmail(emailLabel.children[0].value)
    if (checkEmail === 0) {
        addError(emailLabel, "error")
    } else {
        removeError(emailLabel)
    }
})

function addError(path) {
    if (!path.classList.contains("error")) {
        path.classList.add("error")
        const imagem = document.createElement("img")
        imagem.src = "images/icon-error.svg"
        path.appendChild(imagem)

        const textError = document.createElement("p")
        textError.innerText = `${path.children[0].name} cannot be empty`
        path.children[0].placeholder = ""
        if (path.children[0].name === "email") {
            textError.innerText = `Looks like this is not an email`
            path.children[0].placeholder = "email@example.com"
            path.style.color = "red"
        }
        console.log()
        textError.style.color = "#ff7978"
        textError.style.fontWeight = "400"
        path.parentElement.appendChild(textError)
    }
}

function removeError(path) {
    if (path.classList.contains("error")) {
        path.classList.remove("error")
        path.removeChild(path.children[1])   
        console.log(path.parentElement.children)
        path.parentElement.removeChild(path.parentElement.children[1])
    }
}

function isEmail(emailText) {
    if (emailText.includes("@gmail.com") || emailText.includes("@hotmail.com") || emailText.includes("@outlook.com")) {
        return 1
    } else {
        return 0
    }
}