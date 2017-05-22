import {AuthenticationPage} from "../pages/hr-login.po";

export class AuthenticationSteps {


  private authenticationPage: AuthenticationPage = new AuthenticationPage();


  clickLogin(){
    this.authenticationPage.clickLoginButton();
  }
  username(user: string) {
    this.authenticationPage.enterUsername(user);

  }

  password(pass: string) {
    this.authenticationPage.enterPassword(pass);

  }

  submit() {
    this.authenticationPage.clickSubmitButton();

  }
 // this.authenticationPage.enterPassword(user);
  //this.authenticationPage.clickSubmitButton();

 // waitForLogoutSuccess() {
   // return this.authenticationPage.waitForLogoutSuccess();
  //}
}
