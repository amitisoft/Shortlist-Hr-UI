
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Response } from '@angular/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CandidateDataService } from '../candidatedata.service';
@Component({
    selector: 'amiti-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    @ViewChild('f') uForm: NgForm;
    data: any[] = [];
    id: string;
    editMode = false;
    user: any[]=[];
    constructor(private candidateService: CandidateDataService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route.params
            .subscribe(
            (params: Params) => {
                this.id = params['id'];
                this.editMode = params['id'] != null;
                this.initForm();
            }
            )
    }
    initForm() {
    if(this.editMode){
        this.candidateService.getcandidateDetails(this.id)
            .subscribe(
            data => {
                this.user=data;
            }
            );
    }
}
    onSubmitData(form: NgForm) {
        this.candidateService.addUser(form.value)
            .subscribe(
            (response: Response) => {
             var res=JSON.parse(JSON.stringify(response));
             alert(res._body);
              if(this.editMode){
                this.router.navigate(['../../listdata'], { relativeTo: this.route });
              }else{
              this.router.navigate(['../listdata'], { relativeTo: this.route });
            }    
            }
            );

       
       // this.onClear();
    }
    onClear() {
        this.uForm.reset();
    }
    cancel(){
       if(this.editMode){
                this.router.navigate(['../../listdata'], { relativeTo: this.route });
              }else{
              this.router.navigate(['../listdata'], { relativeTo: this.route });
            }    
    }

}