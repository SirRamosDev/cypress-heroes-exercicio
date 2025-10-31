class HomePage {
    
   selectorsList(){
    const selectors = {
        buttonLike: '[data-cy="like"]',
        buttonHire: '[data-cy="money"]',
        modalLikeMessage: '.bg-white',
        modalHireMessage: '.modal-container > .open',
        closeModalButton: '.gap-4 > .gap-2 > .undefined',
        loginButton: 'li > .undefined',
        emailInput: '[type="email"]',
        passwordInput: '[type="password"]',
        submitButton: '.bg-blue-700',
        errorMessage: '.text-red-500',
        logoHome: '[alt="Cypress Heroes Logo"]',
        boxCardHero: '[data-cy="hero-card"]',
        boardNumberFans: '[data-cy="fans"]',
        boardNumberSaves: '[data-cy="saves"]',
        buttonYes: '.bg-red-600',
        buttonYes2: '.gap-2 > .text-white',
        buttonCreateNewHero: '[href="/heroes/new"]',
        nameHeroCard: '[data-cy="name"]',
        trashIcon: '[data-cy="trash"]',
        pencilIcon: '[data-cy="pencil"]',
        cardHero: '[data-cy="hero-card"]',
    }
    return selectors
   }

   // Login Normal User Part

   accessHomePage(){
        cy.visit('/login') 
   }

   loginWithNormalUserFail(email, password){
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().emailInput).type(email)
        cy.get(this.selectorsList().passwordInput).type(password)
        cy.get(this.selectorsList().submitButton).click()
        
    }

    assertLoginFail(){
        cy.get(this.selectorsList().errorMessage).should('contain', 'Invalid email or password')
    }

    loginWithNormalUserSuccess(email, password){
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().emailInput).type(email)
        cy.get(this.selectorsList().passwordInput).type(password)
        cy.get(this.selectorsList().submitButton).click()
        
    }

    assertLoginSuccess(){
        cy.url().should('eq', 'http://localhost:3000/login')
    }

    checkHomePage(){
        cy.get(this.selectorsList().logoHome).click()
        cy.get(this.selectorsList().boxCardHero).eq(0).should('exist')
    }

    likeHeroAction(){
        
        cy.get(this.selectorsList().boardNumberFans).eq(0).invoke('text').then((valorInicial) => {
            const numeroInicial = parseInt(valorInicial)
        cy.get(this.selectorsList().buttonLike).eq(0).click()
        cy.get(this.selectorsList().boardNumberFans).eq(0).invoke('text').then((valorFinal) => {
            const numeroFinal = parseInt(valorFinal)
            expect(numeroFinal).to.eq(numeroInicial + 1)
          })
    })

    }

    hireHeroAction(){
        cy.get(this.selectorsList().buttonHire).eq(0).click()
        cy.get(this.selectorsList().modalHireMessage).should('contain', 'Hire Hero?')
        cy.get(this.selectorsList().boardNumberSaves).eq(0).invoke('text').then((valorInicial) => {
        const numeroInicial = parseInt(valorInicial)
        cy.get(this.selectorsList().buttonYes).eq(0).click()
        cy.get(this.selectorsList().boardNumberSaves).eq(0).invoke('text').then((valorFinal) => {
            const numeroFinal = parseInt(valorFinal)
            expect(numeroFinal).to.eq(numeroInicial + 1)
          })
    })
    // No Login Part
    }
    accessHomePageHeroes(){
        cy.visit('/heroes')
    }
    buttonLikeClick(){
        cy.get(this.selectorsList().buttonLike).eq(0).click()
    }
    buttonHireClick(){
        cy.get(this.selectorsList().buttonHire).eq(0).click()
    }
    buttonPencilClick(){
        cy.get(this.selectorsList().pencilIcon).eq(0).click()
    }
    CheckErrorMessageLike(){
        cy.get(this.selectorsList().modalLikeMessage).should('contain', 'You must log in to like.')
    }
    checkErrorMessageHire(){    
        cy.get(this.selectorsList().modalHireMessage).should('contain', 'You must log in to hire this hero.')
    }
    closeModalButton(){
        cy.get(this.selectorsList().closeModalButton).click()
    }

    // Admin User Part

    loginWithAdminUserSuccess(adminEmail, adminPassword){

        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().emailInput).type(adminEmail)
        cy.get(this.selectorsList().passwordInput).type(adminPassword)
        cy.get(this.selectorsList().submitButton).click()

    }

    createNewHero(){
        cy.get(this.selectorsList().buttonCreateNewHero).contains('Create New Hero').click()
    }

    removeHero(){
        cy.get(this.selectorsList().trashIcon).eq(6).click()
        cy.get(this.selectorsList().modalLikeMessage).should('contain', 'Delete Hero?')
        cy.get(this.selectorsList().buttonYes2).click()
    }
    
    checkRemoveHero(){
         cy.get(this.selectorsList().cardHero).should('not.contain', 'testing person')

    }
    assertEditHeroPage(){
        cy.get(this.selectorsList().boxCardHero).should('contain', 'Hero test Matt')
    }
    assertEditHeroPageWithImage(){
        cy.get(this.selectorsList().boxCardHero).should('contain', 'Hero test Matt 2')
    }

} 
export default HomePage;