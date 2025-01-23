"use strict";
var Sports;
(function (Sports) {
    class Basketball {
    }
    class Soccer {
    }
    Sports.Soccer = Soccer;
    class Race {
        extra;
        constructor() {
            this.extra = new Basketball();
        }
    }
    Sports.Race = Race;
})(Sports || (Sports = {}));
const sport1 = new Sports.Soccer();
const sport2 = new Sports.Race();
