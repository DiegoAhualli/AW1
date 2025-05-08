import { navBarComponent } from "../components/navbar.js" //Si veo que cuando pongo el import esta gris es porque no lo estoy usando


let navContainer = document.querySelector('header')

window.addEventListener('load', () => {
    navContainer.innerHTML = navBarComponent
})