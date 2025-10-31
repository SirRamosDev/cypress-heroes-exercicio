import userData from '../fixtures/userData.json'
import HomePage from '../pages/homePage.js'

const homePage = new HomePage()


describe('Normal UserTests', () => {

  it('Login with Normal user - Fail', () => {

    homePage.accessHomePage()
    homePage.loginWithNormalUserFail(userData.userFailNormal.email, userData.userFailNormal.password)
    homePage.assertLoginFail()
})

  it('Login with Normal user - success', () => {

    homePage.accessHomePage()
    homePage.loginWithNormalUserSuccess(userData.userSuccessNormal.email, userData.userSuccessNormal.password)
    homePage.assertLoginSuccess()
})

it('like a Hero - with Normal User', () => {

    homePage.accessHomePage()
    homePage.loginWithNormalUserSuccess(userData.userSuccessNormal.email, userData.userSuccessNormal.password)
    homePage.assertLoginSuccess()
    homePage.checkHomePage()
    homePage.likeHeroAction()
  })

it('Hire a Hero - with Normal User', () => {
    //Arrange
    homePage.accessHomePage()
    homePage.loginWithNormalUserSuccess(userData.userSuccessNormal.email, userData.userSuccessNormal.password)
    homePage.assertLoginSuccess()
    homePage.checkHomePage()
    homePage.hireHeroAction()
  })
  
})