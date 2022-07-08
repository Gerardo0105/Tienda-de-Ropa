describe('Search Elements', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    it('Búsqueda de elementos con resultados',()=>{
        cy.fixture('PaginaInicial').then((index)=>{
            cy.get(index.search).type('dress');
            cy.get(index.searchbutton).click();  
        })
        cy.fixture('Resultados').then((Resultados)=>{
            cy.get(Resultados.title).should('contain','dress'); 
        })
    })
})