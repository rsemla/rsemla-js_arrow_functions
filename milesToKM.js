inputMiles = 100

//Normal Syntax

const milesToKM = function(miles){
    return miles = 1.60934;
}

console.log(milesToKM(inputMiles))

//Arrow Function syntax

const milesToKM_arrow = (miles) => {return miles * 1.60934};

console.log(milesToKM_arrow(inputMiles))

// SHORT arrow function syntax

const milesToKM_short = miles => miles * 1.60934;

console.log(milesToKM_short(inputMiles))