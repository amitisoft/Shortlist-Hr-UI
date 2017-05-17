import {QuestionManagerPage} from "../pages/question-manager.po";

export class QuestionManagerSteps {
  private questionmanagerpage: QuestionManagerPage = new QuestionManagerPage();

  waitForHrDashboard() {
    return this.questionmanagerpage.verifyHrDashboardVisible();
  }

  gotoHrDashboard() {
    return this.questionmanagerpage.clickQuestionManagerTab();
  }

  clickQuestionManagerTab() {
    return this.questionmanagerpage.clickQuestionManagerTab();
  }

  createQuestion() {
    return this.questionmanagerpage.clickCreateQuestionButton();
  }

  enterQuestion(questionText: string) {
    return this.questionmanagerpage.enterQuestion(questionText);
  }

  enterOption(optionNumber : number, optionText : string) {
    return this.questionmanagerpage.enterOption(optionNumber,optionText);
  }

  selectCorrectOption(optionNumber : number){
    return this.questionmanagerpage.selectCorrectOption(optionNumber);
  }
  selectQuestionCategory(){
     this.questionmanagerpage.selectCategory();
  }

  selectAddButton(){
    return this.questionmanagerpage.clickAddButton();
  }

  waitForQuestionManager() {
    return this.questionmanagerpage.verifyQuestionManagerVisible();
  }

  selectPaperManagement() {
    return this.questionmanagerpage.selectPaperManagement();
  }

  enterPaperName(paperName: string) {
    return this.questionmanagerpage.enterPaperName(paperName);
  }

  selectCategory(categoryName: string) {
    return this.questionmanagerpage.enterPaperName(categoryName);
  }



}
