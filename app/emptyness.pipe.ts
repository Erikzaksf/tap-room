import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';


@Pipe({
  name: "emptyness",
  pure: false
})


export class EmptynessPipe implements PipeTransform {

  transform(input: Keg[], desiredEmptyness){
    var output: Keg[] = [];
    if(desiredEmptyness === "fullKegs") {
      for (var i = 0; i < input.length; i++) {
      if (input[i].pintsLeft > 1) {
        output.push(input[i]);
      }
    }
    return output;
  } else if (desiredEmptyness === "emptyKegs"){
    for (var i = 0; i < input.length; i++){
      if (input[i].pintsLeft < 1){
       output.push(input[i]);
      }
    }
    return output;
  } else {
    return input;
  }

}
