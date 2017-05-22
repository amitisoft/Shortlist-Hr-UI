import {ProtractorHelper} from "../helper/protractorHelper";

export class QuestionManagerPage {
  private proHelper: ProtractorHelper = new ProtractorHelper();

  private hrDashboardPanelXPath = "//amiti-hr-dashboard/amiti-dashboardpanel";
  private questionManagerTabXPath = "//amiti-hr-dashboard/amiti-dashboardpanel/nav/div/div/ul/li[1]/a";
  private createQuestionButtonText = "CREATE QUESTIONS";
  private questionTextFieldId = "question";
  private optionsTextFieldPrefixName = "option";
  private optionsTextFieldSuffixName = "Value";
  private optionsCheckboxPrefixName = "option";
  private optionsCheckboxSuffixName = "IsCorrect";
  private CategoryComboXPath = ".//*[@id='singleSelect']";
  private CategoryOptionsPrefixXpath = "/option[@value='";
  private CategoryOptionsSuffixXPath = "']";
  private addQuestionButtonText = "ADD";
  private clearFieldsButtonText = "CLEAR";
  private answersSelected = "amiti-questionsmanager/div[3]/div/amiti-createquestion/form/div[3]/div[1]";
  private questionManagerTextXPath = "//amiti-hr-dashboard/div/div/amiti-questionsmanager/div[1]/div";
  private paperManagementButtonText = "PAPER MANAGEMENT";
  private paperNameCss = '[placeholder="Paper Name"]';

  verifyHrDashboardVisible() {
    return this.proHelper.verifyElementVisibleUsingXPath(this.hrDashboardPanelXPath);
  }

  verifyQuestionManagerTabVisible() {
    return this.proHelper.verifyElementVisibleUsingXPath(this.questionManagerTabXPath);
  }

  clickQuestionManagerTab() {
    this.proHelper.clickUsingXPath(this.questionManagerTabXPath);
  }

  clickCreateQuestionButton() {
    this.proHelper.clickUsingButtonText(this.createQuestionButtonText);
  }

  enterQuestion(question: string){
    this.proHelper.sendKeysUsingId(this.questionTextFieldId, question);
  }

  enterOption(optionNo: number, optionString: string){
    const optionName = this.optionsTextFieldPrefixName+optionNo+this.optionsTextFieldSuffixName;
    this.proHelper.sendKeysUsingName(optionName, optionString);
  }

  selectCorrectOption(optionNo: number){
    const optionName = this.optionsCheckboxPrefixName+optionNo+this.optionsCheckboxSuffixName;
    this.proHelper.clickUsingName(optionName);
  }

  selectCategory() {
  }

  clickAddButton() {
    this.proHelper.clickUsingButtonText(this.addQuestionButtonText);
  }

  clickClearButton() {
    this.proHelper.clickUsingButtonText(this.clearFieldsButtonText);
  }

  verifySelectedOption() {
    this.proHelper.waitForElementXPath(this.answersSelected);
  }

  verifyQuestionManagerVisible() {
    this.proHelper.verifyElementVisibleUsingXPath(this.questionManagerTextXPath);
  }

  selectPaperManagement() {
    this.proHelper.clickUsingButtonText(this.paperManagementButtonText);
  }

  enterPaperName(paperName: string) {
    this.proHelper.sendKeysUsingCss(this.paperNameCss,paperName);
  }

}
