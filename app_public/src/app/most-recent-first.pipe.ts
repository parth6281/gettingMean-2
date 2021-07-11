import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostRecentFirst'
})
export class MostRecentFirstPipe implements PipeTransform {

  private compare(a: any, b: any): any {
    return a.createdOn > b.createdOn ? -1 : 1;
  }

  transform(reviews: any[]): any[]{
    if(reviews && reviews.length > 0) {
      return reviews.sort(this.compare);
    }
    else return [];
  }

}
