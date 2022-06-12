//06/12/22
//--------------------------------------

//:::::::::::::::::::::::::::::::::::::::::The Let Keyword::::::::::::::::::::::::::::::
//Allows 

//:::::::::::::::::::::::::::::::::::For...Of..Loop:::::::::::::::::::::::::::::::::::::::::::::::::::
//ex.1

// let cars = ['Volvo', 'BMW', 'Audi'];

// for (x of cars){
//     if(x === "Volvo"){
//         console.log(`I Wants a Red ${x}`);
//     }else{
//         console.log(`,But I want a Black ${x}`)
//     }
// }

//:::::::::::::::::::::::::::::::::::::::::Map for Createing Objects:::::::::::::::::::::::::::::::::::::
//ex.1)
const map1 = new Map();
console.log(map1);

//ex.2)
const map2 = new Map();
map2.set("Car", "Toyota Camry");
map2.set("Home", "Atlanta, GA");
map2.set("Occpation", "Software Engineer");

console.log(map2);

const map3 = new Map();
console.log(`this is map3: ${map3}`);

const map4 = new Map();
console.log(`this is mape4: ${map4}`);

const map5 = new Map();
console.log(`this is map5: ${map5}`);

const map6 = new Map();
console.log(`this is map6: ${map6}`);

const map7 = new Map();
console.log(`this is map7: ${map7}`);

const map8 = new Map();
console.log(`this is map8: ${map8}`);

const map9 = new Map();
console.log(`this is map9: ${map9}`);

const map10 = new Map();
console.log(`this is map10: ${map10}`);

//----Inserting information inside of a map-----

map10.set('name', {make: "ford", model: "explorer"});
console.log(map10);

//---Accessing Elements inside of a map----
const map11 = new Map();
map11.set('name', {first: "Gabriel", last: "Jefferson"});
console.log(map11.get('name'));

map11.set('House', {location: "Atlanta", type: "Apartment"});
console.log(map11.get('House'));









