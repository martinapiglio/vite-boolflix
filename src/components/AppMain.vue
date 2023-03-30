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
        
        <AppResults v-for="result in store.foundResults" 
            :title="result.title"
            :originalTitle="result.original_title"
            :originalLanguage="result.original_language"   
            :vote="result.vote_average"
            :mediaType="result.media_type">
        </AppResults>
    </div>

  </main>
</template>

<style scoped lang="scss">

    @use './style/_variables.scss' as *;

    main {
        height: $main-height;
        background-color: $darkgrey-bg-col;
        overflow-y: auto;
    }

</style>
