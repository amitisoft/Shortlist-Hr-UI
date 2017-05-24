import { Component, OnInit } from '@angular/core';
import { CategorymanagerService } from '../../categorymanager/categorymanager.service';
import { ManagetestService } from '../managetest/managetest.service';
import { IMyDrpOptions } from 'mydaterangepicker';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NotificationService } from '../../../header-main/notification.service';

@Component({
  selector: 'amiti-resultmanager',
  templateUrl: './resultmanager.component.html',
  styleUrls: ['./resultmanager.component.css'],
  providers: [ManagetestService]
})
export class ResultmanagerComponent implements OnInit {
    category: any[] = [];
    manageTest: any[] = [];
    cid: string;
    editMode = false;
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

    constructor(private mngTestService: ManagetestService,private categoryMngService: CategorymanagerService, private route: ActivatedRoute, private notificServ: NotificationService) { }

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

            this.route.params.subscribe(
                (params: Params) => {
                    this.cid = params['id'];
                    //this.editMode = params['id'] != null;
                    //this.initForm();
                }
            )
    }

    ngAfterViewInit(){
        this.notificServ.updateNotification(this.cid);
    }

    onSearch(searchvalue: any, pageno) {
        this.mngTestService.getResultManagerData(searchvalue, pageno)
            .subscribe((data: any) => {
                this.manageTest = data.bookings;
            }

            ); //console.log(searchvalue);
    }

}
