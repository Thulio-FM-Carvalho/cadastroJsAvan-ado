class ListaDados {

    constructor(){
        this._dados = []
    }

    //Método responsável por receber a negociação do controller e colocar no array
    adiciona(dado){
        this._dados.push(dado);
    }

    //Método de acesso aos dados
    //.concat cria uma cópia do array das negociações
    get dados(){
        return [].concat(this._dados);
    }
}