import { Component, OnInit } from '@angular/core';
import { ManagetestService } from './managetest.service';
import { ManageTestProperties } from './managetest.properties'

@Component({
  selector: 'amiti-managetest',
  templateUrl: './managetest.component.html',
  styleUrls: ['./managetest.component.css'],
  providers: [ManagetestService, ManageTestProperties]
})
export class ManagetestComponent implements OnInit {

    manageTest: any[] = [];

    sampleManageTestData = [];
    rowValue: any;
    selectedRows: boolean = false;
    startTestRows = [];

    constructor(private mngTestService: ManagetestService) { }

    ngOnInit() {


        this.sampleManageTestData.push({
            id: 1,
            studentId: 1,
            name: 'test user',
            postApplied: 'java developer',
            emailId: 'test@test.com',
            date: '24-4-2017',
            subject: 'java',
            paper: 'core java',
            status: 'test status',
            resendLink: 'www.test.com'
        });
        this.sampleManageTestData.push({
            id: 2,
            studentId: 2,
            name: 'test user',
            postApplied: 'web developer',
            emailId: 'test1@test.com',
            date: '24-4-2017',
            subject: 'html',
            paper: 'web',
            status: 'test status',
            resendLink: 'www.test.com'
        });

     /** this.mngTestService.getManageTestData()
          .subscribe(
          //for loopping // data => this.items = data
          data => {
              const myArray = [];
              for (let key in data) {
                  myArray.push(data[key]);
              }
              this.manageTest = myArray;
          }
          ); **/

     this.mngTestService.getData()
       .subscribe((data: any) => {
           console.log(data.bookings[0].candidateFullName)

           this.manageTest = data.bookings;
         }

       );

    }

    startTest(sampleManageTestData) {
        this.startTestRows = [];
        for (let i = 0; i < sampleManageTestData.length; i++) {
            this.rowValue = sampleManageTestData[i].id;
            var element = <HTMLInputElement>document.getElementById("row" + sampleManageTestData[i].id);
            var isChecked = element.checked;
            if (isChecked) {
                this.startTestRows.push({
                    id: sampleManageTestData[i].id,
                    studentId: sampleManageTestData[i].studentId,
                    name: sampleManageTestData[i].name,
                    postApplied: sampleManageTestData[i].postApplied,
                    emailId: sampleManageTestData[i].emailId,
                    date: sampleManageTestData[i].date,
                    subject: sampleManageTestData[i].subject,
                    paper: sampleManageTestData[i].paper,
                    status: sampleManageTestData[i].status,
                    resendLink: sampleManageTestData[i].resendLink
                })
                this.selectedRows = true;
            }

        }

        if (this.selectedRows) {
            this.mngTestService.sendStartTestdata(this.startTestRows).subscribe(
                (response) => {
                    console.log(this.startTestRows);
                    if (response.status == 200) {

                    }
                }
            );
        } else {
            alert('Please select atleast one row');
            return false;
        }
    }

}
