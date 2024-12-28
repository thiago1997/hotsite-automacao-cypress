import './e2e'
Cypress.Commands.add('preencherCPF', (selector) => {
    const cpf = gerarCPF();
    cy.get(selector).type(cpf);
  });
  