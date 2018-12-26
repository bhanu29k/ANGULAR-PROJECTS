import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    var result="";
    var temp=value.split(" ");
    for(var i=0;i<temp.length-1;i++)
    {
      result+=temp[i].charAt(0)+". ";
    }
    result+=temp[temp.length-1];
    if(args.length==1)
    {
    if(args[0]=='U')
    {
      result=result.toUpperCase();
    }
    else  result=result.toLowerCase(  );
    }
  
  return result;
}
}
