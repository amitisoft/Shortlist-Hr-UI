import { Component, OnInit } from '@angular/core';
import { ManagetestService } from '../managetest.service';
import { ManageTestProperties } from '../managetest.properties'

@Component({
  selector: 'amiti-managetest-testinprocess',
  templateUrl: './managetest-testinprocess.component.html',
  styleUrls: ['./managetest-testinprocess.component.css'],
  providers: [ManagetestService, ManageTestProperties]
})
export class ManagetestTestinprocessComponent implements OnInit {
    manageTest: any[] = [];

    sampleManageTestData = [];
    rowValue: any;
    selectedRows: boolean = false;
    startTestRows = [];

    constructor(private mngTestService: ManagetestService) { }

    ngOnInit() {
        this.mngTestService.getDataTestInProgress()
            .subscribe((data: any) => {
                this.manageTest = data.bookings;
            }

            );
  }

}
