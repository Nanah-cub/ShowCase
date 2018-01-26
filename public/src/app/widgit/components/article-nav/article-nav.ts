import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-article-nav',
  templateUrl: './article-nav.html',
  styleUrls: ['./article-nav.sass']
})
export class ArticleNavComponent {
  @Input() routes: Array<{link: string, title: string}>;

}
