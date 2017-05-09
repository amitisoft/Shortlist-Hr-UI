import { Component, OnInit } from '@angular/core';
import { PapermanagementService } from './papermanagement.service';
import { PapermanagementProperties } from './papermanagement.properties';
import 'rxjs/Rx';

@Component({
  selector: 'amiti-papermanagement',
  templateUrl: './papermanagement.component.html',
  styleUrls: ['./papermanagement.component.css'],
  providers: [PapermanagementService, PapermanagementProperties]
})
export class PapermanagementComponent implements OnInit {

    questions: any[] = [];
    catQuestions: any;
    selectedCategory: any;
    categoryList: any[] = ["Java", "JavaScript", "QA", "Angular4", "AWS Engineer", "Bootstrap"];
    //categoryList: any[] = [];
    questionsCheckedArr: Array<any> = [];
    //qpQuestionsCount: number = this.questionsCheckedArr.length;
    paperName:string;
    paperCreationData:any;
    paperCreationArray: Array<any> = [];

    constructor(private paperService: PapermanagementService) {
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
        var lastQuestion: any = null;
        var startQuestions: string = "startQue";
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
        var prevQuestions: string = "prevQue";
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
        
        //this.paperCreationData = {"paperName":this.paperName, "paperArr":this.paperCreationArray};

/*
"{"paperName":"QATest","paperArr":[{"QsnId":"13650e87-2d58-8fcf-716b-258afc808953","Category":"Java"},{"QsnId":"baa7e34d-ec6f-303a-d5f8-cdd4a3f5a9e6","Category":"Java"}]}"
*/
        // this.paperService.getPaperList().subscribe(
        //     data => {
        //         let paperTemp = data;
        //         // paperNameArray;
        //     },
        //     error => {alert(error);},
        //     () => {
        //         console.log("Finished.");
        //     }
        // );
        
        this.paperService.createPaperService(this.paperCreationArray).subscribe(
            // data => {console.log("Data: "+data);},
            // error => alert("CustomError: "+error),
            // () => {
            //         alert("Paper saved successfully.");
            //         this.paperName='';
            //         this.questionsCheckedArr = [];
            //         this.paperCreationArray = [];

            //         this.changeCategory(this.categoryList[0]);
            //       }

            (response) => {
                if (response.status == 200) {
                        alert('paper saved auccessfully');
                        this.paperName='';
                    this.questionsCheckedArr = [];
                    this.paperCreationArray = [];    
                    this.changeCategory(this.categoryList[0]);
                }
            }
        );
/*
--------------------------------------------------
 {
    

"paperName": xxxxxx,
 "paperArr": [
   {
     "QsnId": "KKLLL",
     "Category": "KLLLL1"
   },
   {
      "QsnId": "LLDDD",
      "Category": "DDDDDL1"
   },
   {
      "QsnId": "MMKKKK",
       "Category": "PPPPPM1"
  }
 ]
  }
--------------------------------------------------
*/
    }

}
