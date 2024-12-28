import {CONFIG} from "../support/constants";

describe('Teste cadastro pessoa física - Hotsite Padrão', () => {
  beforeEach(() => {
    // Configurações iniciais para cada teste
    cy.visit('/user/cadastro');
  });

  it('Preenche formulário de cadastro PF e envia', () => {
    // Marcar tipo de cadastro
    cy.get('.pf-label-text').as('personalTypePF');
    cy.get('@personalTypePF').click();

    // Preenchendo informações pessoais
    cy.get('#namePerson').should('be.visible').type('Thiago Neves');
    cy.get('#cpf').should('be.visible').type('843.641.130-77');
    cy.get('#rg').should('be.visible').type('1');
    cy.get('#birthDate').should('be.visible').type('01012000');
    cy.get('#number-cell-phone').should('be.visible').type('44991561023');

    // Preenchendo email
    const email = 'teste14@crmall.com';
    cy.get('#email-check').should('be.visible').type(CONFIG.email);
    cy.get(':nth-child(4) > :nth-child(3) > .form-group > .form-control')
      .should('be.visible')
      .type(CONFIG.email);

    // Preenchendo endereço
    cy.get('#zip-code').should('be.visible').type('87013210');
    cy.get('#pf-inputs-container > :nth-child(5) > :nth-child(2) > .form-group > .form-control')
      .should('be.visible')
      .type('100');

    // Preenchendo senha
    cy.get('#password')
      .focus()
      .should('be.visible')
      .type(CONFIG.senha, { delay: 1000 })
      .should('have.value', CONFIG.senha);

    cy.get('#confirmPassword')
      .focus()
      .should('be.visible')
      .type(CONFIG.senha, { delay: 1000 })
      .should('have.value', CONFIG.senha);

    // Aceitar termos adicionais
    cy.get(':nth-child(4) > .custom-check > label > .check').click();
    cy.get(':nth-child(5) > .custom-check > label > .check').click();

    // Submeter formulário
    cy.get('#user-register-send-btn').should('be.enabled').click();

    // Validação pós-envio (se aplicável)
    cy.url().should('include', '/user/new-user');
  });

  it ('Preenche formulário de cadastro PJ e envia',() => {
    // Marcar tipo de cadastro
    cy.get('.pj-label-text').as('personalTypePJ').click();

    //Preencher informações pessoa responsável
    cy.get('#namePersonResp').should('be.visible').type('Teste Crmall 01');
    cy.get('#cpfResp').should('be.visible').type('056.291.350-58');
    cy.get('#birthDateResp').click().wait(700).type('01012000', {delay:700});
    cy.get('#number-cell-phoneResp').should('be.visible').type('44991561023');

    //Preencher informações pessoa jurídica
    cy.get('#companyDocument').type('30.708.797/0001-47');
    cy.get('#companyName').type('Teste Crmall 01');
    cy.get('#companyNickOrTradeName').type('Teste Crmall 02');

    //Preencher informações de endereço
    cy.get(':nth-child(8) > :nth-child(1) > .form-group > .form-control')
    .should('be.visible').type('87013210');
    cy.wait(1000);
    cy.get(':nth-child(8) > :nth-child(3) > .form-group > .form-control')
    .click()
    .focus()
    .should('be.visible')
    .type('100');
    cy.wait(8000);
    cy.get(':nth-child(10) > :nth-child(3) > .form-group > .form-control').click();
    cy.wait(2000);
    cy.get(':nth-child(10) > :nth-child(3) > .form-group > .form-control').focus().should('be.visible').type('4432744167', {delay:400});
    cy.wait(2000);

    //Preencher informações de e-mail
    cy.get('#companyEmail').should('be.visible').type(CONFIG.email);
    cy.get(':nth-child(10) > :nth-child(5) > .form-group > .form-control').should('be.visible').type(CONFIG.email);

    //Preencher informações da senha
    cy.get('#password').type(CONFIG.senha, {delay:200});
    cy.get('#confirmPassword').type(CONFIG.senha, {delay:200});

    //Marcar os termos de aceite
    cy.get(':nth-child(4) > .custom-check > label > .check').click();
    cy.get(':nth-child(5) > .custom-check > label > .check').click();

    //Clicar no Botão enviar
    cy.get('#user-register-send-btn').click();
    
    //Validação pós termino do teste
    cy.url().should('include', '/user/new-user');
})
});
