import {ProtractorDriver} from "../../utils/protractor-driver";

export class QuestionManagerPage {
  private protractorDriver: ProtractorDriver = new ProtractorDriver();

  private hrDashboardPanelXPath = "//amiti-hr-dashboard/amiti-dashboardpanel";
  private questionManagerTabXPath = "//amiti-hr-dashboard/amiti-dashboardpanel/div/div[2]/nav/ul/li[2]/a";
  private createQuestionButtonText = "CREATE QUESTION";
  private questionTextFieldId = "question";
  private optionsTextFieldPrefixName = "option";
  private optionsTextFieldSuffixName = "Value";
  private optionsCheckboxPrefixName = "option";
  private optionsCheckboxSuffixName = "IsCorrect";
  private addQuestionButtonText = "ADD";
  private clearFieldsButtonText = "CLEAR";
  private answersSelected = "amiti-questionsmanager/div[3]/div/amiti-createquestion/form/div[3]/div[1]";
  private questionManagerTextXPath = "//amiti-hr-dashboard/div/div/amiti-questionsmanager/div[1]/div";
  private paperManagementButtonText = "PAPER MANAGEMENT";
  private paperNameCss = '[placeholder="Paper Name"]';
  private categoryComboId = 'singleSelect';
  private categoryOptionPrefixCss = "'[ng-reflect-ng-value=\"";
  private categoryOptionSuffixCss = "\"]'";

  verifyHrDashboardVisible() {
     return this.protractorDriver.checkElementVisibleUsingXPath(this.hrDashboardPanelXPath);
  }

  verifyQuestionManagerTabVisible() {
    return this.protractorDriver.checkElementVisibleUsingXPath(this.questionManagerTabXPath);
  }

  clickQuestionManagerTab() {
    return this.protractorDriver.clickUsingXPath(this.questionManagerTabXPath);
  }

  clickCreateQuestionButton() {
    return this.protractorDriver.clickUsingButtonText(this.createQuestionButtonText);
  }

  enterQuestion(question: string){
    return this.protractorDriver.sendKeysUsingId(this.questionTextFieldId, question);
  }

  enterOption(optionNo: number, optionString: string){
    const optionName = this.optionsTextFieldPrefixName+optionNo+this.optionsTextFieldSuffixName;
    return this.protractorDriver.sendKeysUsingName(optionName, optionString);
  }

  selectCorrectOption(optionNo: number){
    const optionName = this.optionsCheckboxPrefixName+optionNo+this.optionsCheckboxSuffixName;
    return this.protractorDriver.clickUsingName(optionName);
  }

  selectCategory(categoryOption: string) {
    let select = this.protractorDriver.getWebElementUsingId(this.categoryComboId)
    return select.$('[ng-reflect-ng-value="'+categoryOption+'"]').click();
  }

  clickAddButton() {
    return this.protractorDriver.clickUsingButtonText(this.addQuestionButtonText);
  }

  clickClearButton() {
    return this.protractorDriver.clickUsingButtonText(this.clearFieldsButtonText);
  }

  verifySelectedOption() {
    return this.protractorDriver.waitForElementVisibleUsingXPath(this.answersSelected);
  }

  verifyQuestionManagerVisible() {
     return this.protractorDriver.checkElementVisibleUsingXPath(this.questionManagerTextXPath);
  }

  selectPaperManagement() {
    return this.protractorDriver.clickUsingButtonText(this.paperManagementButtonText);
  }

  enterPaperName(paperName: string) {
    return this.protractorDriver.sendKeysUsingCss(this.paperNameCss,paperName);
  }

}
