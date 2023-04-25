const scrollPosition = document.querySelectorAll('.scroll')
const navBar = document.querySelector('.nav-bar')

scrollPosition.forEach((link)=>{
    link.addEventListener('click', (e)=>{
        e.preventDefault()
        const id = e.currentTarget.getAttribute('href')
        const element = document.getElementById(id)
       
       
        const navHeight = navBar.getBoundingClientRect().height
        const position = element.offsetTop - navHeight
        window.scrollTo({
            left: 0,
            top: position
        })
    })
})