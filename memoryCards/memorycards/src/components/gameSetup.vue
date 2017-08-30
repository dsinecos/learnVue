<template>
    <div class="col-xs-12">
        <h3>Game Setup</h3>
        <div class="form-group">
            <label for="sel1">Select list (select one):</label>

            <select class="form-control" id="selectNumOfCardsBeginning" v-model="numOfCardsBeginning">
                <option v-for="n in 15">{{ n }}</option>
            </select>

            <button v-on:click="newGame(numOfCardsBeginning)">Begin Game with {{ numOfCardsBeginning }} cards</button>

        </div>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default {
        data: function () {
            return {
                numOfCardsBeginning: this.$store.state.numOfCardsBeginning
            }
        },
        methods: {
            newGame: function (numOfCardsBeginning) {
                this.$store.state.numOfCardsBeginning = numOfCardsBeginning;
                this.$store.state.numOfCardsCurrent = numOfCardsBeginning;
                eventBus.$emit('setupNewGame');
            }
        }

    }

</script>

<style>

</style>