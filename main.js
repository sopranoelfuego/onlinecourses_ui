window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window__scroll',window.scrollY>0)
})

let faqs=document.querySelectorAll('.faq')
faqs.forEach(f=>f.addEventListener('click',()=>{
    f.classList.toggle('open')
    let icon=f.querySelector('.faq__icon i')
    if(icon.className === 'uil uil-plus'){
        icon.className='uil uil-minus'
    }else icon.className='uil uil-plus'

}))

// open/close menu

let nav_menu=document.querySelector('.nav_menu')
let openBtn=document.querySelector('#open-menu')
let closeBtn=document.querySelector('#close-menu')

openBtn.addEventListener('click',()=>{
    nav_menu.style.display='flex'
    openBtn.style.display='none'
    closeBtn.style.display='inline-flex'

})
closeBtn.addEventListener('click',()=>{
    nav_menu.style.display='none'
    openBtn.style.display='inline-flex'
    closeBtn.style.display='none'

})