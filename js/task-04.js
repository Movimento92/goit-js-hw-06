const buttonDecr = document.querySelector('button[data-action="decrement"]')
const buttonIncr = document.querySelector('button[data-action="increment"]')
const counterValueDisplay = document.querySelector('#value')
let counterValue = 0


buttonDecr.addEventListener('click', () => {
  counterValue -= 1
  console.log(counterValue)

  counterValueDisplay.textContent = counterValue
})
buttonIncr.addEventListener('click', () => {
  counterValue += 1
  console.log(counterValue)

  counterValueDisplay.textContent = counterValue
})

console.log(buttonDecr, buttonIncr, counterValueDisplay)