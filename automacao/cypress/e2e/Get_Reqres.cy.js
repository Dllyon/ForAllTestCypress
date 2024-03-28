///<reference types="cypress"/>
describe('Get Request', () => {
  it('Validar LIST USERS retornando 200', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=2'
    }).then((response) => {
      expect(response.status).to.eq(200)
    })

  })

  it('Validar body LIST USERS retornando 200', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=2'
    }).then((response) => {
      let retorno = response.body
      cy.log(JSON.stringify(retorno, null, 2))

    })

  })
})
