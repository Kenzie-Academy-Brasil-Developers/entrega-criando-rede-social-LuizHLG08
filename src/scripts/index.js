


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






