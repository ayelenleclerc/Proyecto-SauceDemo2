/// <reference types="cypress" />
import pantalla from "./selectores/pantalla.js"
import mensajes from "./selectores/mensajes.js"

describe('Saucedemo', () => {
    let datos_blocked
    before("Traer datos  de fixture", () => {
        cy.fixture('./users_blocked.json').then((data_blocked) => {
             datos_blocked = data_blocked
        })
    })
    beforeEach("cargar pagina",() => {
    cy.visit('/')
    })
  
    it('login error de saucedemo', () => {
        cy.get(pantalla.login.usuario).type(datos_blocked.usuario)
        cy.get(pantalla.login.clave).type(datos_blocked.clave)
        cy.get(pantalla.login.btn_ingresar).click()
        //cy.screenshot('login-img')
        cy.get(pantalla.login.msg_fail).should('have.text',mensajes.login.msg_blocked)
         
    })
    })
