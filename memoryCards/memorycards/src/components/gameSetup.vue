<template>
    <div>
        <h3>Game Setup</h3>
        <div class="form-group">
            <label for="sel1">Select list (select one):</label>
            <select class="form-control" id="sel1" v-model="numOfCardsBeginning">
                        <option v-for="n in 15">{{ n }}</option>
                    </select>
            <button v-on:click="newGame">New Game</button>
        </div>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default {
        methods: {
            newGame: function(numOfCardsBeginning) {
                eventBus.$emit('setupNewGame', numOfCardsBeginning);
            }
        }

    }

</script>

<style>

</style>