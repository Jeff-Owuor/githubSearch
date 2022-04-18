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
  repositoryData:any = [];
  newConsumerData:any=[];
  constructor(private http:HttpClient) { 
    this.consumer = new User("",0,"","",new Date(),new Date(),"");
    this.repository = new Repo("","","",new Date(),"","","",new Date());
  }

  getConsumerData(userName:string){
    this.repositoryData.length = 0;

    interface apiResponse{
      bio:string,
      public_repos:number,
      login:string,
      avatar_url:string,
      created_at:Date,
      updated_at:Date,
      name:string, 
      full_name:string,
      html_url:string
    }
    let thePromise = new Promise<void>((resolve,reject)=>{
      this.http.get<apiResponse>("https://api.github.com/users/"+userName)
      .toPromise()
      .then((response:any) => {
       this.consumer.bio = response.bio;
       this.consumer.public_repos= response.public_repos;
       this.consumer.login = response.login;
       this.consumer.avatar_url = response.avatar_url;
       this.consumer.created_at = response.created_at;
       this.consumer.updated_at = response.updated_at;
       this.consumer.html_url = response.html_url;
       resolve();
      },
      error=>{
        reject(error);
      }
      )
      this.http.get<any>("https://api.github.com/users/"+userName+ "/repos" )
      .toPromise()
      .then(response=>{
        for(let j=0;j<response.length;j++){
          this.newConsumerData = new Repo(response[j].name,response[j].full_name,response[j].description,response[j].updated_at,response[j].html_url,response[j].clone_url,response[j].language,response[j].created_at);
          this.repositoryData.push(this.newConsumerData);
        }
        resolve();
      },
      error =>{
        reject(error);
      }
      )
    })
    return thePromise;
  }
}
