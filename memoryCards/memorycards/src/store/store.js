import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var colorArrayData = [
    {
        colorID: 1,
        color: "salmon",
        image: ""
    },
    {
        colorID: 2,
        color: "seagreen",
        image: ""
    },
    {
        colorID: 3,
        color: "sienna",
        image: ""
    },
    {
        colorID: 4,
        color: "brown",
        image: ""
    },
    {
        colorID: 5,
        color: "tan",
        image: ""
    },
    {
        colorID: 6,
        color: "red",
        image: ""
    },
    {
        colorID: 7,
        color: "yellow",
        image: ""
    },
    {
        colorID: 8,
        color: "purple",
        image: ""
    },
    {
        colorID: 9,
        color: "lawngreen",
        image: ""
    },
    {
        colorID: 10,
        color: "crimson",
        image: ""
    },
    {
        colorID: 11,
        color: "",
        image: ""
    },
    {
        colorID: 12,
        color: "",
        image: ""
    },
    {
        colorID: 13,
        color: "",
        image: ""
    },
    {
        colorID: 14,
        color: "",
        image: ""
    },
    {
        colorID: 15,
        color: "",
        image: ""
    }
];

export const store = new Vuex.Store({
    state: {
        numOfCardsBeginning: 0,
        numOfCardsCurrent: 0,
        numOfClicks: 0,
        colorArray: colorArrayData
    }
    // Mutations inside store
    // 1. updateNumOfClicks - Increment numOfClicks by 1
    // 2. updateNumOfCardsCurrent - Decrement numOfCardsCurrent by 1
    // 3. isNumOfCardsCurrentZero - return true or false depending upon the value of numOfCardsCurrent
    // 4. updateNumOfCardsBeginning - 

    // Getters inside store
    // 1. getNumOfCardsBeginning
    // 2. getNumOfClicks
    // 3. getNumOfCardsCurrent
    // 4. getScore - (numOfCardsBeginning - numOfCardsCurrent)
});

