"use strict";
function sum(num1, num2) {
    return num1 + num2;
}
const sub = (num1, num2) => {
    return num1 + num2;
};
function user(name = 'Gustavo', id = null) { }
function mail(from, to) { }
function fsum(...nums) {
    return nums.reduce((previus, current) => previus + current, 0);
}
fsum(10, 20, 30, 40, 50, 60);
