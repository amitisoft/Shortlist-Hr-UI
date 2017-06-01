import {$, element,by,browser} from 'protractor';
import {ProtractorDriver} from '../../utils/protractor-driver';
import {Utilities} from '../../utils/utilities';
import {expect} from 'chai';

let path = require('path');

export class CandidateManagerPage {
  private protractorDriver: ProtractorDriver = new ProtractorDriver();
  private utils: Utilities = new Utilities();

  private candidateDataTabXPath= '//*[@ng-reflect-router-link="cadidateTest"]';
  private uploadCandidateButtonXPath= "//*[@routerlink='uploadlist']";
  private uploadButtonText = "UPLOAD";
  private browseButtonId= "files";
  private registerCandidateButtonXPath = "//*[@routerlink='register']";
  private candidateFNameFieldXPath = "//*[@id='firstname']";
  private candidateLNameFieldXPath = "//*[@id='lastname']";
  private candidateEmailFieldXPath = "//*[@name='email']";
  private candidateMobNoFieldXPath = "//*[@id='mobile']";
  private registerButtonText = "Register";
  private updateButtonText = "Update";
  private candidateTableXPath = "//amiti-hr-dashboard/div/amiti-cadidatedata/div[2]/div[2]/amiti-listdata/div[2]/div/div/table";
  private fNameSearchFieldXPath = "//*[@name='firstName']";
  private lNameSearchFieldXPath = "//*[@name='lastName']";
  private emailSearchFieldXPath = "//*[@name='email']";
  private phNoSearchFieldXPath = "//*[@name='phoneNumber']";
  private searchButtonText = "Search";
  private cancelButtonText = "Cancel";
  private resetButtonXpath = "//*[@type='reset']";
  private candidateEditButtonXpath = "//*[@title='Edit']";
  private candidateDeleteButtonXpath = "//*[@title='Delete']";
  private candidateDataAttribute = "ng-reflect-model";
  private fNameFieldErrorXpath = "//amiti-register/div/div/div/div/form/div[1]/div[1]/div/p";
  private lNameFieldErrorXpath = "//amiti-register/div/div/div/div/form/div[1]/div[2]/div/p";
  private emailFieldErrorXpath = "//amiti-register/div/div/div/div/form/div[2]/div[1]/div/p";
  private mobNoFieldErrorXpath = "//amiti-register/div/div/div/div/form/div[2]/div[2]/div/p";


  selectCandidateDashBoard() {
    return this.protractorDriver.clickUsingXPath(this.candidateDataTabXPath);
  }

  selectUploadCandidates() {
    return this.protractorDriver.clickUsingXPath(this.uploadCandidateButtonXPath);
  }

  clickUploadButton() {
    return this.protractorDriver.clickUsingButtonText(this.uploadButtonText);
  }

  addCandidateFilePath() {
    let absolutePath = path.resolve(__dirname, "C:/Users/Amiti/WebstormProjects/Shortlist-Hr-UI/CandidateFormat.xlsx");
    return this.protractorDriver.sendKeysUsingId(this.browseButtonId,absolutePath);
  }

  selectRegisterCandidate() {
    return this.protractorDriver.clickUsingXPath(this.registerCandidateButtonXPath);
  }

  enterCandidateFName(fName) {
    return this.protractorDriver.sendKeysUsingXPath(this.candidateFNameFieldXPath,fName);
  }

  clickFNameField() {
    return this.protractorDriver.clickUsingXPath(this.candidateFNameFieldXPath);
  }

  enterCandidateLName(lName) {
    return this.protractorDriver.sendKeysUsingXPath(this.candidateLNameFieldXPath,lName);
  }

  clickLNameField() {
    return this.protractorDriver.clickUsingXPath(this.candidateLNameFieldXPath);
  }

  enterCandidateEmail(email) {
    return this.protractorDriver.sendKeysUsingXPath(this.candidateEmailFieldXPath,email);
  }

  clickEmailField() {
    return this.protractorDriver.clickUsingXPath(this.candidateEmailFieldXPath);
  }

  enterCandidateMobileNo(mobNo) {
    return this.protractorDriver.sendKeysUsingXPath(this.candidateMobNoFieldXPath,mobNo);
  }

  clickMobileNoField() {
    return this.protractorDriver.clickUsingXPath(this.candidateMobNoFieldXPath);
  }

  clickRegisterButton() {
    return this.protractorDriver.clickUsingButtonText(this.registerButtonText);
  }

  clickUpdateButton() {
    return this.protractorDriver.clickUsingButtonText(this.updateButtonText);
  }


  checkRegisterButtonEnabled() {
    return this.protractorDriver.checkButtonEnabledUsingText(this.registerButtonText);
  }

  verifyCandidateNameIsPresent(Name) {
    return this.utils.verifyTableDataisPresent(this.candidateTableXPath,1,Name).then(function (isPresent) {
      expect(isPresent).to.be.true;
    });
  }

  verifyCandidateEmailIsPresent(email) {
    return this.utils.verifyTableDataisPresent(this.candidateTableXPath,2,email).then(function (isPresent) {
      expect(isPresent).to.be.true;
    });
  }

  verifyCandidatePhNoIsPresent(no) {
    return this.utils.verifyTableDataisPresent(this.candidateTableXPath,3,no).then(function (isPresent) {
      expect(isPresent).to.be.true;
    });
  }

  enterSearchFName(fName) {
    return this.protractorDriver.sendKeysUsingXPath(this.fNameSearchFieldXPath,fName);
  }

  clearFName() {
    return this.protractorDriver.clearUsingXPath(this.fNameSearchFieldXPath);
  }

  enterSearchLName(lName) {
    return this.protractorDriver.sendKeysUsingXPath(this.lNameSearchFieldXPath,lName);
  }

  clearLName() {
    return this.protractorDriver.clearUsingXPath(this.lNameSearchFieldXPath);
  }

  enterSearchEmail(email) {
    return this.protractorDriver.sendKeysUsingXPath(this.emailSearchFieldXPath,email);
  }

  clearEmail() {
    return this.protractorDriver.clearUsingXPath(this.emailSearchFieldXPath);
  }

  enterSearchPhNo(phNo) {
    return this.protractorDriver.sendKeysUsingXPath(this.phNoSearchFieldXPath,phNo);
  }

  clearPhNo() {
    return this.protractorDriver.clearUsingXPath(this.phNoSearchFieldXPath);
  }

  clickSearchButton() {
    return this.protractorDriver.clickUsingButtonText(this.searchButtonText);
  }

  getFName(): any {
    return this.protractorDriver.getAttributeUsingXPath(this.candidateFNameFieldXPath,this.candidateDataAttribute);
  }

  getFNameFieldError(): any {
    return this.protractorDriver.getTextUsingXPath(this.fNameFieldErrorXpath);
  }

  checkFNameFieldError(): any {
    return this.protractorDriver.checkElementPresentUsingXPath(this.fNameFieldErrorXpath);
  }

  getLName() {
    return this.protractorDriver.getAttributeUsingXPath(this.candidateLNameFieldXPath,this.candidateDataAttribute);
  }

  getLNameFieldError(): any {
    return this.protractorDriver.getTextUsingXPath(this.lNameFieldErrorXpath);
  }

  checkLNameFieldError(): any {
    return this.protractorDriver.checkElementPresentUsingXPath(this.lNameFieldErrorXpath);
  }

  getEmail() {
    return this.protractorDriver.getAttributeUsingXPath(this.candidateEmailFieldXPath,this.candidateDataAttribute);
  }

  getEmailFieldError(): any {
    return this.protractorDriver.getTextUsingXPath(this.emailFieldErrorXpath);
  }

  checkEmailFieldError(): any {
    return this.protractorDriver.checkElementPresentUsingXPath(this.emailFieldErrorXpath);
  }

  getPhNo() {
    return this.protractorDriver.getAttributeUsingXPath(this.candidateMobNoFieldXPath,this.candidateDataAttribute);
  }

  getMobNoFieldError(): any {
    return this.protractorDriver.getTextUsingXPath(this.mobNoFieldErrorXpath);
  }

  checkMobNoFieldError(): any {
    return this.protractorDriver.checkElementPresentUsingXPath(this.mobNoFieldErrorXpath);
  }

  clickCancelButton() {
    return this.protractorDriver.clickUsingButtonText(this.cancelButtonText);
  }

  clickCandidateEditButton() {
    return this.protractorDriver.clickUsingXPath(this.candidateEditButtonXpath);
  }

  clickCandidateDeleteButton() {
    return this.protractorDriver.clickUsingXPath(this.candidateDeleteButtonXpath);
  }

  clickResetButton() {
    return this.protractorDriver.clickUsingXPath(this.resetButtonXpath);
  }

}
