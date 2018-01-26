import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from "./components/card/card";
import { AccordionItemComponent } from './components/accordion-item/accordion-item.component';
import {SkillLevelPipe} from "./pipes/skill-level.pipe";
import {ArticleNavComponent} from "./components/article-nav/article-nav";
import {RouterModule} from "@angular/router";
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [CardComponent, AccordionItemComponent, SkillLevelPipe, ArticleNavComponent, FilterBarComponent],
  exports: [CardComponent, AccordionItemComponent, ArticleNavComponent, FilterBarComponent]
})
export class WidgitModule { }
