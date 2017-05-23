import { $ } from 'protractor';
import {browser, element, by} from 'protractor';
//let chai = require('chai').use(require('chai-as-promised'));
//let expect = chai.expect;


import {ProtractorHelper} from "../helper/protractorHelper";

export class TestManagerPage {
  private proHelper: ProtractorHelper = new ProtractorHelper();

  private hrDashboardPanelXPath = "html/body/amiti-root/div/div/div/amiti-hr-dashboard/amiti-dashboardpanel/div/div[2]/nav";
  //private hrDashboardPanelXPath = "//div[@class='col-lg-10 col-xs-12']";
  private testManagerTabXPath = "html/body/amiti-root/div/div/div/amiti-hr-dashboard/amiti-dashboardpanel/div/div[2]/nav/ul/li[4]/a";

  //private testManagerTabXPath = "//a[@href='/hrdashboard/testmanagerComp']";

    	//private testManagerTabXPath = "//a[contains(text(),'TEST')]";

  private emailTextFieldXpath = "//input[@name ='emailTextArea']";
  private emailSubjectFieldXpath = "//input[@name ='subject']";
  private selectCategoryFieldId = "singleSelect";
  private emailMailbodyXpath = "//div[@class='fr-element fr-view']";
  private boldButtonXpath = "//button[@id ='bold-1']";
  private emailCategoryXpath = "//input[@name ='category']";
//  private clickCategoryLinkXapth = "html/body/amiti-root/div/div/div/amiti-hr-dashboard/div/div/amiti-createtest/amiti-createtest/div/div/form/div[6]/div[2]/ul[1]/li/a";
     // this.boldVerify = element(by.xpath("//div[@class='fr-element fr-view']/p[1]"));
 // private boldVerify = element(by.css("div[class^='fr-element fr-view']>p:nth-child(1)"))


//  private selCat = element(by.xpath("html/body/amiti-root/div/div/div/amiti-hr-dashboard/div/amiti-createtest/div[2]/div[2]/amiti-createtest/div/div/form/div[7]/div/div[2]/div/span"));

  //private manageButt = $("button[class ='btn btn-primary']");

 // private resetButt = $("button[type ='reset']");

  //private startButt = element(by.css("button[type='button']"));
  //this.nameScore = $("input[type ='text']");
  //this.resultSearch = $("button[type ='button']");



  //private result_man_Butt = $("button[class ='btn btn-info']");

       	//this.enterSubmit = $("input[type ='submit']");
  clearCategoryField()
  {
    return this.proHelper.clearUsingXPath(this.emailCategoryXpath);
  }
  clearEmailField()
  {
    return this.proHelper.clearUsingXPath(this.emailTextFieldXpath);
  }
  verifyHrDashboardVisible() {
    return this.proHelper.verifyElementVisibleUsingXPath(this.hrDashboardPanelXPath);
  }
  verifyTestManagerTabVisible() {
    return this.proHelper.verifyElementVisibleUsingXPath(this.testManagerTabXPath);
  }
  clickTestManagerTab() {
    this.proHelper.clickUsingXPath(this.testManagerTabXPath);
  }
  enterEmail(email: string){
  this.proHelper.sendKeysUsingXPath(this.emailTextFieldXpath, email);
  }
  enterSubject(subject: string){
    this.proHelper.sendKeysUsingXPath(this.emailSubjectFieldXpath, subject);
  }
  enterPostApplied(postapplied: string){
    this.proHelper.sendKeysUsingXPath(this.emailMailbodyXpath, postapplied);
  }
  selectCategoryDropdown() {
    this.proHelper.selectCategory();

  }clickBoldButton() {
    this.proHelper.clickUsingXPath(this.boldButtonXpath);
  }
  enterMailBody(mail: string){
    this.proHelper.sendKeysUsingXPath(this.emailMailbodyXpath, mail);
  }
  enterCategory(category: string){
    this.proHelper.sendKeysUsingXPath(this.emailCategoryXpath, category);
  }
  clickCategory() {
    this.proHelper.clickUsingXPath(this.emailTextFieldXpath);
  }
/*

getOptions(enterText) {

return element(by.css(enterText));

}

 CorrectOptions() {
let checkBoxes = element.all(by.css("input[type='checkbox']"));
return checkBoxes.get(1).click();

    }

waitForCssValue(elementFinder, cssProperty, cssValue) {
    return function () {
        return elementFinder.getCssValue(cssProperty).then(function(actualValue) {
            return actualValue === cssValue;
        });
    };
};
*/

}


