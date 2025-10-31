import HomePage from '../pages/homePage.js'

const homePage = new HomePage()



describe('Cy.Heroes - Home Page Tests', () => {

  it('Like some Hero - without Login', () => {

    homePage.accessHomePageHeroes()
    homePage.buttonLikeClick()
    homePage.CheckErrorMessageLike()
    homePage.closeModalButton()

  })

  it('Hire some Hero - without Login', () => {

    homePage.accessHomePageHeroes()
    homePage.buttonHireClick()
    homePage.checkErrorMessageHire()
    homePage.closeModalButton()

  })


})