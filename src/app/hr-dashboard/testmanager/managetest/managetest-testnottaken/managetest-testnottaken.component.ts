import { Component, OnInit, OnChanges } from '@angular/core';
import { ManagetestService } from '../managetest.service';
import { CategorymanagerService } from '../../../categorymanager/categorymanager.service';
import {IMyDrpOptions} from 'mydaterangepicker';

@Component({
  selector: 'amiti-managetest-testnottaken',
  templateUrl: './managetest-testnottaken.component.html',
  styleUrls: ['./managetest-testnottaken.component.css'],
  providers: [ManagetestService]
})
export class ManagetestTestnottakenComponent implements OnInit, OnChanges {

    manageTest: any[] = [];

    sampleManageTestData = [];
    rowValue: any;
    selectedRows: boolean = false;
    startTestRows = [];
    items: any[] = []; // Question paper
    category: any[] = [];
    private myDateRangePickerOptions: IMyDrpOptions = {
        dateFormat: 'dd/mm/yyyy',
    };
    searchdata={
        'name' : '',
        'category' : '',
        'email' : '',
        'dateRange':{
            'formatted':''
        }
    }
    constructor(private mngTestService: ManagetestService,private categoryMngService: CategorymanagerService) { }

    ngOnInit() {
        this.onSearch(this.searchdata,'');
        this.onSelectPaper();
      this.categoryMngService.getOwnData()
            .subscribe(
            data => {
                const myArray = [];
                for (let key in data) {
                    myArray.push(data[key]);
                }
                this.category = myArray;
            });
    }

    startTest(sampleManageTestData) {
        this.startTestRows = [];
        for (let i = 0; i < sampleManageTestData.length; i++) {
            this.rowValue = sampleManageTestData[i].candidateId;
            var element = <HTMLInputElement>document.getElementById("row" + sampleManageTestData[i].candidateId);
            var isChecked = element.checked;
            if (isChecked) {
                this.startTestRows.push({
                    id: sampleManageTestData[i].candidateId,
                    candidateId: sampleManageTestData[i].candidateId,
                    bookingId: sampleManageTestData[i].bookingId,
                    //name: sampleManageTestData[i].candidateFullName,
                    jobPosition: sampleManageTestData[i].jobPosition,
                    emailId: sampleManageTestData[i].candidateMailId,
                    DOE: sampleManageTestData[i].DOE,
                    category: sampleManageTestData[i].category,
                    //paper: sampleManageTestData[i].paperType,
                    testStatus: sampleManageTestData[i].testStatus,
                    //resendLink: sampleManageTestData[i].resendLink
                })
                this.selectedRows = true;
            }
        }

        if (this.selectedRows) {
            this.mngTestService.sendStartTestdata(this.startTestRows).subscribe(
                (response) => {
                    console.log(this.startTestRows);
                    if (response.status == 200) {
                        alert('data submitted auccessfully');
                    }
                }
            );
        } else {
            alert('Please select atleast one row');
            return false;
        }
    }

    /** Select Paper **/

    onSendCategory(value: string, java) {
        this.mngTestService.sendCategoryForPaper(java)
            .subscribe(
            (response) => {
               // alert('data submitted auccessfully');
               // this.onSelectPaper();
                
                //if (response.status == 200) {


                //}
                this.onSelectPaper();
            }

            );
    }

    onSelectPaper() {
       // alert("Hi Sarath");
        this.mngTestService.getQuestionPaper()
            .subscribe(
            //for loopping // data => this.items = data
            data => {
                const myArray = [];
                for (let key in data) {
                    myArray.push(data[key]);
                }
                this.items = myArray;

            }); 
            console.log(this.items);

    }
    onSearch(searchvalue:any,pageno){
        this.mngTestService.getDataTestNotTaken(searchvalue,pageno)
            .subscribe((data: any) => {
                this.manageTest = data.bookings;
            }

            );
    }
    ngOnChanges() {

       

    }


}
