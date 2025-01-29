class SingUpPage {

    selectorsList() {
        const selectors = {
            singUpGrid: "[data-test='signup-title']",
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            userNameField: "[name='username']",
            passwordField: "[name='password']",
            confirmPassWord: "[name='confirmPassword']",
            subimitButton: "[type='submit']",   
        }
      
        return selectors

    }

    checkSingUpPage () {
        cy.location('pathname').should('equal', 'http://localhost:3000/signup')
        cy.get(this.selectorsList().singUpGrid).should('be.visible')

    }


    fillPersonalDetails(firstName, lastName, userName, password, confirmPassword ) {
        cy.get(this.selectorsList().firstNameField).clear().type(Fabricio)
        cy.get(this.selectorsList().lastNameField).clear().type(Dias)
        cy.get(this.selectorsList().userNameField).clear().type(diiasfabricio)
        cy.get(this.selectorsList().passwordField).clear().type(1234)
        cy.get(this.selectorsList().confirmPassWord).clear().type(1234)
        
    }

    
    saveForm() {
        cy.get(this.selectorsList().subimitButton).click({force: true})
       
    }

}


export default SingUpPage