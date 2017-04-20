import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'amiti-questionsmanager',
  templateUrl: './questionsmanager.component.html',
  styleUrls: ['./questionsmanager.component.css']
})
export class QuestionsmanagerComponent implements OnInit {

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.router.navigate(['viewquestion'], { relativeTo: this.route });
  }

  onCreateQuestions() {
      this.router.navigate(['createquestion'], { relativeTo: this.route });
  }

  onViewQuestions() {
      this.router.navigate(['viewquestion'], { relativeTo: this.route });
  }


}
