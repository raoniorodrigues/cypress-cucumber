Feature: Acesso às Categorias do Backoffice
    Categorias do Backoffice

    Background: Efetuar o login Backoffice como Administrador
        Given que estou na página inicial do Backoffice
        And preencha o "xpto@email.com"
        And preencha a "4eP@H@cx"
        When aperte o botao do Entrar
        Then o sistema carrega a tela de login com a mensagem "Mensagem do Site"
    
    Scenario: Acessar a página de Categorias
        Given que clico no menu de Hamburguer do Backoffice
        When clico no menu Categorias
        Then valido que estou na página "Categorias"