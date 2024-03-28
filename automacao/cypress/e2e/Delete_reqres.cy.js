/// <reference types="cypress" />


describe('DELETE USER', () => {
  it('DELETE USER retornando 204', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://reqres.in/api/users?page=2'
    }).then((response) => {
      expect(response.status).to.eq(204)
    })

  })

})