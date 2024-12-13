let link= "https://striveschool-api.herokuapp.com/api/product/"
let passKey= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVjMGYyZWQyMjA3MTAwMTVkZTJmODYiLCJpYXQiOjE3MzQwODY0NDYsImV4cCI6MTczNTI5NjA0Nn0.KS5Q6LFyFNQu-IvyZJT5uDec9Wln4taFU6X5ZqL5glk"
let row= document.getElementById("row")

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
        <div class="card col">
            <img src="${acquisto.imageUrl}" alt="immagine prodotto">
            <h3 class="card-title">${acquisto.name}</h3>
            <p class="card-text">${acquisto.description}</p>
            <p>${acquisto.price}</p>
        </div>`;
    });
})
