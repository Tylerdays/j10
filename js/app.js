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
},
]
console.log(mycity.comm);


// Pushing an object
mycity.comm.push({
            name : "Something",
            pop: 100
        },
);
mycity.comm.push({
            name : "somespot",
            pop: 1006
        },
);
mycity.comm.push({
            name : "somehouse",
            pop: 1007
            },
);
mycity.comm.push({
            name : "Somebuilding",
            pop: 1009
        },
);

mycity.comm.push({
    name : "somestore",
    pop: 1000
},);


//good reference for how to get into difficult objects

let i = 0;
console.log("Large Communities")
while (i < mycity.comm.length){
    if (mycity.comm[i].pop >= 100){
        console.log(mycity.comm[i].name)
    }
    i++;
}



var randomNumbers = [1, 2, 3, 4, 5]

randomNumbers.push(6)
randomNumbers.push(7)

let i =0;
console.log("number counter")
while (randomNumbers.length)  {

}