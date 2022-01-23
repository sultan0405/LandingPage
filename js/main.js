const header = document.getElementById('header')

const sr = ScrollReveal({
    distance:'60px',
    duration:2800,
    reset:true
})

sr.reveal(`.home_data, .stats`,{
    origin: 'top',
    interval:100,
})
sr.reveal(`.home_main_img`,{
    origin: 'right',
    interval:100,
})





window.addEventListener('scroll', ()=>{
    header.classList.toggle('shadow', window.scrollY > 0)
})