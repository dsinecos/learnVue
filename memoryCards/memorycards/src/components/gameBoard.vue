<template>
    <div class="col-xs-12 cardContainer">
        <h3>Game Board</h3>

        <memorycards-card v-for="card in gameBoardArray" @click.native="cardClicked(card.colorID, card.cardID)" class="card" :class="{disappearCard: !card.isCardActive}" :style="[ card.isColorActive ? {'background-color': card.color} : {'background-color': 'gray'} ]">
        </memorycards-card>

    </div>
</template>

<script>
    import gameCard from './gameCard.vue';
    import { eventBus } from '../main';

    export default {
        data: function () {
            return {
                lastClickedColorID: 0,
                gameBoardArray: []
            }
        },
        components: {
            'MemorycardsCard': gameCard
        },
        methods: {
            testClick: function () {
                //console.log("Card Clicked");
            },
            setupGame: function () {
                var self = this;
                //console.log(self.$store.state.colorArray);
                self.$store.state.numOfCardsCurrent = self.$store.state.numOfCardsBeginning;
                self.$store.state.numOfClicks = 0;

                var numOfCardsBeginning = Number(self.$store.state.numOfCardsBeginning);

                var colorArray = JSON.parse(JSON.stringify(self.$store.state.colorArray));
                var partialGameBoardArray = colorArray.slice(0, numOfCardsBeginning);
                var partialGameBoardArrayCopy = JSON.parse(JSON.stringify(partialGameBoardArray));

                var gameBoardArray = partialGameBoardArray.concat(partialGameBoardArrayCopy);
                var cardID = 1;

                gameBoardArray.forEach(function (card) {
                    card.cardID = cardID;
                    cardID++;
                    card.isCardActive = true;
                    card.isColorActive = false;
                });

                var shuffledGameBoardArray = shuffleArray(gameBoardArray);

                this.gameBoardArray = shuffledGameBoardArray;

                console.log(this.gameBoardArray);

                /*
                var colorArray = self.$store.state.colorArray.map(function (currentElement) {
                    return currentElement;
                });

                //console.log(colorArray);

                //console.log("Value from the vuex store : " + self.$store.state.numOfCardsBeginning);


                // Create an Array by extracting the defined number of items from colorArray

                var gameBoardArray = colorArray.slice(0, numOfCardsBeginning);
                //console.log("Length of gameBoardArray after slicing from colorArray : " + gameBoardArray.length);
                var gameBoardArrayCopy = gameBoardArray.map(function(card) {
                    return card;
                });
                gameBoardArray = gameBoardArray.concat(gameBoardArrayCopy);
                //console.log("Length of gameBoardArray after concat operation : " + gameBoardArray.length);
                //console.log(gameBoardArray);


                var cardID = 1;

                gameBoardArray.forEach(function (currentObject, index) {

                    //console.log("Current object");
                    //console.log(currentObject);
                    //console.log("Initial cardID :" + cardID);
                    currentObject.cardID = cardID - numOfCardsBeginning;
                    //console.log("Current Object CardID : " + currentObject.cardID);
                    cardID++;
                    //console.log("CardID after increment :" + cardID);

                    currentObject.isCardActive = true;
                    currentObject.isColorActive = false;

                    //console.log("Printing the complete object ");
                    //console.log(currentObject);
                });
                //console.log("------------------------------------");

                //console.log(gameBoardArray);

                var shuffledGameBoardArray = shuffleArray(gameBoardArray);

                this.gameBoardArray = shuffledGameBoardArray;

                //console.log(shuffledGameBoardArray);

                */

                function shuffleArray(inputArrayForShuffling) {
                    var currentIndex = inputArrayForShuffling.length, temporaryValue, randomIndex;

                    // While there remain elements to shuffle...
                    while (0 !== currentIndex) {

                        // Pick a remaining element...
                        randomIndex = Math.floor(Math.random() * currentIndex);
                        currentIndex -= 1;

                        // And swap it with the current element.
                        temporaryValue = inputArrayForShuffling[currentIndex];
                        inputArrayForShuffling[currentIndex] = inputArrayForShuffling[randomIndex];
                        inputArrayForShuffling[randomIndex] = temporaryValue;
                    }

                    return inputArrayForShuffling;
                }

                /*
                gameBoardArray.forEach(function(currentObject) {
                    //console.log("\n");
                    //console.log("-------------------------------------------------------");
                    //console.log("CardID for the current object : " + currentObject.cardID);
                });

                self.gameBoardArray = gameBoardArray;
                //console.log(self.gameBoardArray);
                //console.log(this.$store.state.colorArray);

                */

                // Initialize the gameBoardArray using numOfCardsBeginning and colorArray (from store)
                // Extract the defined number of items from the colorArray (colorID and color)
                // Duplicate the array
                // Add properties to the objects in the array (cardID, isCardActive, isColorActive)
                // Shuffle the array
                // Assign the shuffled array to gameBoardArray

            },
            cardClicked: function (colorID, cardID) {
                console.log(this.gameBoardArray);

                //console.log("Inside cardClicked");
                var self = this;
                // updateNumOfClicks
                self.$store.state.numOfClicks++;
                // checkForMatchAgainstColorID
                function checkForMatchAgainstColorID() {
                    //console.log("Inside checkForMatchAgainstColorID");
                    //console.log(colorID);
                    if (colorID === self.lastClickedColorID) {
                        return true;
                    } else {
                        return false;
                    }
                }

                function toggleIsCardActiveStatus() {
                    //console.log("Inside toggleIsCardActiveStatus");
                    self.gameBoardArray.forEach(function (card) {
                        if (card.colorID === colorID) {
                            card.isCardActive = false;
                        }
                    });
                }

                function isNumOfCardsCurrentZero() {
                    //console.log("Inside isNumOfCardsCurrentZero");
                    //console.log(self.$store.state.numOfCardsCurrent === 0);

                    if (self.$store.state.numOfCardsCurrent === 0) {
                        return true;
                    } else {
                        return false;
                    }
                }

                function toggleIsColorActiveStatus() {
                    //console.log("Inside toggleIsColorActiveStatus");
                    //console.log("CardID : " + cardID);
                    self.gameBoardArray.forEach(function (card) {
                        //console.log(card.cardID === cardID);
                        if (card.cardID === cardID) {
                            card.isColorActive = true;
                        } else {
                            card.isColorActive = false;
                        }
                    })
                }

                if (checkForMatchAgainstColorID()) {
                    //console.log("Inside if checkforMatch...");
                    toggleIsCardActiveStatus();
                    self.lastClickedColorID = 0;
                    self.$store.state.numOfCardsCurrent--;
                    isNumOfCardsCurrentZero();
                    if (isNumOfCardsCurrentZero()) {
                        //console.log("Inside if isNumOfCards...");
                        alert('Game over: Clicks taken - ' + self.$store.state.numOfClicks + ' Score - ' + (self.$store.state.numOfCardsBeginning - self.$store.state.numOfCardsCurrent));
                        self.setupGame();
                    }
                } else {
                    toggleIsColorActiveStatus();
                    self.lastClickedColorID = colorID;
                }
                // If yes - Change isCardActive status (Search for cardID against the current colorID)
                //          Update lastClickedColorID (To zero)
                //          Update numOfCardsCurrent (Decrement by 1 using a mutation)
                //          Check if isNumOfCardsCurrentZero = true (Using a getter)
                //          If true - alert('Game over')
                //                  - call setupGame(numOfCardsBeginning) (Using this.setupGame())
                // If no - Update isColorActive status (Change isColorActive to false for all then to true for the cardID sent in the argument)
                //         Update lastClickedColorID (to colorID sent in the argument)
            }
        },
        created: function () {
            // Will this execute if it is mounted with the created lifecycle hook. If not then which lifecycle hook to be used?
            var self = this;

            eventBus.$on('setupNewGame', function (numOfCardsBeginning) {
                self.setupGame(numOfCardsBeginning);
            });
        }
    }

</script>

<style>
    .cardContainer {
        max-width: 600px;
        padding: 15px;
        margin: auto;
    }

    .disappearCard {
        visibility: hidden;
        /*display: none;*/
    }
</style>