const userInputFlavors = prompt(
  "Please enter your froyo flavors seperated by commas. Thanks!",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const flavorArray = userInputFlavors.split(",");
// checking to see if the array now seperates the order
console.log(flavorArray);

//used to initilize an empty object from the array that was submitted upon user input
const flavorCounts = {};

//use a for...of loop to iterate through the previous input array and count each flavor.
//when a flavor is encountered for the first time is added as a property with a value of 1
//every time a property is encountered again its value is in increased by 1.
for (const flavor of flavorArray) {
  if (flavorCounts[flavor]) {
    flavorCounts[flavor]++;
  } else {
    flavorCounts[flavor] = 1;
  }
}

//just wanted to console the table to display the object, property, and associated values
console.table(flavorCounts);
console.log(flavorCounts);

function orderCount(anyFroyoOrder){
    const orders = {};

    for(const froyo of anyFroyoOrder) {
        if (orders[froyo]) {
            orders[froyo]++;
        } else {
            orders[froyo] = 1;
        }
    }
    return orders;
}
// console.log(flavorCounts);

//wanted to try what we did at the end of class with any 
const userInputFlavors2 = prompt(
    "Please enter your froyo flavors seperated by commas. Thanks!",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee,chocolate,chocolate"
  );
  
  const flavorArray2 = userInputFlavors2.split(",");
  console.log(orderCount(flavorArray2));
  console.log(orderCount(flavorArray));