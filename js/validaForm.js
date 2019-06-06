var botaoEnvia = $('#envia-formulario');
var email = $('#email');
var nome = $('#nome');
var textOpiniao = $('#textOpiniao');

botaoEnvia.addClass('disabled').prop("disabled", true);

var campoNome;

function validaNome() {

    nome.on('blur', () => {

        let expReg = /[a-z]\s[a-z]/gim;
        let testaER = expReg.test(nome.val());

        nome.removeClass('correto');
        nome.removeClass('incorreto');

        if(testaER) {
            nome.addClass('correto');
            campoNome = true;
        } else {
            nome.addClass('incorreto');
            campoNome = false;
        }

        validaForm();
        
    });
    
}

validaNome();


var campoEmail;

function validaEmail() {

    email.on('blur', () => {

        let expReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let testaER = expReg.test(email.val());

        email.removeClass('correto');
        email.removeClass('incorreto');

        if(testaER) {
            email.addClass('correto');
            campoEmail = true;
        } else {
            email.addClass('incorreto');
            campoEmail = false;
        }

        validaForm();
    
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
            campoRadio = false;
        } else {
            campoRadio = true;
        }
        
    });

}

$("input[type='radio']").click(() => {
    validaRadio();
    validaForm();
});

campoRadioPersonalizar.on('blur', () => {

    campoRadioPersonalizar.removeClass('correto');
    campoRadioPersonalizar.removeClass('incorreto');

    if(campoRadioPersonalizar.val().length == 0) {
        campoRadioPersonalizar.addClass('incorreto');
    } else {
        campoRadioPersonalizar.addClass('correto');
    }

});


var campoCheck;
var checkOutro = $('input:checkbox[id="check-outro"]');
var campoInteresses = $('#campo-interesses');

function validaCheckbox() {

    if(checkOutro.is(':checked')) {
        checkOutro.removeClass('distancia-display');
        campoInteresses.removeClass('some-campo');
    } else {
        checkOutro.addClass('distancia-display');
        campoInteresses.addClass('some-campo');
    }

    $('input[type="checkbox"]').each(() => {

        if(!$('input:checkbox[name="interesses"]').is(':checked')) {
            campoCheck = false;
        } else {
            campoCheck = true;
        }

    });

}

$('input[type="checkbox"]').click(() => {
    validaCheckbox();
    validaForm();
});

campoInteresses.on('blur', () => {

    campoInteresses.removeClass('correto');
    campoInteresses.removeClass('incorreto');

    if(campoInteresses.val().length == 0) {
        campoInteresses.addClass('incorreto');
    } else {
        campoInteresses.addClass('correto');
    }

});


var campoOpiniao;

function validaOpiniao() {
    
    textOpiniao.on('input', () => {

        textOpiniao.removeClass('correto');
        textOpiniao.removeClass('incorreto');

        if(textOpiniao.val().length < 140) {
            textOpiniao.addClass('incorreto');
            campoOpiniao = false;

        } else {
            textOpiniao.addClass('correto');
            campoOpiniao = true;
        }

        validaForm();

    });
    
}

validaOpiniao();


function validaForm() {

    if(campoNome && campoEmail && campoRadio && campoCheck && campoOpiniao) {
        botaoEnvia.removeClass('disabled').prop("disabled", false);
    }

}



    

    
