import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'amiti-dashboardpanel',
  templateUrl: './dashboardpanel.component.html',
  styleUrls: ['./dashboardpanel.component.css']
})
export class DashboardpanelComponent implements OnInit {

    constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onQuestionManager() {
      this.router.navigate(['qmanager'], { relativeTo: this.route });
  }
  
    onResultManager() {
        this.router.navigate(['resultmanager'], { relativeTo: this.route });
    }

    onCategoryManager() {
        this.router.navigate(['catmanager'], { relativeTo: this.route });
    }

    onTestManager() {
        this.router.navigate(['testmanagerComp'], { relativeTo: this.route });
    }

    onCandidateTest() {
        this.router.navigate(['cadidateTest'], { relativeTo: this.route });
    }
}
