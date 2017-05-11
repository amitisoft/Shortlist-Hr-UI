﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategorymanagerService } from '../../categorymanager/categorymanager.service';
import { Http } from '@angular/http';
import { ViewQuestionProperties } from './viewquestions.properties';
import { ViewQuestionsService } from './viewquestions.service';
import { PapermanagementService } from '../papermanagement/papermanagement.service';
import { PapermanagementProperties } from '../papermanagement/papermanagement.properties';

@Component({
  selector: 'amiti-viewquestions',
  templateUrl: './viewquestions.component.html',
  styleUrls: ['./viewquestions.component.css'],
  providers: [ViewQuestionsService, PapermanagementService, ViewQuestionProperties, CategorymanagerService, PapermanagementProperties]
})
export class ViewquestionsComponent implements OnInit {

    questionsList: Array<any> = [];
    /*------- Category list variables ----------*/
    selectedCategory: any;
    categoryList: any[] = [];

    catQuestions: any;
    createQuestionClicked: boolean = false;

    constructor(private router: Router, private route: ActivatedRoute,
        private categoryMngService: CategorymanagerService,
        private http: Http,
        private viewQuestionsProperties: ViewQuestionProperties,
        private viewQuestionService: ViewQuestionsService,
        private paperService: PapermanagementService){

        this.categoryMngService.getOwnData()
            .subscribe(
            data => {
                for (let key in data) {
                    this.categoryList.push(data[key]);
                }
                console.log(this.categoryList[0]);
            },
            error => {console.log(error)},
            () => {
                this.selectedCategory = this.categoryList[0]['categoryname'];
                this.changeCategory(this.categoryList[0]['categoryname']);
        });
    }

    ngOnInit() {  

    }

    changeCategory(catName: string) {
        var lastQuestion: any = null;
        //var startQuestions: string = "startQue";
        this.paperService.getThisCategoryQuestions(catName, lastQuestion).subscribe(
            data => this.catQuestions = data,
            error => alert(error),
            () => console.log(this.catQuestions)
        );
    }

    getNextPageQuestions(catName: string) {
        var lastQuestionIdVal: string = this.catQuestions[this.catQuestions.length - 1]['Qsn_id'];
        //var nextQuestions: string = "nextQue";
        console.log("Category Name: " + catName);
        console.log("Last question id: " + lastQuestionIdVal);
        this.paperService.getThisCategoryQuestions(catName, lastQuestionIdVal).subscribe(
            data => this.catQuestions = data,
            error => alert(error),
            () => console.log(this.catQuestions)
        );
    }
    
    getPrevPageQuestions(catName: string) {
        var firstQuestionIdVal: string = this.catQuestions[0]['questionid'];
        //var prevQuestions: string = "prevQue";
        console.log("Category Name: " + catName);
        console.log("First question id: " + firstQuestionIdVal);
        this.paperService.getThisCategoryQuestions(catName, firstQuestionIdVal).subscribe(
            data => this.catQuestions = data,
            error => alert(error),
            () => console.log(this.catQuestions)
        );
    }


  onCreateQuestions(clicked: boolean) {
      this.router.navigate(['createquestion'], { relativeTo: this.route });
      this.createQuestionClicked = clicked;
  }



}
