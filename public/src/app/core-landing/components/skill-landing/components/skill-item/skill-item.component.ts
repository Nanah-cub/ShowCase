import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ISkill} from "../../interfaces/objects/iSkill";

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.sass']
})
export class SkillItemComponent implements OnInit {

  @Output() skillEmit: EventEmitter<ISkill> = new EventEmitter();
  @Input() skill: ISkill

  constructor() {
  }

  ngOnInit() {
  }

  inspectCourse(skill: ISkill) {
    this.skillEmit.emit(skill);
  }


}


