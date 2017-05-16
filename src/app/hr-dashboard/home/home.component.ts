import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amiti-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 106], label: 'Total Link Sent'},
    {data: [28, 48, 40, 19, 86], label: 'Exam Given'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
 // Pie
    public pieChartLabels:string[] = ['Total Link Sent', 'Total Link Active', 'Total Exam Given'];
    public pieChartData:number[] = [500, 100, 200];
    public pieChartType:string = 'pie';
}
