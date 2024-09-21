//import 'cypress-real-events'

Cypress.Commands.add('escribir', (selector, dato) => { 
     cy.get(selector).type(dato)
  })

  Cypress.Commands.add('hacer_click', (selector) => { 
      cy.get(selector).click()
       //cy.get(selector).realClick()
  })

  Cypress.Commands.add('asertion_texto', (selector, texto) => { 
   cy.get(selector).should('have.text',texto)
})