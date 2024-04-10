const year=document.querySelector(".year")
const date=new Date().getFullYear()
year.textContent=date
const navel=document.querySelector(".mobile--btn")
const headerel=document.querySelector(".header")
navel.addEventListener('click',()=>{
    headerel.classList.toggle('nav-open')
})