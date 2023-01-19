const button_marcar = document.querySelector(".button_marcar");
const containerPrincipal = document.querySelector(".containerPrincipal");
const input_titleNota = document.querySelector(".input_titleNota")
const input_nota = document.querySelector(".input_nota");
const body = document.querySelector(".body2");

function Create() {
    const element = document.createElement("div");
    const imgArrowdown = document.createElement("img");
    const titleOfElement = document.createElement("p");
    const textOfElement = document.createElement("h2");
    const divitems = document.createElement("div");
    const lixeiraPng = document.createElement("img");

    divitems.setAttribute("class", "divitems");
    imgArrowdown.src="arrowimg.png";
    lixeiraPng.src="lixeira.png";
    divitems.appendChild(lixeiraPng);
    lixeiraPng.setAttribute("class", "lixeiraPng");

    element.appendChild(divitems);

    titleOfElement.setAttribute("class", "titleOfElement");
    titleOfElement.innerHTML = input_titleNota.value;

    if(input_nota.value == '' || input_nota.value == undefined) {
        textOfElement.innerHTML = "Sem texto";
    } else {
        textOfElement.innerHTML = input_nota.value;
    }

    imgArrowdown.setAttribute("class", "arrowdown");
    imgArrowdown.addEventListener("click", () => {

        textOfElement.style.display = "block";
        textOfElement.style.fontSize = "0.8em";
        textOfElement.style.marginLeft = "1.2em";
        textOfElement.style.marginBottom = "0.7em";
        element.style.height = "3em";

        if(element.classList.contains("fechardiv")) {
            element.style.height = "max-content";
            textOfElement.style.display = "none";
            imgArrowdown.src="arrowimg.png"
            element.classList.remove("fechardiv");
        } else {
            imgArrowdown.src="arrow-up.png"
            element.style.height = "max-content";
            element.classList.add("fechardiv");
        }
    })

    textOfElement.setAttribute("class", "textOfElement");

    element.setAttribute("class", "element");

    divitems.appendChild(imgArrowdown)

    if(input_titleNota.value == '' || input_titleNota.value == undefined) {
        titleOfElement.innerHTML = "Nota sem nome";
    } else {
        titleOfElement.innerHTML = input_titleNota.value;
    }

    containerPrincipal.appendChild(element);
    divitems.appendChild(titleOfElement);
    element.appendChild(textOfElement);

    lixeiraPng.addEventListener("click", () => {
        containerPrincipal.removeChild(element)
    });

    localStorage.setItem("persistirItem", "persististirItem");

}

button_marcar.addEventListener("click", () => {
    const i = document.getElementsByClassName("element");
    
    if(i.length < 5) {
        Create()
    } else {
        function ValidaQuant() {
            if(i.length == 5) {
                button_marcar.removeEventListener("click", arguments.callee)
            }
        }
        
        setInterval(ValidaQuant, 2000);
    }
});

const btnMudar = document.getElementById("btnMudar");
const teme = document.querySelector(".teme");

teme.addEventListener("click", () => {
    if(btnMudar.classList.contains("btnMudarMoviment")) {
        body.style.background = "#363636";
        localStorage.removeItem("valor")
        btnMudar.classList.remove("btnMudarMoviment");
    } else {
        localStorage.setItem("valor", "corDeFundo");
        body.style.background = "white";
        btnMudar.classList.add("btnMudarMoviment");
    }
    if(localStorage.getItem("valor") == "corDeFundo") {
        body.style.background = "#363636";
    } else {
        body.style.background = "white";
    }
})

if(localStorage.getItem("valor") == "corDeFundo") {
    body.style.background = "#363636";
    btnMudar.classList.add("btnMudarMoviment");
} else {
    body.style.background = "white";
    btnMudar.classList.remove("btnMudarMoviment");
}