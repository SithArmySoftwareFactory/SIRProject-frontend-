

describe('user navigating to the homepage', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should see a banner and a menu button', () => {
        cy.findByRole("banner").should('exist');
        cy.findByRole("img",{name: /army software factory icon/i}).should('exist');
    })

    it('',()=>{
        cy.findByText("Incident Report Form").should('exist');
    })
})
