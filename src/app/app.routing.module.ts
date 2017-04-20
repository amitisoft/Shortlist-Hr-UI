import { NgModule } from '@angular/core';


import { Routes, RouterModule } from '@angular/router';


import { SigninComponent } from './auth/signin/signin.component';

import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { DashboardpanelComponent } from './hr-dashboard/dashboardpanel/dashboardpanel.component';

import { QuestionsmanagerComponent } from './hr-dashboard/questionsmanager/questionsmanager.component';
import { ResultsmanagerComponent } from './hr-dashboard/resultsmanager/resultsmanager.component';
import { CategorymanagerComponent } from './hr-dashboard/categorymanager/categorymanager.component';
import { TestmanagerComponent } from './hr-dashboard/testmanager/testmanager.component';

import { CreatequestionComponent } from './hr-dashboard/questionsmanager/createquestion/createquestion.component';
import { ViewquestionsComponent } from './hr-dashboard/questionsmanager/viewquestions/viewquestions.component';

import { CreatetestComponent } from './hr-dashboard/testmanager/createtest/createtest.component';
import { ManagetestComponent } from './hr-dashboard/testmanager/managetest/managetest.component';

import { CreatecategoryComponent } from './hr-dashboard/categorymanager/createcategory/createcategory.component';
import { ViewcategoryComponent } from './hr-dashboard/categorymanager/viewcategory/viewcategory.component';
import { CadidatedataComponent } from './hr-dashboard/cadidatedata/cadidatedata.component';


// Root Router Part

const appRoutes: Routes = [
    //{ path: '', redirectTo: '/SigninComponent', pathMatch: 'full' },
    { path: 'signin', component: SigninComponent },
    // { path: 'protected', component: ProtectedComponent },
    {
        path: 'hrdashboard', component: HrDashboardComponent, children: [
            //{ path: '', component: DashboardpanelComponent } ,
            {
                path: 'qmanager', component: QuestionsmanagerComponent, children: [
                    { path: 'createquestion', component: CreatequestionComponent },
                    { path: 'viewquestion', component: ViewquestionsComponent }
                ]
            },
            { path: 'resultmanager', component: ResultsmanagerComponent },

            {
                path: 'catmanager', component: CategorymanagerComponent, children: [
                    { path: 'createcategory', component: CreatecategoryComponent },
                    { path: 'viewcategory', component: ViewcategoryComponent }
                ]
            },

            {
                path: 'testmanagerComp', component: TestmanagerComponent, children: [
                    { path: 'createtest', component: CreatetestComponent },
                    { path: 'managetest', component: ManagetestComponent }
                ]
            },

            { path: 'cadidateTest', component: CadidatedataComponent },

        ]
    }

];

@NgModule({


    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }