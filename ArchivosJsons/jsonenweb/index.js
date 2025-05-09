const jsonContainer = document.getElementById("jsonContainer");

fetch('./data.json').then(res => res.json()).then(data => {
  
    const jsonFormat = JSON.stringify(data.filter(e => e.especie === 'Humano'))
    console.log(jsonFormat)
    console.log(data)
    jsonContainer.textContent = jsonFormat

})