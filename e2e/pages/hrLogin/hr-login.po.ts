import {ProtractorDriver} from '../../utils/protractor-driver';
import {expect} from 'chai';

export class AuthenticationPage {
  private protractorDriver: ProtractorDriver = new ProtractorDriver();

  private signInPanelXPath= "//div[@class='panel-heading']";
  private loginButtonXPath = "//a[@href='/signin']";
  private userNameXPath = "//input[@id='login-username']";
  private userPasswordXPath = "//input[@name='password']";
  private submitButtonXPath = "//button[@id ='btn-login']";
  private dashboardPanelXPath = "//amiti-root/div/div/div/amiti-hr-dashboard/amiti-dashboardpanel";

  clickLoginButton() {
    return this.protractorDriver.clickUsingXPath(this.loginButtonXPath);
  }

  enterUsername(Username: string){
    return this.protractorDriver.sendKeysUsingXPath(this.userNameXPath, Username)
  }

  enterPassword(Password: string){
    return this.protractorDriver.sendKeysUsingXPath(this.userPasswordXPath, Password)
  }

  clickSubmitButton() {
    return this.protractorDriver.clickUsingXPath(this.submitButtonXPath);
  }

  getEmailInput() {
    return this.protractorDriver.getWebElementUsingXPath(this.userNameXPath);
  }

  getLoginButton() {
    return this.protractorDriver.getWebElementUsingXPath(this.loginButtonXPath);
  }

  waitForDashboardPanel() {
    return this.protractorDriver.waitForElementVisibleUsingXPath(this.dashboardPanelXPath);
  }

}
