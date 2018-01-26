import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ISkill} from "../../interfaces/objects/iSkill";


@Component({
  selector: 'app-skill-item-list',
  templateUrl: './skill-item-list.component.html',
  styleUrls: ['./skill-item-list.component.sass']
})
export class SkillItemListComponent implements OnInit {

  @Output() skillEmit: EventEmitter<ISkill> = new EventEmitter();

  @Input() skills: Array<ISkill>;



  constructor() { }

  ngOnInit() {
  }

  inspectSkill(skill: ISkill) {
    this.skillEmit.emit(skill);
  }

}
