


function createPostModal (id) {
    const postPosition = id - 1
    const postModal = document.querySelector('.post__modal')

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
    profileContainer.classList.add('profile__container')
    profileImage.classList.add('profile__image')
    profileInformations.classList.add('profile__informations')
    profileName.classList.add('title2')
    profileProfession.classList.add('text2')
    postHeadline.classList.add('modal_post__headline', 'title1')
    postContent.classList.add('modal_post__content', 'text1')
    
    
    closeButton.src = '../../src/assets/img/fechar-janela.png'
    profileImage.src = posts[postPosition].img
    profileName.innerText = posts[postPosition].user
    profileProfession.innerText = posts[postPosition].stack
    postHeadline.innerText = posts[postPosition].title
    postContent.innerText = posts[postPosition].text

    profileInformations.append(profileName, profileProfession)
    profileContainer.append(profileImage, profileInformations)
    postContainer.append(profileContainer, postHeadline, postContent)
    modalContainer.append(postContainer, closeButton)
    postModal.appendChild(modalContainer)
}
function openPostModal(){
    const postModal = document.querySelector('.post__modal')
    const buttonPost1 = document.querySelector('#buttonPost1')
    const buttonPost2 = document.querySelector('#buttonPost2')
    const buttonPost3 = document.querySelector('#buttonPost3')
    buttonPost1.addEventListener('click', () => {
        postModal.innerHTML = ''
        createPostModal(1)
        postModal.showModal()
        closePostModal()
    })
    buttonPost2.addEventListener('click', () => {
        postModal.innerHTML = ''
        createPostModal(2)
        postModal.showModal()
        closePostModal()
    })
    buttonPost3.addEventListener('click', () => {
        postModal.innerHTML = ''
        createPostModal(3)
        postModal.showModal()
        closePostModal()
    })
}
openPostModal()

function closePostModal(){
    const postModal = document.querySelector('.post__modal')
    const closeButton = document.querySelector('.close_modal__button')
    closeButton.addEventListener('click', () => {
        postModal.close()
    })
}

