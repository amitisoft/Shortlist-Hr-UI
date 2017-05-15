import { NgModule } from '@angular/core';


import { Routes, RouterModule } from '@angular/router';

import { SigninPanelComponent } from './auth/signin/signin-panel.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signin/signup.component';
import { ForgotpasswordComponent } from './auth/signin/forgotpassword.component';

import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { DashboardpanelComponent } from './hr-dashboard/dashboardpanel/dashboardpanel.component';

import { QuestionsmanagerComponent } from './hr-dashboard/questionsmanager/questionsmanager.component';

import { CategorymanagerComponent } from './hr-dashboard/categorymanager/categorymanager.component';
import { TestmanagerComponent } from './hr-dashboard/testmanager/testmanager.component';

import { CreatequestionComponent } from './hr-dashboard/questionsmanager/createquestion/createquestion.component';
import { ViewquestionsComponent } from './hr-dashboard/questionsmanager/viewquestions/viewquestions.component';
import { PapermanagementComponent } from './hr-dashboard/questionsmanager/papermanagement/papermanagement.component';

import { CreatetestComponent } from './hr-dashboard/testmanager/createtest/createtest.component';
import { ManagetestComponent } from './hr-dashboard/testmanager/managetest/managetest.component';
import { ManagetestTestnottakenComponent } from './hr-dashboard/testmanager/managetest/managetest-testnottaken/managetest-testnottaken.component';
import { ManagetestTestinprocessComponent } from './hr-dashboard/testmanager/managetest/managetest-testinprocess/managetest-testinprocess.component';
import { ResultmanagerComponent } from './hr-dashboard/testmanager/resultmanager/resultmanager.component';

import { CreatecategoryComponent } from './hr-dashboard/categorymanager/createcategory/createcategory.component';
import { ViewcategoryComponent } from './hr-dashboard/categorymanager/viewcategory/viewcategory.component';
import { CadidatedataComponent } from './hr-dashboard/cadidatedata/cadidatedata.component';
import { HomeComponent } from './hr-dashboard/home/home.component';
import { ListdataComponent } from './hr-dashboard/cadidatedata/listdata/listdata.component';
import { RegisterComponent } from './hr-dashboard/cadidatedata/register/register.component';
import { UploadlistComponent } from './hr-dashboard/cadidatedata/uploadlist/uploadlist.component';
import { AuthGaurd } from './auth/auth-gaurd.service';


// Root Router Part

const appRoutes: Routes = [
   // { path: '', redirectTo: 'signin', pathMatch: 'full' },
   // { path: 'signin', component: SigninComponent },
    { path: '', redirectTo: '/signinpanel', pathMatch: 'full' },
    { path: 'signinpanel', component: SigninPanelComponent },
    { path: 'signinpanel/signin', component: SigninComponent },
    { path: 'signinpanel/signup', component: SignupComponent },
    { path: 'signinpanel/forgotpassword', component: ForgotpasswordComponent },

    // { path: 'protected', component: ProtectedComponent },
    {
        path: 'hrdashboard', component: HrDashboardComponent, canActivate: [AuthGaurd], children: [
            { path: '', component: HomeComponent } ,
            { path: 'home', component: HomeComponent } ,
            {
                path: 'qmanager', component: QuestionsmanagerComponent, canActivate: [AuthGaurd], children: [
                    { path: 'createquestion', component: CreatequestionComponent },
                    { path: 'viewquestion', component: ViewquestionsComponent },
                    { path: 'papermange', component: PapermanagementComponent }
                ]
            },
            

            {
                path: 'catmanager', component: CategorymanagerComponent, canActivate: [AuthGaurd], children: [
                    { path: 'createcategory', component: CreatecategoryComponent },
                    { path: 'viewcategory', component: ViewcategoryComponent },
                    { path: ':id', component: CreatecategoryComponent },
                    { path: ':id/createcategory', component: CreatecategoryComponent }
                ]
            },

            {
                path: 'testmanagerComp', component: TestmanagerComponent, canActivate: [AuthGaurd], children: [

                    { path: 'createtest', component: CreatetestComponent },
                    {
                        path: 'managetest', component: ManagetestComponent, children: [
                            { path: 'testNotTaken', component: ManagetestTestnottakenComponent },
                            { path: 'testInProgress', component: ManagetestTestinprocessComponent }

                        ]
                    },
                    { path: 'testmanager', component: ResultmanagerComponent },
                ]
            },
            { path: 'cadidateTest', component: CadidatedataComponent, children: [
                { path: '', redirectTo: 'listdata', pathMatch: 'full' },
                { path: 'listdata', component: ListdataComponent },
                { path: 'register', component: RegisterComponent },
                { path: 'uploadlist', component: UploadlistComponent }
            ] },
            { path: 'cadidateTest', component: CadidatedataComponent, canActivate: [AuthGaurd] },

        ]
    }

];

@NgModule({


    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }