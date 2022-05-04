// Create a car object with the items: Make, Model, Year, Milage, and Color. Then create 3 methods in the object; 
// A driveToWork method, driveAroundTheWorld method, and runErrands method. Each of these methods 
// should affect the car’s mileage adding to it each time and console logging the old mileage and the new 
// mileage.
// driveToWork = 33 miles
// driveAroundTheWorld = 24,000 miles
// runErrands = 30 miles 
// Example 1:
// car.driveToWork();
// Output: old mileage: 2000 | new mileagea: 2033
// Explanation: 2000 + 33 = 2033




const car = {
    make: 'Audi',
    model: 'e-tron GT',
    year:  2021,
    mileage: 88,
    color: 'black',


    drivetoWork() {
         console.log('Old mileage ' + this.mileage)
         
         this.mileage = this.mileage + 33
         
         console.log('New mileage ' + this.mileage)
        
    },

    driveAroundTheWorld() {
        console.log('Old mileage ' + this.mileage)

        this.mileage = this.mileage + 2044

        console.log('New mileage ' + this.mileage)
    },

    runErrands() {
        console.log('Old mileage ' + this.mileage)

        this.mileage = this.mileage + 2044

        console.log('New mileage ' + this.mileage)
    },


}

console.log(car.mileage);
car.drivetoWork();
car.driveAroundTheWorld();
car.driveAroundTheWorld();
car.driveAroundTheWorld();