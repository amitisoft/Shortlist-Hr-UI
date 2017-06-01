import {ProtractorDriver} from '../../utils/protractor-driver';
import {expect} from 'chai';
import {browser, element, by} from 'protractor';

export class CategoryManagerPage {
  private protractorDriver: ProtractorDriver = new ProtractorDriver();

  private hrDashboardPanelXPath = "//amiti-hr-dashboard/amiti-dashboardpanel";
  private categoryManagerTabXPath = "html/body/amiti-root/div/div/div/amiti-hr-dashboard/amiti-dashboardpanel/div/div[2]/nav/ul/li[3]/a";
  private categoryTextFieldXPath = "//input[@id='categoryname']";
  private descriptionTextFieldXPath = "//textarea[@id='categorydescription']";
  private createCategoryTabXPath= "html/body/amiti-root/div/div/div/amiti-hr-dashboard/div/amiti-categorymanager/div[1]/div[2]/button";
  private addButtonXPath = "//button[@class='btn btn-primary']";
  private clearButtonXPath = "//button[@class='btn btn-success']";
  private categoryEditBtnXPath = "//table[@class='table table-striped']//tr[3]//td[3]//a[1]";
  private categoryDeleteBtnXPath = "//table[@class='table table-striped']//tr[2]//td[3]//a[1]";
 // private editcategoryTextFieldXPath = "//input[@ng-reflect-model='mango ok']";
 // private editdescriptionTextFieldXPath = "//textarea[@id='categorydescription']";
  private textUpdatedColumn = "//td[text()='testing']"


  waitHrDashboard() {
    return this.protractorDriver.checkElementVisibleUsingXPath(this.hrDashboardPanelXPath);
  }
  clickCategoryManagerTab() {
    return this.protractorDriver.clickUsingXPath(this.categoryManagerTabXPath);
  }

  clickCreateCategoryManagerTab() {
    return this.protractorDriver.clickUsingXPath(this.createCategoryTabXPath);
  }
  enterCategory(category: string) {
    return this.protractorDriver.sendKeysUsingXPath(this.categoryTextFieldXPath, category);
  }

  enterCategoryDescription(description: string) {
    return this.protractorDriver.sendKeysUsingXPath(this.descriptionTextFieldXPath, description);
  }
  clickAddButton() {
    return this.protractorDriver.clickUsingXPath(this.addButtonXPath);
  }
  clickClearButton() {
    return this.protractorDriver.clickUsingXPath(this.clearButtonXPath);
  }

  clickEditCategory() {
    return this.protractorDriver.clickUsingXPath(this.categoryEditBtnXPath);

  }
  verifyTextEditCategory() {
     return this.protractorDriver.getAttributeUsingXPath(this.categoryTextFieldXPath,'ng-reflect-model');

  }
  verifyTextEditDescCategory() {
    return this.protractorDriver.getAttributeUsingXPath(this.descriptionTextFieldXPath,'ng-reflect-model');

  }

  enterEditCategory(category: string) {
    return this.protractorDriver.sendKeysUsingXPath(this.categoryTextFieldXPath, category);
  }

  enterEditCategoryDescription(description: string) {
    return this.protractorDriver.sendKeysUsingXPath(this.descriptionTextFieldXPath, description);
  }
  verifyCreateCategorybtnEnable()
  {
    return this.protractorDriver.checkElementEnabledUsingXPath(this.createCategoryTabXPath)
  }

  verifyAddCategorybtnEnable()
  {
    return this.protractorDriver.checkElementEnabledUsingXPath(this.addButtonXPath);
  }
  verifyClearCategorybtnEnable()
  {
    return this.protractorDriver.checkElementEnabledUsingXPath(this.clearButtonXPath);
  }
  verifyTextUpdatedTable()
  {
    var text = element.all(by.xpath("//td[text()='testing']"));
return text.isPresent().then((isPresent)=>{
 // console.log(isPresent);
  if (isPresent) {
    text.getText().then(function(x){
      console.log("text: " + x);
    });
    }
    else {
    console.log("text is missing")
  }
  })

  }
}
