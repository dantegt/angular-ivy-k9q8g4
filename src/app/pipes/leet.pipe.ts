import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leet',
})
export class LeetPipe implements PipeTransform {
  transform(value: string): string {
    return value
      .replace(/a/gi, '4')
      .replace(/e/gi, '3')
      .replace(/l/gi, '1')
      .replace('G', '6')
      .replace(/o/gi, '0')
      .replace(/s/gi, '5')
      .replace(/t/gi, '7');
  }
}
