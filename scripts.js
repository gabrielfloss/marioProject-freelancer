
const forms = document.querySelector(".faleConosco")
const mask = document.querySelector(".maskFormulary")

function cliqueiNoBotao(){
   forms.style.left = "40%"
   forms.style.transform = "translateX(-10%)"
   mask.style.visibility = "visible"
}

function maskClick(){
    forms.style.left = "-230px"
    forms.style.transform = "translateX (0);"
    mask.style.visibility = "hidden"
}

