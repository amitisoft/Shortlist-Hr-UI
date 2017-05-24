import { NgModule } from '@angular/core';


import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './auth/signin/signin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { DashboardpanelComponent } from './hr-dashboard/dashboardpanel/dashboardpanel.component';

import { QuestionsmanagerComponent } from './hr-dashboard/questionsmanager/questionsmanager.component';

import { CategorymanagerComponent } from './hr-dashboard/categorymanager/categorymanager.component';
import { TestmanagerComponent } from './hr-dashboard/testmanager/testmanager.component';

import { CreatequestionComponent } from './hr-dashboard/questionsmanager/createquestion/createquestion.component';
import { ViewquestionsComponent } from './hr-dashboard/questionsmanager/viewquestions/viewquestions.component';
import { PapermanagementComponent } from './hr-dashboard/questionsmanager/papermanagement/papermanagement.component';
import { ViewpapersComponent } from './hr-dashboard/questionsmanager/viewpapers/viewpapers.component';

import { CreatetestComponent } from './hr-dashboard/testmanager/createtest/createtest.component';
import { ManagetestComponent } from './hr-dashboard/testmanager/managetest/managetest.component';
import { ManagetestTestnottakenComponent } from './hr-dashboard/testmanager/managetest/managetest-testnottaken/managetest-testnottaken.component';
import { ManagetestTestinprocessComponent } from './hr-dashboard/testmanager/managetest/managetest-testinprocess/managetest-testinprocess.component';
import { ResultmanagerComponent } from './hr-dashboard/testmanager/resultmanager/resultmanager.component';

import { CreatecategoryComponent } from './hr-dashboard/categorymanager/createcategory/createcategory.component';
import { ViewcategoryComponent } from './hr-dashboard/categorymanager/viewcategory/viewcategory.component';
import { CadidatedataComponent } from './hr-dashboard/cadidatedata/cadidatedata.component';
import { HomeComponent } from './hr-dashboard/home/home.component';
import { ChangepasswordComponent } from './hr-dashboard/changepassword/changepassword.component';
import { ListdataComponent } from './hr-dashboard/cadidatedata/listdata/listdata.component';
import { RegisterComponent } from './hr-dashboard/cadidatedata/register/register.component';
import { UploadlistComponent } from './hr-dashboard/cadidatedata/uploadlist/uploadlist.component';
import { AuthGaurd } from './auth/auth-gaurd.service';


// Root Router Part

const appRoutes: Routes = [
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    { path: 'signin', component: SigninComponent },
    { path: 'forgotpassword/:id', component: ForgotpasswordComponent },

    // { path: 'protected', component: ProtectedComponent },
    {
        path: 'hrdashboard', component: HrDashboardComponent, canActivate: [AuthGaurd], children: [
            { path: '', component: HomeComponent } ,
            { path: 'home', component: HomeComponent } ,
             { path: 'changepassword', component: ChangepasswordComponent } ,
            {
                path: 'qmanager', component: QuestionsmanagerComponent, canActivate: [AuthGaurd], children: [
                    { path: 'createquestion', component: CreatequestionComponent },
                    { path: 'viewquestion', component: ViewquestionsComponent },
                    { path: 'papermange', component: PapermanagementComponent },
                    { path: 'papermange/:id', component: PapermanagementComponent },
                    { path: 'viewPaper', component: ViewpapersComponent}
                ]
            },
            

            {
                path: 'catmanager', component: CategorymanagerComponent, canActivate: [AuthGaurd], children: [
                    { path: '', redirectTo: 'viewcategory', pathMatch: 'full' },
                    { path: 'createcategory', component: CreatecategoryComponent },
                    { path: 'viewcategory', component: ViewcategoryComponent },
                    { path: 'createcategory/:id', component: CreatecategoryComponent }
                ]
            },

            {
                path: 'testmanagerComp', component: TestmanagerComponent, canActivate: [AuthGaurd], children: [

                    { path: '', component: CreatetestComponent },
                    { path: 'createtest', component: CreatetestComponent },
                    {
                        path: 'managetest', component: ManagetestComponent, children: [
                            { path: 'testNotTaken', component: ManagetestTestnottakenComponent },
                            { path: 'testInProgress', component: ManagetestTestinprocessComponent }

                        ]
                    },
                    { path: 'testmanager', component: ResultmanagerComponent },
                    //{ path: 'testmanager/:id', component: ResultmanagerComponent }
                    { path: 'testmanager/:id', component: ResultmanagerComponent }
                    
                ]
            },
            { path: 'cadidateTest', component: CadidatedataComponent, children: [
                { path: '', redirectTo: 'listdata', pathMatch: 'full' },
                { path: 'listdata', component: ListdataComponent },
                { path: 'register', component: RegisterComponent },
                 { path: 'register/:id', component: RegisterComponent },
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