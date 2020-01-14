//É por intermédio de um controller que iremos capturar as ações do usuário e fazer com que interajam com o model criando as instâncias de negociação
//O controller captura as ações do usuário
class DadosController {

    //Buscando os elementos do DOM e adicionando no construtor da classe 
    constructor() {
        //Associando o docuemnt ao querySelector
        let $ = document.querySelector.bind(document);

        this._inputNome = $("#nome");
        this._inputEmail = $("#email");
        this._inputTelefone = $("#telefone");
        this._inputWebsite = $("#website");
        this._inputTextArea = $("#campoTexto");

        this._listaDados = new ListaDados();
    }

    adiciona(evento){

        event.preventDefault();

        this._listaDados.adiciona(this.criaDados());
        console.log(this._listaDados.dados);
    }

    criaDados(){
        return new Dados
            (
                this._inputNome,
                this._inputEmail,
                this._inputTelefone,
                this._inputWebsite,
                this._inputTextArea
            )
    }
}