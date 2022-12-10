let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")


let cards = []
let sum = 0
let message = ""
let isAlive = false
let hasBlackjack = false

function randomCard(){
    let randomNum = Math.floor(Math.random() * 13) + 1
    if(randomNum === 1){
        return 11
    }else if(randomNum >= 11){
        return 10
    }else{
        return randomNum
    }
}

function startGame(){
    isAlive = true
    let firstCard = randomCard()
    let secondCard = randomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame()
}

function renderGame(){
    sumEl.textContent = "Sum: "
    sumEl.textContent += sum
    cardEl.textContent = " Cards: "
    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + ", "
    }
    if(sum <=20){
        message = "Draw a new card"
    }else if(sum === 21){
        message ="You have a Blackjack"
        hasBlackjack = true
    }else{
        message = "you've lost!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackjack === false){
        let newCard = randomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
    
}