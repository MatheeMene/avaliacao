// botaoEnvia.addClass('disabled').prop("disabled", true);
// botaoEnviar.removeClass('disabled').prop("disabled", false);


var nome = $('#nome');
var campoNome;

function validaNome() {

    nome.on('blur', () => {

        let expReg = /[a-z]\s[a-z]/gim;
        let testaER = expReg.test(nome.val());

        nome.removeClass('correto');
        nome.removeClass('incorreto');

        if(testaER) {
            nome.addClass('correto');
            return campoNome = true;
        } else {
            nome.addClass('incorreto');
            return campoNome = false;
        }
        
    });
    
}

validaNome();



var email = $('#email');
var campoEmail;

function validaEmail() {

    email.on('blur', () => {

        let expReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let testaER = expReg.test(email.val());

        email.removeClass('correto');
        email.removeClass('incorreto');

        if(testaER) {
            email.addClass('correto');
            return campoEmail = true;
        } else {
            email.addClass('incorreto');
            return campoEmail = false;
        }
    
    });

}

validaEmail();


var campoRadio;
var radioPersonalizar = $("input:radio[id='personalizar']");
var campoRadioPersonalizar = $('#campo-disponibilidade');

function validaRadio() {

    let campoPersonalizar = $('#personalizar');
    let campoDisponibilidade = $('#campo-disponibilidade');
    
    if (radioPersonalizar.is(':checked')) {
        campoPersonalizar.removeClass('distancia-display');
        campoDisponibilidade.removeClass('some-campo');
    } else {
        campoPersonalizar.addClass('distancia-display')
        campoDisponibilidade.addClass('some-campo');
    }
    
    $("input[type='radio']").each(() => {

        if(!$("input:radio[name='disponibilidade']").is(':checked')){
            alert("Escolha um horário de disponibilidade");
            return campoRadio = false;
        } else {
            return campoRadio = true;
        }
        
    });

}

$("input[type='radio']").click(() => {
    validaRadio();
});

campoRadioPersonalizar.on('blur', () => {

    if(campoRadioPersonalizar.val().length == 0) {
        campoRadioPersonalizar.addClass('incorreto');
    } else {
        campoRadioPersonalizar.addClass('correto');
    }
});


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



$("#clicaCheck").click(() => {
    validaCheckbox();
})

var form = $('#form-inscricao');


var botaoEnvia = $('#envia-formulario');

botaoEnvia.click(() => {

    validaRadio();

});
