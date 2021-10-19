var modal = document.getElementById('popup-menu');

var btn = document.getElementById('btn-popup');

var span = document.getElementById('btn-fechar');

// Abrir o PopUp
btn.onclick = function() {
    modal.style.display = 'block';
}

//Fechar o PopUp 
span.onclick = function() {
    modal.style.display = 'none';
}
