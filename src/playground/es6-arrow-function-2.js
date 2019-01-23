const add = (a,b) => {
    //console.log(arguments)
    return a+b;
};

//console.log(add(55,21));

const multiplier = {
    numbers: [1, 2, 5, 10],
    multiplyBy : 1.5,
    multiply(){
        return this.numbers.map((numb) => numb*this.multiplyBy);
    }
}
console.log(multiplier.multiply());