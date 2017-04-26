import { Component, OnInit } from '@angular/core';

import { PapermanagementService } from './papermanagement.service';

@Component({
  selector: 'amiti-papermanagement',
  templateUrl: './papermanagement.component.html',
  styleUrls: ['./papermanagement.component.css'],
  providers: [PapermanagementService]
})
export class PapermanagementComponent implements OnInit {

    constructor(private paperService: PapermanagementService ) { }

  ngOnInit() {
  }



}
