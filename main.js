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

let randomCpuNumb = randomNum(5)
let resoultEl = document.getElementById('result')

console.log(randomCpuNumb);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let FirstNumEl = document.getElementById('firstNum')
//vedo i numeri in pagina
FirstNumEl.innerText = randomCpuNumb


const formEl = document.querySelector('form')




setTimeout(function () {
    FirstNumEl.classList.add('d-none')
    formEl.classList.remove('d-none')

}, 5000)
formEl.addEventListener('submit', function (e) {
    e.preventDefault()
    const playerFirst = Number(e.target.playernumbFt.value)
    const playerSecond = Number(e.target.playernumbScd.value)
    const playerThird = Number(e.target.playernumbThr.value)
    const playerFourth = Number(e.target.playernumbFth.value)
    const playerFifth = Number(e.target.playernumbFfth.value)

    let playerNumers = []
    playerNumers.push(playerFirst, playerSecond, playerThird, playerFourth, playerFifth)

    console.log(playerNumers);



    resoultEl.innerText = message(correctNumbers(randomCpuNumb, playerNumers), randomCpuNumb)
    console.log(correctNumbers(randomCpuNumb, playerNumers));
    
    

})

function randomNum(repeat) {
    let randomCpu = []
    for (let i = 0; i < repeat; i++) {
        const randomNum = getRndInteger(1, 50);
        if (randomCpu.includes(randomNum)) {
            repeat = repeat + 1
        }else{
            randomCpu.push(randomNum)            
        }
    }
    return randomCpu
}


function correctNumbers(Random, user) {
    let areCorrect = []
    for (let i = 0; i < Random.length; i++) {
        if (user.indexOf(Random[i]) != -1)
            areCorrect.push(Random[i])
        element = Random[i]
    }
    return areCorrect
}

function message(correct, Random) {
    let message
    if (correct === Random) {
        message = `You find all numbers and they are ${correct.join(' - ')}`

    } else if (correct.length == 0) {
        message = `You wrong all `
    }else{

        message =`You find ${correct.length} and they are ${correct.join(' - ')}`
    }
return message
}
