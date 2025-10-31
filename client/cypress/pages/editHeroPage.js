class EditHeroPage {
   selectorsList(){
    const selectors = {
        nameInput: '[data-cy="nameInput"]',
        priceInput: '[data-cy="priceInput"]',
        fansInput: '[data-cy="fansInput"]',
        savesInput: '[data-cy="savesInput"]',
        powersSelectInput: '[data-cy="powersSelect"]',
        avatarFile: '[data-cy="avatarFile"]',
        submitButton: '.bg-blue-700',
    }
    return selectors


   }

   checkEditHeroPage(){
        cy.url().should('eq', 'http://localhost:3000/heroes/3/edit')
   }
   editHeroInputFields(name, price, fans, saves,power){
        cy.get(this.selectorsList().nameInput).clear().type(name)
        cy.get(this.selectorsList().priceInput).clear().type(price)
        cy.get(this.selectorsList().fansInput).clear().type(fans)
        cy.get(this.selectorsList().savesInput).clear().type(saves)
        cy.get(this.selectorsList().powersSelectInput).select(power)
    }
    editHeroInputFieldsWithImage(name, price, fans, saves,power){
        cy.get(this.selectorsList().nameInput).clear().type(name)
        cy.get(this.selectorsList().priceInput).clear().type(price)
        cy.get(this.selectorsList().fansInput).clear().type(fans)
        cy.get(this.selectorsList().savesInput).clear().type(saves)
        cy.get(this.selectorsList().powersSelectInput).select(power)
    }
    avatarEditFile(){
        cy.get(this.selectorsList().avatarFile).click()
        cy.get(this.selectorsList().avatarFile).selectFile('perfil.jpg')
    }
    submitEditHero(){
        cy.get(this.selectorsList().submitButton).eq(1).click()
    }
    
}

export default EditHeroPage