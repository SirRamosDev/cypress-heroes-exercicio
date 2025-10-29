



describe('Cy.Heroes - Home Page Tests', () => {

  it('Like some Hero - without Login', () => {

    //Arrange
    cy.visit('http://localhost:3000/heroes')
    //Act
    cy.get('[data-cy="like"]').eq(0).click()
    //Assert
    cy.get('.bg-white').should('contain', 'You must log in to like.')
    cy.get('.gap-4 > .gap-2 > .undefined').click()

  })

  it('Hire some Hero - without Login', () => {

    //Arrange
    cy.visit('http://localhost:3000/heroes')
    //Act
    cy.get('[data-cy="money"]').eq(0).click()
    //Assert
    cy.get('.modal-container > .open').should('contain', 'You must log in to hire this hero.')
    cy.get('.gap-4 > .gap-2 > .undefined').click()

  })

  it('Login with Normal user - Fail', () => {
    //Arrange

    cy.visit('http://localhost:3000/login') 

    //Act
    cy.get('li > .undefined').click()
    cy.get('[type="email"]').type('tes@test.com')
    cy.get('[type="password"]').type('test123')
    cy.get('.bg-blue-700').click()
    //Assert
   cy.get('.text-red-500').should('contain', 'Invalid email or password')
})

  it('Login with Normal user - success', () => {
    //Arrange

    cy.visit('http://localhost:3000/login') 

    //Act
    cy.get('li > .undefined').click()
    cy.get('[type="email"]').type('test@test.com')
    cy.get('[type="password"]').type('test123')
    cy.get('.bg-blue-700').click()
    //Assert
    cy.url().should('eq', 'http://localhost:3000/login')
})

it('like a Hero - with Normal User', () => {
    //Arrange
    cy.visit('http://localhost:3000/login') 
    cy.get('li > .undefined').click()
    cy.get('[type="email"]').type('test@test.com')
    cy.get('[type="password"]').type('test123')
    cy.get('.bg-blue-700').click()
    cy.url().should('eq', 'http://localhost:3000/login')

    //Act
    cy.get('[alt="Cypress Heroes Logo"]').click()
    cy.get('[data-cy="hero-card"]').eq(0).should('exist')
        // Captura o valor atual e guarda
    cy.get('[data-cy="fans"]').eq(0).invoke('text').then((valorInicial) => {
        const numeroInicial = parseInt(valorInicial)
        // Clica no botão
        cy.get('[data-cy="like"]').eq(0).click()

      //Assert
        // Verifica se aumentou em +1
    cy.get('[data-cy="fans"]').eq(0).invoke('text').then((valorFinal) => {
            const numeroFinal = parseInt(valorFinal)
            expect(numeroFinal).to.eq(numeroInicial + 1)
          })
    })
  })

it('Hire a Hero - with Normal User', () => {
    //Arrange
    cy.visit('http://localhost:3000/login') 
    cy.get('li > .undefined').click()
    cy.get('[type="email"]').type('test@test.com')
    cy.get('[type="password"]').type('test123')
    cy.get('.bg-blue-700').click()
    cy.url().should('eq', 'http://localhost:3000/login')
    cy.get('[alt="Cypress Heroes Logo"]').click()
    cy.get('[data-cy="hero-card"]').eq(0).should('exist')

    //Act

    cy.get('[data-cy="money"]').eq(0).click()
    cy.get('.modal-container > .open').should('contain', 'Hire Hero?')
        // Captura o valor atual e guarda
    cy.get('[data-cy="saves"]').eq(0).invoke('text').then((valorInicial) => {
        const numeroInicial = parseInt(valorInicial)
        // Clica no botão
        cy.get('.bg-red-600').click()

      //Assert
        // Verifica se aumentou em +1
    cy.get('[data-cy="saves"]').eq(0).invoke('text').then((valorFinal) => {
            const numeroFinal = parseInt(valorFinal)
            expect(numeroFinal).to.eq(numeroInicial + 1)
          })
    })
  })

 it('Login with Admin user - success', () => {
    //Arrange

    cy.visit('http://localhost:3000/login') 

    //Act
    cy.get('li > .undefined').click()
    cy.get('[type="email"]').type('admin@test.com')
    cy.get('[type="password"]').type('test123')
    cy.get('.bg-blue-700').click()
    //Assert
    
    cy.get('[href="/heroes/new"]').should('exist')
    cy.url().should('eq', 'http://localhost:3000/login')
})

 it('Create a Hero Admin user without image', () => {
    //Arrange
    cy.visit('http://localhost:3000/login')  
    cy.get('li > .undefined').click()
    cy.get('[type="email"]').type('admin@test.com')
    cy.get('[type="password"]').type('test123')
    cy.get('.bg-blue-700').click()
    cy.url().should('eq', 'http://localhost:3000/login')
    cy.get('[alt="Cypress Heroes Logo"]').click()
    cy.get('[data-cy="hero-card"]').eq(0).should('exist')
    //Act
    cy.get('[href="/heroes/new"]').contains('Create New Hero').click()
    cy.get('[data-cy="nameInput"]').type('testing person')
    cy.get('[data-cy="priceInput"]').type('500')
    cy.get('[data-cy="fansInput"]').type('1000')
    cy.get('[data-cy="savesInput"]').type('200')
    cy.get('[data-cy="powersSelect"]').select('Fireball')
    cy.get('.bg-blue-700').eq(1).click()
    //Assert
    cy.get('[data-cy="name"]').should('contain', 'testing person')
})

it('Remove a Hero Admin user - without image', () => {
    //Arrange
    cy.visit('http://localhost:3000/login')  
    cy.get('li > .undefined').click()
    cy.get('[type="email"]').type('admin@test.com')
    cy.get('[type="password"]').type('test123')
    cy.get('.bg-blue-700').click()
    cy.url().should('eq', 'http://localhost:3000/login')
    cy.get('[alt="Cypress Heroes Logo"]').click()
    cy.get('[data-cy="hero-card"]').eq(0).should('exist')
    //Act
  cy.get('[data-cy="trash"]').eq(6).click()
  cy.get('.bg-white').should('contain', 'Delete Hero?')
  cy.get('.gap-2 > .text-white').click()
  cy.get('[alt="Cypress Heroes Logo"]').click()
    //Assert
  cy.get('[data-cy="hero-card"]').should('not.contain', 'testing person')
})

it('Create a Hero Admin user using image', () => {
    //Arrange
    cy.visit('http://localhost:3000/login')  
    cy.get('li > .undefined').click()
    cy.get('[type="email"]').type('admin@test.com')
    cy.get('[type="password"]').type('test123')
    cy.get('.bg-blue-700').click()
    cy.url().should('eq', 'http://localhost:3000/login')
    cy.get('[alt="Cypress Heroes Logo"]').click()
    cy.get('[data-cy="hero-card"]').eq(0).should('exist')
    //Act
    cy.get('[href="/heroes/new"]').contains('Create New Hero').click()
    cy.get('[data-cy="nameInput"]').type('testing person')
    cy.get('[data-cy="priceInput"]').type('500')
    cy.get('[data-cy="fansInput"]').type('1000')
    cy.get('[data-cy="savesInput"]').type('200')
    cy.get('[data-cy="powersSelect"]').select('Fireball')
    cy.get('[data-cy="avatarFile"]').click()
    cy.get('[data-cy="avatarFile"]').selectFile('perfil.jpg')
    cy.get('.bg-blue-700').eq(1).click() 
    //Assert
    cy.get('[data-cy="name"]').should('contain', 'testing person')
})

it('Remove a Hero Admin user - WITH image', () => {
    //Arrange
    cy.visit('http://localhost:3000/login')  
    cy.get('li > .undefined').click()
    cy.get('[type="email"]').type('admin@test.com')
    cy.get('[type="password"]').type('test123')
    cy.get('.bg-blue-700').click()
    cy.url().should('eq', 'http://localhost:3000/login')
    cy.get('[alt="Cypress Heroes Logo"]').click()
    cy.get('[data-cy="hero-card"]').eq(0).should('exist')
    //Act
  cy.get('[data-cy="trash"]').eq(6).click()
  cy.get('.bg-white').should('contain', 'Delete Hero?')
  cy.get('.gap-2 > .text-white').click()
  cy.get('[alt="Cypress Heroes Logo"]').click()
    //Assert
  cy.get('[data-cy="hero-card"]').should('not.contain', 'testing person')
})
 

it('Hire a Hero - with Admin User', () => {
    //Arrange
    cy.visit('http://localhost:3000/login') 
    cy.get('li > .undefined').click()
    cy.get('[type="email"]').type('admin@test.com')
    cy.get('[type="password"]').type('test123')
    cy.get('.bg-blue-700').click()
    cy.url().should('eq', 'http://localhost:3000/login')
    cy.get('[alt="Cypress Heroes Logo"]').click()
    cy.get('[data-cy="hero-card"]').eq(0).should('exist')

    //Act

    cy.get('[data-cy="money"]').eq(0).click()
    cy.get('.modal-container > .open').should('contain', 'Hire Hero?')
        // Captura o valor atual e guarda
    cy.get('[data-cy="saves"]').eq(0).invoke('text').then((valorInicial) => {
        const numeroInicial = parseInt(valorInicial)
        // Clica no botão
        cy.get('.bg-red-600').click()

      //Assert
        // Verifica se aumentou em +1
    cy.get('[data-cy="saves"]').eq(0).invoke('text').then((valorFinal) => {
            const numeroFinal = parseInt(valorFinal)
            expect(numeroFinal).to.eq(numeroInicial + 1)
          })
    })
  })

  it('like a Hero - with Admin User', () => {
    //Arrange
    cy.visit('http://localhost:3000/login') 
    cy.get('li > .undefined').click()
    cy.get('[type="email"]').type('admin@test.com')
    cy.get('[type="password"]').type('test123')
    cy.get('.bg-blue-700').click()
    cy.url().should('eq', 'http://localhost:3000/login')

    //Act
    cy.get('[alt="Cypress Heroes Logo"]').click()
    cy.get('[data-cy="hero-card"]').eq(0).should('exist')
        // Captura o valor atual e guarda
    cy.get('[data-cy="fans"]').eq(0).invoke('text').then((valorInicial) => {
        const numeroInicial = parseInt(valorInicial)
        // Clica no botão
        cy.get('[data-cy="like"]').eq(0).click()

      //Assert
        // Verifica se aumentou em +1
    cy.get('[data-cy="fans"]').eq(0).invoke('text').then((valorFinal) => {
            const numeroFinal = parseInt(valorFinal)
            expect(numeroFinal).to.eq(numeroInicial + 1)
          })
    })
  })
  it('Editing a Hero Admin user - WITH image', () => {
    //Arrange
    cy.visit('http://localhost:3000/login')  
    cy.get('li > .undefined').click()
    cy.get('[type="email"]').type('admin@test.com')
    cy.get('[type="password"]').type('test123')
    cy.get('.bg-blue-700').click()
    cy.url().should('eq', 'http://localhost:3000/login')
    cy.get('[alt="Cypress Heroes Logo"]').click()
    cy.get('[data-cy="hero-card"]').eq(0).should('exist')
    //Act
    cy.get('[data-cy="pencil"]').eq(0).click()
    cy.url().should('eq', 'http://localhost:3000/heroes/2/edit')
    cy.get('[data-cy="nameInput"]').clear().type('Hero test Matt')
    cy.get('[data-cy="priceInput"]')
    cy.get('[data-cy="fansInput"]')
    cy.get('[data-cy="savesInput"]')
    cy.get('[data-cy="powersSelect"]').select('Telekinesis')
    cy.get('[data-cy="avatarFile"]').click()
    cy.get('[data-cy="avatarFile"]').selectFile('perfil.jpg')
    cy.get('.bg-blue-700').eq(1).click()

    //Assert
    cy.get('[data-cy="hero-card"]').should('contain', 'Hero test Matt')  
})

it('Editing a Hero Admin user - WITHOU image', () => {
    //Arrange
    cy.visit('http://localhost:3000/login')  
    cy.get('li > .undefined').click()
    cy.get('[type="email"]').type('admin@test.com')
    cy.get('[type="password"]').type('test123')
    cy.get('.bg-blue-700').click()
    cy.url().should('eq', 'http://localhost:3000/login')
    cy.get('[alt="Cypress Heroes Logo"]').click()
    cy.get('[data-cy="hero-card"]').eq(0).should('exist')
    //Act
    cy.get('[data-cy="pencil"]').eq(1).click()
    cy.url().should('eq', 'http://localhost:3000/heroes/3/edit')
    cy.get('[data-cy="nameInput"]').clear().type('Hero test Matt 2')
    cy.get('[data-cy="priceInput"]')
    cy.get('[data-cy="fansInput"]')
    cy.get('[data-cy="savesInput"]')
    cy.get('[data-cy="powersSelect"]').select('Fireball')
    cy.get('.bg-blue-700').eq(1).click()

    //Assert
    cy.get('[data-cy="hero-card"]').should('contain', 'Hero test Matt 2')  
})

})