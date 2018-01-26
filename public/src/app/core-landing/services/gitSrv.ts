import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';


@Injectable()
export class GitService {


  constructor(private http: Http) {

  }

  getGitData(): Observable<any> {

    return this.http.get('https://api.github.com/users/Nanah-Cub/repos').map(response => response.json());

  }

  getCommit(repository: string): Observable<any> {
    let url: string;
    url = 'https://api.github.com/repos/Nanah-Cub/' + repository + '/commits';
    return this.http.get(url).map(response => response.json());




  }

  getSortUpdate(object: any, orderByValue: string) {
    object.sort(function(a, b) {
      if (a[orderByValue] < b[orderByValue]) {
        return 1;
      } else if (a[orderByValue] > b[orderByValue]){
        return -1;
      } else {
        return 0;
      }
    });
    return object;
  }

}




