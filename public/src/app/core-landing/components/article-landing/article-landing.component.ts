import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-article-landing',
  templateUrl: './article-landing.component.html',
  styleUrls: ['./article-landing.component.sass']
})
export class ArticleLandingComponent implements OnInit {
  public routes: any = [{link: "functProg", title: "Functional Programming"},
    {link: "angular2", title: "Angular 2"}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
