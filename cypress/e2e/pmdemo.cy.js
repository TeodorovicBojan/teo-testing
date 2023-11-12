import {LoginPage} from "./pages/login_page"
const loginPage = new LoginPage()

beforeEach(function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

describe('All Login Tests', function(){

    it('Valid login',function(){
        loginPage.enterUsername('Admin')    
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-name').click()
    })
    
    it('Invalid username',function(){
        loginPage.enterUsername('Admin123')    
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-name').click()
    })
})

it('Invalid password',function(){
    loginPage.enterUsername('Admin')    
    loginPage.enterPassword('admin456')
    loginPage.clickLogin()
    cy.get('.oxd-userdropdown-name').click()
})