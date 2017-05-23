import {ProtractorHelper} from '../helper/protractorHelper';

export class AuthenticationPage {
  private proHelper: ProtractorHelper = new ProtractorHelper();



  private signInPanelXPath= "//div[@class='panel-heading']";
  private loginButtonXPath = "//a[@href='/signin']";
  private userInputXPath = "//input[@id='login-username']";
  private userPasswordXPath = "//input[@name='password']";
  private submitButtonXPath = "//button[@id ='btn-login']";



  waitForSignInPanel() {
    return this.proHelper.verifyElementVisibleUsingXPath(this.signInPanelXPath);
 }


  clickLoginButton() {
    this.proHelper.clickUsingXPath(this.loginButtonXPath);
  }

  enterUsername(Username: string){
    this.proHelper.sendKeysUsingXPath(this.userInputXPath, Username)
  }


  enterPassword(Password: string){
    this.proHelper.sendKeysUsingXPath(this.userPasswordXPath, Password)
  }

  clickSubmitButton() {
    return this.proHelper.clickUsingXPath(this.submitButtonXPath);
  }

  getEmailInput() {
    return this.proHelper.getWebElementUsingXPath(this.userInputXPath);
  }

  getLoginButton() {
    return this.proHelper.getWebElementUsingXPath(this.loginButtonXPath);
  }

  waitForLoginButton() {
    return this.proHelper.waitForElementXPath(this.loginButtonXPath);
  }

}
