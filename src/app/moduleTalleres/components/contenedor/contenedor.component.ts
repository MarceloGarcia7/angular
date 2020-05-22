import { Component, OnInit } from '@angular/core';
import { Taller } from './../../interfaces/talleres.interface';
import { TallerService } from './../../services/talleres.service';

@Component({
  selector: 'test-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.scss']
})
export class ContenedorComponent implements OnInit {

  public talleres: Taller[];

  constructor(private tallerService: TallerService) { }

  ngOnInit() {

    console.log('ContenedorComponent');
    
    
    this.talleres = this.tallerService.getTalleres();
    console.log(this.talleres);
    
  }

}
