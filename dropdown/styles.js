//.icon hay que agregar clase active al hacer click en button
//.list-container necesita opacity:1 al hacer click en button
//.checkbox necesita opacity:1 al hacer click en el li correspondiente

let button = document.querySelector('.button')

button.addEventListener('click', function () {
  let listContainer = document.querySelector('.list-container')
  let opacityValue = window.getComputedStyle(listContainer).opacity
  let icon = document.querySelector('.icon')
  if (icon.classList.contains('active')) {
    icon.classList.remove('active')
  } else {
    icon.classList.add('active')
  }
  if (opacityValue === '0') {
    listContainer.style.opacity = '1'
  } else {
    listContainer.style.opacity = '0'
  }
})

let list = document.querySelectorAll('li')

list.forEach(function (li) {
  li.addEventListener('click', function () {
    let icon = document.querySelector('.icon')
    if (icon.classList.contains('active')) {
      icon.classList.remove('active')
    } else {
      icon.classList.add('active')
    }
    let checkbox = li.querySelector('.checkbox')
    let opacityCheckbox = window.getComputedStyle(checkbox).opacity
    let liContent = `${li.textContent}Selected`

    let checkBoxes = document.querySelectorAll('.checkbox')
    checkBoxes.forEach(function (x) {
      x.style.opacity = '0'
    })

    button.textContent = liContent

    if (opacityCheckbox === '1') {
      checkbox.style.opacity = '0'
    } else {
      checkbox.style.opacity = '1'
    }

    let listContainer = document.querySelector('.list-container')
    let opacityValue = window.getComputedStyle(listContainer).opacity

    listContainer.style.opacity = '0'
  });
});
