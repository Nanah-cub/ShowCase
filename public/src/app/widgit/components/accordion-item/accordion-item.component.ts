import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.sass']
})
export class AccordionItemComponent implements OnInit {


  @Input() isOpen: boolean;
  @Input() accordionTitle: string
  constructor() { }

  ngOnInit() {
  }

  toggleAccordion(){
    let open=this.isOpen;
    this.isOpen=!open;
  }
}
