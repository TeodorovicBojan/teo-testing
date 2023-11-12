it('Google Search',()=> {
    cy.visit('https://google.com')
    cy.get('#APjFqb').type('youtube{Enter}')
    cy.get('.tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click()
})