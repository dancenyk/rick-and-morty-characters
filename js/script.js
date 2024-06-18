//capturar botones 
const prevBtn = document.getElementById("prev-page"); 
const nextBtn = document.getElementById("next-page")

//capturar contenedor donde va el listado de personajes
const characterList  = document.getElementById ("character-list");

const urlBase= "https://rickandmortyapi.com/api/character/?page="; 

let page =1; 
    
fetch (urlBase+page)
    .then((response)=>{
        if (!response.ok){
            throw new Error ("")
        }
        return response.json()
    })
    .then((data)=> {
        for(character of data.results){
            console.log(character.name)
            const tarjeta = document.createElement("div"); 
            const imagen = document.createElement("img");
            const name = document.createElement("p");
            const species = document.createElement("p"); 

            imagen.src = character.image;
            name.innerText = "Name: " + character.name; 
            species.innerText = "Species: " + character.species;

            characterList.appendChild(tarjeta);
            tarjeta.appendChild(imagen);
            tarjeta.appendChild(name);
            tarjeta.appendChild(species);
        }
    })
    .catch((error)=>{
        console.log("error")
    }); 

    nextBtn.addEventListener ("click", ()=>{
        if (page>=1 && page<=42) {
              page++
    fetch (urlBase+page)
    .then((response)=>{
        if (!response.ok){
            throw new Error ("")
        }
        return response.json()
    })
    .then((data)=> {
        characterList.innerHTML =""; 
        for(character of data.results){
            console.log(character.name)
            const tarjeta = document.createElement("div"); 
            const imagen = document.createElement("img");
            const name = document.createElement("p");
            const species = document.createElement("p"); 

            imagen.src = character.image;
            name.innerText = "Name: " + character.name; 
            species.innerText = "Species: " + character.species;

            characterList.appendChild(tarjeta);
            tarjeta.appendChild(imagen);
            tarjeta.appendChild(name);
            tarjeta.appendChild(species);
        }
    })
    .catch((error)=>{
        console.log("error")
    }); 
   
        }
    })

    prevBtn.addEventListener ("click", ()=>{
        if (page>1) {
              page--
    fetch (urlBase+page)
    .then((response)=>{
        if (!response.ok){
            throw new Error ("")
        }
        return response.json()
    })
    .then((data)=> {
        characterList.innerHTML =""; 
        for(character of data.results){
            console.log(character.name)
            const tarjeta = document.createElement("div"); 
            const imagen = document.createElement("img");
            const name = document.createElement("p");
            const species = document.createElement("p"); 

            imagen.src = character.image;
            name.innerText = "Name: " + character.name; 
            species.innerText = "Species: " + character.species;

            characterList.appendChild(tarjeta);
            tarjeta.appendChild(imagen);
            tarjeta.appendChild(name);
            tarjeta.appendChild(species);
        }
    })
    .catch((error)=>{
        console.log("error")
    })
        }
        
    }); 











