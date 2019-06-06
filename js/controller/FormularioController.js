class FormularioController {
    
    constructor() {
        
        this._inputNome = $('#nome');
        this._inputEmail = $('#email');
        this._inputInteresses = new Array();
        this._inputOpiniao = $('#textOpiniao');

    }

    
    dadosForm(event) {

        let disponibilidades = $('.disponibilidade');
        let interesses = $('.interesses');

        event.preventDefault();

        disponibilidades.each(disponibilidade => {

            if(disponibilidade.checked) {
                if(disponibilidade.value == "personalizar") {
                    this._disponibilidade = $("#personalizar").val();
                } else {
                    this._disponibilidade = disponibilidade.value;
                }
            }

        });

        interesses.each(interesse => {

            if(interesse.checked == true) {
                if(interesse.value == "outro") {
                    this._interesses.push($('#campo-interesses'));
                } else {
                    this._interesses.push(interesse.value);
                }
            }

        });


        let objeto = new InscricaoForm(
            this._inputNome.val(),
            this._inputEmail.val(),
            this._disponibilidade,
            this._interesses,
            this._inputOpiniao.val()
        );

        let meuJson = JSON.stringify(objeto);

        return console.log(meuJson);

    }

}