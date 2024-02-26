function Kereses(nev){
    fetch(`https://hur.webmania.cc/zips/${nev}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => { 
            Kiiras(data);
        })
        .catch(error => {
            console.error('Error during fetch:', error);
            return null;
        });
}

function Kiiras(result){
    container = document.getElementById("results");
    if(result.zips.length == 0){document.getElementById("error").textContent = "Az adatbázisunkban nem olt a kereséséenk megfelelő találat!"; return;}
    result.zips.forEach(object =>{
        container.innerHTML += `<p>${object.name}:  ${object.zip}</p>`
    })
}

function Lekeres(){
    document.getElementById("error").textContent = "";
    nev = document.getElementById("nevInput").value;
    Kereses(nev);
}