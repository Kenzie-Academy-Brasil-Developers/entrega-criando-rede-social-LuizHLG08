function likePosts(array) {
    const likeButton = document.querySelectorAll('.likes__figure')
    let likesNumber = document.querySelectorAll('.likes__number')
    for(let i = 0; i < likeButton.length; i++) {
        likeButton[i].addEventListener('click', () => {
            if(!likeButton[i].classList.contains('liked')){
                likeButton[i].classList.add('liked')
                likeButton[i].src = '../../src/assets/img/redheart.svg'
                array[i].likes++
                likesNumber[i].innerHTML = ''
                likesNumber[i].innerHTML = array[i].likes
            } else {
                likeButton[i].classList.remove('liked')
                likeButton[i].src = '../../src/assets/img/grayheart.svg'
                array[i].likes--
                likesNumber[i].innerHTML = ''
                likesNumber[i].innerHTML = array[i].likes
            }
        })
    }
}
likePosts(posts)