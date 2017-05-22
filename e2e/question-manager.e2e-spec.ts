import {QuestionManagerSteps} from "./steps/question-manager.steps";
import {defineSupportCode, TableDefinition} from "cucumber";
import {browser, by, element} from "protractor";

defineSupportCode(function ({Given,When,Then}) {

  const questionManager: QuestionManagerSteps = new QuestionManagerSteps();

  Given(/^I am on the Dashboard page$/, () => {

    return questionManager.waitForHrDashboard();
  });

  When(/^I click on question manager$/, () => {

    return questionManager.clickQuestionManagerTab();
  });

  When(/^I click on create Questions$/, () => {

    return questionManager.createQuestion();
  });

  When(/^I enter the question "(.*?)"$/, (question: string) => {

    return questionManager.enterQuestion(question);
  });

  When(/^I enter multiple choice Answer$/, (options: TableDefinition) => {

    let data = options.hashes();
    for (let i = 1; i < options.raw().length; i++) {
      questionManager.enterOption(i, data[i - 1].answers);
    }
  });

  When(/^I select the check box for right choices$/, () => {

    return  questionManager.selectCorrectOption(2);
  });

  When(/^I select category "(.*?)" from dropdown$/, (category: string) => {

    return questionManager.selectQuestionCategory();
  });

  When(/^I click on Add Button$/, () => {


  });

  Given(/^I am on the question manager module$/, () => {

    return questionManager.waitForQuestionManager();
  });

  When(/^I click on paper management module$/, () => {

    return questionManager.selectPaperManagement();
  });

  When(/^I enter paper name as "(.*?)"$/, (paperName: string) => {

    return questionManager.enterPaperName(paperName);
  });

  Then(/^I select "(.*?)" category$/, (categoryName: string) => {

    let select = element(by.tagName('select'));
    return select.element(by.css('[ng-reflect-ng-value="'+categoryName+'"]')).click();

  });

  Then(/^I accept the alert$/, () => {
    browser.pause();
return browser.pause();

  });

  Then(/^I Verify the success alert$/, () => {
  });
  Then(/^I Verify the success alert$/, () => {
  });
  Then(/^I Verify the success alert$/, () => {
  });









});
