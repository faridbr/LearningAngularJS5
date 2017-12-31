import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinCaracters'
})
export class JoinCaractersPipe implements PipeTransform {

  transform(value: string, separator: string): any {
    if(value.length > 2)
      return Array.from(value).join(separator);
    return value;
  }

}
