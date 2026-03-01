function switchPage(page) {
    document.getElementById('page-home').style.display = 'none';
    document.getElementById('page-gallery').style.display = 'none';
    document.getElementById('page-events').style.display = 'none';
    document.getElementById('page-' + page).style.display = '';
    document.querySelectorAll('.nav-links a').forEach(function(a) {
        var fn = a.getAttribute('onclick') || '';
        a.classList.toggle('active', fn.includes("'" + page + "'"));
    });
    window.scrollTo(0, 0);
}

function openEvent(id) {
    switchPage('events');
    setTimeout(function() {
        var folder = document.getElementById('folder-' + id);
        if (folder && !folder.classList.contains('open')) toggleFolder(id);
        if (folder) folder.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
}

function toggleFolder(id) {
    document.getElementById('folder-' + id).classList.toggle('open');
}

function addNote(id) {
    var input = document.getElementById('input-' + id);
    var text = input.value.trim();
    if (!text) return;
    var li = document.createElement('li');
    li.innerHTML = '<span class="dot"></span>' + text;
    document.getElementById('notes-' + id).appendChild(li);
    input.value = '';
}

document.addEventListener('DOMContentLoaded', function() {
    ['appathon', 'webathon', 'datathon', 'hackstreet', 'ideathon'].forEach(function(id) {
        var input = document.getElementById('input-' + id);
        if (input) input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') addNote(id);
        });
    });
});

function uploadImgs(id, fileInput) {
    var container = document.getElementById('imgs-' + id);
    Array.from(fileInput.files).forEach(function(file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var img = document.createElement('img');
            img.src = e.target.result;
            img.onclick = function() { openModal(e.target.result); };
            container.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
}

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