describe('user attempts to login to the site', () => {
    before(() => {
        cy.visit('/login')
    });
    describe('user types in incorrect username and password', () => {
        it('user inputs a user name', () => {
            cy.findByRole('textbox', {name: /username/i}).type('testusername');
            cy.findByDisplayValue(/testusername/i).should('exist');
        });
        it('user inputs a password', () => {
            cy.findByLabelText(/password/i).type('testpassword');
            cy.findByDisplayValue(/testpassword/i).should('exist');
        });

        it('user clicks on login', () => {
            cy.findByRole('button', {name: /login/i}).should('exist');
            cy.findByRole('button', {name: /login/i}).click();
            cy.findByRole('link', {name: /supervisor/i}).should('not.exist');
            cy.findByRole('link', {name: /dashboard/i}).should('not.exist');
            cy.findByRole('link', {name: /map/i}).should('not.exist');
        });

        it('user types in the correct username and password and sees the proper views',()=>{
            cy.findByRole('textbox', {name: /username/i}).clear().type('dakota');
            cy.findByLabelText(/password/i).clear().type('1234');
            cy.findByRole('button', {name: /login/i}).click();
            cy.findByRole('link', {name: /supervisor/i}).should('exist');
            cy.findByRole('link', {name: /dashboard/i}).should('exist');
            cy.findByRole('link', {name: /map/i}).should('exist');
        });
    });


});