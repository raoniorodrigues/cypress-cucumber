/// <reference types="Cypress" />

import BackofficeHomeElements from "../../elements/BackofficeElements/BackofficeHomeElements";

const backofficeHomeElements = new BackofficeHomeElements

class BackofficeHomePage {

    acessarMenuHamburgues(){
        cy.get(backofficeHomeElements.hamburguerMenu()).click()
    }
    
    acessarPaginaCategorias() {
        cy.get(backofficeHomeElements.linkParaPaginaCategorias()).click()        
    }
    
}

export default BackofficeHomePage;
