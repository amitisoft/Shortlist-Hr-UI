import {QuestionManagerSteps} from "./steps/questionManager.steps";

import { defineSupportCode } from "cucumber";




defineSupportCode(function ({Given}) {

  const questionManager: QuestionManagerSteps = new QuestionManagerSteps();

  Given(/^I am on the Dashboard page$/, () => {

     return questionManager.waitForHrDashboard();
  });
});
