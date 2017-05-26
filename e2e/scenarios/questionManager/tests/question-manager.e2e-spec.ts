import {Utilities} from "../../../utils/utilities";
import {QuestionManagerPage} from "../../../pages/questionManager/question-manager.po";
import {expect} from 'chai';
import {defineSupportCode, TableDefinition} from "cucumber";
import {browser} from "protractor";


defineSupportCode(({Given, Then, When,setDefaultTimeout}) => {
  let questionManagerPage: QuestionManagerPage = new QuestionManagerPage();
  let utils: Utilities = new Utilities();

  setDefaultTimeout(5 * 10000);

  Given('I am on the Dashboard page', () => {
    return questionManagerPage.verifyHrDashboardVisible();
  });

  When(/^I click on question manager$/, () => {
    return questionManagerPage.clickQuestionManagerTab();
  });

  When(/^I click on create Questions$/, () => {
    return questionManagerPage.clickCreateQuestionButton();
  });

  When(/^I enter the question "(.*?)"$/, (question: string) => {
    return questionManagerPage.enterQuestion(question);
  });

  When(/^I enter multiple choice Answer$/, (options: TableDefinition) => {
    let data = options.hashes();
    for (let i = 1; i < options.raw().length; i++) {
      questionManagerPage.enterOption(i, data[i - 1].answers);
    }
  });

  When(/^I select the check box for right choices$/, () => {
    return  questionManagerPage.selectCorrectOption(2);
  });

  When(/^I select category "(.*?)" from dropdown$/, (category: string) => {
    return questionManagerPage.selectCategory(category);
  });

  When(/^I click on Add Button$/, () => {
    browser.pause();
    return browser.pause();

    //return questionManagerPage.clickAddButton();
  });

  Given(/^I am on the question manager module$/, () => {

    return questionManagerPage.verifyQuestionManagerTabVisible();
  });

  When(/^I click on paper management module$/, () => {

    return questionManagerPage.selectPaperManagement();
  });

  When(/^I enter paper name as "(.*?)"$/, (paperName: string) => {

    return questionManagerPage.enterPaperName(paperName);
  });

  When(/^I select "(.*?)" category$/, (categoryName: string) => {

  });

  When(/^I accept the alert$/, () => {


  });

  Then(/^I Verify the success alert$/, () => {
  });

  Then(/^I Verify the question count is updated to 4$/, () => {
  });


});
