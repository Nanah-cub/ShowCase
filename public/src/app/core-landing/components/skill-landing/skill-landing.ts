import {Component, OnDestroy, OnInit} from '@angular/core';
import {SkillService} from "../../services/skillSrv";
import {ISkill} from "./interfaces/objects/iSkill";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {NgProgressService} from "ngx-progressbar";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";


@Component({
  selector: 'app-skills',
  templateUrl: './skill-landing.html',
  styleUrls: ['./skill-landing.sass']
})
export class SkillLandingComponent implements OnInit {

  public filterBarItem: Array<IFilterBarItem> = [
    {title: 'All', onClick: this.changeSkill, active: true},
    {title: 'Programming Languages', onClick: this.changeSkill, active: false},
    {title: 'Frameworks', onClick: this.changeSkill, active: false}
  ]

  skillData: Array<ISkill> = [];
  public skillInspected: ISkill;

  constructor(private skillService: SkillService, private loadingBar:  NgProgressService)
   {


  }

  ngOnInit(): void {
    this.getskillData(null);
  }

  getskillData(skill: string) {
    this.loadingBar.start();
    this.skillService.getSkillData(skill).subscribe((data) => {
      console.log(data)
        this.skillData = data;
      this.loadingBar.done();
    });
  }

  createRange(num: number){
    var items: number[] = [];
    for(var i = 1; i <= num; i++){
      items.push(i);
    }
    return items;
  }

  handleCategoryChange(event: string){
    this.skillInspected = null;
    if(event==='All'){
      this.getskillData(null)
    } else if (event === 'Programming Languages'){
      this.getskillData('Programming Language')
    } else if (event === 'Frameworks'){
      this.getskillData('Framework')
    }
  }

  changeSkill(skill: number){


  }
  inspectSkill(skill: ISkill) {
    this.skillInspected= skill;
  }
}

