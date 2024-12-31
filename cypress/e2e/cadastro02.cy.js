import {CONFIG} from "../support/constants";

describe('Teste cadastro 02 - Hotsite Padrão', () => {
  beforeEach(() => {
    // Configurações iniciais para cada teste
    cy.visit('/user/cadastro-card');
  });
  it('Preenche formulário de cadastro e envia', () => {
    //Preenchendo informações pessoais
    cy.get('#namePerson').should('be.visible').type('Teste Crmall');
    cy.preencherCPF('#cpf');
    cy.wait(2000);
    cy.get('#birthDate').type('01012000', {delay:400});
    cy.get('#rg').type('2432341');
    cy.get('#number-cell-phone').type('44999999999', {delay:400});
    cy.get('#email-check').type(CONFIG.email);
    cy.get('#confirmEmail').type(CONFIG.email);
    cy.get('#zip-code').type('87013210', {delay:400});
    cy.get(':nth-child(3) > .block-wrapper > .form-container-register > :nth-child(2) > :nth-child(2) > .form-group > .form-clean')
    .click()
    .focus()
    .should('be.visible')
    .type('100');
    cy.wait(5000)
    cy.get('#password').type(CONFIG.senha, {delay:300});
    cy.get('#confirmPassword').type(CONFIG.senha, {delay:300});
    cy.get('.terms > :nth-child(4)').click();
    cy.get('.terms > :nth-child(5)').click();
    cy.get('#user-register-send-btn').click();
    cy.url().should('include', '/user/new-user');
  });

});