import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data: any[], args: any): any {
    console.log('PIPE ', data.length, args);
    
    if(data && args.filter) {

      return data.filter( 
        (taller: any) => taller.postal.includes(args.filter) || taller.address.toLowerCase().includes( args.filter.toLowerCase() )
      )
    } else {
      return data;
    }

  }

}
