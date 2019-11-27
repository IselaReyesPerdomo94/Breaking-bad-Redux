describe('The home page', () => {
    it('Successfully loads', () => {
        cy.visit('/')
    })
    it('Should render an input with class search-input', () => {
        cy.visit('/')
        cy.get('input[name=search]').should('have.class', 'search-input')
    })
    it('Should render 2 cards when type Walter in search-input', () => {
        cy.visit('/')
        cy.get('input[name=search]').as('search')
        cy.get('@search').type('Walter')
        cy.get('article').should('have.class', 'card').should('have.length', 2)
    })
})