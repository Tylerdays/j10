let mycity = {
    name: "Somewhere",
    population: 50000,
    capital:  true,
};

if (mycity.capital){
    console.log(`City Name: ${mycity[`name`]}, Population: ${mycity.population}` );
    //console.log(mycity.name, mycity.population);
} else {
    console.log("Not important enough");
}

mycity.comm = [{
    name : "Something",
    pop: 100
}];
console.log(mycity.comm);

mycity.comm.push("someplace");
mycity.comm.push("somespot");
mycity.comm.push("somehouse");
mycity.comm.push("somebuilding");
mycity.comm.push("somerset");

let i = 0;
while (i < mycity.comm.length){
    console.log(mycity.comm[i])
    i++;
}


