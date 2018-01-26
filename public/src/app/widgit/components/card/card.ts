import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  styleUrls: ['./card.sass']
})
export class CardComponent {
  @Input('title') title: string;
  @Input('imageLoc') imageLoc: string;
  @Input('color') color: string;
  @Input('chosenCategory') chosenCategory: String



}
