import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.sass']
})
export class FilterBarComponent implements OnInit {

  @Input() filterBarItem: Array<IFilterBarItem> = [];
  @Output() onCategoryChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  changeFilter(title: string) {
    this.filterBarItem.forEach(x=> x.active = false);
    const item: IFilterBarItem = this.filterBarItem.filter(x=>x.title===title)[0];
    item.active = true;
    this.onCategoryChange.emit(item.title);
  }

  ngOnInit() {

  }

}
