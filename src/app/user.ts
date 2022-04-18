export class User {
    fullName: any;
    constructor(public bio:string, public publicRepos:number,public login:string, public avatarUrl:string, public createdAt:Date, public updatedAt:Date, public htmlUrl:string){}
}
