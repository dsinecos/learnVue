<template>
    <div class="gameStatistics col-xs-12">
        <h3>Game Statistics</h3>
        <p>Score {{ score }} || <span> Number of Clicks {{numOfClicks}} </span></p>
    </div>
</template>

<script>
    export default {
        computed: {
            numOfCardsBeginning: function () {
                return this.$store.state.numOfCardsBeginning;
            },
            numOfCardsCurrent: function () {
                return this.$store.state.numOfCardsCurrent;
            },
            numOfClicks: function () {
                return this.$store.state.numOfClicks;
            },
            score: function () {
                return this.$store.state.numOfCardsBeginning - this.$store.state.numOfCardsCurrent;
            }
        }
    }

</script>

<style>

</style>