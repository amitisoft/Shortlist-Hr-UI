import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'amiti-categorymanager',
  templateUrl: './categorymanager.component.html',
  styleUrls: ['./categorymanager.component.css']
})
export class CategorymanagerComponent implements OnInit {

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.router.navigate(['viewcategory'], { relativeTo: this.route });
  }

  onCreatecategory() {
      this.router.navigate(['createcategory'], { relativeTo: this.route });
  }

  onviewcategory() {
      this.router.navigate(['viewcategory'], { relativeTo: this.route });
  }

}
