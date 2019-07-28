class People {
    //static id = 100;SyntaxError: 
    static getPopulation() {
        console.log('16e');
    }
}
People.id = 100;
console.log(People.getPopulation());//16e
console.log(People.id);//100

