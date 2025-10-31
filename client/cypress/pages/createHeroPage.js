class CreateHeroPage {
   selectorsList(){
    const selectors = {
        nameInput: '[data-cy="nameInput"]',
        priceInput: '[data-cy="priceInput"]',
        fansInput: '[data-cy="fansInput"]',
        savesInput: '[data-cy="savesInput"]',
        powersSelectInput: '[data-cy="powersSelect"]',
        avatarFile: '[data-cy="avatarFile"]',
        submitButton: '.bg-blue-700',
        nameHeroCard: '[data-cy="name"]',
    }
    return selectors

   }

    createNewHeroInputFields(name, price, fans, saves,power){
        cy.get(this.selectorsList().nameInput).type(name)
        cy.get(this.selectorsList().priceInput).type(price)
        cy.get(this.selectorsList().fansInput).type(fans)
        cy.get(this.selectorsList().savesInput).type(saves)
        cy.get(this.selectorsList().powersSelectInput).select(power)
    } 

    submitCreateHero(){
        cy.get(this.selectorsList().submitButton).eq(1).click()
    }

    assertHeroCreated(){
        cy.get(this.selectorsList().nameHeroCard).should('contain', 'testing person')

    }
    avatarHeroFile(){
         cy.get(this.selectorsList().avatarFile).click()
         cy.get(this.selectorsList().avatarFile).selectFile('perfil.jpg')
    }
}
export default CreateHeroPage