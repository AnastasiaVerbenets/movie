const addBtn = document.getElementById('add-btn');
const closeBtn = document.getElementById('close-modal-btn');
const modal = document.getElementById('modal');

addBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);

function toggleModal() {
    modal.classList.toggle('is-hidden');
}