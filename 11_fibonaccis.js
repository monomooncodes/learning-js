const  fibonacci =(n)=>{
    if (n<=0){
        return "number is negative"
    }
    else if (n===1){
    return [0]
}

else if (n===2){
    return [0,1]
    
}

else{
    const series = [0,1]
    for (let i = 2; i<n; i++) {
        const nextNumber = series[i-1]+series [i-2]
        series.push(nextNumber)    
    }
    return series;
}
};

const num = 10;
const fibonacciSeries = fibonacci(num);
console.log(fibonacciSeries);

