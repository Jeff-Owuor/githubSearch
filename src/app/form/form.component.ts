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
   consumer:User;
   Username:string;
   githubSearchService:GithubSearchService;
  constructor() { }
   submituserName(){
     this.githubSearchService.getConsumerData(this.Username);
   }
  ngOnInit(): void {
  }

}
