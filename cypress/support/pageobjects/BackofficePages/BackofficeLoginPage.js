/// <reference types="Cypress" />

import BackofficeHomeElements from "../../elements/BackofficeElements/BackofficeLoginElements";

const loginElements = new BackofficeHomeElements


class BackofficeLoginPage {
    
    informarEmail(email) {
        cy.get(loginElements.inputUser()).type(email)
    }
    
    
    
    informarSenha(senha) {
        cy.get(loginElements.inputSenha()).type(senha)
    }
    
    clicarBotaoRealizarLogin() {
        cy.get(loginElements.botaoRealizarLogin()).click()
    }
}

export default BackofficeLoginPage;
