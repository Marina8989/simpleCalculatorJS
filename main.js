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
    calc();
})

function calc() {
    btns.forEach(btn => {
        console.log(btn.innerHTML)
        btn.addEventListener('click', () => {
          if(btn.innerHTML === '+') {
            result.value = Number(firstNumber.value) + Number(secondNumber.value);
            // firstNumber.value = '';
            // secondNumber.value = '';
            return result;
          }
          if(btn.innerHTML === '-') {
            result.value = Number(firstNumber.value) - Number(secondNumber.value);
            // firstNumber.value = '';
            // secondNumber.value = '';
            return result;
          }
          if(btn.innerHTML === '*') {
            result.value = Number(firstNumber.value) * Number(secondNumber.value);
            // firstNumber.value = '';
            // secondNumber.value = '';
            return result;
          }
          if(btn.innerHTML === '/') {
            result.value = Number(firstNumber.value) / Number(secondNumber.value);
            // firstNumber.value = '';
            // secondNumber.value = '';
            return result;
          }
       })
    })
}
//console.log(calc());