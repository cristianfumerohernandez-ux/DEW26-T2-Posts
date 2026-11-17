import User from "./user.js";

class Post {
    name;
    #number = 0;
    #subscribers = [];
    constructor(name){
        this.name= name;
    }
    get summary(){
        return  `${this.name} publication number ${this.#number}`;
    }
    getSubscribers(){
        return this.#subscribers.map(subscribers => subscribers.name).join(", ")
    }
    attach(User){
        if(User  this.#subscribers){

        }
    }



}

export { Post };
export default Post;
