<script>
import { store } from '../store';
import AppResults from './AppResults.vue';

export default {
    data() {
        return {
            store
        }
    },

    components: {
        AppResults
    }

}

</script>

<template>
  <main>

    <div class="container">
        
        <AppResults v-for="result in store.foundResults" :result="result">
        </AppResults>
    </div>

  </main>
</template>

<style scoped lang="scss">

    @use './style/_variables.scss' as *;
    @use './style/_mixins.scss' as *;

    // test styling
    main {
        height: $main-height;
        padding: 1rem;
        background-color: $darkgrey-bg-col;
        overflow-y: auto;
        
        .container {
            @include flex(row, wrap, center, center, stretch);  
            gap: 10px; 
        }
    }
    // test styling

</style>
