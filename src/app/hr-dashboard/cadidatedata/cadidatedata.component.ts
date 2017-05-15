import { Component, OnInit } from '@angular/core';

import { CandidateDataService } from './candidatedata.service';

import { CandidateDataProperties } from './candidatedata.properties';
@Component({
  selector: 'amiti-cadidatedata',
  templateUrl: './cadidatedata.component.html',
  styleUrls: ['./cadidatedata.component.css'],
  providers: [CandidateDataService,CandidateDataProperties]
})
export class CadidatedataComponent implements OnInit {

    constructor() { }

  ngOnInit() {
  }

  

}
