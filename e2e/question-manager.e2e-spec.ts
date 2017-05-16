import {QuestionManagerSteps} from "./steps/questionManager.steps";
import {defineSupportCode, TableDefinition} from "cucumber";
import {browser} from "protractor";

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
  When(/^I select category "(.*?)" from dropdown$/, (category : string) => {

    return questionManager.selectQuestionCategory(category);

  });
  When(/^I click on Add Button$/, () => {

    browser.pause();
    browser.sleep(10000);
    return browser.pause();
  });

  Then(/^I Verify the success alert$/, () => {


  });

});
