import {CONFIG} from "../support/constants";

describe('Teste cadastro 03 - Hotsite Padrão', () => {
    beforeEach(() => {
      // Este comando será executado antes de cada teste
      cy.visit('/user/cadastro-etapa');
    });
  
    it('Preenche formulário de cadastro e envia', () => {
      // Preencher dados pessoais
      cy.preencherCPF('#cpf');
      cy.wait(2000);
      cy.get('#birthDate')
      .focus()
      .should('be.visible')
      .type('01/01/2000', {delay:400});
      cy.get('#rg').type('298172189');
      cy.get('#namePerson').type('Teste Crmall');
      cy.get(':nth-child(6) > .action-button').click();

      //Preencher contato
      cy.get('#email-check').type(CONFIG.email);
      cy.get('#confirmEmail').type(CONFIG.email);
      cy.get('#number-cell-phone').type('44999999999');
      cy.get('[style="display: block; opacity: 1;"] > .action-button').click();

      //Preencher endereço
      cy.get('#zip-code').type('87013210');
      cy.get('#number').type('100')
      cy.get('[style="display: block; opacity: 1;"] > .action-button').click();

      //Preencher senha
      cy.get('#password').type(CONFIG.senha);
      cy.get('#confirmPassword').type(CONFIG.senha);
      cy.get(':nth-child(4) > .custom-check > label').click();
      cy.get(':nth-child(5) > .custom-check > label').click();
      cy.wait(2000);
      cy.get('[style="display: block; opacity: 1;"] > .action-button').click();

      //Validação pós termino do teste
      cy.url().should('include', '/user/new-user');
    });
  });
  