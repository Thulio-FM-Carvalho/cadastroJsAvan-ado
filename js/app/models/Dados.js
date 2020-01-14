//Classe modelo
class Dados {

    constructor(nome, email, telefone, website, campoTexto) {
       
        this._nome = nome;
        this._email = email;
        this._telefone = telefone;
        this._website = website;
        this._campoTexto = campoTexto;
        
        Object.freeze(this);            //Congelando as propriedades do construtor para que elas não possam ser modificadas

    }

    //Metodos de acesso aos dados
    get nome(){
        return this._nome;
    }

    get email(){
        return this._email;
    }

    get telefone(){
        return this._telefone;
    }

    get website(){
        return this._website;
    }

    get campoTexto(){
        return this._campoTexto;
    }

}