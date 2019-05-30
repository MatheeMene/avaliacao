// botaoEnvia.addClass('disabled').prop("disabled", true);
// botaoEnviar.removeClass('disabled').prop("disabled", false);
var botaoEnvia = $('#envia-formulario');

var nome = $('#nome');

function validaNome() {

    nome.on('blur', () => {

        var expReg = /[a-z]\s[a-z]/gim;
        var testaER = expReg.test(nome.val());

        if(testaER) {
            nome.addClass('correto');
        } else {
            nome.addClass('incorreto');
        }
        
    });
    
}

validaNome();


var testaEmail;

function validaEmail(input) {

    input.classList.remove("incorreto");    
    input.classList.remove("correto");   

    if (input.value.length == 0) {
        input.classList.add("incorreto");
        return testaEmail = false;
    } else {
        input.classList.add("correto");
        return testaEmail = true;
    }

}

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

