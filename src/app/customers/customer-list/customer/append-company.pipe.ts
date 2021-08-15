import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'appendCompany'
})
export class AppendCompanyPipe implements PipeTransform {

  transform (value: any, name: string = 'company'): string {
    return `${value}#${name}`;
  }
  
}
