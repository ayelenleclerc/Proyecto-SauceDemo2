import pantalla from "./selectores/pantalla.js"
import mensajes from "./selectores/mensajes.js"


describe('Saucedemo', () => {
    let datosCorrectos
    before("Traer datos  de fixture", () => {
        cy.fixture('./users_ok.json').then((data_ok) => {
             datosCorrectos = data_ok
        })
    })
    beforeEach("cargar pagina",() => {
    cy.visit('/')
    
    })

    it('login ok de saucedemo', () => {
         datosCorrectos.forEach(dato => {
        cy.escribir(pantalla.login.usuario, dato.usuario)
        cy.escribir(pantalla.login.clave, dato.clave)
        cy.hacer_click(pantalla.login.btn_ingresar)
        //cy.screenshot('login-img')
        cy.hacer_click(pantalla.menu.icono_burger)
        cy.hacer_click(pantalla.menu.logout)
        cy.asertion_texto(pantalla.login.selec_title, mensajes.login.msg_ok)
         })
    })
    })
