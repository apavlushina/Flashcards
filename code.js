function bindListeners () {
const close = Array.from(document.getElementsByTagName("span"));
const removeCard = function(event) {
    event.target.parentElement.style.display = "none";
}
close.forEach(function(span) {
    span.addEventListener('click', removeCard)
})

const turnCard = function(event) {
    if (event.target.tagName.toLowerCase() === "li") {
        event.target.classList.toggle('back');
        event.target.lastElementChild.classList.toggle('block');
    } else {
        if (event.target.tagName.toLowerCase() !== "input" && event.target.nextElementSibling) {
            event.target.parentElement.classList.toggle('back');
            event.target.nextElementSibling.classList.toggle('block');
        }
    }
}

const cards = Array.from(document.getElementsByTagName('li'));
cards.forEach(function(card) {
    card.addEventListener('click', turnCard)
})
}
bindListeners();

function passAllValidation (question, answer) {
    if (question || answer) {
        if (answer.length < 50) {
            return true
        } else {
            alert('You message is too long!');
        }
    } else {
        return alert('You forgot to fill in all fields!');
    }
}

function submitComment() {

const inputOne = document.getElementById('question');
const question = inputOne.value;
const inputTwo = document.getElementById('answer');
const answer = inputTwo.value;


if (passAllValidation(question, answer) == true) {
    console.log(answer.length);
    const newCard = document.createElement('li');
    const span = document.createElement('span');
    span.classList.add('close');
    span.innerText = 'x';
    
    const paragraphOne = document.createElement('p');
    const paragraphTwo = document.createElement('p');
    paragraphTwo.classList.add('card_answer');
    
    
                paragraphOne.textContent = `${question}`;
                paragraphTwo.textContent = `${answer}`;
                newCard.classList.add('card_item');
                newCard.appendChild(span);
                newCard.appendChild(paragraphOne);
                newCard.appendChild(paragraphTwo);
    
                let cardList = document.querySelector('.card_list');
                cardList.appendChild(newCard);
    
                inputOne.value = null;
                inputTwo.value = null;
}
bindListeners();
}

button.addEventListener('click', submitComment);
