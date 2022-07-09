describe('Login', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    it('Login con email incorrecto',()=>{
        cy.Login('Hola', 'Adios');
        cy.fixture('Login').then((login)=>{
            cy.get(login.IncorrectoBannerLogin).should('contain','Invalid email address')
        })
    })
})