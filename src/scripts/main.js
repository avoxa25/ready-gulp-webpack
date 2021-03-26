/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

class DickMan {
    constructor(name, dickLength) {
        this.name = name;
        this.dickLength = dickLength;
    }
}
function suckDick(sucker, dickMan) {
    console.log(`${sucker} sucks ${dickMan.name}'s dick. It is ${dickMan.dickLength} cm.`);
}
const trump = new DickMan('Trump', 42);
suckDick('Biden', trump);

/******/ })()
;