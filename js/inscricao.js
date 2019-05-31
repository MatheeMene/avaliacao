// botaoEnvia.addClass('disabled').prop("disabled", true);
// botaoEnviar.removeClass('disabled').prop("disabled", false);
var botaoEnvia = $('#envia-formulario');


var nome = $('#nome');

function validaNome() {

    nome.on('blur', () => {

        let expReg = /[a-z]\s[a-z]/gim;
        let testaER = expReg.test(nome.val());

        nome.removeClass('correto');
        nome.removeClass('incorreto');

        if(testaER) {
            nome.addClass('correto');
        } else {
            nome.addClass('incorreto');
        }
        
    });
    
}

validaNome();


var email = $('#email');

function validaEmail() {

    email.on('blur', () => {

        let expReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let testaER = expReg.test(email.val());

        email.removeClass('correto');
        email.removeClass('incorreto');

        if(testaER) {
            email.addClass('correto');
        } else {
            email.addClass('incorreto');
        }
    
    });

}

validaEmail();



var validaRa;

function validaRadio() {
    
    let erro = 0;

    $("input[type='radio']").each(function(){
        
        if(!$("input:radio[name='disponibilidade']").is(':checked')){
            erro++;
        }
        
    });
    
    if(erro > 0){
        $('#campo-disponibilidade').addClass('incorreto');
        return validaRa = false;
    } else {
        $('#campo-disponibilidade').addClass('correto');
        return validaRa = true;
    }
}


var validaCheck;

function validaCheckbox() {

    var erro = 0;

    $('input[type="checkbox"]').each(() => {

        if(!$('input:checkbox[name="interesses"]').is(':checked')) {
            erro++;
        }

        if(erro > 0){
            $('#campo-interesses').addClass('incorreto');
            return validaCheck = false;
        } else {
            $('#campo-interesses').addClass('correto');
            return validaCheck = true;
        }

    });

}

var textArea;

function validaTextArea(input) {

    input.classList.remove("incorreto");    
    input.classList.remove("correto");   

    if (input.value.length < 140) {
        input.classList.add("incorreto");
        return textArea = false;
    } else {
        input.classList.add("correto");
        return textArea = true;
    }

}

$("#clicaRadio").click(() => {
    validaRadio();
});

$("#clicaCheck").click(() => {
    validaCheckbox();
})

var form = $('#form-inscricao');

/*
botaoEnvia.click((event) => {

    event.preventDefault();

    if(testaNome && testaEmail && textArea && validaRa && validaCheck) {
        alert("envio");
        $('#form-inscricao').each (function(){
            this.reset();
          });
    } else {
        return;
    }

});
*/
