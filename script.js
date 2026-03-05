function openModal(src) {
    document.getElementById('modal-img').src = src;
    document.getElementById('modal').classList.add('active');
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
    document.getElementById('modal-img').src = '';
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
});