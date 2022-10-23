const panels = document.querySelectorAll('.panel');
const active = document.querySelector('.active');

panels.forEach((panel) => {
    panel.addEventListener('click', () =>{
        if(!panel.classList.contains('active')){
            removeActiveClass();
            panel.classList.add('active');      
        }
    })
})

function removeActiveClass(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');   
    })
}