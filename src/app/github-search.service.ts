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
      publicRepos:number,
      login:string,
      avatarUrl:string,
      createdAt:Date,
      updatedAt:Date,
      name:string, 
      fullName:string,
      htmlUrl:string
    }
    let thePromise = new Promise<void>((resolve,reject)=>{
      this.http.get<apiResponse>("https://api.github.com/users/"+userName)
      .toPromise()
      .then((response:any) => {
       this.consumer.bio = response.bio;
       this.consumer.publicRepos= response.publicRepos;
       this.consumer.login = response.login;
       this.consumer.avatarUrl = response.avatarUrl;
       this.consumer.createdAt = response.createdAt;
       this.consumer.updatedAt = response.updatedAt;
       this.consumer.htmlUrl = response.htmlUrl;
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
          this.newConsumerData = new Repo(response[j].name,response[j].fullName,response[j].details,response[j].updatedAt,response[j].htmlUrl,response[j].cloneUrl,response[j].language,response[j].createdAt);
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
