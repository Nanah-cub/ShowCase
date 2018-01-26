

import {Routes, RouterModule} from "@angular/router";
import {HomeLandingComponent} from "./core-landing/components/home-landing/home-landing";
import {InfoLandingComponent} from "./core-landing/components/info-landing/info-landing";
import {GitLandingComponent} from "./core-landing/components/git-landing/git-landing";
import {SkillLandingComponent} from "./core-landing/components/skill-landing/skill-landing";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {WidgitModule} from "./widgit/widgit.module";
import {TemplateModule} from "./template/template.module";
import {CoreLandingModule} from "./core-landing/core-landing.module";
import {ResumeLandingComponent} from "./core-landing/components/resume-landing/resume-landing.component";
import {ArticleLandingComponent} from "./core-landing/components/article-landing/article-landing.component";
import {FuncProgArtComponent} from "./core-landing/components/article-landing/components/func-prog-art/func-prog-art.component";
import {NgxGistModule} from "ngx-gist/dist";
import {NgProgressModule} from "ngx-progressbar";
import {Angular2Component} from "./core-landing/components/article-landing/components/angular-2/angular-2.component";
import {PopoverModule} from "ngx-popover";

const routes: Routes = [
  {path: '', component: HomeLandingComponent},
  {path: 'info', component: InfoLandingComponent},
  {path: 'git', component: GitLandingComponent},
  {path: 'skills', component: SkillLandingComponent},
  {path: 'resume', component: ResumeLandingComponent},
  {path: 'articles', component: ArticleLandingComponent},
  {path: 'articles/functProg', component: FuncProgArtComponent},
  {path: 'articles/angular2', component: Angular2Component}
  ];



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WidgitModule,
    TemplateModule,
    CoreLandingModule,
    NgxGistModule,
    NgProgressModule,
    PopoverModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
