function onOff(){
    document
        .querySelector("#modal")
        .classList 
        .toggle("hide")
        
    document
        .querySelector("body")
        .classList
        .toggle("hideScroll")

    document
        .querySelector("#modal")
        .classList
        .toggle("addScroll")
}

function checkFields(event){
    const valuesToCheck = [
        "image",
        "title",
        "description",

    ]

    const isEmpty = valuesToCheck.find(function(value){
        const checkIfIsString = typeof event.target[value].value === "string"
        const checkIsEmpty = !event.target[value].value.trim()
        
        if(checkIfIsString && checkIsEmpty){
            return true
        }
    
    })

    if(isEmpty){
        event.preventDefault()
        alert("Por favor, preencha todos os Campos")
    }
}