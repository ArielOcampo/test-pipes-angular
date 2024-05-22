import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {
  transform(fly: boolean): 'Vuela' | 'No vuela' {
    return fly ? 'Vuela' : 'No vuela';
  }
}
