function followProfile(){
    const buttons = document.querySelectorAll('.follow__button')
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            if(!buttons[i].classList.contains('following')){
                buttons[i].classList.add('following')
                buttons[i].innerHTML = ''
                buttons[i].innerHTML = 'Seguindo'
            }else{
                buttons[i].classList.remove('following')
                buttons[i].innerHTML = ''
                buttons[i].innerHTML = 'Seguir'
            }
        })
    }
}
followProfile()