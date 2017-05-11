import { Component, OnInit } from '@angular/core';
import { PapermanagementService } from './papermanagement.service';
import { PapermanagementProperties } from './papermanagement.properties';
import { CategorymanagerService } from '../../categorymanager/categorymanager.service';
import 'rxjs/Rx';

@Component({
  selector: 'amiti-papermanagement',
  templateUrl: './papermanagement.component.html',
  styleUrls: ['./papermanagement.component.css'],
  providers: [PapermanagementService, CategorymanagerService, PapermanagementProperties]
})
export class PapermanagementComponent implements OnInit {

    questions: any[] = [];
    catQuestions: any;

    /*------- Category list variables ----------*/
    selectedCategory: any;
    categoryList: any[] = [];

    questionsCheckedArr: Array<any> = [];
    //qpQuestionsCount: number = this.questionsCheckedArr.length;
    paperName:string;
    paperCreationData:any;
    paperCreationArray: Array<any> = [];

    constructor(private paperService: PapermanagementService, private categoryMngService: CategorymanagerService) {
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
        //catName = "UI@";
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


    updateQuestionsCheckbox(chkbx, evnt) {
        console.log(chkbx);
        console.log(evnt.target.value);
        console.log(evnt.target.checked);
        console.log(evnt.target.getAttribute('data-questionName'));
        console.log(evnt.target.getAttribute('data-categoryName'));
        var queObj = { Qsn_id: evnt.target.value, Qsn: evnt.target.getAttribute('data-questionName'), Category: evnt.target.getAttribute('data-categoryName') };
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
        var paperNameArray: Array<any> = [];
        //this.paperName.trim();
        console.log("Paper name: "+this.paperName);

        if (this.questionsCheckedArr.length == 0) {
            alert("Please select atleast one question to create the Question Paper");
            return;
        }
        if(this.paperName === undefined || this.paperName === "") {
            alert("Please enter the paper name to save the question paper.");
            return;
        }

        
        for(let newArr of this.questionsCheckedArr){
            this.paperCreationArray.push({"QsnId": newArr.Qsn_id, "Category":newArr.Category});
        }
        
        this.paperService.createPaperService(this.paperCreationArray).subscribe(
        /* data => {console.log("Data: "+data);},
            error => alert("CustomError: "+error),
            () => {
                    alert("Paper saved successfully.");
                    this.paperName='';
                    this.questionsCheckedArr = [];
                    this.paperCreationArray = [];

                    this.selectedCategory = this.categoryList[0]['categoryname'];
                    this.changeCategory(this.categoryList[0]['categoryname']);
                  } */

            (response) => {
                if (response.status == 200) {
                        alert('paper saved auccessfully');
                        this.paperName='';
                    this.questionsCheckedArr = [];
                    this.paperCreationArray = [];   
                    //this.selectedCategory = this.categoryList[0]['categoryname']; 
                    //this.changeCategory(this.categoryList[0]['categoryname']);
                    this.catQuestions.forEach((eachCatQuestion) => {
                        eachCatQuestion.checked = false;
                    })
                }
            }
        );
    }

    clearCandidatePaper(){
        this.paperName='';
        this.questionsCheckedArr = [];
        this.paperCreationArray = [];
        this.catQuestions.forEach((eachCatQuestion) => {
            eachCatQuestion.checked = false;
        })
    }

}
