const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text")

inputEl.addEventListener('input', () => {
    textEl.style.fontSize = event.currentTarget.value + "px";
  })
  
console.log(inputEl, textEl)