import {Utilities} from "../../../utils/utilities";
import {CategoryManagerPage} from "../../../pages/categoryManager/category-manager.po";
const {defineSupportCode} = require('cucumber');
import {expect} from 'chai';
import {TableDefinition} from "cucumber";
import { $ } from 'protractor';
import { browser,protractor } from 'protractor';
import * as data from 'D:\\mysore\\Shortlist-Hr-UI\\e2e\\scenarios\\categoryManager\\data\\category-data.json';



defineSupportCode(function ({Given,When,Then}) {

    let categorymanagerpage: CategoryManagerPage = new CategoryManagerPage();
    let utilities: Utilities = new Utilities();
    Given('I am on the Dashboard page', () => {
      return categorymanagerpage.waitHrDashboard();
    });

    When(/^I click on category manager module$/, () => {
      return categorymanagerpage.clickCategoryManagerTab();
    });

    When(/^verify create category button enabled$/, () => {
      return categorymanagerpage.verifyCreateCategorybtnEnable().then((text) => {
        console.log(text);
      });
    });

    When(/^click on create new category$/, () => {
      return categorymanagerpage.clickCreateCategoryManagerTab();
    });

    When(/^verify add category button enabled$/, () => {
      return categorymanagerpage.verifyAddCategorybtnEnable().then((text) => {
        console.log(text);
      });
    });
    When(/^verify clear category button enabled$/, () => {
      return categorymanagerpage.verifyClearCategorybtnEnable().then((text) => {
        console.log(text);
      });
    });

    When(/^enter text  for category name$/, () => {
      browser.sleep(1000);
     return categorymanagerpage.enterCategory((<any>data).name);

    });

    When(/^enter description for category description$/, () => {
      browser.sleep(2000);
      return categorymanagerpage.enterCategoryDescription((<any>data).description);
    });

    When(/^click on add button$/, () => {
      browser.sleep(10000);
      return categorymanagerpage.clickAddButton();
    });


    When(/^verify alert msg and i accept the alert/, () => {
      browser.sleep(20000);

     return utilities.verifyAlertText("data submitted auccessfully").then((alert)=>{
        console.log(alert);
       utilities.acceptAlert();
      });

    });

  Then(/^verify the data updated in the table$/, () => {
    browser.sleep(20000);
    return categorymanagerpage.verifyTextUpdatedTable();

  });

    Then(/^click on clear button$/, () => {
      return browser.sleep(30000);
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
  let utilities: Utilities = new Utilities();
  Given('I am the Dashboard', () => {
    return categorymanageredit.waitHrDashboard();
  });
  When(/^I click on categorya manager$/, () => {
    return categorymanageredit.clickCategoryManagerTab();
  });

  When(/^click on edit link Button$/, () => {
    browser.sleep(20000);
    return categorymanageredit.clickEditCategory();
  });

  Then(/^It redirects to page with pre-filled data and verify the data$/, () => {
    browser.sleep(30000);
    categorymanageredit.verifyTextEditCategory().then((text) => {
      console.log(text);
      expect(text).to.equal('testing');
      browser.sleep(2000);
      categorymanageredit.verifyTextEditDescCategory().then((text) => {
        console.log(text);
        return expect(text).to.equal('hi prashanth')
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
    return utilities.verifyAlertText("data submitted auccessfully").then((alert)=> {
      console.log(alert);
      utilities.acceptAlert();
    });
  });

  Then(/^verify the pre filled data$/, () => {

    browser.sleep(20000);
  });
})

defineSupportCode(function ({Given,When,Then}) {

  let categorymanagerclear: CategoryManagerPage = new CategoryManagerPage();
  Given('I am on the Dashboard', () => {
    return categorymanagerclear.waitHrDashboard();
  });
  When(/^I click on categorya manager module$/, () => {
    return categorymanagerclear.clickCategoryManagerTab();
  });
  When(/^I click on create new category$/, () => {
    return categorymanagerclear.clickCreateCategoryManagerTab();
  });
  When(/^I enter text  for category name$/, () => {
    browser.sleep(1000);
    return categorymanagerclear.enterCategory("name");
  });

  When(/^I enter description for category description$/, () => {
    browser.sleep(1000);
    return categorymanagerclear.enterCategoryDescription("orange");
  });
  Then(/^I click on clear button$/, () => {
    browser.sleep(3000);
    return categorymanagerclear.clickClearButton();
  });
  Then(/^I verify fields should be empty$/, () => {
    browser.sleep(3000);
    categorymanagerclear.verifyTextEditCategory().then((box) => {
      console.log(box);
      expect(box).to.equal(null);
      browser.sleep(2000);
      categorymanagerclear.verifyTextEditDescCategory().then((field) => {
        console.log(field);
        return expect(field).to.equal(null)
    });
  });
})
  Then(/^click clear button$/, () => {

    return browser.sleep(3000);

  });
})


//})
