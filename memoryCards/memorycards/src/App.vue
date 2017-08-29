<template>
  
  <div class="row">
    <div class="col-xs-8 col-xs-offset-2">
      <memorycards-setup></memorycards-setup>
      <memorycards-statistics></memorycards-statistics>
      <memorycards-board></memorycards-board>
    </div>
  </div>

</template>

<script>
  import gameSetup from './components/gameSetup.vue';
  import gameStatistics from './components/gameStatistics.vue';
  import gameBoard from './components/gameBoard.vue';

  export default {
    components: {
      'MemorycardsSetup': gameSetup,
      'MemorycardsStatistics': gameStatistics,
      'MemorycardsBoard': gameBoard
    }

  }

</script>

<style>

</style>