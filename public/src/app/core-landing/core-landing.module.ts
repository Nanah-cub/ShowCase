import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeLandingComponent} from "./components/home-landing/home-landing";
import {SkillLandingComponent} from "./components/skill-landing/skill-landing";
import {SkillService} from "./services/skillSrv";
import {InfoLandingComponent} from "./components/info-landing/info-landing";
import {GitService} from "./services/gitSrv";
import {GitLandingComponent} from "./components/git-landing/git-landing";
import {WidgitModule} from "../widgit/widgit.module";
import { ResumeLandingComponent } from './components/resume-landing/resume-landing.component';
import {SkillItemComponent} from "./components/skill-landing/components/skill-item/skill-item.component";
import {SkillItemListComponent} from "./components/skill-landing/components/skill-item-list/skill-item-list.component";
import { ArticleLandingComponent } from './components/article-landing/article-landing.component';
import { FuncProgArtComponent } from './components/article-landing/components/func-prog-art/func-prog-art.component';
import {NgxGistModule} from 'ngx-gist/dist';
import {NgProgressModule} from "ngx-progressbar";
import { Angular2Component } from './components/article-landing/components/angular-2/angular-2.component';
import {PopoverModule} from "ngx-popover";


@NgModule({
  imports: [
    WidgitModule,
    CommonModule,
    NgxGistModule,
    PopoverModule,
    NgProgressModule
  ],
  declarations: [SkillItemListComponent, SkillItemComponent,HomeLandingComponent, SkillLandingComponent, InfoLandingComponent, GitLandingComponent, ResumeLandingComponent, ArticleLandingComponent, FuncProgArtComponent, Angular2Component],
  providers: [SkillService, GitService]
})
export class CoreLandingModule { }
