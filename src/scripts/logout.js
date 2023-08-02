function logOutModal(){
    const logOutButton = document.querySelector('.header__log_out')
    const logOutModal = document.querySelector('#log_out__modal')
    logOutButton.addEventListener('click', () => {
        logOutModal.showModal()
    })
    closeLogOutModal()
}
logOutModal()

function closeLogOutModal(){
    const continueButton = document.querySelector('.continue__button')
    const logOutModal = document.querySelector('#log_out__modal')
    continueButton.addEventListener('click', () => {
        logOutModal.close()
    })
} 