import { Component, OnInit } from '@angular/core';
import { PapermanagementService } from './papermanagement.service';
import { GetcategoryquestionsService } from './getcategoryquestions.service';
import { PapermanagementProperties } from './papermanagement.properties';
import 'rxjs/Rx';

@Component({
  selector: 'amiti-papermanagement',
  templateUrl: './papermanagement.component.html',
  styleUrls: ['./papermanagement.component.css'],
  providers: [PapermanagementService , GetcategoryquestionsService, PapermanagementProperties]
})
export class PapermanagementComponent implements OnInit {

    questions: any[] = [];
    catQuestions: any;
    selectedCategory: any;
    categoryList: any[] = ["Java", "QA", "JavaScript"];
    //categoryList: any[] = [];
    questionsCheckedArr: Array<any> = [];

    //qpQuestionsCount: number = this.questionsCheckedArr.length;
    paperName:string;

    constructor(private paperService: PapermanagementService, private questionService: GetcategoryquestionsService) {
        this.selectedCategory = this.categoryList[0];
        this.changeCategory(this.categoryList[0]);
    }

    ngOnInit() {

    }




    onGetCategoryQuestion(selectedCategory: string) {
        this.paperService.sendCategory({ CATEGORYNAME: selectedCategory })
            .subscribe(
            data => console.log(data),

            error => console.log(error)
            );
    }

    changeCategory(catName: string) {
        var lastQuestion: any = undefined;
        var startQuestions: string = "startQue";
        this.questionService.getThisCategoryQuestions(catName, lastQuestion, startQuestions).subscribe(
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
        this.questionService.getThisCategoryQuestions(catName, lastQuestionIdVal, nextQuestions).subscribe(
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
        this.questionService.getThisCategoryQuestions(catName, firstQuestionIdVal, prevQuestions).subscribe(
            data => this.catQuestions = data,
            error => alert(error),
            () => console.log(this.catQuestions)
        );
    }


    updateQuestionsCheckbox(chkbx, evnt) {
        console.log(chkbx);
        console.log(evnt.target.value);
        console.log(evnt.target.checked);
        console.log(evnt.target.getAttribute('data-questionName'));
        console.log(evnt.target.getAttribute('data-categoryName'));
        var queObj = { questionid: evnt.target.value, questionName: evnt.target.getAttribute('data-questionName'), questionCategory: evnt.target.getAttribute('data-categoryName') };
        console.log("-----------------------------");
        console.log(queObj);


        if (evnt.target.checked === true) {
            // if(this.qpQuestionsCount < 30)
            this.questionsCheckedArr.push(queObj);
            console.log(this.questionsCheckedArr);
        } else {
            var selectedQueIdIndex = this.questionsCheckedArr.findIndex(x => x.questionid == evnt.target.value);
            this.questionsCheckedArr.splice(selectedQueIdIndex, 1);
            console.log(this.questionsCheckedArr);
        }
    }

    createCandidatePaper() {
        if (this.questionsCheckedArr.length == 0) {
            alert("Please select atleast one question to create the Question Paper");
            return;
        }
        if(this.paperName === undefined || this.paperName === "") {
            alert("Please enter the paper name to save the question paper.");
            return;
        }
        this.paperService.createPaperService(this.paperName, this.questionsCheckedArr).subscribe(
            error => alert(error),
            () => {
                    alert("Paper saved successfully.");
                    this.paperName='';
                    this.questionsCheckedArr = [];

                    this.catQuestions.forEach((eachCatQuestion) => {
                        eachCatQuestion.checked = false;
                    });
                  }
        );

    }

}
