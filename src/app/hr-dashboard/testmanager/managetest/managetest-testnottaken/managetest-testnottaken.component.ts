import { Component, OnInit } from '@angular/core';
import { ManagetestService } from '../managetest.service';
import { ManageTestProperties } from '../managetest.properties'

@Component({
  selector: 'amiti-managetest-testnottaken',
  templateUrl: './managetest-testnottaken.component.html',
  styleUrls: ['./managetest-testnottaken.component.css'],
  providers: [ManagetestService, ManageTestProperties]
})
export class ManagetestTestnottakenComponent implements OnInit {

    manageTest: any[] = [];

    sampleManageTestData = [];
    rowValue: any;
    selectedRows: boolean = false;
    startTestRows = [];

    constructor(private mngTestService: ManagetestService) { }

    ngOnInit() {
        this.mngTestService.getDataTestNotTaken()
            .subscribe((data: any) => {
                this.manageTest = data.bookings;
            }

            );
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


}
