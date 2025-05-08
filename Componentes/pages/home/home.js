import { cardComponent  } from "../../components/card.js";


let cardContainer = document.getElementById('cardContainer')

window.addEventListener("load", () => {

    cardContainer.innerHTML = cardComponent("Titulo 1", "Texto texto texto texto", "Soy un Footer :D")
    
})