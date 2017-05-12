import {ProtractorHelper} from "../helper/protractorHelper";

export class QuestionManagerPage {
  private proHelper: ProtractorHelper = new ProtractorHelper();

  private hrDashboardPanelXPath = "//amiti-hr-dashboard/amiti-dashboardpanel";
  private questionManagerTabXPath = "//amiti-hr-dashboard/amiti-dashboardpanel/nav/div/div/ul/li[1]/a";
  private createQuestionButtonText = "CREATE QUESTIONS";
  private questionTextFieldId = "question";
  private optionsTextFieldPrefixName = "optionNo";
  private optionsCheckboxPrefixName = "option";
  private optionsCheckboxSuffixName = "IsCorrect";
  private CategoryComboXPath = "//*[@id='singleSelect']";
  private CategoryOptionsPrefixXpath = "/option[@value='";
  private CategoryOptionsSuffixXPath = "']";
  private addQuestionButtonText = "ADD";
  private clearFieldsButtonText = "CLEAR";
  private answersSelected = "amiti-questionsmanager/div[3]/div/amiti-createquestion/form/div[3]/div[1]";

  verifyHrDashboardVisible() {
    this.proHelper.verifyElementVisibleUsingXPath(this.hrDashboardPanelXPath);
  }

  verifyQuestionManagerTabVisible() {
    this.proHelper.verifyElementVisibleUsingXPath(this.questionManagerTabXPath);
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
    const optionName = this.optionsCheckboxPrefixName + optionNo + this.optionsCheckboxSuffixName;
    this.proHelper.sendKeysUsingName(optionName, optionString);
  }

  selectCorrectOption(optionNo: number){
    const optionName = this.optionsTextFieldPrefixName + optionNo;
    this.proHelper.clickUsingName(optionName);
  }


  selectCategory(category: string) {
    const categoryName = this.CategoryComboXPath + this.CategoryOptionsPrefixXpath + category + this.CategoryOptionsSuffixXPath;
    return this.proHelper.clickUsingXPath(categoryName);
  }

  clickAddButton() {
    this.proHelper.clickUsingButtonText(this.addQuestionButtonText);
 }

  clickClearButton() {
    this.proHelper.clickUsingButtonText(this.clearFieldsButtonText);
  }

 verifySelectedOption() {
   return this.proHelper.waitForElementXPath(this.answersSelected);
 }

}
