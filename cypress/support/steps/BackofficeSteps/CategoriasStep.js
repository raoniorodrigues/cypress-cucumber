/// <reference types="Cypress" />

import BackofficeHomePage from "../../pageobjects/BackofficePages/BackofficeHomePage";

const backofficeHomePage = new BackofficeHomePage

Given(/^que clico no menu de Hamburguer do Backoffice$/, () => {
	backofficeHomePage.acessarMenuHamburgues()
});

When(/^clico no menu Categorias$/, () => {
    backofficeHomePage.acessarPaginaCategorias()
});


Then(/^valido que estou na página "([^"]*)"$/, (spanCategorias) => {
    cy.get('body').contains(spanCategorias)
});

