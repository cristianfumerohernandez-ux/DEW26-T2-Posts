
class Newspaper{
    name;
    price;
    #number = 0;
    district;
    constructor(name,price,district){
        this.name = name;
        this.price = price;
        this.district = district;
    }
    get summary(){
        return  `${this.name} publication number ${this.#number} of ${this.district}`;
    }

}


export { Newspaper };
export default Newspaper;
