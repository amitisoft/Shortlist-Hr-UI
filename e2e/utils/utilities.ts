import {ProtractorDriver} from './protractor-driver';
import {browser, protractor, element, by} from "protractor";
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
    return this.protractorDriver.waitForElementVisibleUsingXPath(this.logoutSubMenuXPath).then(() => {
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
    return browser.wait(protractor.ExpectedConditions.alertIsPresent(), 90000).then(function (ispresent) {
      return browser.switchTo().alert().accept();
    });
  }

  verifyAlertText(alertText: string) {
    return browser.wait(protractor.ExpectedConditions.alertIsPresent(), 90000).then(function (ispresent) {
      browser.switchTo().alert().getText().then(function (text) {
        return expect(alertText).to.equal(text);
      });
    });
  }



  getTableColumnIndex(tableXpath, columnName) : any {
    let col = element.all(by.xpath("" + tableXpath + "/thead/tr/th"));
      col.count().then(function (cCount) {
      /*for (let i = 0; i < cCount; i++) {
        //console.log("asdsad"+i)
         col.get(i).getText().then(function (colName) {
          if (colName == columnName) {
            console.log(i);
            return i;
          }
        });
      }*/
         function loop(i){
           if( i >= cCount) {
             return null; //not found
           }else{
             return col.get(i).getText().then(function(colName) {
               if (colName == columnName) {
                 console.log('i: ' + i);
                 return i;
               }else{
                 return loop(i+1);
               }
             });
           }
         }

         return loop(0);
       });

  }

  getTableRowIndex(tableXpath, columnIndex, rowData):any{
    let data;
    let row = element.all(by.xpath("" + tableXpath + "/tbody/tr"));
     return row.count().then(function (rCount)  {
      for (let i = 1; i <= rCount; i++) {
        element.all(by.xpath(""+tableXpath+"/tbody/tr["+i+"]/td["+columnIndex+"]")).getText().then(function (rData) {
          data = rData.toString();
          if(data == rowData)
          {
            console.log("i----->"+i);
            return i;
           }

        });
      }
    });
  }

}
