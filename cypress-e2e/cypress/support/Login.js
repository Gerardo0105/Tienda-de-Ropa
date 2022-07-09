Cypress.Commands.add('Login', (email, pass)=>{
    cy.fixture('Login').then((login)=>{
        cy.get(login.SignIn).click();
        cy.get(login.Email).type(email);
        cy.get(login.Password).type(pass);
        cy.get(login.Loginbutton).click();  
    })
})