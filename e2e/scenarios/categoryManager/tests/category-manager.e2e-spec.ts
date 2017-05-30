import {Utilities} from "../../../utils/utilities";
import {CategoryManagerPage} from "../../../pages/categoryManager/category-manager.po";
const {defineSupportCode} = require('cucumber');
import {expect} from 'chai';
import {TableDefinition} from "cucumber";

import { $ } from 'protractor';
import { browser,protractor } from 'protractor';


defineSupportCode(function ({Given,When,Then}) {

    let categorymanagerpage : CategoryManagerPage = new CategoryManagerPage();

  Given('I am on the Dashboard page', () => {
    return categorymanagerpage.waitHrDashboard();
  });

  When(/^I click on category manager module$/, () => {
    return categorymanagerpage.clickCategoryManagerTab();
  });

  When(/^verify create category button enabled$/, () => {
    return categorymanagerpage.verifyCreateCategorybtnEnable().then((text)=>{
      console.log(text);
    });
  });

  When(/^click on create new category$/, () => {
    return categorymanagerpage.clickCreateCategoryManagerTab();
  });

  When(/^verify add category button enabled$/, () => {
    return categorymanagerpage.verifyAddCategorybtnEnable().then((text)=>{
      console.log(text);
    });
  });
  When(/^verify clear category button enabled$/, () => {
    return categorymanagerpage.verifyClearCategorybtnEnable().then((text)=>{
      console.log(text);
    });
  });

  When(/^enter text  for category name$/, () => {
    browser.sleep(1000);
    return categorymanagerpage.enterCategory("mango ");
  });

  When(/^enter description for category description$/, () => {
    browser.sleep(1000);
    return categorymanagerpage.enterCategoryDescription("orange");
  });

  When(/^click on add button$/, () => {
    browser.sleep(10000);
    return categorymanagerpage.clickAddButton();
    });




  When(/^I click ok for alert/, () => {
browser.sleep(20000);
    return browser.switchTo().alert().accept();
    //return categorymanagerpage.clickClearButton;
  });
  Then(/^click on clear button$/, () => {
   // browser.pause();
     return browser.sleep(30000);
    // return browser.pause();
   // return categorymanagerpage.clickClearButton;
  });

/*



        //return expect(browser.getTitle()).to.eventually.equal('AmitiOnlineTest');





    Then(/^Verify Hr can able to view the category list$/, () => {
        browser.sleep(20000);
        let headers = element.all(by.xpath('//table//tr//td[1]')).map(function(elm) {
            return elm.getText();
        });

        expect(headers).to.equal([
            "Java",
            "JavaScript",
            "QA",
            "Angular 4",
            "AWS Engineer",
            "Bootstrap",


        ]);
    });

*/

})
defineSupportCode(function ({Given,When,Then}) {

  let categorymanageredit: CategoryManagerPage = new CategoryManagerPage();

  Given('I am on the Dashboard', () => {
    return categorymanageredit.waitHrDashboard();
  });
  When(/^I click on categorya manager module$/, () => {
    return categorymanageredit.clickCategoryManagerTab();
  });

  When(/^click on edit link Button$/, () => {
    browser.sleep(20000);
    return categorymanageredit.clickEditCategory();
  });

  When(/^It redirects to page with pre-filled data and verify the data$/, () => {

    browser.sleep(30000);
        categorymanageredit.verifyTextEditCategory().then((text)=>{
         console.log(text);
           expect(text).to.equal('app');
          browser.sleep(2000);
          categorymanageredit.verifyTextEditDescCategory().then((text)=>{
            console.log(text);
           return expect(text).to.equal('prashanth')
          });

    });


  });

  Then(/^Update the data in field$/, () => {
    browser.sleep(1000);
    categorymanageredit.enterEditCategory("ok");
    browser.sleep(2000);
    return categorymanageredit.enterEditCategoryDescription("edited");
  });

  Then(/^click on update button$/, () => {
    browser.sleep(10000);
    return categorymanageredit.clickAddButton();
  });

  Then(/^I click accept the alert$/, () => {

    browser.sleep(20000);
    return browser.switchTo().alert().accept();
  });

  Then(/^verify the pre filled data$/, () => {
    browser.pause();
     browser.sleep(1000);
     return browser.pause();
    //browser.sleep(20000);
   // return browser.switchTo().alert().accept();
  });
})
