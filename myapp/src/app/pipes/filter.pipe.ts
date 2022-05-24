import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any,filtereString: String){
  if(value.length === 0 || filtereString === ''){
    return value;
  }
  const products =[];
  for (const product of value){
    if(product['name'] === filtereString){
      products.push(product)
    }
  }
  return products;
  }

}
