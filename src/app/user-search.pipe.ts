import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userSearch',
  pure:false
})
export class UserSearchPipe implements PipeTransform {

  transform(users:any[],searchTerm:string): any {
    if(!searchTerm){
      return users;
    }
    return users.filter(({first_name, last_name, email})=>{
      let terms = [first_name, last_name, email];
      return terms.some(term=>term.includes(searchTerm));
    });
  }
}
