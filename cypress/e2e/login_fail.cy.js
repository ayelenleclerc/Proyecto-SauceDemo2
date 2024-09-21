/// <reference types="cypress" />
import pantalla from "./selectores/pantalla.js"
import mensajes from "./selectores/mensajes.js"

describe('Saucedemo', () => {
    let datos_error
    before("Traer datos  de fixture", () => {
        cy.fixture('./users_fail.json').then((data_fail) => {
             datos_error = data_fail
        })
    })
    beforeEach("cargar pagina",() => {
    cy.visit('/')
    })
    it('login error de saucedemo', () => {
         datos_error.forEach(dato => {
             
         })
         //cy.viewport(1280, 720)
         datos_error.forEach(dato => {
        cy.get(pantalla.login.usuario).type(dato.usuario)
        cy.get(pantalla.login.clave).type(dato.clave)
        cy.get(pantalla.login.btn_ingresar).click()
        //cy.screenshot('login-img')
        cy.get(pantalla.login.msg_fail).should('have.text',mensajes.login.msg_fail)
         })
    })
    })
