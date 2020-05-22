import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Taller } from './../../interfaces/talleres.interface';



@Component({
  selector: 'app-cita-previa',
  templateUrl: './cita-previa.component.html',
  styleUrls: ['./cita-previa.component.scss']
})
export class CitaPreviaComponent implements OnInit {

  public step:number
  // @Input() taller: Taller;
  public taller: Taller[];

  constructor( private router: ActivatedRoute) {

    this.step = 1;
    
    this.router.queryParams.subscribe( ( params:any ) => {
      console.log(params);
      console.log(this.router);
      // this.taller = params;
    })
    console.log(this.router.snapshot.queryParams);
     
  }

  ngOnInit() {

    console.log('ngOnInit cita ', JSON.parse(localStorage.getItem("taller")) );
    this.taller = JSON.parse(localStorage.getItem("taller"));
    
  }
  
  previousStep( step: number ) {
    console.log(step);
    this.step -= 1;
  }

  nextStep( step: number ) {
    console.log(step);
    this.step += 1;
    
  }

  handleSubmit( form:any, valid: boolean) {

    console.log(form, valid);
    

  }

}
