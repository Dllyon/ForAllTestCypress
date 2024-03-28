/// <reference types="cypress"  />

describe('POST Reqres', () => {

  it('Validar CREATE retornando 200', () => {

    const dados = {
      "name": "Nany",
      "job": "leader"
    }

    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      body: dados,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(201)
    })
  })

})