import {ProtractorDriver} from './protractor-driver';
import {browser} from "protractor";
import {protractor} from "protractor";
import {expect} from 'chai';

export class Utilities {
  private protractorDriver: ProtractorDriver = new ProtractorDriver();

  private loginButtonXPath = '//*[@data-a8n="login-button"]';
  private userNameInputXPath = '//*[@data-a8n="login-input"]';
  private loginSuccessXPath = '//*[@data-a8n="home-logged-in"]';
  private logoutDropDownXPath = '//*[@data-a8n="header-dropdown-user"]';
  private logoutSubMenuXPath = '//*[@data-a8n="header-logout"]';
  private watchlistMenuXPath = '//*[@data-a8n="header-watchlist"]';


  enterUserName(userName: string) {
    this.protractorDriver.sendKeysUsingXPath(this.userNameInputXPath, userName);
  }

  clickLoginButton() {
    this.protractorDriver.clickUsingXPath(this.loginButtonXPath);
  }

  clickLogoutButton() {
    this.protractorDriver.clickUsingXPath(this.logoutDropDownXPath);
    return  this.protractorDriver.waitForElementVisibleUsingXPath(this.logoutSubMenuXPath).then(() => {
      this.protractorDriver.clickUsingXPath(this.logoutSubMenuXPath);
    });
  }

  waitForLoginButton() {
    return this.protractorDriver.waitForElementVisibleUsingXPath(this.loginButtonXPath);
  }

  waitForLoginSuccess() {
    return this.protractorDriver.waitForElementVisibleUsingXPath(this.loginSuccessXPath);
  }

  waitForLogoutSuccess() {
    return this.protractorDriver.waitForElementVisibleUsingXPath(this.loginButtonXPath);
  }

  navigatesToLandingPage(url: string = '/') {
    return this.protractorDriver.navigateTo(url);
  }

  maximizeWindow() {
    return this.protractorDriver.maximizeWindow();
  }

  navigatesToWatchList() {
    this.protractorDriver.clickUsingXPath(this.watchlistMenuXPath);
  }

  acceptAlert() {
    browser.wait(protractor.ExpectedConditions.alertIsPresent(), 30000).then(function (ispresent) {
      return browser.switchTo().alert().accept();
    });
  }

  verifyAlertText(alertText: string) {
    return browser.wait(protractor.ExpectedConditions.alertIsPresent(), 60000).then(function (ispresent) {
      browser.switchTo().alert().getText().then(function (text) {
        //console.log(text);
        expect(alertText).to.equal(text);
      });
    });
  }

}
