/* Descrizione:
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"
*/

let randomCpuNumb = randomNum()

function randomNum() {
    let randomCpu = []
    for (let i = 0; i < 5; i++) {
        const randomNum = getRndInteger(1, 50);
        randomCpu.push(randomNum)
    }
    return randomCpu.join(' - ')
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let FirstNumEl = document.getElementById('firstNum')
//vedo i numeri in pagina
FirstNumEl.innerText = randomCpuNumb


const formEl = document.querySelector('form')

function correctNumbers(randomCpuNumb, playerNumers) {
    const matches = 0;
    let areCorrect = []
    let message = `You matches ${matches}, they are ${areCorrect.join(' - ')}`
    for (i = 0; i < randomCpuNumb.length; i++) {
        if (playerNumers.include(randomCpuNumb[i]))
            matches++;
            areCorrect.push(playerNumers)
    }
    return message;
}
formEl.addEventListener('submit', function (e) {
    e.preventDefault()
    const playerFirst = e.target.playernumbFt.value
    const playerSecond = e.target.playernumbScd.value
    const playerThird = e.target.playernumbThr.value
    const playerFourth = e.target.playernumbFth.value
    const playerFifth = e.target.playernumbFfth.value

    let playerNumers = []
    playerNumers.push(playerFirst, playerSecond, playerThird, playerFourth, playerFifth)
    
    
    
    
    
    
    
})

