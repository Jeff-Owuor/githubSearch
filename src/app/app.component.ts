import { Component } from '@angular/core';
import { GithubSearchService } from './github-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'githubSearch';
  constructor(private githubSearchService:GithubSearchService){
    this.githubSearchService = githubSearchService;
  }
}
