/*Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
Print the Object that’s returned to make sure all the information was stored correctly. */

// function car(manufacturer: string, model:string, ...additionalFeatures:any[])
// {
//     let Cars = {
//         manufacturer,
//         model,
//         ...Object.fromEntries(additionalFeatures)
//     }
//     return Cars;
// }
// let carDetails = car("Ferrai" , "F8 Tributo", ["color", "red"] , ["Rim" , "Rounded"])
// console.log(carDetails);
