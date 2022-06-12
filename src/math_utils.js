

module.exports = {
    sum: ( ...args ) => {
        let sum = 0;

        for ( let num of args ) 
            sum += num;
        
        return sum;
    }
}