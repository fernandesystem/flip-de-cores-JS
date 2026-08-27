"use strict";

const changeBTN = document.querySelector(".generate");

const colorTitle = document.querySelector ("#color-tag")

const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

let hexCode = "";

let lastCode = "";

const generateColor = function () {

    do {
        hexCode = "";

        for (let i = 0; i < 6;i++) {

            hexCode += hexArr[Math.floor(Math.random() * hexArr.length)];
    }
    
    }while (hexCode === "" || hexCode === lastCode)
        
    }

}

