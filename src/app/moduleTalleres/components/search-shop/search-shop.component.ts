import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, SkipSelf } from '@angular/core';
import { Router } from '@angular/router';
import { TallerService } from './../../services/talleres.service';
import { Taller } from './../../interfaces/talleres.interface';



@Component({
  selector: 'app-search-shop',
  templateUrl: './search-shop.component.html',
  styleUrls: ['./search-shop.component.scss']
})
export class SearchShopComponent implements OnInit, OnChanges {

  @Input() talleres: Taller[];
  @Output() taller: EventEmitter<string> = new EventEmitter();
  // public talleres: Taller[];
  public searchParam: string;
  public count: number = 0;

  constructor( private router: Router, private tallerService: TallerService ) {
    this.count += 1;
    console.log(this.count);
  }

  ngOnInit() {
    this.count += 1;
    console.log('ngOnInit', this.count);
    // this.filter = this.talleres;
    this.talleres = this.tallerService.getTalleres();
    console.log(this.talleres);
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes);
    
  }

  /* 
    asignamos el valor del parametro de filtro del Pipe
  */
  searchTalleres(value:string) {
    this.searchParam = value;
  }

  seleccionarTaller( taller: any) {
    console.log(taller.id);
    // this.taller.emit(taller);
    localStorage.setItem("taller", JSON.stringify(taller));

    this.router.navigate( ['home/reserva-taller/cita', taller.id], {queryParams: taller, skipLocationChange: false});
    // console.log(this.router);
  }

}
