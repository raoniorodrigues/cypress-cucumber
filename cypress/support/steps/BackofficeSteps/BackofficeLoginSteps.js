/// <reference types="Cypress" />

//imports
import BackofficeHomeElements from '../../elements/BackofficeElements/BackofficeHomeElements';
import BackofficeLoginPage from '../../pageobjects/BackofficePages/BackofficeLoginPage'

//Objetos
const loginPage = new BackofficeLoginPage
const backofficeHomeElements = new BackofficeHomeElements

//URL Base
const url = Cypress.config("baseUrlBackoffice")

//Steps
Given(/^que estou na página inicial do Backoffice$/, () => {
	cy.visit(url)
});

Then(/^preencha o "([^"]*)"$/, (email) => {
	loginPage.informarEmail(email)
});

Then(/^preencha a "([^"]*)"$/, (senha) => {
	loginPage.informarSenha(senha)
});

When(/^aperte o botao do Entrar$/, () => {
	loginPage.clicarBotaoRealizarLogin()
});

Then(/^o sistema carrega a tela de login com a mensagem "([^"]*)"$/, (verificarMensagemAreaLogada) => {
	cy.get(backofficeHomeElements.navbar()).contains(verificarMensagemAreaLogada)
});

//Validação do caminho alternativo


Then(/^o sistema informa que "([^"]*)"$/, (errLogin) => {
	cy.get(backofficeHomeElements.body()).contains(errLogin)
	
});
