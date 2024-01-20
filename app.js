const openModalElement = document.querySelector('#openModal');
const modalElement = document.querySelector('.modal');
const modalContentElement = modalElement.querySelector('.modal-content');

openModalElement.addEventListener('click', () =>{
    modalElement.classList.add('open')
});
modalContentElement.addEventListener('click', () =>{
    modalElement.classList.remove('open');
})