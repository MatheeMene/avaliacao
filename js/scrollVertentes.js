var botaoRola = $("#scroll-button");
var elmnt = document.getElementById("vertentes");

botaoRola.click(() => {

    elmnt.scrollIntoView({behavior: 'smooth'});

});
