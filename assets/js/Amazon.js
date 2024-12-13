let link= "https://striveschool-api.herokuapp.com/api/product/"
let passKey= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVjMGYyZWQyMjA3MTAwMTVkZTJmODYiLCJpYXQiOjE3MzQwODY0NDYsImV4cCI6MTczNTI5NjA0Nn0.KS5Q6LFyFNQu-IvyZJT5uDec9Wln4taFU6X5ZqL5glk"
let row= document.getElementById("row")
let nomeProdotto= document.getElementById("nomeProdotto")
let descrizioneProdotto= document.getElementById("descrizioneProdotto")
let brand= document.getElementById("brand")
let imgProdotto= document.getElementById("imgProdotto")
let prezzo= document.getElementById("prezzo")
let invio= document.getElementById("invio")

const aggiunta={
    "name":nomeProdotto.value
}

fetch(link, {
    headers: {
    "Authorization": `Bearer ${passKey}`
    }
})

.then(link=>{
    if(!link.ok){
        throw new Error(`Rilevato errore:${link.status}`)
    }
    return link.json()
})
.then(acquisti=>{
    acquisti.forEach(acquisto => {
        row.innerHTML+=`
        <div class="card col m-3">
            <img src="${acquisto.imageUrl}" alt="immagine prodotto">
            <h3 class="card-title">${acquisto.name}</h3>
            <p class="card-text">${acquisto.description}</p>
            <p> prezz:${acquisto.price}€</p>
            <button id="Cancella" class="bg-warning"><a href="pag2.html">Modifica</a></button>
        </div>`
    });
})


invio.addEventListener("click", ()=>{
    let aggiunta={
        "name":nomeProdotto.value,
        "description":descrizioneProdotto.value,
        "brand":brand.value,
        "imageUrl":imgProdotto.value,
        "price":parseFloat(prezzo.value),
    }
    fetch(link, {
        method: "POST",
        headers:{
            "Authorization": `Bearer ${passKey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(aggiunta)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Errore HTTP! Stato: ${response.status}`);
        }
        return response.json();
    })
    .then(result => {
        console.log('Dati inviati con successo:', result);
        alert('Dati inviati correttamente!');
    })
    .catch(error => {
        console.error('Errore durante l\'invio:', error);
        alert('Errore durante l\'invio dei dati.');
    });
    
})
