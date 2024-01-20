'use strict'

const openModalEl = document.querySelectorAll('.open-modal');
const closeModalEl = document.querySelector('.close-modal');
const overlayEl = document.querySelector('.overlay');
const modalEl = document.querySelector('.modal');

const openModal = function(){
    modalEl.classList.remove('hidden');
    overlayEl.classList.remove('hidden');
}

const closeModal = function(){
    modalEl.classList.add('hidden');
    overlayEl.classList.add('hidden');
}

for(let i=0;i<openModalEl.length;i++){
    openModalEl[i].addEventListener('click',openModal);
}

closeModalEl.addEventListener('click',closeModal);
overlayEl.addEventListener('click',closeModal);
document.addEventListener('keydown',function(e){
    if(e.key === 'Escape' && !modalEl.classList.contains('hidden')){
        closeModal();
    }
})