import { Component, OnInit } from '@angular/core';
import { ManagetestService } from './managetest.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'amiti-managetest',
  templateUrl: './managetest.component.html',
  styleUrls: ['./managetest.component.css'],
  providers: [ManagetestService]
})
export class ManagetestComponent implements OnInit {

   

    constructor(private mngTestService: ManagetestService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {

        this.router.navigate(['testNotTaken'], { relativeTo: this.route });
    
    }

   

    onTestNotTaken() {
        this.router.navigate(['testNotTaken'], { relativeTo: this.route });
    }

    onTestInProgress() {
        this.router.navigate(['testInProgress'], { relativeTo: this.route });
    }

}
