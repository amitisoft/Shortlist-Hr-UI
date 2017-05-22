import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ManagetestService } from '../managetest.service';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'amiti-managetest-testnottaken',
  templateUrl: './managetest-testnottaken.component.html',
  styleUrls: ['./managetest-testnottaken.component.css'],
  providers: [ManagetestService]
})
export class ManagetestTestnottakenComponent implements OnInit, OnChanges, OnDestroy  {

    private subscription: Subscription;

    private ngUnsubscribe: Subject<void> = new Subject<void>();

    manageTest: any[] = [];

    sampleManageTestData = [];
    rowValue: any;
    selectedRows: boolean = false;
    startTestRows = [];

    items: any[] = []; // Question paper

    

    constructor(private mngTestService: ManagetestService) { }

    ngOnInit() {
        this.mngTestService.getDataTestNotTaken()
            .subscribe((data: any) => {
                this.manageTest = data.bookings;
            }

            );


        this.onSelectPaper();
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
        //this.subscription = 
        this.mngTestService.sendCategoryForPaper(java)
            .takeUntil(this.ngUnsubscribe)
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

            }); console.log(this.items);

    }

    ngOnChanges() {
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
       // this.subscription.unsubscribe();
    }


}
