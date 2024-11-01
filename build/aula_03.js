"use strict";
let data = {
    age: 18,
    status: true,
    name: "Gustavo",
    talk: () => {
        console.log("Olá meu nome é " + self.name);
    }
};
data.age;
data.talk();
data.name;
var days;
(function (days) {
    days[days["sunday"] = 1] = "sunday";
    days[days["monday"] = 2] = "monday";
    days[days["tuesday"] = 3] = "tuesday";
    days[days["wednesday"] = 4] = "wednesday";
    days[days["thursday"] = 5] = "thursday";
    days[days["friday"] = 6] = "friday";
    days[days["saturday"] = 7] = "saturday";
})(days || (days = {}));
var colors;
(function (colors) {
    colors["dark"] = "#000";
    colors["light"] = "#fff";
    colors["gray"] = "#0000";
    colors["blue"] = "#00f";
})(colors || (colors = {}));
var users;
(function (users) {
    users[users["PUBLIC"] = 0] = "PUBLIC";
    users[users["ADMIN"] = 1] = "ADMIN";
    users[users["SUPER"] = 2] = "SUPER";
})(users || (users = {}));
days.friday;
days['friday'];
days[1];
colors.blue;
colors['blue'];
users.ADMIN;
users.SUPER;
