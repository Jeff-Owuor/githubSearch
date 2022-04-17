import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repo } from './repo';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {
  consumer!:User;
  repository!:Repo;
  repositoryData = [];
  newConsumerData:any =[];
  constructor(private http:HttpClient) { 
    this.consumer = new User("",0,"","",new Date(),new Date(),"");
    this.repository = new Repo("","","",new Date(),"","","",new Date());
  }
}
