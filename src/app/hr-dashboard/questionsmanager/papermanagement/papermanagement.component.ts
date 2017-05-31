import { Component, OnInit } from '@angular/core';
import { PapermanagementService } from './papermanagement.service';
import { CategorymanagerService } from '../../categorymanager/categorymanager.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ViewpapersService } from '../viewpapers/viewpapers.service';
import 'rxjs/Rx';
declare var swal: any;

@Component({
  selector: 'amiti-papermanagement',
  templateUrl: './papermanagement.component.html',
  styleUrls: ['./papermanagement.component.css'],
  providers: [PapermanagementService, CategorymanagerService, ViewpapersService]
})
export class PapermanagementComponent implements OnInit {

    editMode = false;
    id: string;
    paperQuestions: any[] = [];

    questions: any[] = [];
    catQuestions: any;

    /*------- Category list variables ----------*/
    selectedCategory: any;
    categoryList: any[] = [];

    deletedEditPaperArray: any[] = [];
    questionsCheckedArr: any[] = [];
   // questionsCheckedArr: Array<any> = [];

    //qpQuestionsCount: number = this.questionsCheckedArr.length;
    paperName:string;
    paperCreationData:any;
    paperCreationArray: Array<any> = [];
    

    constructor(private paperService: PapermanagementService,
        private categoryMngService: CategorymanagerService,
        private route: ActivatedRoute,
        private viewPaperService: ViewpapersService) {

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
                this.selectedCategory = this.categoryList[0]['categoryName'];
                this.changeCategory(this.categoryList[0]['categoryName']);
            });
        
    }

    ngOnInit() {

        //Editing Paper
        this.route.params
            .subscribe(
            (params: Params) => {
                this.id = params['id'];
                this.editMode = params['id'] != null;
                this.initForm();
            }
            )
        console.log(this.id);
    }

    initForm() {
        if (this.editMode) {
            this.viewPaperService.editPaperQuestions(this.id)
                .subscribe((data: any) => {
                    this.questionsCheckedArr = data;
                    this.paperName = data[0].questionPaperName;
                    //console.log(this.questionsCheckedArr);
                    console.log(data);
                }

                ); 
        }
    }

    changeCategory(catName: string) {
        var lastQuestion: any = null;
        //var startQuestions: string = "startQue";
        //catName = "UI@";
        this.paperService.getThisCategoryQuestions(catName, lastQuestion).subscribe(
            data => this.catQuestions = data.qsns,
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
        var i;
        //console.log(chkbx);
        //console.log(evnt.target.value);
        //console.log(evnt.target.checked);
        //console.log(evnt.target.getAttribute('data-questionName'));
        //console.log(evnt.target.getAttribute('data-categoryName'));
        var queObj = { QsnId: evnt.target.value, Qsn: evnt.target.getAttribute('data-questionName'), category: evnt.target.getAttribute('data-categoryName') };
        console.log("-----------------------------");
        console.log(queObj);

        if (this.editMode) {
            console.log(this.deletedEditPaperArray);
            if (evnt.target.checked === true) {
                if (this.deletedEditPaperArray.length > 0) {
                    this.questionsCheckedArr[this.deletedEditPaperArray[0]].QsnId = queObj.QsnId;
                    this.questionsCheckedArr[this.deletedEditPaperArray[0]].Qsn = queObj.Qsn;
                    this.questionsCheckedArr[this.deletedEditPaperArray[0]].category = queObj.category;
                    this.deletedEditPaperArray.splice(0, 1);
                    console.log(this.deletedEditPaperArray[0]);
                    console.log(this.deletedEditPaperArray);
                } else {
                    this.questionsCheckedArr.push(queObj);
                }
            } else {
                var selectedQueIdIndex = this.questionsCheckedArr.findIndex(x => x.questionid == evnt.target.value);
                this.questionsCheckedArr.splice(selectedQueIdIndex, 1);
                console.log(this.questionsCheckedArr);
            }
        } else {
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
    }

    createCandidatePaper() {
        var paperNameArray: Array<any> = [];
        //this.paperName.trim();
        console.log("Paper name: "+this.paperName);

/*        if (this.questionsCheckedArr.length == 0) {
            swal("Alert", "Please select atleast one question to create the Question Paper").then(function(){
                return;
            })
        }*/

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

        if (this.editMode) {
            this.paperCreationArray['questionPaperId'] = this.id;
        }
        console.log(this.paperCreationArray);
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
    swal({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then(function() {
            this.paperName='';
            this.questionsCheckedArr = [];
            this.paperCreationArray = [];
            this.catQuestions.forEach((eachCatQuestion) => {
                eachCatQuestion.checked = false;
            });
          swal(
            'cleared!',
            'Your paper name is cleared.',
            'success'
          );
        })
// alert("Check");

    }

    onRemoveQuestion(index: number) {
       // delete this.questionsCheckedArr[index];
        //var index = this.questionsCheckedArr.indexOf(this.questionsCheckedArr);
        
       this.questionsCheckedArr[index].QsnId = '';
       this.questionsCheckedArr[index].Qsn = '';
       this.questionsCheckedArr[index].category = '';

       this.deletedEditPaperArray.push(index);
       console.log(this.deletedEditPaperArray);
        
    }

}
