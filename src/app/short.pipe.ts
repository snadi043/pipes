import { Component, Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name: 'Short'
})
export class Short implements PipeTransform{
transform(value: any){
    if (value.length > 10) {
        return value.substr(0, 10) + ' ....';
    }
    else {
        return value;
    }
}
}