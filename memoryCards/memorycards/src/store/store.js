import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

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

var colorArrayData = [
    {
        id: 1,
        color: "salmon",
        image: ""
    },
    {
        id: 2,
        color: "seagreen",
        image: ""
    },
    {
        id: 3,
        color: "sienna",
        image: ""
    },
    {
        id: 4,
        color: "brown",
        image: ""
    },
    {
        id: 5,
        color: "tan",
        image: ""
    },
    {
        id: 6,
        color: "red",
        image: ""
    },
    {
        id: 7,
        color: "yellow",
        image: ""
    },
    {
        id: 8,
        color: "purple",
        image: ""
    },
    {
        id: 9,
        color: "lawngreen",
        image: ""
    },
    {
        id: 10,
        color: "crimson",
        image: ""
    },
    {
        id: 11,
        color: "",
        image: ""
    },
    {
        id: 12,
        color: "",
        image: ""
    },
    {
        id: 13,
        color: "",
        image: ""
    },
    {
        id: 14,
        color: "",
        image: ""
    },
    {
        id: 15,
        color: "",
        image: ""
    }
];