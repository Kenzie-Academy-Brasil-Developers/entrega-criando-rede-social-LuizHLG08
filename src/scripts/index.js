


function createPostModal (id) {
    const postModal = document.querySelector('#post__modal')

    const closeButton = document.createElement('img')
    const modalContainer = document.createElement('div')
    const postContainer = document.createElement('article')
    const profileContainer = document.createElement('div')
    const profileImage = document.createElement('img')
    const profileInformations = document.createElement('div')
    const profileName = document.createElement('h2')
    const profileProfession = document.createElement('p')
    const postHeadline = document.createElement('h2')
    const postContent = document.createElement('p')

    modalContainer.classList.add('modal__container')
    closeButton.classList.add('close_modal__button')
    postContainer.classList.add('modal_post__container')
    profileContainer.classList.add('profile__container', 'modal_profile__container')
    profileImage.classList.add('profile__image')
    profileInformations.classList.add('profile__informations')
    profileName.classList.add('title2')
    profileProfession.classList.add('text2')
    postHeadline.classList.add('modal_post__headline', 'title1')
    postContent.classList.add('modal_post__content', 'text1')
    
    
    closeButton.src = '../../src/assets/img/fechar-janela.png'
    profileImage.src = posts[id].img
    profileName.innerText = posts[id].user
    profileProfession.innerText = posts[id].stack
    postHeadline.innerText = posts[id].title
    postContent.innerText = posts[id].text

    profileInformations.append(profileName, profileProfession)
    profileContainer.append(profileImage, profileInformations)
    postContainer.append(profileContainer, postHeadline, postContent)
    modalContainer.append(postContainer, closeButton)
    postModal.appendChild(modalContainer)
}
function openPostModal(){
    const postModal = document.querySelector('#post__modal')
    const openPostButton = document.querySelectorAll('.open_post__button')

        for (let i = 0; i < openPostButton.length; i++) {
            openPostButton[i].addEventListener('click', () => {
                postModal.innerHTML = ''
                createPostModal(i)
                postModal.showModal()
                closePostModal()
            })
        }
}
openPostModal()

function closePostModal(){
    const postModal = document.querySelector('#post__modal')
    const closeButton = document.querySelector('.close_modal__button')
    closeButton.addEventListener('click', () => {
        postModal.close()
    })
}
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

function likePosts(array) {
    const likeButton = document.querySelectorAll('.likes__figure')
    let likesNumber = document.querySelectorAll('.likes__number')
    for(let i = 0; i < likeButton.length; i++) {
        likeButton[i].addEventListener('click', () => {
            if(!likeButton[i].classList.contains('liked')){
                likeButton[i].classList.add('liked')
                likeButton[i].src = '../../src/assets/img/red-heart.svg'
                array[i].likes++
                likesNumber[i].innerHTML = ''
                likesNumber[i].innerHTML = array[i].likes
            } else {
                likeButton[i].classList.remove('liked')
                likeButton[i].src = '../../src/assets/img/gray-heart.svg'
                array[i].likes--
                likesNumber[i].innerHTML = ''
                likesNumber[i].innerHTML = array[i].likes
            }
        })
    }
}
likePosts(posts)

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

