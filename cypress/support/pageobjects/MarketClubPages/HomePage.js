/// <reference types="Cypress" />

import HomeElements from '../../elements/MarketClubElements/HomeElements';
const homeElements = new HomeElements

const url = Cypress.config("baseUrlLoja")

class HomePage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
        // cy.title().should('eq', 'MarketClub')
        cy.get(homeElements.botaoFecharModal()).click()
    }

    aceitarTermos(){
        cy.contains('Prosseguir').click()
    }

    // Responsável por acessar a página de login
    botaoEntrar() {
        cy.get(homeElements.botaoLogin()).click()
        cy.title().should('eq', 'Entrar')

    }
}

export default HomePage;
