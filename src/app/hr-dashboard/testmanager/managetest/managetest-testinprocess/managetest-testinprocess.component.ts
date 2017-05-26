import { Component, OnInit } from '@angular/core';
import { ManagetestService } from '../managetest.service';
import { CategorymanagerService } from '../../../categorymanager/categorymanager.service';
import {IMyDrpOptions} from 'mydaterangepicker';

@Component({
  selector: 'amiti-managetest-testinprocess',
  templateUrl: './managetest-testinprocess.component.html',
  styleUrls: ['./managetest-testinprocess.component.css']
})
export class ManagetestTestinprocessComponent implements OnInit {
    manageTest: any[] = [];

    sampleManageTestData = [];
    rowValue: any;
    selectedRows: boolean = false;
    startTestRows = [];
    category: any[]=[];
    testStatus:string='progress';
    private myDateRangePickerOptions: IMyDrpOptions = {
        dateFormat: 'dd/mm/yyyy',
    };
    constructor(private mngTestService: ManagetestService,private categoryMngService: CategorymanagerService) { }

    ngOnInit() {
             this.mngTestService.getDataTestInProgress()
            .subscribe((data: any) => {
                this.manageTest = data.bookings;
            }
            );
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
  onSearch(searchvalue:any){
      console.log(searchvalue);
     this.mngTestService.getDataTestseacrh(searchvalue)
            .subscribe((data: any) => {
                this.manageTest = data.bookings;
            }
            );
  }

}
