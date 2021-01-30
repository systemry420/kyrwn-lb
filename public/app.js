const quiz = document.querySelector('.quiz'),
    modal = document.querySelector('.modal'),
    form = document.querySelector('.user-login')



function authUser(id, pass) {
    
}

quiz.addEventListener('click', (e)=>{
    e.preventDefault()

    modal.style['display'] = 'flex'
})

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const id = document.querySelector('#id').value
    const password = document.querySelector('#password').value

    authUser(id, password)
})