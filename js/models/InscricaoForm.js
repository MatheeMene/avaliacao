class InscricaoForm {

    contructor(nome, email, disponibilidade, interesses, opiniao) {

        this._nome = nome;
        this._email = email;
        this._disponibilidade = disponibilidade;
        this._interesses = interesses;
        this._opiniao = opiniao;

    }

    get nome() {
        return this._nome;
    }

    get email() {
        return this._email;
    }

    get disponibilidade() {
        return this._disponibilidade;
    }
    
    get interesses() {
        return this._interesses;
    }
    
    get opiniao() {
        return this._opiniao;
    }

}