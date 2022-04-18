import { Component, OnInit,Output , EventEmitter } from '@angular/core';
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
   githubSearchService:GithubSearchService;
   inputHider:boolean;
  constructor(githubSearchService:GithubSearchService) { 
    this.githubSearchService = githubSearchService;
  }
   @Output() toggler = new EventEmitter<boolean>()

   getBack(){
     this.inputHider = true;
     this.toggler.emit(this.inputHider)
   }
  ngOnInit(): void {
    this.consumer = this.githubSearchService.consumer;
    this.repositoryDetails = this.githubSearchService.repositoryData;
    
  }

}
