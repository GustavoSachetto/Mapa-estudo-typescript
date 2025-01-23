"use strict";
class House {
    numberOfdoors;
    set dors(quantity) {
        this.numberOfdoors = quantity;
    }
    get dors() {
        return this.numberOfdoors;
    }
}
const house = new House();
house.dors = 10;
console.log(house.dors);
