describe('Search Elements', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    it('Búsqueda de elementos con resultados',()=>{
        cy.search('dress');
        cy.fixture('Resultados').then((Resultados)=>{
            cy.get(Resultados.title).should('contain','dress'); 
        })
    })
    it('Búsqueda de elementos sin resultado',()=>{
        cy.search('qwarty');
        cy.fixture('Resultados').then((Resultados)=>{
            cy.get(Resultados.Alerta).should('contain','No results were found for your search'); 
        })
    })
})