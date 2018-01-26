import {Component, OnInit} from '@angular/core';
import chartJs from 'chart.js';
import {Observable} from 'rxjs/Observable';
import {GitService} from "../../services/gitSrv";
import {NgProgressService} from "ngx-progressbar";


@Component({
  selector: 'app-git',
  templateUrl: './git-landing.html',
  styleUrls: ['./git-landing.sass']
})
export class GitLandingComponent implements OnInit {
  repos: Array<any> = [];


  constructor(private gitService: GitService, private loadingBar:  NgProgressService) {

  }


  private createChart(repoAny: any) {
    if (repoAny !== null) {
      const canvas = <HTMLCanvasElement> document.getElementById('commitChart');
      const ctx = canvas.getContext('2d');
      const myChart = new chartJs.Chart(ctx, {
        type: 'bar',
        data: {
          labels: repoAny.map(data => data.name),
          datasets: [{
            label: '# of Commits',
            data: repoAny.map(data => data.commits.length),
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                autoSkip: false
              }
            }],
            xAxes: [{
              ticks: {
                autoSkip: false
              }
            }]
          }
        }
      });
    }
  }

  ngOnInit() {
    this.getGit();

  }

  private getCommits(data: Array<any>) {
    let count = 0;
    Observable.forkJoin(data.map(x => {
      return this.gitService.getCommit(x.name).map(y => {

        return {
          data: y,
          cnt: data.indexOf(x)
        };
      });
    })).subscribe(values => {
      const x = values.map( value => {
        data[value.cnt].commits = value.data;
        return data[value.cnt];
      });
      this.repos = x;
      this.createChart(this.repos);

    });
  }

  getGit() {
    this.loadingBar.start()
    this.gitService.getGitData().subscribe((data) => {
       this.getCommits(data);
       this.loadingBar.done();
    });
  }

}


