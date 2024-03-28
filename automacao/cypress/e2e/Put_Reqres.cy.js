/// <reference types="cypress" />


describe('Put Reqres', () => {

  it('Atualizar USER retornando 200', () => {

    const dados = {
      "nome": "Nany",
      "job": "leader"
    }

    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users/2',
      body: dados,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(201)
    })

  })

}) 