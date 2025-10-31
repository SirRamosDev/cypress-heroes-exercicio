import userData from '../fixtures/userData.json'
import HomePage from '../pages/homePage.js'
import CreateHeroPage from '../pages/createHeroPage.js'
import EditHeroPage from '../pages/editHeroPage.js'
import { create } from 'cypress/types/lodash'

const homePage = new HomePage()
const createHeroPage = new CreateHeroPage()
const editHeroPage = new EditHeroPage()

describe('Admin UserTests', () => {

         const selectorsList = {
            buttonLike: '[data-cy="like"]',
            buttonHire: '[data-cy="money"]',
            modalLikeMessage: '.bg-white',
            modalHireMessage: '.modal-container > .open',
            closeModalButton: '.gap-4 > .gap-2 > .undefined',
            // THIS PAGE
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
            nameInput: '[data-cy="nameInput"]',
            priceInput: '[data-cy="priceInput"]',
            fansInput: '[data-cy="fansInput"]',
            savesInput: '[data-cy="savesInput"]',
            powersSelectInput: '[data-cy="powersSelect"]',
            avatarFile: '[data-cy="avatarFile"]',
            nameHeroCard: '[data-cy="name"]',
            trashIcon: '[data-cy="trash"]',
            pencilIcon: '[data-cy="pencil"]',
            cardHero: '[data-cy="hero-card"]',
  }


it('Login with Admin user - success', () => {

  homePage.accessHomePage()
  homePage.loginWithAdminUserSuccess(userData.userSuccessAdmin.adminEmail, userData.userSuccessAdmin.adminPassword)
  homePage.assertLoginSuccess()

})

 it('Create a Hero Admin user without image', () => {
    homePage.accessHomePage()
    homePage.loginWithAdminUserSuccess(userData.userSuccessAdmin.adminEmail, userData.userSuccessAdmin.adminPassword)
    homePage.assertLoginSuccess()
    homePage.checkHomePage()
    homePage.createNewHero()
    createHeroPage.createNewHeroInputFields(userData.createHeroData.name, userData.createHeroData.price, userData.createHeroData.fans, userData.createHeroData.saves, userData.createHeroData.power)
    createHeroPage.submitCreateHero()
    createHeroPage.assertHeroCreated()
   
})

it('Remove a Hero Admin user - without image', () => {
    homePage.accessHomePage()
    homePage.loginWithAdminUserSuccess(userData.userSuccessAdmin.adminEmail, userData.userSuccessAdmin.adminPassword)
    homePage.assertLoginSuccess()
    homePage.checkHomePage()
    homePage.removeHero()
    homePage.checkHomePage()
    homePage.checkRemoveHero()
})

it('Create a Hero Admin user using image', () => {
    homePage.accessHomePage()
    homePage.loginWithAdminUserSuccess(userData.userSuccessAdmin.adminEmail, userData.userSuccessAdmin.adminPassword)
    homePage.assertLoginSuccess()
    homePage.checkHomePage()
    homePage.createNewHero()
    createHeroPage.createNewHeroInputFields(userData.createHeroData.name, userData.createHeroData.price, userData.createHeroData.fans, userData.createHeroData.saves, userData.createHeroData.power)
    createHeroPage.avatarHeroFile()
    createHeroPage.submitCreateHero()
    createHeroPage.assertHeroCreated()
})

it('Remove a Hero Admin user - WITH image', () => {

    homePage.accessHomePage()
    homePage.loginWithAdminUserSuccess(userData.userSuccessAdmin.adminEmail, userData.userSuccessAdmin.adminPassword)
    homePage.assertLoginSuccess()
    homePage.checkHomePage()
    homePage.removeHero()
    homePage.checkHomePage()
    homePage.checkRemoveHero()
  
})
 

it('Hire a Hero - with Admin User', () => {
   
    homePage.accessHomePage() 
    homePage.loginWithAdminUserSuccess(userData.userSuccessAdmin.adminEmail, userData.userSuccessAdmin.adminPassword)
    homePage.assertLoginSuccess()
    homePage.checkHomePage()
    homePage.hireHeroAction()
  })

  it('like a Hero - with Admin User', () => {

    homePage.accessHomePage() 
    homePage.loginWithAdminUserSuccess(userData.userSuccessAdmin.adminEmail, userData.userSuccessAdmin.adminPassword)
    homePage.assertLoginSuccess()
    homePage.checkHomePage()
    homePage.likeHeroAction()
  })
  it('Editing a Hero Admin user - WITH image', () => {

    homePage.accessHomePage() 
    homePage.loginWithAdminUserSuccess(userData.userSuccessAdmin.adminEmail, userData.userSuccessAdmin.adminPassword)
    homePage.assertLoginSuccess()
    homePage.checkHomePage()
    homePage.buttonPencilClick()
    editHeroPage.checkEditHeroPage()
    editHeroPage.editHeroInputFields(userData.editHeroData.name, userData.editHeroData.price, userData.editHeroData.fans, userData.editHeroData.saves, userData.editHeroData.power)
    editHeroPage.avatarEditFile()
    editHeroPage.submitEditHero()
    homePage.assertEditHeroPage()  
})

it('Editing a Hero Admin user - WITHOUT image', () => {
    homePage.accessHomePage() 
    homePage.loginWithAdminUserSuccess(userData.userSuccessAdmin.adminEmail, userData.userSuccessAdmin.adminPassword)
    homePage.assertLoginSuccess()
    homePage.checkHomePage()
    homePage.buttonPencilClick()
    editHeroPage.checkEditHeroPage()
    editHeroPage.editHeroInputFields(userData.editHeroDatawithImage.name, userData.editHeroDatawithImage.price, userData.editHeroDatawithImage.fans, userData.editHeroDatawithImage.saves, userData.editHeroDatawithImage.power)
    editHeroPage.submitEditHero()
    homePage.assertEditHeroPageWithImage()    
})
})