import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skillLevel'
})
export class SkillLevelPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    if(value>=0 && value<4) return "Beginner"
    else if(value>=4 && value<6) return "Intermediate"
    else if(value>=6 && value<9) return "Expert"
    else return "Master"
  }

}
