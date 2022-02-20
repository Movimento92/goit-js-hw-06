const listMain = document.querySelectorAll('.item')
console.log(`Number of categories`, listMain.length)

listMain.forEach((category) => {
  console.log('Category: ', category.firstElementChild.textContent)
  console.log('Elements: ', category.lastElementChild.children.length)
})