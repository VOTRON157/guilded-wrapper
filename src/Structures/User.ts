import { APIUser, UserType } from "../guilded-types/User";

export default class User {
    constructor(
        readonly data: APIUser
        ){}
        
    get createdAt() {
        return new Date(this.data.createdAt)
    }

    get avatar(){
        return this.data.avatar
    }
    get username(){
        return this.data.name
    }
    get id(){
        return this.data.id
    }
    get banner(){
        return this.data.banner
    }
    get isBot(){
        if(this.data.type == UserType.Bot) return true
        else if(this.data.type == UserType.User) return false
    }
}

export class ClientUser extends User {
    
}