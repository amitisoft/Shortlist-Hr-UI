import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'amiti-createtest',
  templateUrl: './testmanager.component.html',
  styleUrls: ['./testmanager.component.css']
})
export class TestmanagerComponent implements OnInit {

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.router.navigate(['createtest'], { relativeTo: this.route });
  }

  onCreateTest() {
      this.router.navigate(['createtest'], { relativeTo: this.route });
  }

  onManageTest() {
      this.router.navigate(['managetest'], { relativeTo: this.route });
  }
}
