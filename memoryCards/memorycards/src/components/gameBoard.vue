<template>
    <div class="cardContainer">
        <h3>Game Board</h3>
        <memorycards-card v-for="card in gameBoardArray" v-bind:style="{ 'background-color': card.color }" v-bind:class="{ card: true, showGray: true }"
            v-on:click="cardClicked(card.id)"></memorycards-card>
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
            setupGame: function (numOfCardsBeginning) {
                var self = this;

                console.log("Inside setup game : " + numOfCardsBeginning);
                // Initialize the gameBoardArray using numOfCardsBeginning and colorArray (from store)
                // Extract the defined number of items from the colorArray (colorID and color)
                // Duplicate the array
                // Add properties to the objects in the array (cardID, isCardActive, isColorActive)
                // Shuffle the array
                // Assign the shuffled array to gameBoardArray

            },
            cardClicked: function (colorID, cardID) {
                // updateNumOfClicks
                // checkForMatchAgainstColorID
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
</style>