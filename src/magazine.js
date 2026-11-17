

class Magazine{
    name;
    price;
    #number = 0;
    topic;
    constructor(name,price,topic){
        this.name = name;
        this.price = price;
        this.topic = topic;
    }
    get summary(){
        return  `${this.name} publication number ${this.#number} of ${this.topic}`;
    }

}


export { Magazine };
export default Magazine;