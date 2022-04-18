import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from '../github-search.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public show = false;
  public hide = true;
  public showCaseInput = false;
  public showCaseData =true;
   consumer:User;
   Username:string;
   githubSearchService:GithubSearchService;
  constructor(githubSearchService:GithubSearchService) { 
    this.githubSearchService = githubSearchService;
  }
   submituserName(){
     this.githubSearchService.getConsumerData(this.Username);
   }
   showConsumerInput(inputHider:boolean){
      this.showCaseInput = inputHider;
      this.showCaseData = false;
   }
   showInputField(){
     
   }
  //  showDetails(){
  //      this.show = !this.show;
  //  }
  ngOnInit(): void {
  }

}
