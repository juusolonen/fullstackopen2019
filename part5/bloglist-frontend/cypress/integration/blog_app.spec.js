/* eslint-disable no-undef */


describe('Blog', function() {
  beforeEach(function(){
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    const user = {
      name: 'testilogin',
      username: 'testijuuso',
      pwd: 'salasana'
    }
    const user2 = {
      name: 'testilogin2',
      username: 'testijuuso2',
      pwd: 'salasana2'
    }
    cy.request('POST', 'http://localhost:3001/api/users/', user)
    cy.request('POST', 'http://localhost:3001/api/users/', user2)
    cy.visit('http://localhost:3000')
  })


  it('Login form is shown by default', function() {

    cy.contains('log in to application')
  })

  describe('Login', function(){
    it('succeeds with correct credentials', function() {
      cy.get('#username').type('testijuuso')
      cy.get('#password').type('salasana')
      cy.get('#loginbtn').click()

      cy.contains('blogs')
    })

    it('fails with incorrect credentials', function() {
      cy.get('#username').type('testijuuso')
      cy.get('#password').type('vaarin')
      cy.get('#loginbtn').click()

      cy.contains('wrong username or password')
      cy.get('.error p').should('have.css', 'color','rgb(255, 0, 0)')
    })
  })

  describe('When logged in', function() {
    beforeEach(function() {
      cy.get('#username').type('testijuuso')
      cy.get('#password').type('salasana')
      cy.get('#loginbtn').click()
    })

    it('A blog can be created', function() {
      cy.get('#newnote').click()
      cy.get('#title').type('testi blogiotsikko')
      cy.get('#author').type('testijuuso')
      cy.get('#url').type('localhost:3001')
      cy.get('#createnew').click()

      cy.contains('a new blog')
      cy.contains('testi blogiotsikko')
    })

    it('blog can be liked', function () {
      cy.get('#newnote').click()
      cy.get('#title').type('testi blogiotsikko')
      cy.get('#author').type('testijuuso')
      cy.get('#url').type('localhost:3001')
      cy.get('#createnew').click()
      cy.get('.title').click()
      cy.get('.likebutton').click()
      cy.get('#likes').should('contain', '1')
    })

    it('blog can be removed', function () {
      cy.get('#newnote').click()
      cy.get('#title').type('testi blogiotsikko')
      cy.get('#author').type('testijuuso')
      cy.get('#url').type('localhost:3001')
      cy.get('#createnew').click()
      cy.get('.title').click()
      cy.get('.removebutton').click()
      cy.should('not.contain', 'testi blogiotsikko')
    })

    it('blog can not be removed by other than author', function () {
      cy.get('#newnote').click()
      cy.get('#title').type('testi blogiotsikko')
      cy.get('#author').type('testijuuso')
      cy.get('#url').type('localhost:3001')
      cy.get('#createnew').click()

      cy.contains('Logout').click()
      cy.get('#username').type('testijuuso2')
      cy.get('#password').type('salasana2')
      cy.get('#loginbtn').click()

      cy.get('.title').click()
      cy.should('not.contain', 'remove')
    })
  })

  describe.only('Blogs are ordered', function() {
    beforeEach(function() {
      cy.get('#username').type('testijuuso')
      cy.get('#password').type('salasana')
      cy.get('#loginbtn').click()
    })
    it('by likes', function () {
      cy.get('#newnote').click()
      cy.get('#title').type('testi blogiotsikko1')
      cy.get('#author').type('testijuuso')
      cy.get('#url').type('www.tamajaavikaksi.com')
      cy.get('#createnew').click()


      cy.get('#newnote').click()
      cy.get('#title').type('testi blogiotsikko2')
      cy.get('#author').type('testijuuso')
      cy.get('#url').type('www.tamatuleeekaksi.fi')
      cy.get('#createnew').click()


      cy.get('#newnote').click()
      cy.get('#title').type('testi blogiotsikko3')
      cy.get('#author').type('testijuuso')
      cy.get('#url').type('localhost:3001')
      cy.get('#createnew').click()

      cy.get('.title:first').click()
      cy.get('.title:last').click()
      cy.get('.likebutton:last').click()
      cy.get('.title:last').click()
      cy.get('.likebutton:last').click()
      cy.get('.likebutton:first').click()

      cy.get('.blog:first').should('contain', 'testi blogiotsikko2')
      cy.get('.blog:last').should('contain', 'testi blogiotsikko1')

    })
  })
})


