const firstNumber = document.querySelector('#firstNumber');
const secondNumber = document.querySelector('#secondNumber');
// const addBtn = document.querySelector('#addBtn');
// const subtractBtn = document.querySelector('#subtractBtn');
// const multiBtn = document.querySelector('#subtractBtn');
// const divBtn = document.querySelector('#divBtn');
const btns = document.querySelectorAll('.btn');
const result = document.querySelector('#result');
const randomNum = document.querySelector('#randomNum');
const reset = document.querySelector('#reset');
const submit = document.querySelector('#submit');

submit.addEventListener('submit', (e) => {
    e.preventDefault();
    
})

function calc() {
   btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log(e.target.innerText);
        if(e.target.innerText === '+') {
          result.text = Number(firstNumber.innerText) + Number(secondNumber.innerText);
          console.log(result.innerText)
        }
    })
})
}
