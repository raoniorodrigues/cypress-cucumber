/// <reference types="Cypress" />

import LoginElements from '../../elements/MarketClubElements/LoginElements'
const loginElements = new LoginElements

class LoginPage {
    
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

export default LoginPage;
