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

  When(/^click on create new category$/, () => {
    return categorymanagerpage.clickCreateCategoryManagerTab();
  });

  When(/^enter text  for category name$/, () => {
    return categorymanagerpage.enterCategory("shbckhS");
  });

  When(/^enter description for category description$/, () => {
    return categorymanagerpage.enterCategoryDescription("shbckhSdfsasdcouoacuoasuxiuasciiuasiuuasiusd\n baidbiua");
  });

  When(/^click on add button$/, () => {
    return categorymanagerpage.clickAddButton();
    });


Then(/^click on clear button$/, () => {
  browser.pause();
   browser.sleep(3000);
   return browser.pause();
       //  return categorymanagerpage.clickClearButton;
    });

/*
    Given(/^click on category manager module$/, () => {
        browser.sleep(5000)
        return categorymanagerpage.categoryManager.click();

        //return expect(browser.getTitle()).to.eventually.equal('AmitiOnlineTest');
    });


    When(/^I click on view category button$/, () => {
        browser.sleep(7000)
        return categorymanagerpage.viewCategory.click();

        //return expect(browser.getTitle()).to.eventually.equal('AmitiOnlineTest');
    });

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
