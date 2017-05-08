import { Component, OnInit } from '@angular/core';
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
  providers: [ViewQuestionsService, PapermanagementService, ViewQuestionProperties, PapermanagementProperties]
})
export class ViewquestionsComponent implements OnInit {

    questionsList: Array<any> = [];
    selectedCategory: any;
    categoryList: any[] = ["Java", "JavaScript", "QA", "Angular4"];
    catQuestions: any;

    items: any[] = [];

    createQuestionClicked: boolean = false;

    constructor(private router: Router, private route: ActivatedRoute,
        private categoryMngService: CategorymanagerService,
        private http: Http,
        private viewQuestionsProperties: ViewQuestionProperties,
        private viewQuestionService: ViewQuestionsService,
        private paperService: PapermanagementService){

        this.selectedCategory = this.categoryList[0];
        this.changeCategory(this.categoryList[0]);
    }

    ngOnInit() {  

    }

    changeCategory(catName: string) {
        var lastQuestion: any = null;
        var startQuestions: string = "startQue";
        //catName = "UI@";
        this.paperService.getThisCategoryQuestions(catName, lastQuestion, startQuestions).subscribe(
            data => this.catQuestions = data,
            error => alert(error),
            () => console.log(this.catQuestions)
        );
    }

    getNextPageQuestions(catName: string) {
        var lastQuestionIdVal: string = this.catQuestions[this.catQuestions.length - 1]['questionid'];
        var nextQuestions: string = "nextQue";
        console.log("Category Name: " + catName);
        console.log("Last question id: " + lastQuestionIdVal);
        this.paperService.getThisCategoryQuestions(catName, lastQuestionIdVal, nextQuestions).subscribe(
            data => this.catQuestions = data,
            error => alert(error),
            () => console.log(this.catQuestions)
        );
    }

    getPrevPageQuestions(catName: string) {
        var firstQuestionIdVal: string = this.catQuestions[0]['questionid'];
        var prevQuestions: string = "prevQue";
        console.log("Category Name: " + catName);
        console.log("First question id: " + firstQuestionIdVal);
        this.paperService.getThisCategoryQuestions(catName, firstQuestionIdVal, prevQuestions).subscribe(
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
