import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DropdownDirective } from './share/dropdown.directive';
import { AppComponent } from './app.component';
import { HeaderMainComponent } from './header-main/header-main.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './auth/auth.service';
import { QuestionsmanagerComponent } from './hr-dashboard/questionsmanager/questionsmanager.component';
import { ResultsmanagerComponent } from './hr-dashboard/resultsmanager/resultsmanager.component';
import { CategorymanagerComponent } from './hr-dashboard/categorymanager/categorymanager.component';
import { TestmanagerComponent } from './hr-dashboard/testmanager/testmanager.component';
import { DashboardpanelComponent } from './hr-dashboard/dashboardpanel/dashboardpanel.component';
import { CreatequestionComponent } from './hr-dashboard/questionsmanager/createquestion/createquestion.component';
import { ViewquestionsComponent } from './hr-dashboard/questionsmanager/viewquestions/viewquestions.component';

import { CreatecategoryComponent } from './hr-dashboard/categorymanager/createcategory/createcategory.component';
import { CreatetestComponent } from './hr-dashboard/testmanager/createtest/createtest.component';
import { ManagetestComponent } from './hr-dashboard/testmanager/managetest/managetest.component';
import { ViewcategoryComponent } from './hr-dashboard/categorymanager/viewcategory/viewcategory.component';

import { CategorymanagerService } from './hr-dashboard/categorymanager/categorymanager.service';
import { CadidatedataComponent } from './hr-dashboard/cadidatedata/cadidatedata.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMainComponent,
    SigninComponent,
    HrDashboardComponent,
    QuestionsmanagerComponent,
    ResultsmanagerComponent,
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
      CadidatedataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, AppRoutingModule
  ],
  providers: [AuthService, CategorymanagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
