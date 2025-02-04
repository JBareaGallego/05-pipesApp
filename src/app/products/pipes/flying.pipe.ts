import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'CanFly',
  standalone: false,
})
export class FlyingPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? "Flyer" : "Non flyer" ;
  }

}
