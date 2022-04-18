import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from '../github-search.service';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
   consumer:User;
   repositoryDetails = [];
  constructor(private githubSearchService:GithubSearchService) { 
    
  }

  ngOnInit(): void {
    this.consumer = this.githubSearchService.consumer;
    this.repositoryDetails = this.githubSearchService.repositoryData;
  }

}
