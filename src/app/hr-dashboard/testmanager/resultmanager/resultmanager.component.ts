import { Component, OnInit } from '@angular/core';
import { CategorymanagerService } from '../../categorymanager/categorymanager.service';
import { IMyDrpOptions } from 'mydaterangepicker';

@Component({
  selector: 'amiti-resultmanager',
  templateUrl: './resultmanager.component.html',
  styleUrls: ['./resultmanager.component.css']
})
export class ResultmanagerComponent implements OnInit {
    category: any[] = [];
    private myDateRangePickerOptions: IMyDrpOptions = {
        dateFormat: 'dd/mm/yyyy',
    };

    constructor(private categoryMngService: CategorymanagerService) { }

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

}
