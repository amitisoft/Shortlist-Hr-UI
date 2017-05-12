import {QuestionManagerSteps} from "./steps/questionManager.steps";

import { defineSupportCode } from "cucumber";




defineSupportCode(function ({Given,When}) {

  const questionManager: QuestionManagerSteps = new QuestionManagerSteps();

  Given(/^I am on the Dashboard page$/, () => {

    return questionManager.waitForHrDashboard();
  });

  When(/^I click on question manager$/, () => {

    return questionManager.createQuestion();

  });

  When(/^I click on create Questions$/, () => {

    return questionManager.createQuestion();

  });
});
