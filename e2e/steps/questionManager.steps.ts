import {QuestionManagerPage} from "../pages/question-manager.po";

export class QuestionManagerSteps {
  private questionmanagerpage: QuestionManagerPage = new QuestionManagerPage();

  waitForHrDashboard() {
   this.questionmanagerpage.verifyHrDashboardVisible();
  }

  gotoHrDashboard() {
    this.questionmanagerpage.clickQuestionManagerTab();
  }

  createQuestion() {
    this.questionmanagerpage.clickCreateQuestionButton();

  }
  enterQuestion(questionText: string) {
    this.questionmanagerpage.enterQuestion(questionText);
  }

  enterOption() {
    return this.questionmanagerpage.enterOption(1,"");
  }

}
