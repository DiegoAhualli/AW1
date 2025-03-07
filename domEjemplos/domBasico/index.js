let userName = document.getElementById('txtName')
let btnSend = document.getElementById('btnSend')
let lblName = document.getElementById('lblName')
let select = document.getElementById('provincias')

const provincias = [
    {name:'Córdoba', id:1},
    {name:'La Rioja', id:2},
    {name:'San Luis', id:3},
    {name:'Santiago del estero', id:4},    
]

/*  
    1- Declarar las variables referentes a los componentes
    2- Capturar el evento en este caso el click del boton.
    3- Mostrar el resultado en un label
*/

btnSend.addEventListener('click', ()=>{
    lblName.textContent = userName.value
})


userName.addEventListener('keyup', (e)=>{
    lblName.textContent = e.target.value
})


select.addEventListener('change', (e)=>{
    const selectValue = e.target.value
    const selectText = e.target.options[e.target.selectedIndex].text
})

window.addEventListener('load', ()=>{
    provincias.forEach(e => {
        let option = document.createElement('option')

        option.value = e.id
        option.text = e.name
        
        select.appendChild(option)
    })
})