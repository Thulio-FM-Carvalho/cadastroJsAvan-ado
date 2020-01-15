//É por intermédio de um controller que iremos capturar as ações do usuário e fazer com que interajam com o model criando as instâncias de negociação
//O controller captura as ações do usuário
class DadosController {

    //Buscando os elementos do DOM e adicionando no construtor da classe 
    constructor() {
        
        //Associando o docuemnt ao querySelector
        let $ = document.querySelector.bind(document);

        //Fazendo com que os elementos do DOM se torne uam propriedade da classe
        this._inputNome = $("#nome");
        this._inputEmail = $("#email");
        this._inputTelefone = $("#telefone");
        this._inputWebsite = $("#website");
        this._inputCampoTexto = $("#campoTexto");

        this._listaDados = new ListaDados();
    }

    //Método chamado ao clicar no botão "Enviar"
    adiciona(evento){

        event.preventDefault();

        this._listaDados.adiciona(this.criaDados());
        console.log(this._listaDados.dados);
    }

    criaDados(){
        return new Dados
            (
                this._inputNome.value,
                this._inputEmail.value,
                this._inputTelefone.value,
                this._inputWebsite.value,
                this._inputCampoTexto.value
            )
    }
}