import {ProtractorDriver} from '../../utils/protractor-driver';
import {expect} from 'chai';

export class AuthenticationPage {
  private protractorDriver: ProtractorDriver = new ProtractorDriver();

  private signInPanelXPath= "//div[@class='panel-heading']";
  private loginButtonXPath = "//a[@href='/signin']";
  private userInputXPath = "//input[@id='login-username']";
  private userPasswordXPath = "//input[@name='password']";
  private submitButtonXPath = "//button[@id ='btn-login']";
  private loginPageTitle = "AmitiOnlineTest";

  clickLoginButton() {
    this.protractorDriver.clickUsingXPath(this.loginButtonXPath);
  }

  verifyLoginPageTitle() {
     this.protractorDriver.getPageTitle().then(function (titleText) {
       return titleText;
    });
  }

  enterUsername(Username: string){
    this.protractorDriver.sendKeysUsingXPath(this.userInputXPath, Username)
  }

  enterPassword(Password: string){
    this.protractorDriver.sendKeysUsingXPath(this.userPasswordXPath, Password)
  }

  clickSubmitButton() {
    this.protractorDriver.clickUsingXPath(this.submitButtonXPath);
  }

  getEmailInput() {
    return this.protractorDriver.getWebElementUsingXPath(this.userInputXPath);
  }

  getLoginButton() {
    return this.protractorDriver.getWebElementUsingXPath(this.loginButtonXPath);
  }

  waitForLoginButton() {
    return this.protractorDriver.waitForElementVisibleUsingXPath(this.loginButtonXPath);
  }

}
