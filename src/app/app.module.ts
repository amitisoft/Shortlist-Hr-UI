import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';

import { CommonProperties } from './common.properties';

import { DropdownDirective } from './share/dropdown.directive';
import { EqualValidator } from './share/equal-validator.directive';
import { AppComponent } from './app.component';
import { HeaderMainComponent } from './header-main/header-main.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';

import { AuthService } from './auth/auth.service';
import { AuthGaurd } from './auth/auth-gaurd.service';

import { ChartsModule } from 'ng2-charts';
import { FileSaverModule } from 'ngx-filesaver';
import { QuestionsmanagerComponent } from './hr-dashboard/questionsmanager/questionsmanager.component';

import { CategorymanagerComponent } from './hr-dashboard/categorymanager/categorymanager.component';
import { TestmanagerComponent } from './hr-dashboard/testmanager/testmanager.component';
import { DashboardpanelComponent } from './hr-dashboard/dashboardpanel/dashboardpanel.component';
import { CreatequestionComponent } from './hr-dashboard/questionsmanager/createquestion/createquestion.component';
import { ViewquestionsComponent } from './hr-dashboard/questionsmanager/viewquestions/viewquestions.component';

import { CreatecategoryComponent } from './hr-dashboard/categorymanager/createcategory/createcategory.component';
import { CreatetestComponent } from './hr-dashboard/testmanager/createtest/createtest.component';
import { CreateTestService } from './hr-dashboard/testmanager/createtest/createtest.service';
import { ManagetestComponent } from './hr-dashboard/testmanager/managetest/managetest.component';
import { ViewcategoryComponent } from './hr-dashboard/categorymanager/viewcategory/viewcategory.component';

import { CategorymanagerService } from './hr-dashboard/categorymanager/categorymanager.service';
import { CadidatedataComponent } from './hr-dashboard/cadidatedata/cadidatedata.component';
import { ResultmanagerComponent } from './hr-dashboard/testmanager/resultmanager/resultmanager.component';
import { PapermanagementComponent } from './hr-dashboard/questionsmanager/papermanagement/papermanagement.component';
import { PapermanagementService } from './hr-dashboard/questionsmanager/papermanagement/papermanagement.service';

import { TruncateModule } from 'ng2-truncate';
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdCheckboxModule } from '@angular/material';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

import { ManagetestTestnottakenComponent } from './hr-dashboard/testmanager/managetest/managetest-testnottaken/managetest-testnottaken.component';
import { ManagetestTestinprocessComponent } from './hr-dashboard/testmanager/managetest/managetest-testinprocess/managetest-testinprocess.component';
import { HomeComponent } from './hr-dashboard/home/home.component';
import { UploadlistComponent } from './hr-dashboard/cadidatedata/uploadlist/uploadlist.component';
import { ListdataComponent } from './hr-dashboard/cadidatedata/listdata/listdata.component';
import { RegisterComponent } from './hr-dashboard/cadidatedata/register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './hr-dashboard/changepassword/changepassword.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderMainComponent,
    SigninComponent,
    HrDashboardComponent,
    QuestionsmanagerComponent,

    CategorymanagerComponent,
    TestmanagerComponent,
    DashboardpanelComponent,
    CreatequestionComponent,
    ViewquestionsComponent,
    CreatecategoryComponent,
    CreatetestComponent,
    ManagetestComponent,
      ViewcategoryComponent,
      DropdownDirective,
      CadidatedataComponent,
      ResultmanagerComponent,
      PapermanagementComponent,
      ManagetestTestnottakenComponent,
      ManagetestTestinprocessComponent,
      HomeComponent,
      UploadlistComponent,
      ListdataComponent,
      RegisterComponent,
      ForgotpasswordComponent,
      ChangepasswordComponent,
      EqualValidator
  ],
  imports: [
      BrowserAnimationsModule, NoopAnimationsModule, MdInputModule, MdCheckboxModule,
    BrowserModule,ChartsModule,FileSaverModule,
      BrowserModule, ChartsModule, Ng2AutoCompleteModule,
    FormsModule, ReactiveFormsModule , TruncateModule,
    HttpModule, AppRoutingModule, FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  providers: [AuthService, AuthGaurd, CategorymanagerService, CreateTestService, PapermanagementService, CommonProperties],
  bootstrap: [AppComponent]
})
export class AppModule { }
