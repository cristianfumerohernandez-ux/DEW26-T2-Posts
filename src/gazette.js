class Gazette{
    name;
    #number = 0;
    constructor(name){
        this.name = name;
        
    }
     get summary(){
        return  `${this.name} publication number ${this.#number}`;
    }
}
export { Gazette };
export default Gazette;
