class pantalla {
    login = {
        usuario: '[data-test=username]',
        clave: "[data-test=password]",
        btn_ingresar: "[data-test=login-button]",
        selec_title: '#root > div > div.login_logo',
        msg_fail:'#login_button_container > div > form > div.error-message-container.error > h3'
    }
    menu = {
        icono_burger: '#react-burger-menu-btn',
        logout: '[data-test=logout-sidebar-link]'
    }
}

module.exports = new pantalla()