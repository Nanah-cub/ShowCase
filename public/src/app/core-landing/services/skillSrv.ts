import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import {ISkill} from "../components/skill-landing/interfaces/objects/iSkill";


@Injectable()
export class SkillService {


  constructor(private http: Http) {

  }

  getSkillData(category: string): Observable<Array<ISkill>> {
    let httpString = '/service/skillset'
    if(category!=null){
      httpString=httpString+'?category='+category;
    }
    console.log(httpString)
    return this.http.get(httpString).map(response => <ISkill []>response.json());

  }






}




