class PaidPost {
    name;
    price;
    #number = 0;
    constructor(name,price){
       this.name = name  
       this.price = price
    }

     get summary(){
        return  `${this.name} publication number ${this.#number}`;
    }
}

export { PaidPost };
export default PaidPost;
