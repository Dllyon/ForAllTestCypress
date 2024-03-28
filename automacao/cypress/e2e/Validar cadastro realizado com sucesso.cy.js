describe('Funcionalidade Cadastro', () => {
  it('Validar cadastro realizado com sucesso', () => {
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php');

    cy.get(':nth-child(2) > td > input').type('usuario');
    cy.get(':nth-child(4) > td > input').type('senha');
    cy.get(':nth-child(6) > td > input').type('Nany');

    cy.get('td > .btn').click();

    // Espera explícita antes de verificar o elemento
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text', 'Nany');
  });

  it('Validar exclusão de usuário', () => {
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php');

    // Verifica se o usuário existe antes de apagar
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text', 'Nany');

    cy.get(':nth-child(2) > :nth-child(5) > a').click();

    // Acessa a página novamente
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php');

    // Verifica se o usuário foi excluído com sucesso
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('not.exist');

  });
});