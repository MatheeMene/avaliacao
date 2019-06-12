var posicaoVertentes = $('#vertentes').offset().top;

$('.botao-faca-parte a[href="#vertentes"]').on('click', () => {

    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;

    $('html', 'body').animate(
    {
        scrollTop: posicaoVertentes - 100
    }, 1000);

});
