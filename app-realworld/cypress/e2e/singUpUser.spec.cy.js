import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import SingUpPage from '../pages/singUpPage'


const loginPage = new LoginPage()
const singUpPage = new SingUpPage()

describe('Realworld App Tests'), () => {


  it('Sing up a New User'), () => {
    loginPage.accessLoginPage()
    loginPage.singUpButton()

    singUpPage.checkSingUpPage()

    singUpPage.fillPersonalDetails()    
    singUpPage.saveForm()
  }
}