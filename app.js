let radius = 5;

const pi = 3.1415

const totalArea = pi * radius**2;

let plants = 20; //Using 100 plants exceeds capacity and raises the prune flag

let plantArea = 20*.8;

for(let i = 0; i < 4; i++) {
    try{

    
    console.log("Week: " + String(i));

    plants*=2;
    plantArea = plants*.8;

//Monitored
if(plantArea >= .5*(totalArea) && plantArea <= .8*(totalArea)){
    console.log("Approaching capacity");
    continue;
    //monitor
}
//Planted
else if(plantArea < .5*(totalArea)){
    console.log("Plant More");
    //plant more 
}


else if(plantArea > .8*(totalArea)){
    throw "Stop Planting";
}
    }

    catch(error){
        console.log(error);
    }
    

}