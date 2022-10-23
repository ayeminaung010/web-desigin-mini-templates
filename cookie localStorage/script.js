const btnAccept = document.querySelector('.btn-accept');
const btnReject = document.querySelector('.btn-reject');
const cookieTag = document.querySelector('.cookie');

if(localStorage.getItem('accept')!== '1'){
    cookieTag.style.bottom = `-${cookieTag.offsetHeight}px`;

    setTimeout(()=>{
        cookieTag.style.bottom = `0px`;
    },1000);
}


btnAccept.addEventListener('click',()=>{
    localStorage.setItem('accept',1)
    setTimeout(()=>{
        cookieTag.style.bottom = `-${cookieTag.offsetHeight}px`;
    },200);
});

btnReject.addEventListener('click',()=>{
    setTimeout(()=>{
        cookieTag.style.bottom = `-${cookieTag.offsetHeight}px`;
    },200);
});