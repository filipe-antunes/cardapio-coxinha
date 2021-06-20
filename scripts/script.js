const divsItems = document.querySelectorAll('.coxinha')

Array.from(divsItems).forEach(item => {
  item.addEventListener('click', () => {

    const modalTitle = document.querySelector('.modal-title')
    const modalBody = document.querySelector('.modal-body')
    const modalImage = document.qu

    modalTitle.innerText = item.children[0].children[0].innerText
    modalBody.firstElementChild.innerText = item.children[0].children[1].innerText
    modalBody.children[2].src = item.children[1].src
  })
})

