const Animacion = document.querySelector(".Animacion");

    window.addEventListener("load" , () => {

            Animacion.style.display = "none";

    })




window.unload = function() {
    $('#carga').fadeOut();
    $('body').removeClass('hidden');

};