import {$, element,by,browser} from 'protractor';
import {ProtractorDriver} from '../../utils/protractor-driver';
import {expect} from 'chai';

let path = require('path');

export class CadidateManagerPage {
  private protractorDriver: ProtractorDriver = new ProtractorDriver();

  private candidateDataTabXPath= '//*[@ng-reflect-router-link="cadidateTest"]';
  private uploadCandidateButtonXPath= "//*[@routerlink='uploadlist']";
  private uploadButtonText = "UPLOAD";
  private browseButtonId= "files";
  private registerCandidateButtonXPath = "//*[@routerlink='register']";
  private candidateFNameFieldXPath = "//*[@id='firstname']";
  private candidateLNameFieldXPath = "//*[@id='lastname']";
  private candidateEmailFieldXPath = "//*[@name='email']";
  private candidateMobNoFieldXPath = "//*[@id='mobile']";
  private candidateAdressFieldXPath = "//*[@id='address']";
  private registerButtonText = "Register";


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

  enterCandidateLName(lName) {
    return this.protractorDriver.sendKeysUsingXPath(this.candidateLNameFieldXPath,lName);
  }

  enterCandidateEmail(email) {
    return this.protractorDriver.sendKeysUsingXPath(this.candidateEmailFieldXPath,email);
  }

  enterCandidateAddress(adress) {
    return this.protractorDriver.sendKeysUsingXPath(this.candidateAdressFieldXPath,adress);
  }

  enterCandidateMobileNo(mobNo) {
    return this.protractorDriver.sendKeysUsingXPath(this.candidateMobNoFieldXPath,mobNo);
  }

  clickRegisterButton() {
    return this.protractorDriver.clickUsingButtonText(this.registerButtonText);
  }

  checkRegisterButtonEnabled() {
    return this.protractorDriver.checkButtonEnabledUsingText(this.registerButtonText);
  }

}
