import { Component, OnInit } from '@angular/core';
import { CategorymanagerService } from '../../categorymanager/categorymanager.service';
import { ManagetestService } from '../managetest/managetest.service';
import { IMyDrpOptions } from 'mydaterangepicker';

@Component({
  selector: 'amiti-resultmanager',
  templateUrl: './resultmanager.component.html',
  styleUrls: ['./resultmanager.component.css'],
  providers: [ManagetestService]
})
export class ResultmanagerComponent implements OnInit {
    category: any[] = [];
    manageTest: any[] = [];
    private myDateRangePickerOptions: IMyDrpOptions = {
        dateFormat: 'dd/mm/yyyy',
    };

    searchResultManager = {
        'category': '',
        'name': '',
        'score':'',
        'email': '',
        'phone': '',
        'dateRange': {
            'formatted': ''
        }
    }

    constructor(private mngTestService: ManagetestService,private categoryMngService: CategorymanagerService) { }

    ngOnInit() {

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

    onSearch(searchvalue: any, pageno) {
        this.mngTestService.getResultManagerData(searchvalue, pageno)
            .subscribe((data: any) => {
                this.manageTest = data.bookings;
            }

            ); //console.log(searchvalue);
    }

}
